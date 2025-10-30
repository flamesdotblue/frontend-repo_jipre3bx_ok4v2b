import { Bell, Settings, User } from "lucide-react";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-md" />
          <div>
            <h1 className="text-slate-900 font-semibold leading-tight">Epacific Technologies</h1>
            <p className="text-xs text-slate-500 -mt-0.5">Operations & Admin Portal</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </button>
          <div className="ml-2 h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 grid place-items-center text-white">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
