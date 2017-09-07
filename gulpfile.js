var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('babelify');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

//produccion sass
gulp.task('sass', function() {
	return gulp.src('assets/style.scss') // Leer un archivo
		.pipe(sass()) // Compilar SASS
		.pipe(gulp.dest('public')); // Guardar archivo
});

//imagenes for production
gulp.task('images', function() {
    return gulp.src('assets/images/*')
        .pipe(imagemin({ progressive: true }))
        .pipe(gulp.dest('public/images'));
});

function compile(watch){
  var bundle = watchify(browserify('src/index.js', {debug: true}))
   
   function rebundle(){
    bundle
       .transform(babel)
       .bundle()
       .pipe(source('index.js'))
       .pipe(gulp.dest('public'))
   }

   if (watch){
    bundle.on('update',function(){
      console.log("--> Bundling...");
        rebundle();
    })
   }
   rebundle();
}


gulp.task('build', function (){ 
 return compile();
});

gulp.task('watch', function () {
  return compile(true);
});

gulp.task('default', ['sass','images','build']);