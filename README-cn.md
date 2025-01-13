# neutralinojs-angular-template

个人使用的Neutralinojs脚手架，前端使用angular。

添加了一些常用软件，比如lodash、zorro、ngxs等。

## 如何使用

使用该模板创建应用，其中 `myapp` 是你的项目文件夹名称：

```bash
neu create --template qq253498229/neu-ng myapp
cd myapp
```

## 如何启动开发服务器

```bash
neu run -- --window-enable-inspector=true
```

## 如何打包

```bash
neu build --release
```

## 如何更新

从git拉取代码后没有bin目录，此时需要执行命令拉取bin目录下的二进制文件：

```shell
neu update
```

## License

[MIT](LICENSE)
