document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("まだ続き書いてないですぅ");
        });
    });


const images = document.querySelectorAll("img");

images.forEach(image => {
    image.addEventListener("click", function() {
        // displayが "none" かどうかをチェックして切り替え
        if (image.style.display === "none") {
            image.style.display = "block"; // 画像を表示する
        } else {
            image.style.display = "none";  // 画像を非表示にする
        }
    });
});
});