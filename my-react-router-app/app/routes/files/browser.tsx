import { useParams, Link } from "react-router";

export default function FileBrowser() {
  const params = useParams();
  const filePath = params["*"] || "";
  const pathSegments = filePath ? filePath.split("/") : [];
  
  const fileStructure = {
    documents: {
      type: "folder",
      items: {
        "report.pdf": { type: "file", size: "2.5 MB" },
        "presentation.pptx": { type: "file", size: "5.1 MB" },
        contracts: {
          type: "folder",
          items: {
            "contract-2024.docx": { type: "file", size: "245 KB" },
            "nda.pdf": { type: "file", size: "180 KB" },
          },
        },
      },
    },
    images: {
      type: "folder",
      items: {
        "logo.png": { type: "file", size: "45 KB" },
        "banner.jpg": { type: "file", size: "1.2 MB" },
        screenshots: {
          type: "folder",
          items: {
            "screen1.png": { type: "file", size: "890 KB" },
            "screen2.png": { type: "file", size: "1.1 MB" },
          },
        },
      },
    },
    downloads: {
      type: "folder",
      items: {
        "installer.exe": { type: "file", size: "45 MB" },
        "readme.txt": { type: "file", size: "2 KB" },
      },
    },
  };
  
  const getCurrentFolder = () => {
    let current: any = { type: "folder", items: fileStructure };
    for (const segment of pathSegments) {
      if (segment && current.items && current.items[segment]) {
        current = current.items[segment];
      }
    }
    return current;
  };
  
  const currentFolder = getCurrentFolder();
  const isFile = currentFolder.type === "file";
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">File Browser</h1>
      
      <div className="bg-gray-100 p-3 rounded-lg">
        <div className="flex items-center space-x-2 text-sm">
          <Link to="/files" className="text-blue-600 hover:underline">
            Root
          </Link>
          {pathSegments.map((segment, index) => (
            <span key={index} className="flex items-center">
              <span className="mx-1">/</span>
              <Link
                to={`/files/${pathSegments.slice(0, index + 1).join("/")}`}
                className="text-blue-600 hover:underline"
              >
                {segment}
              </Link>
            </span>
          ))}
        </div>
      </div>
      
      {isFile ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">📄</div>
            <div>
              <h2 className="text-xl font-semibold">
                {pathSegments[pathSegments.length - 1]}
              </h2>
              <p className="text-gray-600">Size: {currentFolder.size}</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Download
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Size
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentFolder.items && Object.entries(currentFolder.items).map(([name, item]: [string, any]) => (
                <tr key={name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to={`/files/${filePath ? `${filePath}/` : ""}${name}`}
                      className="flex items-center space-x-2 text-blue-600 hover:underline"
                    >
                      <span>{item.type === "folder" ? "📁" : "📄"}</span>
                      <span>{name}</span>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {item.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {item.size || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="bg-orange-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Splat（ワイルドカード）ルート</h3>
        <p className="mb-2">
          <code>*</code> は任意のパスセグメントにマッチします:
        </p>
        <pre className="bg-gray-800 text-white p-2 rounded text-sm">
          <code>{`route("files/*", "routes/files/browser.tsx")

// ワイルドカードパラメータの取得
const params = useParams();
const filePath = params["*"];
// 現在のパス: ${filePath || "(root)"}

// マッチする例:
// /files → ""
// /files/documents → "documents"
// /files/documents/report.pdf → "documents/report.pdf"`}</code>
        </pre>
      </div>
    </div>
  );
}