
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

1. gulp-settings.js 是**变量文件**，用来设置对应的文件位置和文件结构。<br><br>
2. gulp-require.js 所有使用的**gulp插件和函数**对应文件。被gulpfile.js和其他文件调用，用来调用对应的gulp任务插件。<br><br>
3. gulp-scss.js **scss文件任务模块**：包含 ```commonToCss``` 全局scss和 ```createCss``` 项目scss的编译、压缩、合并任务。也包含了 ``` WebFonts ``` 将``` src > fonts ``` 目录的前端化的**字体移动模块**。<br><br>
4. gulp-javascript  **js文件任务模块**：包含了 ```commonJs``` 和 ```footJs``` 模块，用来制作全局加载的Js脚本和页面底部分别调用的Js脚本，并进行压缩、合并，方便前端调用。<br><br>
5. gulp-image **图片处理模块**：包含了 ``` OutImage ``` 模块，将 ``` src > imgs ``` 目录下的图片文件前端化，``` ImageMini ``` 模块将会把 ``` asssets > images ``` 里的图片文件对应进行压缩减肥。

<div style="min-height:2rem;"> </div>

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

<div style="min-height:2rem;"> </div>

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


<div style="min-height:2rem;"> </div>

### 如何使用？

#### 1. 环境需求

1. **网页制作环境**：
    >我使用的是docker制作的宝塔服务器环境，也可以使用类似xampp应用来搭建您的本地网站服务。目的主要是为了可以通过hosts文件的设置，实现本地域名访问前端网站。因为在 ``` gulp-settings.js``` 文件中，我们将需要设置本地访问域名，来对应 ``` BrowserSync ``` 的自动刷新服务，来实现同时在不同设备显示前端的功能。设置完成后，以确保在浏览器中访问类似 ```http://localhost/index.html ```地址可以访问自己的本地网站。

    >    这里向您推荐： [docker 安装宝塔](https://www.jianshu.com/p/7151e3d11a84) 以及 [docker挂载本地目录并映射端口,生产环境中的docker部署方案(多端口多容器)](https://blog.csdn.net/lishirong/article/details/72763550)

2. NodeJs环境及Gulp安装：

    >   首先请[**访问NodeJs官方网站**](https://nodejs.org/zh-cn/)，并下载NodeJs进行安装。Mac的朋友推荐使用 ``` Homebrew``` 进行安装，因为之后的gulp安装及使用大几率会出现权限问题。Homebrew + sudo可以很好的解决这些问题。安装好后，可以打开命令窗口，通过以下命令进行验证，它会出现npm的版本号。

    ``` npm -v ```

    >   安装好NodeJs后，我们需要安装gulp环境。很多人习惯使用package.json来安装环境，因为我习惯使用**全局方式来使用gulp**，一是比较方便，不用每次安装，二是可以尽可能的保持代码目录的整洁性，所以在此不提供package配置，而是尽可能**使用命令方式配置gulp环境**。

    > 在命令窗口输入以下命令。如果是linux或者mac建议使用sudo方式获得权限。
    ```gulp安装
    npm i -global gulp gulp-sass gulp-concat gulp-clean autoprefixer gulp-connect-php gulp-minify merge-stream browser-sync child_process gulp-cssnano gulp-rename gulp-eslint gulp-imagemin gulp-newer gulp-postcss gulp-plumber cssnano imagemin-jpegtran imagemin-svgo imagemin-gifsicle imagemin-optipng
    ```
    >   **安装成功完成后** ，还需要配置以下**系统环境**里的$PATH信息，这里我提供一个快捷设定，你可以把它粘贴到你的命令窗口，并执行，它会自动把对应的路径信息添加到你的**widnows系统**里。

    ```
    rem 安装nodejs全局路径到windows
    setx NODE_PATH %AppData%\npm\node_modules
    rem for current session
    set NODE_PATH=%AppData%\npm\node_modules
    ```
    ```
    rem 安装gulp全局路径到windows
    setx GULP_PATH %AppData%\npm\node_modules\gulp
    rem for current session
    set GULP_PATH=%AppData%\npm\node_modules\gulp

    ```

    > 命令执行成功后，你就可以通过命令窗口，在任何路径下使用gulp以及gulp插件了。到这里gulp全局环境才算配置成功。

 3. **完成以上两项基本配置后**
    

#### 2. gulp任务介绍
#### 3. 目录响应