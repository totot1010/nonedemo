import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  component: BlogIndexComponent,
});

function BlogIndexComponent() {
  return (
    <div>
      <h3>ブログホーム</h3>
      <p>記事を選択してください。</p>
      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#e8f8ff",
          borderRadius: "5px",
        }}
      >
        <strong>インデックスルートの特徴:</strong>
        <ul>
          <li>親ルート(/blog)が完全一致した時に表示</li>
          <li>子ルートが選択されていない場合のデフォルトコンテンツ</li>
        </ul>
      </div>
    </div>
  );
}
