// 重置博客访问量和浏览量统计
function resetStats() {
  // 清除Busuanzi统计数据的本地存储
  localStorage.removeItem('bs_site_pv');
  localStorage.removeItem('bs_site_uv');
  localStorage.removeItem('bs_page_pv');
  localStorage.removeItem('busuanzi_site_pv');
  localStorage.removeItem('busuanzi_site_uv');
  localStorage.removeItem('busuanzi_page_pv');
  sessionStorage.removeItem('bs_site_pv');
  sessionStorage.removeItem('bs_site_uv');
  sessionStorage.removeItem('bs_page_pv');
  console.log('统计数据已重置');
  
  alert('博客访问量和浏览量已重置为初始状态！');
}

// 页面加载后自动重置
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', resetStats);
} else {
  resetStats();
}