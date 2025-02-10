function startSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // 最初のスライドを表示
    slides[0].classList.add('active');

    setInterval(() => {
        // 現在のスライドを非表示
        slides[currentSlide].classList.remove('active');
        
        // 次のスライドのインデックスを計算
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 次のスライドを表示
        slides[currentSlide].classList.add('active');
    }, 5000); // 5秒ごとに切り替え
}

// ページ読み込み時にスライドショーを開始
document.addEventListener('DOMContentLoaded', startSlideshow); 