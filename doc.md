## 1. 子项目操作：

### 1.1 子项目构建：

```bash
## 开发环境构建
npm run watch  // tsc -b && vite build --watch
or yarn watch

## 生产环境构建
npm run build
or yarn build
```

### 1.2 在子项目目录下创建本地链接：

```bash
npm link
```

## 2. 主项目的操作：

### 2.1 在主项目目录下创建链接：

```bash
npm link meeting  // meeting 是子项目的名称
```

### 2.2 主项目安装子项目依赖：

```bash
yarn add file:../meeting@0.0.1
```

### 2.3 主项目引入：

```tsx
import { Connection } from "meeting/src";

<Connection
  size="large"
  title="　"
  open={display}
  onCancel={() => setDisplay(false)}
/>;
```
