// 文章列表页搜索功能
document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const postsList = document.getElementById('posts-list');
    
    if (searchInput && searchBtn && postsList) {
        function doSearch() {
            const query = searchInput.value.toLowerCase().trim();
            const posts = postsList.querySelectorAll('.post-card');
            
            posts.forEach(post => {
                const title = post.querySelector('.post-title').textContent.toLowerCase();
                const summary = post.querySelector('.post-summary').textContent.toLowerCase();
                const tags = post.getAttribute('data-tags') || '';
                
                if (title.includes(query) || summary.includes(query) || tags.includes(query)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        }
        
        searchBtn.addEventListener('click', doSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') doSearch();
        });
    }
    
    // 标签筛选
    const tagItems = document.querySelectorAll('.tag-item');
    if (tagItems.length > 0 && postsList) {
        tagItems.forEach(tag => {
            tag.addEventListener('click', function() {
                const selectedTag = this.getAttribute('data-tag');
                const posts = postsList.querySelectorAll('.post-card');
                
                tagItems.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                posts.forEach(post => {
                    if (selectedTag === 'all') {
                        post.style.display = 'block';
                    } else {
                        const tags = post.getAttribute('data-tags') || '';
                        if (tags.includes(selectedTag)) {
                            post.style.display = 'block';
                        } else {
                            post.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // 音乐播放器
    const musicToggle = document.getElementById('music-toggle');
    const musicPanel = document.getElementById('music-panel');
    const musicClose = document.getElementById('music-close');
    
    if (musicToggle && musicPanel) {
        musicToggle.addEventListener('click', function() {
            musicPanel.classList.toggle('active');
        });
        
        if (musicClose) {
            musicClose.addEventListener('click', function() {
                musicPanel.classList.remove('active');
            });
        }
    }
    
    // 音乐曲目点击（占位功能）
    const musicItems = document.querySelectorAll('.music-item');
    const nowPlaying = document.getElementById('now-playing');
    
    musicItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = this.querySelector('.music-name').textContent;
            if (nowPlaying) {
                nowPlaying.textContent = '正在播放：' + name;
            }
        });
    });
});
