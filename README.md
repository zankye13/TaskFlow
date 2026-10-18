# Taskflow - Game Development Project Tracker API

Taskflow, oyun geliştirme projelerinde (Unity 2D/3D vb.) yer alan iş paketlerini, modülleri ve görev dağılımlarını katmanlı mimari (Layered MVC-like) ilkelerine uygun şekilde yönetmek amacıyla geliştirilmiş, modüler ve yüksek performanslı bir **RESTful Backend API** servisidir.

---

## Proje Mimarisi ve Katman Yapısı

Proje, kod okunabilirliğini artırmak, bakımı kolaylaştırmak ve sorumlulukların ayrılması (*Separation of Concerns*) prensibine sadık kalmak amacıyla modüler bir yapıda kurgulanmıştır:

```text
Taskflow/
├── controllers/
│   └── taskController.js    # İş mantığı, arama, filtreleme ve CRUD operasyonları
├── data/
│   └── tasks.js             # Bellek içi (In-Memory) mock veri kaynağı
├── middlewares/
│   ├── logger.js            # İstek takip ve zaman damgalı loglama yazılımı
│   └── validateTask.js      # Gelen veri paketlerinin doğrulama katmanı
├── routes/
│   └── taskRoutes.js        # HTTP Endpoint tanımlamaları ve yönlendirmeleri
├── package.json             # Bağımlılıklar ve proje yapılandırması
└── server.js                # Express sunucusu başlatıcı ve konfigürasyon ana giriş dosyası
```

---

## Kurulum ve Çalıştırma

### Gereksinimler
- **Node.js**: v14.x veya üzeri
- **npm**: v6.x veya üzeri

### Adım Adım Kurulum
1. Proje repository'sini klonlayın veya zip olarak indirin:
   ```bash
   git clone <GITHUB_REPO_URL>
   cd Taskflow
   ```

2. Gerekli bağımlılıkları (Express vb.) yükleyin:
   ```bash
   npm install
   ```

3. Sunucuyu başlatın:
   ```bash
   npm start
   # veya geliştirici modunda (nodemon varsa)
   npm run dev
   ```
   *Sunucu varsayılan olarak `http://localhost:3000` portunda çalışacaktır.*

---

## API Uç Noktaları (Endpoints) ve Kullanım Rehberi

### 1. Temel CRUD ve Listeleme İşlemleri

| HTTP Metodu | Endpoint | Açıklama | Örnek Parametre / Kullanım |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/tasks` | Tüm görevleri listeler (Filtreleme, Sıralama, Sayfalama destekli) | `/api/tasks?status=Tamamlandı&priority=Yüksek&page=1&limit=5` |
| **GET** | `/api/tasks/:id` | Belirtilen ID'ye sahip görevin detaylarını getirir | `/api/tasks/1` |
| **POST** | `/api/tasks` | Yeni bir görev oluşturur (Validation gerektirir) | Body: JSON formatında görev objesi |
| **PUT** | `/api/tasks/:id` | Var olan görevi günceller | Body: Güncellenecek alanlar |
| **DELETE** | `/api/tasks/:id` | Görevi sistemden siler | `/api/tasks/3` |

### 2. İsteğe Bağlı & Gelişmiş Özellikler (Bonus Endpoints)

#### A. Arama Endpoint'i (`/api/tasks/search`)
Görev başlığı (`title`) veya açıklamasında (`description`) kelime bazlı arama yapar.
* **Kullanım:** `GET /api/tasks/search?keyword=Unity`

#### B. Kullanıcı Bazlı Listeleme (`/api/tasks/assignee/:name`)
Belirli bir geliştiriciye atanan tüm görevleri getirir.
* **Kullanım:** `GET /api/tasks/assignee/isim`

> **Önemli Route Notu:** Express.js'in *yukarıdan aşağıya rota eşleştirme (top-to-bottom route matching)* kuralı gereği `/search` ve `/assignee/:name` uç noktaları, dinamik `/:id` parametresinden **önce** tanımlanmıştır. Bu sayede `search` kelimesinin bir ID olarak algılanması engellenmiştir.

---

## Doğrulama (Validation) Mekanizması

`POST` ve `PUT` isteklerinde veritabanı bütünlüğünü korumak adına `validateTask` middleware'i devreye girer:
- **Title**: Zorunludur, boş bırakılamaz ve `string` formatında olmalıdır.
- **Priority**: Sadece `Düşük`, `Orta`, `Yüksek` (veya İngilizce dengi `low`, `medium`, `high`) kabul edilir.
- **Description & Assignee**: Gönderildiği takdirde metinsel (`string`) format kuralına tabi tutulur.

*Hatalı veri gönderiminde `400 Bad Request` yanıtı ve detaylı hata dizisi döner.*

---

## Veri Dağılımı ve Senaryo

Proje verileri, bir **Unity 2D Oyun Geliştirme Sürecini** simüle edecek şekilde 5 geliştirici arasında 20 iş paketi olarak dağıtılmıştır:
- **Esma** (5 Görev): Core Sistemler & Optimizasyon (PlayerPrefs, Object Pooling, FPS Profiler)
- **Ahmet** (4 Görev): Fizik & Karakter Kontrolleri (Rigidbody2D, Double Jump)
- **Mehmet** (4 Görev): Görsel & Ses Efektleri (Paralaks Arka Plan, Sprite Animasyonları)
- **Ayşe** (4 Görev): Yapay Zeka & Düşman Mekanikleri (Devriye AI, Obstacle Spawn)
- **Can** (3 Görev): Sahne & Akış Yönetimi (Ana Menü, Game Over Ekranı)

---

## Lisans ve Katkıda Bulunma
Bu proje eğitim ve geliştirme amacıyla hazırlanmış modüler bir REST API şablonudur.