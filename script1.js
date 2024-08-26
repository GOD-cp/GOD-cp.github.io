
document.addEventListener("DOMContentLoaded", function() {
    // 2秒後にバナー広告を表示
    setTimeout(function() {
        document.getElementById('ad-banner').style.bottom = '20px';
    }, 2000);
    // 変更: 閉じるボタンのイベントリスナーを追加
document.getElementById('close-ad').addEventListener('click', function() {
    document.getElementById('ad-banner').style.bottom = '-100%';
});
});