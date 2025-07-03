document.addEventListener('DOMContentLoaded', function() {
    const ipv6ContentDiv = document.getElementById('go');
    const filePath = 'addr.txt'; // 你的文本文件路徑

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                // 如果 HTTP 狀態碼不是 2xx (成功)，則拋出錯誤
                throw new Error(`HTTP 錯誤！狀態：${response.status}`);
            }
            return response.text(); // 將響應解析為文本
        })
        .then(data => {
            // 將獲取的文本內容設置到 div 中
	    window.location.href = "http://[" + data + "]:81";
            ipv6ContentDiv.textContent = data;
        })
        .catch(error => {
            // 捕獲任何錯誤並顯示在 div 中
            console.error('獲取文件時出錯:', error);
            ipv6ContentDiv.textContent = `無法載入 IPv6 地址：${error.message}`;
        });
});
