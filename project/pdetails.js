document.addEventListener('DOMContentLoaded', function() {
    var emptyAvatars = document.querySelectorAll('.avatar:empty');
    emptyAvatars.forEach(function(avatar) {
        // 创建加号元素
        var plusIcon = document.createElement('div');
        plusIcon.textContent = '+';
        plusIcon.style.position = 'absolute';
        plusIcon.style.top = '50%';
        plusIcon.style.left = '50%';
        plusIcon.style.transform = 'translate(-50%, -50%)';
        plusIcon.style.width = '100%';
        plusIcon.style.height = '100%';
        plusIcon.style.display = 'flex';
        plusIcon.style.justifyContent = 'center';
        plusIcon.style.alignItems = 'center';
        plusIcon.style.borderRadius = '50%';
        plusIcon.style.background = '#ddd';
        plusIcon.style.color = '#fff';
        plusIcon.style.fontSize = '24px';
        plusIcon.style.zIndex = '10';
        plusIcon.style.cursor = 'pointer'; // 确保加号可点击

        // 将加号元素添加到 avatar 容器中
        avatar.appendChild(plusIcon);

        // 为加号元素添加点击事件监听器
        plusIcon.addEventListener('click', function() {
            window.location.href = 'students.html';
        });
    });
});