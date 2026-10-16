document.addEventListener('DOMContentLoaded', () => {
    // 要素の取得
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeBtn = document.querySelector('.modal-close');
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    // ギャラリーアイテムのクリックイベント
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const imgSrc = item.getAttribute('data-image');
        const desc = item.getAttribute('data-desc');
  
        // モーダル内にデータをセット
        modalTitle.textContent = title;
        modalImg.src = imgSrc;
        modalDesc.innerHTML = desc;
  
        // モーダルを表示
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // 背後のスクロールを固定
      });
    });
  
    // モーダルを閉じる処理
    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // スクロール復帰
    };
  
    closeBtn.addEventListener('click', closeModal);
  
    // モーダル外側の背景クリックで閉じる
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  
    // ESCキーで閉じる
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
      }
    });
  });