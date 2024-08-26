# Çevrimiçi Not Defteri
- Bu proje, kullanıcıların notlarını çevrimiçi olarak yönetmelerine olanak tanıyan bir web uygulamasıdır. Express.js kullanılarak geliştirilmiş ve Pug şablon motoru ile render edilmiştir. Uygulama, kullanıcı kimlik doğrulama, not ekleme, düzenleme ve profil yönetimi gibi temel işlevleri içerir.

## Özellikler
- Kimlik Doğrulama: Kullanıcı giriş yapabilir, oturumu kapatabilir ve geçersiz girişler için hata mesajları alabilir.
- Not Yönetimi: Kullanıcılar yeni not ekleyebilir, mevcut notları düzenleyebilir ve listeleyebilir.
- Profil Yönetimi: Kullanıcılar profil bilgilerini görüntüleyebilir ve güncelleyebilirler.

## Dosya Yapısı
- app.js: Uygulamanın ana dosyası ve yapılandırma ayarları.
- routes/notes.js: Notları yönetmek için kullanılan Express.js rotaları.
- routes/auth.js: Kimlik doğrulama işlemlerini yöneten Express.js rotaları.
- routes/profile.js: Kullanıcı profilini yöneten Express.js rotaları.
- views/: Pug şablon dosyaları.
- notes.pug: Notları listelemek için kullanılan şablon.
- addNote.pug: Yeni not eklemek için kullanılan form şablonu.
- editNote.pug: Mevcut notu düzenlemek için kullanılan form şablonu.
- login.pug: Kullanıcı giriş formunu içeren şablon.
- profile.pug: Kullanıcı profilini görüntülemek ve güncellemek için kullanılan şablon.
- public/: Statik dosyalar (CSS, JS, görseller).
## Ekran Görüntüsü
![image](https://github.com/user-attachments/assets/f7fc5ca2-9018-432c-a875-f0c876dda914)
![image](https://github.com/user-attachments/assets/d199b92b-640d-48b0-a89d-ce6483e3d862)
![image](https://github.com/user-attachments/assets/5f0c3773-6288-4d4c-9d88-b9bd92f2b741)
![image](https://github.com/user-attachments/assets/98d31668-b198-4c2f-a006-4f1f849ef064)

