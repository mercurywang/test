## 1. 子项目操作：

### 1.1 子项目准备：

执行 copy-to-deploy.sh 脚本。例：把当前目录下除了 node_modules .git 之外的文件 copy 到 ../meeting-deploy 目录下面。

```bash
#!/bin/bash
# 目标目录
TARGET_DIR="../meeting-deploy"

# 创建目标目录
mkdir -p "$TARGET_DIR"

# 复制文件，排除指定目录
rsync -av --progress \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='.gitignore' \
  --exclude='.vscode' \
  --exclude='.idea' \
  --exclude='dist' \
  --exclude='*.log' \
  --exclude='*.tmp' \
  ./ "$TARGET_DIR"

echo "Files copied to $TARGET_DIR"
```

### 1.2 在 deploy 子项目目录下创建本地链接：

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
yarn add file:../meeting-deploy
```

### 2.3 主项目引入：

```tsx
import { Connection } from "meeting/src";

const [display, setDisplay] = useState<boolean>(false);
  const handleClose = () => {
    setDisplay(false);
  };

<Button onClick={() => setDisplay(true)} type="primary">
  Call
</Button>

<Connection size="large" open={display} onCancel={() => setDisplay(false)} />;
```
