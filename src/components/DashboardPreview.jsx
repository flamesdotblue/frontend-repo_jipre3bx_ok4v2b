import { Rocket, CheckCircle2, FileWarning, Mail } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Mon", attendance: 24, reports: 4 },
  { name: "Tue", attendance: 26, reports: 5 },
  { name: "Wed", attendance: 22, reports: 6 },
  { name: "Thu", attendance: 28, reports: 3 },
  { name: "Fri", attendance: 30, reports: 7 },
  { name: "Sat", attendance: 18, reports: 2 },
  { name: "Sun", attendance: 12, reports: 1 },
];

function StatCard({ icon: Icon, label, value, trend, color }) {
  return (
    <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-xl grid place-items-center ${color}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-xs text-slate-500">{label}</p>
          <p className="text-xl font-semibold text-slate-900">{value}</p>
          {trend && <p className="text-xs text-emerald-600">{trend}</p>}
        </div>
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={Rocket} label="Active Users" value="248" trend="+8% this week" color="bg-gradient-to-br from-indigo-500 to-sky-500" />
          <StatCard icon={CheckCircle2} label="Approved" value="1,236" color="bg-gradient-to-br from-emerald-500 to-teal-500" />
          <StatCard icon={FileWarning} label="Pending" value="82" color="bg-gradient-to-br from-amber-500 to-orange-500" />
          <StatCard icon={Mail} label="Emails Sent" value="3,412" color="bg-gradient-to-br from-fuchsia-500 to-pink-500" />
        </div>
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-slate-900">Weekly Activity</h3>
            <p className="text-xs text-slate-500">Attendance vs Reports</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="#14B8A6" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" />
                <XAxis dataKey="name" stroke="#64748B" />
                <YAxis stroke="#64748B" />
                <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #E2E8F0' }} />
                <Area type="monotone" dataKey="attendance" stroke="#6366F1" fill="url(#colorAttendance)" strokeWidth={2} />
                <Area type="monotone" dataKey="reports" stroke="#10B981" fill="url(#colorReports)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4">
          <h3 className="font-semibold text-slate-900">Quick Actions</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50">
              Request attendance approval <button className="text-indigo-600 font-medium">Review</button>
            </li>
            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50">
              New reports uploaded <button className="text-indigo-600 font-medium">Open</button>
            </li>
            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50">
              Payments pending <button className="text-indigo-600 font-medium">View</button>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 p-4 text-white shadow-md">
          <h3 className="font-semibold">Automation</h3>
          <p className="text-sm text-white/90 mt-1">Hostinger emails are used for approvals, rejections, and reminders. Templates are reusable with dynamic placeholders.</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPreview;
