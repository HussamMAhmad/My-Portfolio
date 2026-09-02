export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-primary-bg text-text flex flex-col items-center justify-center p-6 space-y-8 animate-pulse">
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 rounded-full border-4 border-main/10 border-t-main border-r-main/40 animate-spin" />
        <div className="absolute font-mono text-lg font-bold text-main">
          &lt;/&gt;
        </div>
      </div>

      <div className="w-full max-w-2xl bg-secondary-bg/60 border border-main/20 rounded-3xl p-8 space-y-5 backdrop-blur-md shadow-2xl">
        <div className="h-7 bg-main/20 rounded-xl w-1/3" />

        <div className="space-y-3">
          <div className="h-4 bg-main/10 rounded-lg w-full" />
          <div className="h-4 bg-main/10 rounded-lg w-5/6" />
          <div className="h-4 bg-main/10 rounded-lg w-2/3" />
        </div>

        <div className="pt-4 flex flex-wrap gap-2">
          <div className="h-8 w-20 bg-main/15 rounded-xl" />
          <div className="h-8 w-24 bg-main/15 rounded-xl" />
          <div className="h-8 w-16 bg-main/15 rounded-xl" />
        </div>
      </div>

      <p className="font-mono text-xs sm:text-sm text-text/60 tracking-widest uppercase flex items-center gap-2">
        <span>Initializing Experience</span>
        <span className="inline-block w-2 h-2 rounded-full bg-main animate-ping" />
      </p>
    </div>
  );
}
