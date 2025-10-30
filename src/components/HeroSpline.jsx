import Spline from "@splinetool/react-spline";

function HeroSpline() {
  return (
    <section className="relative w-full min-h-[460px] md:min-h-[520px] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent pointer-events-none" />
      <div className="relative z-10 p-6 md:p-10 flex flex-col gap-3 md:gap-4">
        <span className="inline-flex w-fit items-center gap-2 text-xs md:text-sm px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          Real-time admin suite
        </span>
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">Epacific Technologies Management Platform</h2>
        <p className="max-w-2xl text-slate-600 text-sm md:text-base">
          Authenticate with Supabase, manage attendance, reports, and payments. Email notifications
          keep everyone aligned. Built with a modern, responsive UI.
        </p>
      </div>
    </section>
  );
}

export default HeroSpline;
