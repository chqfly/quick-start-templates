# quick-start-templates

该项目用于快速创建基于vite的react + ts项目，集成了eslint、stylelint、prettier、commitlint、husky、lint-staged等工程化规范，并提供pc、mobile项目模版选择

## 目录

- `lints` 规范共享配置，发布npm包
- `libs` 常见的sdk封装，发布npm包
- `packages` 多种类型的项目模版，集成上述包
- `script` 提供命令行工具，可交互式生成项目

## 使用

1. 创建项目目录

    ```bash
    mkdir react-app
    ```

2. 进入该目录

    ```bash
    cd react-app
    ```

3. 使用`degit`下载你期望的模版

    ```bash
    npx degit chqfly/quick-start-templates/packages/vite-react-ts-mobile#main
    ```

后续这块功能将会集成到`@chqfly/cli`脚手架中
