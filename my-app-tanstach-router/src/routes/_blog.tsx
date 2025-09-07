import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_blog")({
  component: BlogLayout,
});

function BlogLayout() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Blog</h2>
      <p>ブログレイアウトページです。ネストされたルートの親となります。</p>
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
        }}
      >
        <h3>最近の投稿:</h3>
        <ul>
          <li>
            <Link to="/blog/$postId" params={{ postId: "1" }}>
              記事 #1: TanStack Routerの基本
            </Link>
          </li>
          <li>
            <Link to="/blog/$postId" params={{ postId: "2" }}>
              記事 #2: 動的ルーティングの実装
            </Link>
          </li>
          <li>
            <Link to="/blog/$postId" params={{ postId: "3" }}>
              記事 #3: ネストされたルートの活用
            </Link>
          </li>
        </ul>
      </div>
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "2px dashed #ccc",
          borderRadius: "5px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
