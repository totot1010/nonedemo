export default function Reports() {
  const reports = [
    { id: 1, name: "Monthly Sales Report", date: "2024-01-01", status: "completed" },
    { id: 2, name: "User Engagement Analysis", date: "2024-01-15", status: "completed" },
    { id: 3, name: "Q1 Performance Review", date: "2024-02-01", status: "pending" },
    { id: 4, name: "Marketing Campaign Results", date: "2024-02-10", status: "in-progress" },
  ];
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Reports</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Report Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {report.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {report.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      report.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : report.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-900">
                    View
                  </button>
                  <button className="ml-4 text-gray-600 hover:text-gray-900">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          このページは <code>/dashboard/reports</code> でアクセスできます。
          親レイアウト（サイドバー）を共有しています。
        </p>
      </div>
    </div>
  );
}