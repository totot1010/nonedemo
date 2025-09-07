export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Traffic Overview</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span>Page Views</span>
            <span className="font-bold">45,678</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span>Unique Visitors</span>
            <span className="font-bold">12,345</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span>Bounce Rate</span>
            <span className="font-bold">32.5%</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span>Average Session Duration</span>
            <span className="font-bold">4m 32s</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Top Pages</h2>
        <ol className="space-y-2">
          <li className="flex justify-between p-2 hover:bg-gray-50 rounded">
            <span>1. /dashboard</span>
            <span className="text-gray-600">8,234 views</span>
          </li>
          <li className="flex justify-between p-2 hover:bg-gray-50 rounded">
            <span>2. /products</span>
            <span className="text-gray-600">6,123 views</span>
          </li>
          <li className="flex justify-between p-2 hover:bg-gray-50 rounded">
            <span>3. /about</span>
            <span className="text-gray-600">4,567 views</span>
          </li>
        </ol>
      </div>
    </div>
  );
}