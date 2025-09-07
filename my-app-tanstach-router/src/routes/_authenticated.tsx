import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: () => {
    // 実際のアプリケーションではここで認証チェックを行う
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
    
    if (!isAuthenticated) {
      // 未認証の場合はログインページにリダイレクト
      throw redirect({
        to: '/login',
        search: {
          redirect: location.pathname,
        },
      })
    }
  },
  component: AuthenticatedLayout,
})

function AuthenticatedLayout() {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ padding: '10px', backgroundColor: '#d4edda', borderRadius: '5px', marginBottom: '20px' }}>
        <strong>🔒 認証済みエリア</strong>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>
          このセクションは認証が必要です。パスレスレイアウトルートで保護されています。
        </p>
      </div>
      <Outlet />
    </div>
  )
}