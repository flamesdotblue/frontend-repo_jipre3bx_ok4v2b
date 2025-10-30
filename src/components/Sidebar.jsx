import { Home, CalendarCheck, FileText, CreditCard, Users } from "lucide-react";

const nav = [
  { icon: Home, label: "Dashboard" },
  { icon: CalendarCheck, label: "Attendance" },
  { icon: FileText, label: "Reports" },
  { icon: CreditCard, label: "Payments" },
  { icon: Users, label: "Users" },
];

function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white border-r border-slate-200 z-40 select-none">
      <div className="p-4">
        <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-4 shadow-sm">
          <p className="text-sm text-slate-600">Signed in as</p>
          <p className="font-medium text-slate-900">you@epacific.tech</p>
          <span className="inline-flex mt-2 text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">Admin</span>
        </div>
      </div>
      <nav className="px-2 space-y-1">
        {nav.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto p-4 text-xs text-slate-500">
        <p>All activities are logged for security.</p>
      </div>
    </aside>
  );
}

export default Sidebar;
