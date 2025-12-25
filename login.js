// الاستماع لحدث "Submit" عند إرسال النموذج
document.getElementById('loginForm').addEventListener('submit', function(e) {
    
    // منع المتصفح من تحديث الصفحة (التصرف الافتراضي)
    e.preventDefault();

    // التقاط اسم المستخدم من الحقل المخصص
    const name = document.getElementById('user').value;

    // تحديد عناصر نافذة التنبيه
    const alertBox = document.getElementById('customAlert');
    const alertMsg = document.getElementById('alertMsg');
    
    // وضع نص الترحيب داخل النافذة
    alertMsg.innerText = "جميل أن نراكِ يا " + name + " ✨\nبشرتكِ ستشكركِ اليوم!";
    
    // تغيير طريقة العرض من none إلى flex لإظهار النافذة
    alertBox.style.display = 'flex';
});

// وظيفة يتم استدعاؤها عند الضغط على زر "موافق" في النافذة
function closeAlert() {
    // إخفاء النافذة مرة أخرى
    document.getElementById('customAlert').style.display = 'none';
    
    // إعادة تعيين الحقول (مسح البيانات المكتوبة) ليكون جاهزاً من جديد
    document.getElementById('loginForm').reset();
}