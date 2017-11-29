# Стартовый шаблон

### Установка

```bash
$ git clone https://github.com/AlexanderChev/BEM-start-template.git
$ cd BEM-start-template
$ npm i
```

### Запуск dev сервера

```bash
$ gulp or npm run start
```

После выполнения команды, откройте в браузере `http://127.0.0.1:8000`.

### Сборка проекта
```bash
$ npm run build
```

### Архивация проекта
```bash
$ npm run zip
```

### Отправка проекта на github-pages (ветка `build`)
```bash
$ npm run deploy
```

### Линтинг pug, scss, js файлов (см. `./tmp`) 
```bash
$ npm run lint
```
### Добавление и удаление блоков
```bash
# Добавление блока: npm run ab ИМЯ БЛОКА [доп. расширения через пробел + img]
$ npm run ab block # создаст block.pug, block.scss
$ npm run ab block-1 js json img # создаст block-1.pug, block-1.scss, block-1.js + папки data/block-1.json, images/

# Удаление блока: npm run rb ИМЯ БЛОКА
$ npm run rb block # удалит все файлы в папке block
```
### Назначение папок

```bash
gulp/
  config/
      config.js    # настройки проекта (добавление файлов из node_modules: изображения path.images, стили path.vendorStyles, скрипты path.vendorScripts, шрифты path.fonts) 
build/             # Папка сборки
src/               # Исходные файлы
  blocks/          # - блоки проекта
  fonts/           # - шрифты
  images/          # - добавочные изображения
      touch/       # - фавиконки, manifest, browserconfig
      icons/       # - изображения для генерации svg, png спрайтов
  pages/           # - страницы проекта
  public/          # - другие файлы
  scripts/         # - файлы скриптов
  styles/          # - файлы стилей
tmp/               # - временные файлы (результаты линтига и data.json для блоков)
```
