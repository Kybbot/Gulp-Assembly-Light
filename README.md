# Gulp-Assembly-Light
<img src="https://github.com/Kybbot/Gulp-Assembly-Light/blob/master/build/design/1.jpg?raw=true" alt="Gulp-Assembly-Light">

В эту сборку входит: Gulp, Bootstrap 4,Browsersync, Autoprefixer, Clean-CSS, Del, Notify, Rename, Sass, Uglify.

## Как использовать Gulp-Assembly-Light
1. <a href="https://github.com/Kybbot/Gulp-Assembly-Light/archive/master.zip">Скачать</a> __Gulp-Assembly-Light__ с GitHub;
2. Установить Node Modules: npm i или yarn install;
3. Запустить сборку: gulp.

## Gulp tasks:
1. gulp: запускает обычный gulp task(build, watchFiles, serve);
2. function del(): при каждом удалении файлов в папке build, удаляет полностью папку result и перезаписывает её с изменениями.

## Структура проекта
1. Папка с исходниками - build
	* index.html - основной html файл
	* В папке sass храняться все стили
	* В папку libs надо добавлять все стороннии библиотеки для подключения их в проект
	* Папка js содержит основной javascript файл со всеми скриптами
	* В папке img храняться все фотографии для проекта
	* В папке fonts все шрифты для проектв
	* Папка design для хранения в ней всех макетов и фотографий проекта
2. Папка с результатом сборки - result
	* index.html - основной html файл
	* В папке css храниться main.css в который входят все скомпилированые sass файлы
	* В папке js храниться main.js в который входят все скрипты 
	* В папке img храняться все картинки проекта
	* В папке fonts храняться все шрифты