import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router Demo - Home" },
    { name: "description", content: "React Router routing patterns demo" },
  ];
}

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">React Router Routing Patterns Demo</h1>
      <p className="text-lg text-gray-600">
        このアプリケーションは、React Routerの様々なルーティングパターンを実演します。
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">基本的なルート</h2>
          <p>Home, About, Contactなどのシンプルな静的ルート</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">ネストされたルート</h2>
          <p>Dashboardのような共通レイアウトを持つ階層的なルート構造</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">動的セグメント</h2>
          <p>URLパラメータを使用したユーザープロフィールや商品詳細ページ</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">オプショナルセグメント</h2>
          <p>多言語対応などの省略可能なURLセグメント</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Splatルート</h2>
          <p>ファイルブラウザのような任意のパスマッチング</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">404ページ</h2>
          <p>定義されていないルートのキャッチオール処理</p>
        </div>
      </div>
    </div>
  );
}
