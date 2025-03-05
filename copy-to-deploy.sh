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