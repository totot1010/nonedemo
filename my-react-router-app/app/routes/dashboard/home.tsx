export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-600">Total Users</h3>
          <p className="text-3xl font-bold mt-2">1,234</p>
          <p className="text-sm text-green-600 mt-2">+12% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-600">Revenue</h3>
          <p className="text-3xl font-bold mt-2">¥456,789</p>
          <p className="text-sm text-green-600 mt-2">+8% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-600">Active Sessions</h3>
          <p className="text-3xl font-bold mt-2">89</p>
          <p className="text-sm text-gray-600 mt-2">Currently online</p>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">ネストされたルートの仕組み</h2>
        <p className="mb-2">
          このページは <code>/dashboard</code> のインデックスルートです。
        </p>
        <pre className="bg-gray-800 text-white p-2 rounded text-sm">
          <code>{`layout("routes/dashboard/layout.tsx", [
  index("routes/dashboard/home.tsx"),
  // 他の子ルート...
])`}</code>
        </pre>
      </div>
    </div>
  );
}