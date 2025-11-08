#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始构建 Hexo 博客...');
console.log('Node.js 版本:', process.version);
console.log('当前目录:', process.cwd());

try {
  // 1. 安装依赖
  console.log('\n📦 安装依赖...');
  execSync('npm install --production=false', { stdio: 'inherit' });
  
  // 2. 检查 Hexo 是否可用
  console.log('\n🔍 检查 Hexo 是否可用...');
  
  // 方法1: 使用 npx hexo
  try {
    console.log('尝试方法1: npx hexo generate');
    execSync('npx hexo generate', { stdio: 'inherit' });
    console.log('✅ 方法1成功');
  } catch (error) {
    console.log('❌ 方法1失败，尝试方法2...');
    
    // 方法2: 直接调用 hexo 二进制文件
    try {
      console.log('尝试方法2: 直接路径 hexo');
      execSync('./node_modules/.bin/hexo generate', { stdio: 'inherit' });
      console.log('✅ 方法2成功');
    } catch (e) {
      console.log('❌ 方法2失败，尝试方法3...');
      
      // 方法3: 使用 node 执行 hexo
      try {
        console.log('尝试方法3: node 执行 hexo');
        const hexoPath = path.join(process.cwd(), 'node_modules', 'hexo', 'bin', 'hexo');
        execSync(`node "${hexoPath}" generate`, { stdio: 'inherit' });
        console.log('✅ 方法3成功');
      } catch (err) {
        console.log('❌ 所有方法都失败，构建失败');
        throw err;
      }
    }
  }
  
  console.log('\n🎉 构建完成！');
  
  // 检查生成的 public 目录
  const publicExists = fs.existsSync(path.join(process.cwd(), 'public'));
  console.log('public 目录存在:', publicExists);
  
  if (publicExists) {
    const files = fs.readdirSync(path.join(process.cwd(), 'public'));
    console.log('生成的文件数量:', files.length);
  }
  
} catch (error) {
  console.error('❌ 构建失败:', error);
  process.exit(1);
}