import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HeroSpline from "./components/HeroSpline";
import DashboardPreview from "./components/DashboardPreview";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900">
      <Header />
      <Sidebar />

      <main className="pt-16 lg:pl-64">
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
          <HeroSpline />

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Unified Dashboard</h2>
              <p className="text-sm text-slate-500">Role-based views: Admin • Manager • User</p>
            </div>
            <DashboardPreview />
          </section>

          <footer className="py-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Epacific Technologies. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
