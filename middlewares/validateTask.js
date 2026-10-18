const validateTask = (req, res, next) => {
    const method = req.method;
    let errors = [];
// İstekler arasinda cakisma olmamasi icin ve birbirlerinin etki alanina girerek bilgileri yanlis yonde degistirmeyi onlemek veri butunlugunu 
// dogru olarak korumak icin istekler farkli if bloklari altında islenir. moduler  mimariyi kod icerisinde de korumaya calisiriz

    // tum post istekleri burada yer alir
    if (method === 'POST') {
        const { title, description, priority, assignee } = req.body;

        if (!title || typeof title !== 'string' || title.trim().length < 3) {
            errors.push("Görev başlığı (title) zorunludur ve en az 3 karakter olmalıdır.");
        }
        if (!description || typeof description !== 'string' || description.trim().length < 5) {
            errors.push("Açıklama (description) zorunludur ve en az 5 karakter olmalıdır.");
        }
        if (!priority || !["Düşük", "Orta", "Yüksek"].includes(priority)) {
            errors.push("Öncelik (priority) alanı zorunludur ve 'Düşük', 'Orta' veya 'Yüksek' olmalıdır.");
        }
        if (!assignee || typeof assignee !== 'string' || assignee.trim() === '') {
            errors.push("Atanan kişi (assignee) alanı zorunludur ve boş olamaz.");
        }
    }

    // tum put istekleri buradadir
    else if (method === 'PUT') {
        const { title, description, priority, assignee, status } = req.body;

        // PUT tüm alanların eksiksiz ve kurallara uygun gönderilmesini zorunlu kılar
        if (!title || typeof title !== 'string' || title.trim().length < 3) {
            errors.push("PUT için başlık (title) zorunludur ve en az 3 karakter olmalıdır.");
        }
        if (!description || typeof description !== 'string' || description.trim().length < 5) {
            errors.push("PUT için açıklama (description) zorunludur ve en az 5 karakter olmalıdır.");
        }
        if (!priority || !["Düşük", "Orta", "Yüksek"].includes(priority)) {
            errors.push("PUT için öncelik (priority) zorunludur ve geçerli olmalıdır.");
        }
        if (!assignee || typeof assignee !== 'string' || assignee.trim() === '') {
            errors.push("PUT için atanan kişi (assignee) zorunludur.");
        }
        if (status !== undefined && !["Bekliyor", "Devam Ediyor", "Tamamlandı"].includes(status)) {
            errors.push("Geçersiz status değeri. Kabul edilenler: Bekliyor, Devam Ediyor, Tamamlandı.");
        }
    }

    // patch istekleri
    else if (method === 'PATCH') {
        const { title, description, priority, assignee, status } = req.body;

        // PATCH'te hiçbir alan zorunlu değildir, ancak gönderildiyse formatı doğru olmalıdır!
        if (title !== undefined && (typeof title !== 'string' || title.trim().length < 3)) {
            errors.push("Gönderilen başlık (title) en az 3 karakter olmalıdır.");
        }
        if (description !== undefined && (typeof description !== 'string' || description.trim().length < 5)) {
            errors.push("Gönderilen açıklama (description) en az 5 karakter olmalıdır.");
        }
        if (priority !== undefined && !["Düşük", "Orta", "Yüksek"].includes(priority)) {
            errors.push("Gönderilen öncelik (priority) sadece 'Düşük', 'Orta' veya 'Yüksek' olabilir.");
        }
        if (assignee !== undefined && (typeof assignee !== 'string' || assignee.trim() === '')) {
            errors.push("Gönderilen atanan kişi (assignee) boş olamaz.");
        }
        if (status !== undefined && !["Bekliyor", "Devam Ediyor", "Tamamlandı"].includes(status)) {
            errors.push("Gönderilen status sadece 'Bekliyor', 'Devam Ediyor' veya 'Tamamlandı' olabilir.");
        }
    }

    // ortak olarak hata alinirsa
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Validasyon Hatası",
            errors: errors
        });
    }

    next();
};

module.exports = validateTask;