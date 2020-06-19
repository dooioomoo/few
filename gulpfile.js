"use strict";
/*template:

npm i -global gulp gulp-sass gulp-concat gulp-clean autoprefixer gulp-connect-php gulp-minify merge-stream browser-sync child_process gulp-cssnano gulp-rename gulp-eslint gulp-imagemin gulp-newer gulp-postcss gulp-plumber cssnano webpack webpack-stream --save-dev

*/
const build = require("./src/gulpfiles/gulp-require");
const setting = require("./src/gulpfiles/gulp-settings");
const sassTask = require("./src/gulpfiles/gulp-scss");
const jsTask = require("./src/gulpfiles/gulp-javascript");
const imgMini = require("./src/gulpfiles/gulp-image");
// 基本清理
const cleanJs = () => {
  return build.clean(jsTask.cleanFiles);
};
const cleanCss = () => {
  return build.clean(sassTask.cleanFiles);
};
/**
 * 监控函数
 */
const watch = () => {
  /**
   * 基本框架管理
   */
  var common = [setting.sassPath + "include/**/*"];
  // 监控全局基础css框架更改
  build.gulp.watch(common, build.gulp.series(sassTask.commonToCss, cleanCss));
  // 监控themes目录下任何文件修改
  build.gulp.watch(
    [setting.sassPath + "front/**/*", setting.sassPath + "admin/**/*"],
    build.gulp.series(sassTask.createCss)
  );
  //监控js修改
  build.gulp.watch(
    setting.sassPath + "js/**/*",
    build.gulp.series(jsTask.commonJs, jsTask.footJs, cleanJs)
  );

  build.gulp.watch(
    [
      setting.cssPath + "**/*",
      setting.jsPath + "**/*",
      setting.imagesPath + "**/*",
      "./**/*.php",
    ],
    build.browserSync_reload
  );
};

const defaultTask = build.gulp.series(
  build.gulp.series(sassTask.commonToCss, sassTask.createCss, cleanCss),
  build.gulp.series(jsTask.commonJs, jsTask.footJs, cleanJs)
);
exports.commonscss = build.gulp.series(sassTask.commonToCss, cleanCss);
exports.appcss = build.gulp.series(sassTask.createCss, cleanCss);
exports.webfont = sassTask.WebFonts;
exports.commonjs = build.gulp.series(jsTask.commonJs, cleanJs);
exports.appjs = build.gulp.series(jsTask.footJs, cleanJs);
exports.imagesMini = imgMini.ImageMini;
exports.watch = build.gulp.series(
  defaultTask,
  build.gulp.parallel(watch, build.browserSync_start)
);
exports.default = defaultTask;