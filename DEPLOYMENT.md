# 🚀 خطوات الرفع على Vercel

## الخطوة 1: رفع المشروع على GitHub

```bash
# تأكد أنك في مجلد المشروع
cd c:\Users\ASUS\Desktop\ssoo\53

# تهيئة Git (إذا لم تكن مهيأة)
git init

# إضافة جميع الملفات
git add .

# إنشاء أول commit
git commit -m "Ready for Vercel deployment"

# إنشاء فرع main
git branch -M main

# إضافة remote (استبدل YOUR_USERNAME و YOUR_REPO بمعلوماتك)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# رفع الملفات
git push -u origin main
```

## الخطوة 2: الربط مع Vercel

1. اذهب إلى: https://vercel.com/new
2. سجل الدخول (يمكنك استخدام GitHub)
3. اضغط **Import Git Repository**
4. اختر المشروع الذي رفعته
5. اضغط **Import**

## الخطوة 3: إضافة متغير البيئة

قبل الرفع النهائي:

1. في صفحة المشروع على Vercel، اذهب إلى **Settings**
2. اختر **Environment Variables**
3. اضغط **Add Variable**
4. أضف المتغير التالي:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: (مفتاح API الخاص بك من Google)
   - **Environments**: حدد Production, Preview, Development
5. اضغط **Save**

## الخطوة 4: الرفع النهائي

1. اذهب إلى **Deployments**
2. اضغط على الزر **Redeploy** (إذا لزم الأمر)
3. انتظر حتى يكتمل الرفع ✅

## الخطوة 5: الوصول للتطبيق

بعد اكتمال الرفع، ستحصل على رابط مثل:
```
https://YOUR-PROJECT-NAME.vercel.app
```

## 🔄 تحديث التطبيق لاحقاً

كل مرة تقوم فيها بتعديل الكود ورفعه على GitHub:

```bash
git add .
git commit -m "وصف التعديلات"
git push
```

سيقوم Vercel تلقائياً ببناء ورفع النسخة الجديدة! 🎉

---

## ⚡ طريقة بديلة: Vercel CLI

إذا كنت تفضل استخدام سطر الأوامر:

```bash
# تثبيت Vercel CLI
npm install -g vercel

# تسجيل الدخول
vercel login

# رفع المشروع
vercel

# للإنتاج مباشرة
vercel --prod
```

## 📝 ملاحظات مهمة

- ✅ تأكد من أن ملف `vercel.json` موجود
- ✅ تأكد من أن متغير `GEMINI_API_KEY` مُضاف على Vercel
- ✅ البناء يعمل محلياً: `npm run build`
- ✅ ملف `.gitignore` لا يتضمن الملفات المهمة

## 🆘 حل المشاكل

### البناء فشل على Vercel؟
1. تحقق من السجلات (Logs) على Vercel
2. تأكد من أن البناء يعمل محلياً: `npm run build`
3. تحقق من متغيرات البيئة

### الصفحة بيضاء؟
1. تحقق من Console في المتصفح
2. تأكد من أن جميع الملفات تم رفعها
3. تحقق من مسارات الملفات في `index.html`

### API لا يعمل؟
- تأكد من إضافة `GEMINI_API_KEY` في Environment Variables
