// 搜索功能
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-box form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = this.querySelector('input[name="q"]').value;
            if (searchTerm.trim() !== '') {
                // 这里可以实现搜索功能，例如跳转到搜索结果页面
                window.location.href = '/search/?q=' + encodeURIComponent(searchTerm);
            }
        });
    }
    
    // 可以添加其他 JavaScript 功能
});
