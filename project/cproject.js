document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('projectForm');

    // 获取取消按钮元素
    var cancelButton = document.getElementById('cancelButton');

    // 为取消按钮添加点击事件监听器
    cancelButton.addEventListener('click', function() {
        // 跳转至 projects.html
        window.location.href = 'projects.html';
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单默认提交行为

        // 获取表单数据
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const startTime = document.getElementById('startTime').value; // 预计开始日期和时间
        const deadline = document.getElementById('deadline').value; // 截止日期和时间
        const personCount = document.getElementById('personCount').value; // 人员数量
        const projectField = document.getElementById('projectField').value; // 项目领域

        // 创建项目对象
        const project = {
            title: title,
            description: description,
            startTime: startTime,
            deadline: deadline,
            personCount: personCount,
            projectField: projectField
        };

        window.location.href = 'projects.html'; // 跳转到项目详情页面
    });
});