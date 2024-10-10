document.addEventListener('DOMContentLoaded', function() {
    // 获取所有项目卡片和发起项目按钮
    var projectButtons = document.querySelectorAll('.project-button');
    var initiateButton = document.querySelector('.create-button');

    // 为项目卡片添加点击事件
    projectButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // 跳转到对应的项目页面
            window.location.href = button.getAttribute('href');
        });
    });

    // 为发起项目按钮添加点击事件
    initiateButton.addEventListener('click', function() {
        // 跳转到创建项目页面
        window.location.href = initiateButton.querySelector('.initiate-project').getAttribute('href');
    });
});