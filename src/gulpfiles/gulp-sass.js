var compileSass = function (target, done) {
    if (setting.sass[target].import == undefined || setting.sass[target].export == undefined) {
        return done();
    }
    if (setting.sass[target].import.length < 1 || setting.sass[target].export.length < 1) {
        return done();
    }
    return builder.gulp
        .src(setting.sass[target].import)
        .pipe(builder.plumber())
        .pipe(builder.sass({ includePaths: [setting.server.root], outputStyle: "expanded" }))
        .pipe(builder.concat(target + ".css"))
        .pipe(builder.gulp.dest(setting.base.clearFolder))
        .pipe(builder.rename({ suffix: ".min" }))
        .pipe(builder.postcss([builder.autoprefixer(), builder.cssnano()]))
        .pipe(builder.gulp.dest(setting.sass[target].export));
};

module.exports = {
    commonSass: (cb) => { return compileSass('common', cb) },
    appSass: (cb) => { return compileSass('app', cb); },
    appMobileSass: function (cb) { return compileSass('app_mobile', cb); },
};
