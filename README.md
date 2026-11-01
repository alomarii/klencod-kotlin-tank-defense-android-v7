# دفاع الدبابات v6 PRO — 80 مرحلة · 20 عالمًا · 7 أبراج بتصميم واقعي · 6 لغات
برمجة وتصميم: محمد العمري 730215825

## بناء ملف APK (مشروع أندرويد أصلي — بدون Node ولا Capacitor)
- من Klencod / GitHub Actions: شغّل `./gradlew assembleDebug` (أو `gradle assembleDebug`) من جذر المشروع.
- الملف الناتج: `app/build/outputs/apk/debug/app-debug.apk`
- من Android Studio: افتح المجلد ثم Build ← Build APK(s).

## مكان ملفات اللعبة
- ملفات اللعبة داخل التطبيق: `app/src/main/assets/` (index.html و game.js).
- نسخة `www/` مطابقة لها لتشغيل اللعبة كتطبيق ويب (PWA) على أي استضافة HTTPS.
- عند تعديل game.js عدّله في المكانين (أو انسخه).

## v7 — النشر على Google Play
- أنشئ keystore ثم ضع `keystore.properties` (storeFile, storePassword, keyAlias, keyPassword) في جذر المشروع.
- شغّل `gradle bundleRelease` ← الملف: `app/build/outputs/bundle/release/app-release.aab`.
- GitHub Actions جاهز في `.github/workflows/android.yml`.
- سياسة الخصوصية: `privacy.html` (استضفها على رابط عام للمتجر).
- قبل الرفع: ارفع targetSdk/compileSdk إلى أحدث مستوى تطلبه Google Play.
- الإعلانات/الشراء/لوحة الصدارة العالمية تحتاج حساباتك (AdMob / Play Billing / Play Games).
