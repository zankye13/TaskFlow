let tasks = [
    // esma nin görevleri
    {
        id: "1",
        title: "PlayerPrefs Yerel Veri Saklama",
        description: "Oyuncunun en yüksek skoru ve ayarlarının yerel olarak kaydedilmesi sağlanacak.",
        priority: "Yüksek",
        assignee: "Esma",
        status: "Tamamlandı",
        createdAt: "2026-10-15T09:00:00.000Z"
    },
    {
        id: "2",
        title: "HUD Manager Arayüz Yönetimi",
        description: "Can, toplanan puanlar ve süre bilgilerinin ekranda dinamik gösterimi kodlanacak.",
        priority: "Orta",
        assignee: "Esma",
        status: "Tamamlandı",
        createdAt: "2026-10-15T10:30:00.000Z"
    },
    {
        id: "6",
        title: "Unity Profiler ile FPS Optimizasyonu",
        description: "Oyun içi performans darboğazları tespit edilip kare hızı iyileştirilecek.",
        priority: "Yüksek",
        assignee: "Esma",
        status: "Bekliyor",
        createdAt: "2026-10-17T09:00:00.000Z"
    },
    {
        id: "10",
        title: "Nesne Havuzlama (Object Pooling)",
        description: "Sürekli üretilen engeller ve mermiler için havuz sistemi kurulacak.",
        priority: "Yüksek",
        assignee: "Esma",
        status: "Devam Ediyor",
        createdAt: "2026-10-18T09:30:00.000Z"
    },
    {
        id: "15",
        title: "Genel Sistem Entegrasyonu",
        description: "Tüm sahnelerin ve modüllerin bir arada kararlı çalıştığı son test yapılacak.",
        priority: "Yüksek",
        assignee: "Esma",
        status: "Bekliyor",
        createdAt: "2026-10-18T12:00:00.000Z"
    },

    // ahmet in gorevleri
    {
        id: "3",
        title: "Karakter Hareket Fizikleri",
        description: "Rigidbody2D kullanılarak akıcı koşma, yürüme ve yerçekimi ayarlanacak.",
        priority: "Düşük",
        assignee: "Ahmet",
        status: "Tamamlandı",
        createdAt: "2026-10-16T11:15:00.000Z"
    },
    {
        id: "9",
        title: "Zemin Algılama (Ground Check)",
        description: "Karakterin zıplama mekaniği için raycast tabanlı zemin kontrolü yazılacak.",
        priority: "Orta",
        assignee: "Ahmet",
        status: "Bekliyor",
        createdAt: "2026-10-18T08:00:00.000Z"
    },
    {
        id: "16",
        title: "İki Kademeli Zıplama (Double Jump)",
        description: "Oynanış hissiyatını artırmak için çift zıplama yeteneği eklenecek.",
        priority: "Orta",
        assignee: "Ahmet",
        status: "Bekliyor",
        createdAt: "2026-10-18T13:00:00.000Z"
    },
    {
        id: "17",
        title: "Giriş (Input) Sistemi Düzenlemesi",
        description: "Klavye ve dokunmatik ekranlar için ortak girdi yöneticisi kurulacak.",
        priority: "Düşük",
        assignee: "Ahmet",
        status: "Bekliyor",
        createdAt: "2026-10-18T13:30:00.000Z"
    },

    // mehmet in gorevleri
    {
        id: "4",
        title: "Pixel-Art Sprite Animasyonları",
        description: "Karakterin koşma, zıplama ve ölüm animasyonları sprite sheet ile bağlanacak.",
        priority: "Yüksek",
        assignee: "Mehmet",
        status: "Devam Ediyor",
        createdAt: "2026-10-16T14:20:00.000Z"
    },
    {
        id: "13",
        title: "Paralaks Arka Plan Kaydırması",
        description: "Derinlik hissi vermek için katmanlı arka plan kaydırma efekti yazılacak.",
        priority: "Düşük",
        assignee: "Mehmet",
        status: "Bekliyor",
        createdAt: "2026-10-18T11:15:00.000Z"
    },
    {
        id: "18",
        title: "Olay Güdümlü Ses Yöneticisi",
        description: "Zıplama, toplama ve hata sesleri için merkezi bir ses sistemi kurulacak.",
        priority: "Orta",
        assignee: "Mehmet",
        status: "Bekliyor",
        createdAt: "2026-10-18T14:00:00.000Z"
    },
    {
        id: "19",
        title: "Partikül Efektleri (Particle Systems)",
        description: "Toplanabilir altınlar ve zıplama anında toz bulutu efektleri eklenecek.",
        priority: "Yüksek",
        assignee: "Mehmet",
        status: "Bekliyor",
        createdAt: "2026-10-18T14:30:00.000Z"
    },

    // ayse nin gorevleri
    {
        id: "5",
        title: "Devriye Düşman Yapay Zekası",
        description: "Belirli rotada hareket eden engellerin ve düşmanların mantığı yazılacak.",
        priority: "Orta",
        assignee: "Ayşe",
        status: "Devam Ediyor",
        createdAt: "2026-10-17T08:45:00.000Z"
    },
    {
        id: "14",
        title: "Rastgele Soğuma (Random Cooldown)",
        description: "Düşmanların saldırı aralıklarına dinamik süreler eklenecek.",
        priority: "Orta",
        assignee: "Ayşe",
        status: "Bekliyor",
        createdAt: "2026-10-18T11:40:00.000Z"
    },
    {
        id: "20",
        title: "Dinamik Zorluk Ayarlama",
        description: "Oynanan süreye bağlı olarak oyun hızının artması sağlanacak.",
        priority: "Düşük",
        assignee: "Ayşe",
        status: "Bekliyor",
        createdAt: "2026-10-18T15:00:00.000Z"
    },
    {
        id: "21",
        title: "Engel Spawn (Üretim) Yöneticisi",
        description: "Engellerin rastgele aralıklarla ve uygun mesafede üretilmesi sağlanacak.",
        priority: "Yüksek",
        assignee: "Ayşe",
        status: "Bekliyor",
        createdAt: "2026-10-18T15:30:00.000Z"
    },

    // can in gorevleri
    {
        id: "7",
        title: "Ana Menü ve Pause Ekranı",
        description: "Oyunu durdurma, yeniden başlatma ve menüye dönme akışları kurulacak.",
        priority: "Yüksek",
        assignee: "Can",
        status: "Tamamlandı",
        createdAt: "2026-10-17T12:00:00.000Z"
    },
    {
        id: "12",
        title: "Game Over Ekranı ve Skor Tablosu",
        description: "Can bittiğinde çıkan özet ekranı ve skor listesi tasarlanacak.",
        priority: "Orta",
        assignee: "Can",
        status: "Bekliyor",
        createdAt: "2026-10-18T10:45:00.000Z"
    },
    {
        id: "22",
        title: "Sahne Geçiş Animasyonları",
        description: "Fade-in / fade-out efektleri ile akıcı sahne geçişleri sağlanacak.",
        priority: "Düşük",
        assignee: "Can",
        status: "Bekliyor",
        createdAt: "2026-10-18T16:00:00.000Z"
    }
];

module.exports = tasks;