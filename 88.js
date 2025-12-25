

const navLinks= document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

 menuOpenButton.addEventListener("click", () => {
 // Toggle mobile menu visibility
 document.body.classList.toggle("show-mobile-menu");
 });

 // Close menu when the close button is clicked 
  menuCloseButton.addEventListener("click", () => menuOpenButton.click());
 
 // Close menu when the nav link is clicked
 navLinks.forEach(link => {
 link.addEventListener("click", () => menuOpenButton.click());
 });

 // Initialize Swiper
 const swiper = new Swiper('.slider-wrapper', {
 loop: true,
 grabCursor: true,
 spaceBetween: 25,
 
// If we need pagination 
 pagination: {
 el: '.swiper-pagination',
 dynamicBullets: true,
 clickable: true,},

// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

// Responsive breakpoints
breakpoints: {
0: {
slidesPerView: 1
},
768: {
slidesPerView: 2
},
1024: {
slidesPerView: 3
}
}
});


//addsuccsfuly to card
function showAlert() {
    // 1. إنشاء عنصر الرسالة
    const toast = document.createElement("div");
    toast.innerText = "تمت إضافة المنتج إلى السلة بنجاح! ✅";
    
    // 2. تنسيق الرسالة برمجياً (يمكنك تغيير الألوان هنا)
    Object.assign(toast.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#b5838d", // نفس لون أزرار موقعك
        color: "white",
        padding: "15px 25px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        zIndex: "1000",
        direction: "rtl",
        fontFamily: "Arial, sans-serif"
    });

    // 3. إضافة الرسالة للصفحة
    document.body.appendChild(toast);

    // 4. حذف الرسالة تلقائياً بعد ثانيتين مع تأثير اختفاء بسيط
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.5s ease";
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}
//login
