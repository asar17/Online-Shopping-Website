/*
 import gulp from 'gulp';
 import imagemin from 'gulp-imagemin'
 import notify from 'gulp-notify'
 */

var gulp = require('gulp')
var notify=require('gulp-notify')
var zip=require('gulp-zip')
var concat=require('gulp-concat')
var pug=require('gulp-pug')
var plumber=require('gulp-plumber')
var sass=require('gulp-sass')(require('sass'))
var fontmin=require('gulp-fontmin')
//var pugConcat=require('gulp-pug-template-concat')



//pug task
gulp.task('pug',function(){
    return gulp.src(['pug/**/*.pug','!pug/pugFiles/Hfooter/AfooterGallery.pug','!pug/pugFiles/Hfooter/BfooterInfo.pug','!pug/pugFiles/Hfooter/CfooterContact.pug','!pug/mixin'])
               .pipe(pug({pretty:true}))
               .pipe(concat('index.html'))  
               .pipe(gulp.dest('dist'))
               .pipe(notify('task pug is done'))
})

//sass task
gulp.task('sass',function(){
    return gulp.src(['css/**/*.css','css/**/*.scss'])
               .pipe(plumber())
               .pipe(sass())
               .pipe(concat('home.css'))
               .pipe(plumber.stop())
               .pipe(gulp.dest('dist/css'))
               .pipe(notify('task sass is done'))
})

//image task
gulp.task('imagemin',function(){
    return gulp.src('image/**/*.jpg')
               .pipe(imagemin())
               .pipe(gulp.dest('dist/image'))
               .pipe(notify('task image is done'))
})


//zip task
gulp.task('zip',function(){
    return gulp.src('dist/**/*.*')
               .pipe(zip('pugSass.zip'))
               .pipe(gulp.dest('./dist'))
               .pipe(notify('task zip is done'))
})

//fontmin task
gulp.task('fontmin',function(){
    return gulp.src(['webfonts/*.svg','webfonts/*.eot','webfonts/*.ttf','webfonts/*.woff','webfonts/*.woff2'])
    .pipe(fontmin())
    .pipe(gulp.dest('dist/webfonts'))
    .pipe(notify('task fontmin is done'))
})

//watch tasks
gulp.task('watch',function(){
    //require('./server.js')
    gulp.watch(['pug/**/*.pug','!pug/pugFiles/Hfooter/AfooterGallery.pug','!pug/pugFiles/Hfooter/BfooterInfo.pug','!pug/pugFiles/Hfooter/CfooterContact.pug','!pug/mixin'],gulp.series('pug'))
    gulp.watch(['css/**/*.css','css/**/*.scss'],gulp.series('sass'))
    gulp.watch('image/**/*.jpg',gulp.series('imagemin'))
    gulp.watch('dist/**/*.*',gulp.series('zip'))
    gulp.watch(['webfonts/*.svg','webfonts/*.eot','webfonts/*.ttf','webfonts/*.woff','webfonts/*.woff2'],gulp.series('fontmin'))

})
