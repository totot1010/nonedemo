import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>About Page</h2>
      <p>これは静的なルートの例です。</p>
      <p>パス: /about</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h3>ルートの特徴:</h3>
        <ul>
          <li>固定パスによる単純なルーティング</li>
          <li>createFileRoute()を使用してファイルベースのルートを作成</li>
          <li>コンポーネントを直接定義</li>
        </ul>
      </div>
    </div>
  )
}