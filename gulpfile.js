// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var browserSync = require("browser-sync").create();//浏览器实时刷新

// 检查脚本
// gulp.task('lint', function() {
//   gulp.src('./js/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'));
// });



// 编译less
gulp.task('less', function () {
  gulp.src('./css/**/*.less')
    .pipe(less())//编译less文件
    .pipe(cleanCSS())//压缩新生成的css
    .pipe(rename({suffix: '.min'}))//加min后缀
    .pipe(gulp.dest('css'))//将会在css下生成main.css
});


// gulp.task('scripts', function () {
//   gulp.src('./js/**/*.js')
//     .pipe(rename({suffix: '.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('js'))
// });


// 默认任务
gulp.task('default', function () {
  gulp.run('less');

  // 监听文件变化
  gulp.watch('./css/*.less', function () {
    gulp.run('less');
  });

  // gulp.watch('./js/*.js', function () {
  //   gulp.run('less', 'scripts');
  // });
});
