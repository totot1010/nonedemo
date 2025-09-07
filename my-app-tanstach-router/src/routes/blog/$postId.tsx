import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$postId')({
  component: BlogPostComponent,
})

function BlogPostComponent() {
  const { postId } = Route.useParams()
  
  return (
    <div>
      <h3>ブログ記事 #{postId}</h3>
      <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#fff8e8', borderRadius: '5px' }}>
        <h4>動的ルートセグメントの特徴:</h4>
        <ul>
          <li>URLパラメータを自動的にキャプチャ</li>
          <li>$postIdのような$プレフィックスで定義</li>
          <li>Route.useParams()でパラメータにアクセス</li>
          <li>現在のpostId: <strong>{postId}</strong></li>
        </ul>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h4>記事の内容（サンプル）</h4>
        <p>これは記事ID {postId} の内容です。実際のアプリケーションでは、このIDを使用してデータベースやAPIから記事データを取得します。</p>
      </div>
    </div>
  )
}