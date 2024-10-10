document.addEventListener('DOMContentLoaded', function() {
    // 获取所有的导航项
    var navItems = document.querySelectorAll('.navbar .nav-button');

    // 为每个导航项添加点击事件监听器
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // 移除所有导航项的 active 状态
            navItems.forEach(function(navItem) {
                navItem.classList.remove('active');
            });

            // 为当前点击的导航项添加 active 状态
            this.classList.add('active');
        });
    });
});