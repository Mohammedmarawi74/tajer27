# رادار المستثمر - صانع الكاروسيل

تطبيق ويب تفاعلي لصنع شرائح كاروسيل احترافية للمستثمرين.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![Vite](https://img.shields.io/badge/Vite-6-purple)

## 🚀 الرفع على Vercel

### الطريقة 1: الربط مع GitHub (الأسهل)

1. ارفع المشروع على GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. اذهب إلى [vercel.com](https://vercel.com) وسجل الدخول

3. اضغط على **Add New Project**

4. اختر المستودع من GitHub

5. أضف متغير البيئة `GEMINI_API_KEY`:
   - اذهب إلى **Settings → Environment Variables**
   - اضغط **Add Variable**
   - الاسم: `GEMINI_API_KEY`
   - القيمة: مفتاح API الخاص بك من Google

6. اضغط **Deploy** ✅

### الطريقة 2: استخدام Vercel CLI

```bash
# تثبيت Vercel CLI
npm install -g vercel

# تسجيل الدخول
vercel login

# رفع المشروع (أول مرة)
vercel

# رفع التعديلات لاحقاً
vercel --prod
```

### الطريقة 3: السحب والإفلات

1. ابنِ المشروع محلياً:
```bash
npm run build
```

2. اذهب إلى [vercel.com/new](https://vercel.com/new)

3. اسحب وأفلت مجلد `dist`

## ⚙️ متغيرات البيئة

### محلياً:
أنشئ ملف `.env.local` في جذر المشروع:
```
GEMINI_API_KEY=your_api_key_here
```

### على Vercel:
من لوحة التحكم:
**Project Settings → Environment Variables → Add Variable**

| الاسم | القيمة | البيئة |
|------|--------|--------|
| `GEMINI_API_KEY` | مفتاحك الخاص | Production, Preview, Development |

## 📝 الأوامر المتاحة

```bash
# تثبيت المكتبات
npm install

# تطوير محلي (مع إعادة التحميل المباشر)
npm run dev

# بناء للإنتاج
npm run build

# معاينة البناء محلياً
npm run preview
```

## 🎨 الميزات

### ✨ ميزة اختيار الشعار
- **4 شعارات جاهزة**: اختر من بين 4 شعارات موجودة مسبقاً في مجلد `public/logooo`
- **رفع شعار مخصص**: يمكنك رفع شعارك الخاص بصيغة PNG أو JPG
- **إزالة الشعار**: زر مخصص لإزالة الشعار تماماً من التصميم
- **معاينة فورية**: الشعار يظهر فوراً في التصميم بالحجم والمكان المناسبين

### 🎯 مكان الشعار في التصميم
- يظهر في الزاوية العلوية اليمنى من الشريحة
- حجم مناسب (24x24 بكسل)
- مع نص "Radar Al-Mustathmir" بجانبه

## 🛠️ التقنيات المستخدمة

| التقنية | الإصدار | الوصف |
|--------|--------|-------|
| React | 19.2.3 | مكتبة الواجهة |
| TypeScript | 5.8 | لغة التطوير |
| Vite | 6.4 | أداة البناء |
| Tailwind CSS | - | التنسيقات |

## 📁 هيكل المشروع

```
├── App.tsx              # المكون الرئيسي
├── components/          # المكونات
│   ├── Canvas.tsx      # منطقة العرض
│   ├── EditorSidebar.tsx # لوحة التحكم
│   └── TopBar.tsx      # الشريط العلوي
├── services/           # الخدمات
│   └── geminiService.ts # خدمة الذكاء الاصطناعي
├── public/
│   └── logooo/         # الشعارات الجاهزة
│       ├── logo-1.png
│       ├── logo-2.png
│       ├── logo-3.png
│       └── logo-4.png
├── styles.css          # التنسيقات الرئيسية
├── global.css          # التنسيقات العامة
├── constants.ts        # الثوابت
├── types.ts            # تعريفات TypeScript
└── vercel.json         # إعدادات Vercel
```

## 🔗 روابط مفيدة

- [توثيق Vercel](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

---

**تم التطوير بواسطة فريق رادار المستثمر** 🇸🇦
