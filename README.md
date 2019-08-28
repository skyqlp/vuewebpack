自己搭建的 webpack vue  cli

目前只集成了基础的vue 文件的处理 css 处理 文件热重载

目录详情 
    ··· babelrc 处理 es6 语法
    ··· gitignore 上传git 的时候不上传那些目录文件
    ··· webpack.config.js 基础的配置 （后期会抽离一些配置文件）
    ... package.json 项目编译的插件
这里提示一个小坑 
    vue 的 loader 需要配置css loader 
    babel loader 需要 babel/core 7.0版本以上