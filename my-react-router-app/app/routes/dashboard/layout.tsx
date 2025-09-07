import { Outlet, Link, useLocation } from "react-router";

export default function DashboardLayout() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <nav className="space-y-2">
            <Link
              to="/dashboard"
              className={`block px-4 py-2 rounded-md transition-colors ${
                isActive("/dashboard")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              Overview
            </Link>
            <Link
              to="/dashboard/analytics"
              className={`block px-4 py-2 rounded-md transition-colors ${
                isActive("/dashboard/analytics")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              Analytics
            </Link>
            <Link
              to="/dashboard/reports"
              className={`block px-4 py-2 rounded-md transition-colors ${
                isActive("/dashboard/reports")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              Reports
            </Link>
            <Link
              to="/dashboard/settings"
              className={`block px-4 py-2 rounded-md transition-colors ${
                isActive("/dashboard/settings")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              Settings
            </Link>
          </nav>
        </div>
        
        <div className="mt-8 p-4 border-t">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <h3 className="font-semibold text-sm mb-1">レイアウトルート</h3>
            <p className="text-xs">
              このサイドバーは全ての子ルートで共有されます
            </p>
          </div>
        </div>
      </aside>
      
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}