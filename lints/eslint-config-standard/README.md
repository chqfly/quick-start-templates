# @chqfly/eslint-config-standard

该包支持多种项目类型，纯JS项目、React项目、TS项目

## 安装

```bash
npm i eslint @chqfly/eslint-config-standard -D
```

## 使用

### 纯JS项目

配置

```javascript
{
  "extends": ["@chqfly/eslint-config-standard"]
}
```

### 纯TS项目

配置

```javascript
{
  "extends": ["@chqfly/eslint-config-standard/typescript"]
}
```

### JS+React项目

配置

```javascript
{
  "extends": ["@chqfly/eslint-config-standard/react"]
}
```

### TS+React项目

配置

```javascript
{
  "extends": ["@chqfly/eslint-config-standard/typescript/react"]
}
```
