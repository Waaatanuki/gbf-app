# Vue项目打包部署到GitHub Pages

#### 步骤1

- 执行`npm run build`打包Vue项目，此时项目目录下会多出一个`dist`目录

#### 步骤2

- 将dist推送到远程仓库（默认为master分支）

> 通常dist目录会被忽略，需要将dist从忽略文件中删除，然后将dist目录推送到远程仓库

#### 步骤3 
使用git subtree push --prefix dist origin gh-pages将dist目录推送到远程的gh-pages分支，若远程没有gh-pagse分支则会新建gh-pagse分支然后再推送。
备注：此处只能是gh-pages分支，才能使用GitHub pages功能

#### 步骤4

- 登录远程GitHub仓库，通过`setting` -> `github pages` -> `source` 将`gh-pages`设置为`GitHub pages` 的**source**

#### 步骤5

- 访问GitHub pages 链接

#### 步骤6

- 每次执行`npm run build` 后再次执行**步骤2，步骤3**