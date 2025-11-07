#!/usr/bin/env node

const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始构建 Hexo 博客...');
console.log('Node.js 版本:', process.version);
console.log('当前目录:', process.cwd());

// 检查 node_modules 是否存在
const nodeModulesExists = fs.existsSync(path.join(process.cwd(), 'node_modules'));
console.log('node_modules 存在:', nodeModulesExists);

// 检查 package.json 是否存在
const packageJsonExists = fs.existsSync(path.join(process.cwd(), 'package.json'));
console.log('package.json 存在:', packageJsonExists);

try {
  // 1. 安装依赖
  console.log('\n📦 安装依赖...');
  execSync('npm install --production=false', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  // 2. 检查 Hexo 是否可用
  console.log('\n🔍 检查 Hexo 是否可用...');
  try {
    const hexoVersion = execSync('npx hexo version', { encoding: 'utf8' });
    console.log('Hexo 版本:', hexoVersion.trim());
  } catch (error) {
    console.log('❌ Hexo 不可用，尝试其他方法...');
    // 尝试直接执行 hexo 命令
    try {
      execSync('./node_modules/.bin/hexo version', { stdio: 'inherit' });
    } catch (e) {
      console.log('❌ 备用方法也失败，尝试直接构建...');
    }
  }
  
  // 3. 清理旧文件
  console.log('\n🧹 清理旧文件...');
  try {
    execSync('npx hexo clean', { stdio: 'inherit' });
  } catch (error) {
    console.log('清理失败，继续构建...');
  }
  
  // 4. 生成静态文件
  console.log('\n⚡ 生成静态文件...');
  
  // 方法1: 使用 npx
  try {
    execSync('npx hexo generate', { stdio: 'inherit' });
    console.log('✅ 使用 npx hexo generate 成功');
  } catch (error) {
    console.log('❌ npx 方法失败，尝试方法2...');
    
    // 方法2: 直接调用 hexo 二进制文件
    try {
      execSync('./node_modules/.bin/hexo generate', { stdio: 'inherit' });
      console.log('✅ 使用直接路径成功');
    } catch (e) {
      console.log('❌ 直接路径失败，尝试方法3...');
      
      // 方法3: 使用 node 执行 hexo
      try {
        const hexoPath = path.join(process.cwd(), 'node_modules', 'hexo', 'bin', 'hexo');
        execSync(`node "${hexoPath}" generate`, { stdio: 'inherit' });
        console.log('✅ 使用 node 执行成功');
      } catch (err) {
        console.log('❌ 所有方法都失败，尝试最后的方法...');
        
        // 方法4: 手动执行构建过程
        const Hexo = require('hexo');
        const hexo = new Hexo(process.cwd(), {});
        
        hexo.init().then(() => {
          return hexo.call('generate', {});
        }).then(() => {
          console.log('✅ 使用 Hexo API 成功');
          return hexo.exit();
        }).catch(finalError => {
          console.error('❌ 最终方法失败:', finalError);
          process.exit(1);
        });
        return; // 异步操作，提前返回
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