import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - React Router Demo" },
    { name: "description", content: "About page showing basic routing" },
  ];
}

export default function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p className="text-lg">
        これは基本的な静的ルーティングの例です。
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">ルート定義</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>{`route("about", "routes/about.tsx")`}</code>
        </pre>
      </div>
      <p>
        このページは <code>/about</code> でアクセスでき、静的なコンテンツを表示します。
      </p>
    </div>
  );
}