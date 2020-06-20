
# 网页前段制作基础环境模板

<i> 此模板仅用于向小伙伴分享前端制作经验，大神可无视此项目。</i>

> 为了更方便快速的进行前端网页设计和集成，制作了一个以Gulp为基础的文件模板结构。主要为了实现自动更新和集成bootstrap，fontawesome，并通过browsersync实现自适应设计的多屏同显。通过使用这个模板，可以很方便的管理网页的样式表、js脚本、图片以及字体文件，并且在修改后，自动刷新前端显示。


## Gulp + Browsersync + Bootstrap + Fontawesome

此文件模板使用**Gulp4**和**ES6**方式制作完成。

Gulp执行文件存放于 ``` src > gulpfiles ``` 下面做下简单介绍

<pre>
📂 src 
  - 📂 gulpfiles
    - gulp-image.js
    - gulp-javascript.js
    - gulp-require.js
    - gulp-scss.js
    - gulp-settings.js
</pre>

1. gulp-settings.js 是变量文件，用来设置对应的文件位置和文件结构。
2. gulp-require.js 所有使用的gulp插件和函数对应文件。被gulpfile.js和其他文件调用，用来操作对应的gulp任务。
3. gulp-scss.js 包含 ```commonToCss``` 全局scss和 ```createCss``` 项目scss的编译、压缩、合并任务。也包含了 ``` WebFonts ``` 将``` src > fonts ``` 目录的前端化模块。
4. gulp-javascript 包含了 ```commonJs``` 和 ```footJs``` 模块，用来制作全局加载的Js脚本和页面底部分别调用的Js脚本，并进行压缩、合并，方便前端调用。
5. gulp-image 包含了 ``` OutImage ``` 模块，将 ``` src > imgs ``` 目录下的图片文件前端化，``` ImageMini ``` 模块将会把 ``` asssets > images ``` 里的图片文件对应进行压缩减肥。



> 以下是基本的文件结构。

<PRE>
<i style="color:gray;">📂 assets</i>    会自动生成
📂 src       存放style,js,image,font源文件目录
<i style="color:gray;">📂 vendor</i>    会自动生成
    README.md
    composer.json
    favicon.ico
    gulpfile.js     gulp入口文件
    package.json
</PRE>

1. favicon.ico 是一个空ico文件，用来对应网站图标项。
2. composer.json composer安装配置文件

> src目录下已区分文件存放位置，并对应全局文件和项目文件的目录。gulp会自动根据文件的改动重新编译文件到 ``` assets ``` 目录的对应文件夹内，方便前端调用，然后会自动reload browsersync来刷新前端显示。

<pre>
- 📂 src
  - 📂 fonts
  - 📂 gulpfiles
  - 📂 imgs
  - 📂 js
    - 📂 common
      - anime.min.js
      - backtohead.js
    - 📂 core
    - 📂 object
      - application.js
    - js-require.js
  - 📂 scss
    - 📂 app
      - 📂 .mixins
      - 📂 layout
      - 📂 pages
      - 📂 public
      - app.scss
    - 📂 common
      - 📂 modules
        - backtohead.scss
      - 📂 settings
        - _bootstrap.scss
        - _fontawesome.scss
        - _fonts.scss
      - common.scss
</pre>

### 如何使用？

#### 1. 环境需求
#### 2. gulp任务介绍
#### 3. 目录响应