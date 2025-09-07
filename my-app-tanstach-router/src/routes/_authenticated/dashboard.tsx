import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: DashboardComponent,
})

function DashboardComponent() {
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    window.location.href = '/'
  }

  return (
    <div>
      <h2>ダッシュボード</h2>
      <p>ようこそ！認証済みユーザー専用のダッシュボードです。</p>
      
      <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3>統計</h3>
          <p>訪問数: 1,234</p>
          <p>売上: ¥567,890</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3>最近の活動</h3>
          <ul>
            <li>新規注文: 5件</li>
            <li>メッセージ: 3件</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/settings" style={{ marginRight: '15px', color: '#007bff' }}>
          設定へ
        </Link>
        <button 
          onClick={handleLogout} 
          style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          ログアウト
        </button>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
        <h4>パスレスレイアウトルートの特徴:</h4>
        <ul>
          <li>URLパスに影響を与えない（_authenticatedはURLに現れない）</li>
          <li>認証やコンテキストの提供などの横断的関心事を処理</li>
          <li>beforeLoadでルートアクセス前の処理を実行</li>
          <li>実際のパス: /dashboard（/_authenticated/dashboardではない）</li>
        </ul>
      </div>
    </div>
  )
}