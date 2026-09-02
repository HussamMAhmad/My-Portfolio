export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 space-y-8 animate-pulse">
      
      {/* 1. شعار هويتك البرمجية (Dev Mascot / Code Spinner) */}
      <div className="relative flex items-center justify-center">
        {/* حلقة مضيئة تدور ببطء */}
        <div className="w-20 h-20 rounded-full border-4 border-slate-800 border-t-indigo-500 border-r-cyan-400 animate-spin" />
        
        {/* أيقونة شفرة برمجية في المنتصف */}
        <div className="absolute font-mono text-lg font-bold text-cyan-400">
          &lt;/&gt;
        </div>
      </div>

      {/* 2. الهيكل العظمي لبطاقة المعاينة (Hero Skeleton Card) */}
      <div className="w-full max-w-2xl bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-4 backdrop-blur-sm shadow-xl">
        {/* خط الهيدر */}
        <div className="h-7 bg-slate-800 rounded-md w-1/3" />
        
        {/* أسطر النصوص المتموجة */}
        <div className="space-y-2">
          <div className="h-4 bg-slate-800/70 rounded-md w-full" />
          <div className="h-4 bg-slate-800/70 rounded-md w-5/6" />
          <div className="h-4 bg-slate-800/70 rounded-md w-2/3" />
        </div>

        {/* شارات التقنيات (Tech Stack Badges Skeleton) */}
        <div className="pt-4 flex flex-wrap gap-2">
          <div className="h-8 w-20 bg-slate-800 rounded-full" />
          <div className="h-8 w-24 bg-slate-800 rounded-full" />
          <div className="h-8 w-16 bg-slate-800 rounded-full" />
        </div>
      </div>

      {/* 3. نص حالة التحميل بأناقة */}
      <p className="font-mono text-sm text-slate-400 tracking-widest uppercase flex items-center gap-2">
        <span>Initializing Experience</span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
      </p>

    </div>
  );
}