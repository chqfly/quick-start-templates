# commitlint-config-standard

该包用于对 git commit message 进行校验，约束团队提交信息一致

## 安装

使用本包，需要同时安装 [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)：

```bash
npm install @commitlint/cli @chqfly/commitlint-config-standard -D
```

## 使用

在你的 `commitlint.config.js` 中继承本包:

```javascript
module.exports = {
  extends: ['@chqfly/commitlint-config-standard'],
};
```

## 配置Git hook

除了上述配置外，我们还需要使用 `husky`， 它为我们提供了一系列git hook，利用这些hook我们才能在提交时进行格式校验。

首先安装`husky`:

`npm install husky --save-dev`

然后依次执行如下两条命令：

`npx husky install`

`npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'`

具体安装信息可以参考[commitlint](https://commitlint.js.org/#/guides-local-setup?id=install-husk)
