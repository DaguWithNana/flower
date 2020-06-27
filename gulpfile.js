const gulp =require("gulp"); //第一 个gulp可更改，第二个gulp不可更改装的啥就是啥名字
const sass =require("gulp-sass");
const connect =require("gulp-connect");
const concat =require("gulp-concat");
const uglify =require("gulp-uglify");
const rename =require("gulp-rename");
const babel =require("gulp-babel");




/*
gulp.src()方法可以帮助我们找到将要处理的文件
.pipe()去处理这些找到的文件
gulp.dest()方法把处理好的文件放到指定的地方
*/

gulp.task("copyHtml",done=>{
    gulp.src("./html/*.html").pipe(gulp.dest("dist")).pipe
    (connect.reload());
//3、然后在我们copy任务中添加.pipe(connect.reload())
    done();
})


//gulp.task("default",gulp.series("hello","hello1")); //gulp.series按顺序执行



//首先在本工程下放入一个图片目录文件 
//然后在gulpfile.js文件中写入 

gulp.task("copyImg",done=>{
    gulp.src("./image/*.{jpg,png}").pipe(gulp.dest("dist/img"));
    done();
})

//假如我们想要同时拷贝 jpg，png文件
/*gulp.task("copyImg",done=>{
    gulp.src("img/*.{jpg,png}").pipe(gulp.dest("dist/img"));
    done();
}) */


//如何拷贝文件夹呢 
/*gulp.task("copyImg", done => {
    gulp.src("img/**").pipe(gulp.dest("dist/img"));
    done();
})
*/

// /*代表拷贝文件夹以及文件夹下文件

//两个文件夹同时拷贝到某一个文件夹下
/*gulp.task("data",done=>{
    gulp.src(["a/a.json","b/b.xml"]).pipe(gulp.dest("dist/data"));
    done();
})
*/

//排除文件拷贝

    gulp.task('data',done =>{ 
        gulp.src(['xml/*.xml','json/*.json','!json/b.json']).pipe(gulp.dest('dist/data'));
        done();
    })


//4、然后在watch中添加 
gulp.task('watch',done=>{
    gulp.watch('*.html',gulp.series("copyHtml"));
    gulp.watch('img/**',gulp.series('copyImg'));
    done()
})

//将scss文件转换成css文件，
gulp.task("sass",done=>{
    gulp.src("sass/*.scss").pipe(sass()).pipe
    (gulp.dest("dist/css"))

    done();
})
//1、root根目录  
//2、livereload:true实时刷新  修改文件后页面自动刷新
//3、然后在我们copy任务中添加.pipe(connect.reload())
//gulp-connect插件搭建本地服务
gulp.task("server",(done)=>{
    connect.server({
        root:"dist",
        livereload:true
    });


    done();
})

//合并文件插件gulp-concat
// gulp.task("concat",done=>{
//     gulp.src(['js/a.js','js/b.js'])
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('dist/js'));

//     done();
// })

// //合并后压缩  同时压缩多个文件，同时保留原文件和压缩后的文件
// gulp.task("uglify",done=>{
//     gulp.src(['js/a.js','js/b.js'])
//     .pipe(concat('main.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'));

//     done();
// })

// //保留前后压缩两个文件
// gulp.task("rename",done=>{
//    return gulp.src(['js/a.js','js/b.js'])
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('dist/js'))
//     .pipe(uglify())
//     .pipe(rename('main.min.js'))
//     .pipe(gulp.dest('dist/js'));

//     done();
// })

//ES6转ES5
gulp.task("babel",(done)=>{
    gulp.src("js/*.js")
    .pipe(babel({presets:["@babel/preset-env"]}))
    .pipe(gulp.dest("dist/js"));

    done();
});

//5、然后创建一个  6、 最后执行 gulp 命令
gulp.task("default",gulp.series("server","watch",));