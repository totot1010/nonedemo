import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>TanStack Routerサンプル集へようこそ！</h1>
      <p>このアプリケーションでは、TanStack Routerの様々なルーティングパターンを実装しています。</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>実装されているルーティングパターン</h2>
        
        <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
          <div style={{ padding: '15px', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
            <h3>1. 静的ルート</h3>
            <p>固定パスによる基本的なルーティング</p>
            <ul>
              <li><Link to="/about">About</Link> - /about</li>
              <li><Link to="/contact">Contact</Link> - /contact</li>
            </ul>
          </div>

          <div style={{ padding: '15px', backgroundColor: '#fff8f0', borderRadius: '8px' }}>
            <h3>2. 動的ルートセグメント</h3>
            <p>URLパラメータを使用した動的ルーティング</p>
            <ul>
              <li><Link to="/blog/$postId" params={{ postId: "123" }}>Blog Post #123</Link> - /blog/$postId</li>
              <li><Link to="/users/$userId" params={{ userId: "alice" }}>User: Alice</Link> - /users/$userId</li>
            </ul>
          </div>

          <div style={{ padding: '15px', backgroundColor: '#f0fff0', borderRadius: '8px' }}>
            <h3>3. ネストされたルート</h3>
            <p>親子関係を持つルートとレイアウト</p>
            <ul>
              <li><Link to="/blog">Blog</Link> - 親レイアウト</li>
              <li><Link to="/products">Products</Link> - サイドバー付きレイアウト</li>
              <li><Link to="/products/$category" params={{ category: "electronics" }}>Electronics Category</Link></li>
            </ul>
          </div>

          <div style={{ padding: '15px', backgroundColor: '#fff0ff', borderRadius: '8px' }}>
            <h3>4. パスレスレイアウトルート</h3>
            <p>URLに影響を与えないレイアウト（認証など）</p>
            <ul>
              <li><Link to="/dashboard">Dashboard</Link> - 認証が必要</li>
              <li><Link to="/settings">Settings</Link> - 認証が必要</li>
              <li><Link to="/login">Login</Link> - ログインページ</li>
            </ul>
          </div>

          <div style={{ padding: '15px', backgroundColor: '#f5f0ff', borderRadius: '8px' }}>
            <h3>5. 検索パラメータ</h3>
            <p>クエリパラメータの管理</p>
            <ul>
              <li><Link to="/search">Search</Link> - 検索フォーム</li>
              <li><Link to="/search" search={{ q: 'tanstack', category: 'products' }}>Search with params</Link></li>
            </ul>
          </div>

          <div style={{ padding: '15px', backgroundColor: '#ffffe0', borderRadius: '8px' }}>
            <h3>6. キャッチオール/スプラットルート</h3>
            <p>残りのパスをすべてキャプチャ</p>
            <ul>
              <li><Link to="/api/$" params={{ _splat: "v1/users" }}>API v1 users</Link> - /api/$</li>
              <li><Link to="/api/$" params={{ _splat: "v2/products/123" }}>API v2 product</Link> - /api/$</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#e8f4ff', borderRadius: '8px' }}>
        <h3>ナビゲーションのヒント</h3>
        <p>上部のナビゲーションバーから各ルートに直接アクセスできます。</p>
        <p>DevToolsを開いて、ルートの階層構造やパラメータを確認できます。</p>
      </div>
    </div>
  )
}