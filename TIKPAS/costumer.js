/**
 * Logic điều khiển Modal Sự kiện
 */
const modal = document.getElementById('eventModal');
const content = document.getElementById('modalContent');

/**
 * Mở modal và cập nhật thông tin động
 * @param {string} title - Tên sự kiện
 * @param {string} img - Link ảnh sơ đồ
 * @param {string} ticket - Các loại vé
 * @param {string} price - Giá vé
 * @param {string} time - Thời gian
 * @param {string} loc - Địa điểm
 */
function openEventModal(title, img, ticket, price, time, loc) {
    // Cập nhật nội dung vào các thẻ ID
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalSeatMap').src = img;
    document.getElementById('modalTicketClass').innerText = ticket;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalTime').innerText = time;
    document.getElementById('modalLocation').innerText = loc;

    // Hiển thị modal với hiệu ứng
    modal.classList.remove('hidden');
    
    // Sử dụng setTimeout để trình duyệt kịp render trạng thái hidden trước khi chạy transition
    setTimeout(() => {
        modal.classList.add('opacity-100');
        content.style.transform = 'scale(1)';
    }, 10);
}

/**
 * Đóng modal và reset hiệu ứng
 */
function closeEventModal() {
    modal.classList.remove('opacity-100');
    content.style.transform = 'scale(0.9)';
    
    // Đợi hiệu ứng transition kết thúc (300ms) rồi mới ẩn hoàn toàn
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Đóng modal khi người dùng click ra vùng bên ngoài (overlay)
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeEventModal();
    }
});

// Hỗ trợ đóng modal bằng phím ESC để tăng trải nghiệm người dùng
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeEventModal();
    }
});