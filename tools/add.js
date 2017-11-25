// Source: https://gist.github.com/nicothin/1ba505f7cdfbe969600afcad6d9f1d33

'use strict';


const fs = require('fs');
const mkdirp = require('mkdirp');
const chalk = require('chalk');

let blockName = process.argv[2];
let extensions = [];

extensions = uniqueArray(extensions.concat(process.argv.slice(3)));

// Путь к папке с модулями
let basePath = 'src/blocks/';

// Шаблоны
let templates = [
    {
      type: 'necessary',
      ext: 'pug',
      tpl: 'mixin {blockName}(data)\n  .{blockName}&attributes(attributes)\n    '
    },
    {
      type: 'necessary',
      ext: 'scss',
      tpl: '.{blockName} {\n\n}'
    },
    {
      type: 'optional',
      ext: 'js',
      tpl: '// // {blockName}\n// (function() {\n\n//  // Your code here\n\n// })();\n'
    },
    {
      type: 'optional',
      ext: 'json',
      path: 'data',
      tpl: '{\n  "{blockName}": {\n\n  }\n}'
    }
  ];


// Если есть имя блока
if (blockName) {

  let dirPath = basePath + blockName + '/'; // полный путь к создаваемой папке блока

  // создаем
  mkdirp(dirPath, function(err) {

    // Если какая-то ошибка — покажем
    if (err) {
      console.error(chalk.red('Отмена операции: ' + err));
    }

    // Нет ошибки, поехали!
    else {
      console.log(chalk`{green Создание папки ${dirPath} (создана, если ещё не существует)}`);

      if (extensions.indexOf('img') >= 0) {
        const imgFolder = dirPath + 'images';
        if (!fileExist(imgFolder)) {
          mkdirp(imgFolder, function (err) {
            if (err) console.error(chalk.red(err));
            else console.log(chalk`{green Создание папки: ${imgFolder} (если отсутствует)}`);
          });
        } else {
          console.log(chalk.red('Папка ' + imgFolder + ' НЕ создана (уже существует)'));
        }
      }

      // Обходим массив расширений и создаем файлы, если они еще не созданы
      templates.forEach(function(template) {
        let filePath = dirPath + blockName + '.' + template.ext;
        let fileContent = template.tpl.replace(/{blockName}/g, blockName);
        let fileCreateMsg = '';

        if (typeof template.path !== 'undefined') {
          if (extensions.indexOf(template.ext) >= 0) {
            mkdirp(dirPath + template.path);
            filePath = dirPath + template.path + '/' + blockName + '.' + template.ext;
          }
        }

        if (template.type !== 'optional') {
          writeFile(filePath, fileContent, fileCreateMsg);
        }
        else {
          if (extensions.indexOf(template.ext) >= 0) {
            writeFile(filePath, fileContent, fileCreateMsg);
          }
        }

      });
    }
  });
} else {
  console.log(chalk.red('Отмена операции: не указан блок'));
}

// Оставить в массиве только уникальные значения (убрать повторы)
function uniqueArray(arr) {
  var objectTemp = {};
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    objectTemp[str] = true; // запомнить строку в виде свойства объекта
  }
  return Object.keys(objectTemp);
}

// Проверка существования файла
function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
  } catch (err) {
    return !(err && err.code === 'ENOENT');
  }
};

function writeFile(filePath, fileContent, fileCreateMsg) {
  if (fileExist(filePath) === false) {
    fs.writeFile(filePath, fileContent, function(err) {
      if (err) {
        return console.log(chalk.red('Файл НЕ создан: ' + err));
      }
      console.log(chalk.green('Файл создан: ' + filePath));
      if (fileCreateMsg) {
        console.warn(fileCreateMsg);
      }
    });
  } else {
    console.log(chalk`{red Файл НЕ создан: ${filePath} (уже существует)}`);
  }
};
