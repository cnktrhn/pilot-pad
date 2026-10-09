=====================================================================
 VIRTUAL WINGS - A320 PILOT PAD  v1.2.0
 Free web EFB / kneeboard for MSFS 2020 & 2024
 www.virtualwingsbycenk.com
=====================================================================

 [ ENGLISH ]  ............................................ (Turkce asagida)

WHAT IS IT?
A free, stand-alone web app that works like a pilot's tablet: import your
SimBrief flight plan, keep your flight data, performance numbers and
checklists in one place, and take notes with a pen. Nothing to install and
nothing goes into your Community folder.

FEATURES
 - SimBrief import (user ID or username): callsign, airports, runways, SID/
   STAR, route, cruise level, weights and fuel
 - Flight data, weather (ATIS, QNH, transition) and remarks
 - OUT / OFF / ON / IN times in UTC with automatic block and air time
 - Wind components: headwind / tailwind and crosswind from the runway number
 - Performance sheet: weights, V1 / VR / V2, flex, flaps, THS, VAPP, VLS,
   autobrake, landing data
 - Kneeboard: pen, eraser, 4 colours, pen size, undo, blank / lined / grid /
   ATC-copy paper. Pressure-sensitive with Apple Pencil, Surface Pen, stylus;
   "Pen only" palm rejection. Notes are saved automatically.
 - Generic A320-family checklist (tick items, progress per phase, saved)
 - Export: PDF (flight data + notes page) and PNG of your kneeboard
 - UTC and local clock, keep-screen-on button, battery indicator (if the
   browser supports it), works offline after the first load
 - Everything is saved in your browser only. No account, no tracking.

HOW TO USE
 1. Unzip the whole folder anywhere (keep the files together).
 2. Open index.html in Chrome, Edge, Firefox or Safari.
    Tablet: open it from a web address you host, then "Add to Home Screen"
    for a full-screen app. (Installing/offline mode needs http(s); opening
    the file directly works for everything else.)
 3. Type your SimBrief ID in BRIEFING and press IMPORT OFP.
 4. Use the tabs: BRIEFING, PERFORMANCE, KNEEBOARD, CHECKLIST.
 5. Use "NEW FLIGHT" at the bottom to clear the fields for the next flight.

STREAMERS
 Add the page to OBS as a Browser Source, or put it on a second screen/tablet.

GOOD TO KNOW
 - Performance values are typed in by you. The app does not calculate
   takeoff or landing performance.
 - SimBrief import needs an internet connection and a generated flight plan.
 - The checklist is a simplified generic flow. Use your add-on's own
   checklist for real procedures.
 - Fonts (Barlow) load online when available; a system font is used otherwise.
 - Keep jspdf.umd.min.js in the same folder as index.html (PDF export).
 - For flight simulation only. Not for real-world navigation.

CHANGELOG
 v1.2.0 - Kneeboard: TEXT tool and finger-to-type mode. With "Pen only" ON,
          Apple Pencil / stylus draws and fingers are ignored. With "Pen only"
          OFF, tap the page with a finger and type with the keyboard (pencil and
          mouse still draw). Typed text can be undone, erased and is included
          in PDF/PNG export.
 v1.1.1 - iPad/Safari fix: section tabs (Performance, Kneeboard,
          Checklist) now open reliably on touch; app parts load
          independently so one problem cannot block the others.
 v1.1.0 - New Virtual Wings design, English UI, tabs, performance sheet,
          checklist, OUT/OFF/ON/IN times, wind components, pen tools with
          undo/eraser/colours/paper types, pressure and palm rejection,
          fields saved automatically, better PDF (all data + correct
          proportions), PNG export, offline PWA, SimBrief fix (cruise level,
          username support, no pop-up alerts).
 v1.0   - First release.

LICENSE
 Freeware. Free for personal use and for streaming/video content.
 Please do not sell the package or re-upload it elsewhere without
 permission. Provided "as is", without warranty. Not affiliated with
 Microsoft, Asobo Studio, Airbus, Fenix Simulations or SimBrief.

CREDITS: see CREDITS-LICENSES.txt


=====================================================================

 [ TURKCE ]

NEDIR?
Pilotun tableti gibi calisan ucretsiz bir web uygulamasi: SimBrief ucus
planini ice aktarin, ucus bilgilerini, performans degerlerini ve
checklistleri tek yerde tutun, kalemle not alin. Kurulum yok, Community
klasorune hicbir sey kopyalanmaz.

OZELLIKLER
 - SimBrief ice aktarma (kullanici ID veya kullanici adi): callsign,
   meydanlar, pistler, SID/STAR, rota, seyir irtifasi, agirlik ve yakit
 - Ucus bilgileri, hava durumu (ATIS, QNH, gecis) ve notlar
 - UTC olarak OUT / OFF / ON / IN saatleri; block ve hava suresi otomatik
 - Ruzgar bilesenleri: pist numarasindan kafa/kuyruk ve yan ruzgar
 - Performans sayfasi: agirliklar, V1 / VR / V2, flex, flap, THS, VAPP, VLS,
   autobrake, inis bilgileri
 - Kneeboard: kalem, silgi, 4 renk, kalem boyutu, geri alma, bos / cizgili /
   kareli / ATC kagit tipleri. Apple Pencil, Surface Pen ve stylus basinc
   destegi; "Pen only" ile avuc ici reddi. Notlar otomatik kaydedilir.
 - Genel A320 ailesi checklist (isaretleme, bolum ilerlemesi, kayitli)
 - Disa aktarma: PDF (ucus bilgileri + not sayfasi) ve kneeboard PNG
 - UTC ve yerel saat, ekrani acik tut dugmesi, pil gostergesi (tarayici
   destekliyorsa), ilk yuklemeden sonra cevrimdisi calisir
 - Her sey sadece tarayicinizda saklanir. Hesap yok, takip yok.

NASIL KULLANILIR?
 1. Klasorun tamamini bir yere cikarin (dosyalar bir arada kalsin).
 2. index.html dosyasini Chrome, Edge, Firefox veya Safari'de acin.
    Tablet: bir web adresinden acip "Ana Ekrana Ekle" ile tam ekran
    uygulama yapabilirsiniz. (Kurulum/cevrimdisi mod http(s) ister;
    dosyayi dogrudan acmak diger her sey icin yeterlidir.)
 3. BRIEFING sekmesine SimBrief ID'nizi yazip IMPORT OFP'ye basin.
 4. Sekmeler: BRIEFING, PERFORMANCE, KNEEBOARD, CHECKLIST.
 5. Sonraki ucus icin en alttaki "NEW FLIGHT" ile alanlari temizleyin.

YAYINCILAR
 Sayfayi OBS'e Tarayici Kaynagi olarak ekleyin ya da ikinci ekran/tablette acin.

BILMENIZ GEREKENLER
 - Performans degerlerini siz girersiniz. Uygulama kalkis/inis performansi
   hesaplamaz.
 - SimBrief ice aktarma internet ve olusturulmus bir ucus plani gerektirir.
 - Checklist sadelestirilmis genel bir akistir. Gercek prosedurler icin
   ucak eklentinizin kendi checklistini kullanin.
 - Yazi tipi (Barlow) internet varsa yuklenir, yoksa sistem yazi tipi kullanilir.
 - PDF icin jspdf.umd.min.js dosyasi index.html ile ayni klasorde kalmali.
 - Sadece ucus simulasyonu icindir. Gercek navigasyonda kullanilamaz.

SURUM NOTLARI
 v1.2.0 - Kneeboard: TEXT araci ve parmakla yazma modu. "Pen only" ACIKKEN
          Apple Pencil / stylus cizer, parmaklar yoksayilir. "Pen only" KAPALIYKEN
          sayfaya parmakla dokunup klavyeyle yazabilirsiniz (kalem ve fare yine
          cizer). Yazilar geri alinabilir, silinebilir ve PDF/PNG ciktisina girer.
 v1.1.1 - iPad/Safari duzeltmesi: ust sekmeler (Performance, Kneeboard,
          Checklist) dokunmatikte sorunsuz aciliyor; bolumler birbirinden
          bagimsiz yukleniyor.
 v1.1.0 - Yeni Virtual Wings tasarimi, Ingilizce arayuz, sekmeler,
          performans sayfasi, checklist, OUT/OFF/ON/IN, ruzgar bilesenleri,
          geri alma/silgi/renk/kagit tipli kalem, basinc ve avuc reddi,
          otomatik kayit, daha iyi PDF, PNG disa aktarma, cevrimdisi PWA,
          SimBrief duzeltmeleri (seyir irtifasi, kullanici adi, uyari yok).
 v1.0   - Ilk surum.

LISANS
 Ucretsiz (freeware). Kisisel kullanim ve yayin/video icerigi icin serbesttir.
 Paketi izinsiz satmayin ya da baska yere yuklemeyin. "Oldugu gibi" sunulur,
 garanti verilmez. Microsoft, Asobo Studio, Airbus, Fenix Simulations veya
 SimBrief ile baglantili degildir.

KREDILER: CREDITS-LICENSES.txt dosyasina bakin
WEB SITESI: www.virtualwingsbycenk.com
