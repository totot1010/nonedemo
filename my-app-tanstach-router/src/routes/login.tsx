import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { z } from 'zod'

const loginSearchSchema = z.object({
  redirect: z.string().optional(),
})

export const Route = createFileRoute('/login')({
  validateSearch: loginSearchSchema,
  component: LoginComponent,
})

function LoginComponent() {
  const navigate = useNavigate()
  const { redirect } = Route.useSearch()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // 実際のアプリケーションではここで認証処理を行う
    localStorage.setItem('isAuthenticated', 'true')
    
    // リダイレクト先があればそこへ、なければダッシュボードへ
    navigate({ to: redirect || '/dashboard' })
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>ログイン</h2>
      {redirect && (
        <div style={{ padding: '10px', backgroundColor: '#fff3cd', borderRadius: '5px', marginBottom: '20px' }}>
          アクセスするにはログインが必要です
        </div>
      )}
      
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>ユーザー名:</label>
          <input 
            type="text" 
            defaultValue="demo" 
            style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>パスワード:</label>
          <input 
            type="password" 
            defaultValue="password" 
            style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        
        <button 
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}
        >
          ログイン
        </button>
      </form>
      
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#d1ecf1', borderRadius: '5px', fontSize: '14px' }}>
        <strong>デモ用:</strong> どのユーザー名・パスワードでもログインできます
      </div>
    </div>
  )
}