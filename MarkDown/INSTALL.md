### 一、安装压缩工具
+ 1.winrar

### 二、安装浏览器
+ 1.360极速浏览器
+ 2.Firefox火狐浏览器 
+ 3.Chrome谷歌浏览器
+ 4.安装有道云笔记
+ 5.配置翻墙的host文件
+   1) C:\Windows\System32\drivers\etc 下的host文件

### 三、通过nvm安装node
+ 1.node安装包版本：https://npm.taobao.org/mirrors/node
+ 2.node常用版本：
```
// v6.10.0
https://npm.taobao.org/mirrors/node/v6.10.0/
// v6.11.0
https://npm.taobao.org/mirrors/node/v6.11.0/
// 最新：v8.2.1
https://npm.taobao.org/mirrors/node/v8.2.1/
```
+ 3.创建devNode目录
+ 4.将nvm_x64压缩包解压到该目录下
+ 5.进入nvm目录修改setting配置文件内的路径指定为当前目录的路径
+ 6.将npm压缩包解压到nvm目录下
+ 7.修改环境变量：
+  1) 此电脑（右击）-> 属性 -> 高级系统设置 -> 高级 -> 环境变量 内添加：
```
NVM_HOME=C:\devNode\nvm
NVM_SYMLINK=C:\devNode\nodejs
NPM_HOME=C:\devNode\nvm\npm
PATH=%NVM_HOME%;%NVM_SYMLINK%;%NPM_HOME%
```
+ 8.http://note.youdao.com/share/?id=637ada36a4c544dc8702e260b40ec2e7&type=note#/
+ 9.cmd下查看：
```
// nvm 查看node版本
nvm ls
// nvm使用指定版本node
nvm use 版本号
// 查看版本
node -v
npm -v
nvm -v
// 切换版本
nvm use 版本号
```
+ 10.如果cmd下无法查看版本则将.npmrc文件放到当前用户的根目录下

### 四、安装git
+ 1.git下载地址：https://git-scm.com/downloads
+ 2.将git安装在devNode/git/目录下

### 五、安装VSCode
+ 1.vscode下载地址：https://code.visualstudio.com/Download
+ 2.安装vscode-icons插件
+ 3.打开vscode并点击ctrl+shift+p 输入icon 进而激活vscode-icons
+ 4.安装html、css、angular、vue、react、webpack相关插件

### 六、安装淘宝cnpm镜像
+ 1.npm install -g cnpm --registry=https://registry.npm.taobao.org
+ 2.安装node-dev:cnpm install node-dev -g
+ 3.如果安装完成后cmd中cnpm -v仍不可行则在用户根目录下有个.npmrc文件改成当前nvm存放路径然后再重新安装即可

### 七、安装WPS

### 八、安装svn

### 九、配置Java以及Android环境
+ 0.http://note.youdao.com/share/?id=8ca0d641cfb50ab9bc545662b57577ea&type=note#/
+ 1.安装配置Java环境
+   1) 安装jdk
+ 2.将android压缩包解压到根目录下
+ 3.配置Android环境
```
配置Android环境变量：
新建ANDROID_HOME=C:\android
在PATH中添加%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;
在cmd中输入adb出现如下内容则说明Android环境配置成功：
http://note.youdao.com/noteshare?id=8ca0d641cfb50ab9bc545662b57577ea&sub=7B245D8154C64A5EB69763748311A5CC
```
+ 4.将.gradle压缩包放到用户的根目录下
+ 5.安装installer_r24.3.4-windows
+ 6.安装AndroidStudio(React-Native时必须安装，用来编译androidsdk版本)

### 十、安装C++环境
+ 1.下载vs2015并指定安装C++部分即可

### 十一、安装ionic
+ 1.npm install -g cordova ionic
+ 2.ionic相关操作：http://note.youdao.com/noteshare?id=cb6acd7984ac6ed757fa7b223077471a&sub=9B9712B626EB46DC89CAB2613CCC2198

### 十二、安装Vue
+ 1.安装vue脚手架：npm install vue-cli -g
+ 2.利用vue-cli脚手架创建项目
+ 创建项目：vue init <项目模板名称> 项目名称:
+ vue init simple vuepro 简单的Vue项目
+ vue init webpack vuepro 带有webpack的Vue项目
+ vue init webpack-simple vuepro 带有简单webpack的Vue项目

### 十三、安装React
+ 1.安装react脚手架：npm install create-react-app -g
+ 2.创建项目：create-react-app 项目名称
+ 3.相关使用：http://note.youdao.com/noteshare?id=039bce543a26ba5d53bceef52647e5e8&sub=7BEEEC50B64F44CF8AE22B347E626EA9

### 十四、安装ReactNative
+ 1.安装：npm install react-native-cli -g
+ 2.初始化项目：react-native init 项目名称
+ 3.启动：react-native start
+ 4.打包：react-native run-android
+ 5.相关使用：http://note.youdao.com/noteshare?id=901c7257197b9167b2ec3ea00eff89cd&sub=CA381A594E544249A8AC809DC8CF5B97
+ 6.安装夜神模拟器
+ 7.React-Native与夜神模拟器的使用：http://www.cnblogs.com/hongguang-kim/p/5917633.html
+   1) 夜神模拟器安装根目录下：nox_adb devices
+   2) android sdk platform-tools下：adb.exe connect 127.0.0.1:62001
+   3) 可以用浏览器访问http://localhost:8081/index.android.bundle?platform=android看看是否可以看到打包后的脚本。第一次访问通常需要十几秒，并且在packager的命令行可以看到进度条。

### 十五、调试ReactNative
+ 1.浏览器中打开：http://localhost:8081/debugger-ui
+ 2.模拟器中点击Debug Js即可进行调试

### 十六、将md文档转成html页面【i5ting_toc】
+ npm install i5ting_toc -g
+ 运行 i5ting_toc -f README.md 命令
+ 在生成的preview目录中运行http服务器查看md文件生成的html页面
+ hs -o -p8020

### 十七、Java部分
0) 说明：https://www.tapd.cn/20215581/markdown_wikis/#1120215581001000060

    i) 相关软件及版本
        ```
        JDK v1.8
        Tomcat  v7.0 
        MySQL v5.6
        Nexus v2
        Maven v3
        ElasticSearch 1.7
        redis 3.2
        activemq5
        ```

1) deen项目的开发环境基于Java，开发工具：idea

2) 安装1.8x版本的JDK并配置Java的环境变量

3) 安装git并拉取代码：git clone -b dev http://192.168.0.199/KStore/deen.git

4) 配置Maven：

    i) 下载maven压缩包：http://apache.fayea.com/maven/maven-3/3.3.9/binaries/
    
    ii) 将Maven压缩包解压到指定目录
    
    iii) 配置maven环境变量
    
    iiii) 替换maven根目录下conf目录下的settings文件
    
    iv) 监测maven是否安装成功：cmd -> mvn -version
    
5) 下载并将tomcat解压到指定目录

6) 安装并激活idea2017：http://blog.csdn.net/sinat_15735647/article/details/74093074
    
7) idea2017配置jdk和maven：
        
    1. 配置maven:
        
        1) 在File->setting->Build,Execu....->Build Tools->Maven中指定Maven home directory为自己解压的Maven根目录并指定User setting file为Maven根目录下conf目录中settings.xml文件
        
        2) File->Other Settings->Default Settings同上的操作
        
    2. 导入项目
        
    3. 配置jdk:
        
        1) File->Project Structure...->Project中指定本机Java安装的jdk根目录/SDKs同样指定Java jdk的根目录
        
        2) File->Other Settings->Default Project Structure...中同上操作
        
8) reload Maven：右击项目名称Maven->ReImport

9) 编译项目Build：点击项目右上角的绿色朝下的箭头进行编译

10) 配置Tomcat：

