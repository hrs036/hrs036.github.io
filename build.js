const { execSync } = require('child_process');

console.log('开始构建 Hexo 博客...');

try {
  // 安装依赖
  console.log('安装依赖...');
  execSync('npm install', { stdio: 'inherit' });
  
  // 执行 Hexo 构建
  console.log('生成静态文件...');
  execSync('npx hexo generate', { stdio: 'inherit' });
  
  console.log('构建完成！');
} catch (error) {
  console.error('构建失败:', error);
  process.exit(1);
}