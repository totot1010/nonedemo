import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-8xl font-bold text-gray-300">404</div>
        
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          お探しのページは見つかりませんでした。URLを確認するか、ホームページに戻ってください。
        </p>
        
        <div className="space-x-4">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            ホームに戻る
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300"
          >
            前のページに戻る
          </button>
        </div>
        
        <div className="mt-12 bg-red-50 p-4 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-2">404キャッチオールルート</h3>
          <p className="mb-2">
            このページは定義されていないすべてのルートをキャッチします:
          </p>
          <pre className="bg-gray-800 text-white p-2 rounded text-sm text-left">
            <code>{`route("*", "routes/not-found.tsx")

// このルートは最後に定義されているため、
// 他のすべてのルートにマッチしなかった場合に表示されます。

// 例えば以下のようなURLでこのページが表示されます:
// /undefined-page
// /random/path/that/doesnt/exist
// /typo-in-url`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}