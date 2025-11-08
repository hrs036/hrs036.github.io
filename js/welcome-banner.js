// 卡片移动效果模块JavaScript
function initWelcomeBanner() {
  // 创建卡片移动效果模块
  const welcomeBanner = document.createElement('div');
  welcomeBanner.className = 'welcome-banner';
  
  // 创建内容容器
  const welcomeContent = document.createElement('div');
  welcomeContent.className = 'welcome-content';
  
  // 创建移动卡片容器
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'moving-cards-container';
  
  const movingCards = document.createElement('div');
  movingCards.className = 'moving-cards';
  
  // 卡片数据 - 程序相关技术栈
  const cardsData = [
    { icon: 'fab fa-python', title: 'Python', desc: '数据分析', color: '#3776AB', link: '/tags/Python' },
    { icon: 'fab fa-java', title: 'Java', desc: '企业开发', color: '#ED8B00', link: '/tags/Java' },
    { icon: 'fab fa-js-square', title: 'JS', desc: '前端开发', color: '#F7DF1E', link: '/tags/JavaScript' },
    { icon: 'fab fa-cuttlefish', title: 'C++', desc: '系统编程', color: '#00599C', link: '/tags/C++' },
    { icon: 'fas fa-code', title: 'Rhino', desc: '3D建模', color: '#FF6B9D', link: '/tags/Rhino' },
    { icon: 'fas fa-terminal', title: '脚本', desc: '自动化', color: '#4DB6AC', link: '/tags/脚本' },
    { icon: 'fab fa-git-alt', title: 'Git', desc: '版本控制', color: '#F05032', link: '/tags/Git' },
    { icon: 'fas fa-database', title: '数据库', desc: '数据管理', color: '#336791', link: '/tags/数据库' },
    { icon: 'fab fa-html5', title: 'HTML5', desc: '网页结构', color: '#E34F26', link: '/tags/HTML' },
    { icon: 'fab fa-css3-alt', title: 'CSS3', desc: '样式设计', color: '#1572B6', link: '/tags/CSS' },
    { icon: 'fab fa-react', title: 'React', desc: '前端框架', color: '#61DAFB', link: '/tags/React' },
    { icon: 'fab fa-node-js', title: 'Node.js', desc: '后端开发', color: '#339933', link: '/tags/Node' }
  ];
  
  // 创建从左到右移动的卡片
  cardsData.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'moving-card';
    cardElement.style.borderLeft = `3px solid ${card.color}`;
    
    const icon = document.createElement('i');
    icon.className = card.icon;
    icon.style.color = card.color;
    
    const cardTitle = document.createElement('div');
    cardTitle.className = 'moving-card-title';
    cardTitle.textContent = card.title;
    
    const cardDesc = document.createElement('div');
    cardDesc.className = 'moving-card-desc';
    cardDesc.textContent = card.desc;
    
    cardElement.appendChild(icon);
    cardElement.appendChild(cardTitle);
    cardElement.appendChild(cardDesc);
    
    // 添加点击事件 - 推开效果
    cardElement.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // 推开效果
      cardElement.style.transform = 'scale(1.3) translateY(-20px)';
      cardElement.style.zIndex = '100';
      cardElement.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
      
      // 恢复原状
      setTimeout(() => {
        cardElement.style.transform = '';
        cardElement.style.zIndex = '1';
        cardElement.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.12)';
      }, 600);
    });
    
    movingCards.appendChild(cardElement);
  });
  
  // 复制一套卡片用于无缝滚动
  cardsData.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'moving-card';
    cardElement.style.borderLeft = `3px solid ${card.color}`;
    
    const icon = document.createElement('i');
    icon.className = card.icon;
    icon.style.color = card.color;
    
    const cardTitle = document.createElement('div');
    cardTitle.className = 'moving-card-title';
    cardTitle.textContent = card.title;
    
    const cardDesc = document.createElement('div');
    cardDesc.className = 'moving-card-desc';
    cardDesc.textContent = card.desc;
    
    cardElement.appendChild(icon);
    cardElement.appendChild(cardTitle);
    cardElement.appendChild(cardDesc);
    
    // 添加点击事件
    cardElement.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // 推开效果
      cardElement.style.transform = 'scale(1.3) translateY(-20px)';
      cardElement.style.zIndex = '100';
      cardElement.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
      
      // 恢复原状
      setTimeout(() => {
        cardElement.style.transform = '';
        cardElement.style.zIndex = '1';
        cardElement.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.12)';
      }, 600);
    });
    
    movingCards.appendChild(cardElement);
  });
  
  cardsContainer.appendChild(movingCards);
  welcomeContent.appendChild(cardsContainer);
  welcomeBanner.appendChild(welcomeContent);
  
  // 插入到页面底部
  const footer = document.querySelector('footer') || document.querySelector('.footer') || document.querySelector('#footer');
  if (footer) {
    footer.parentNode.insertBefore(welcomeBanner, footer);
  } else {
    document.body.appendChild(welcomeBanner);
  }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWelcomeBanner);
} else {
  initWelcomeBanner();
}