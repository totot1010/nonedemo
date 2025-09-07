import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/_authenticated/settings')({
  component: SettingsComponent,
})

function SettingsComponent() {
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <h2>設定</h2>
      <p>アカウント設定を管理します。</p>

      <div style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>ユーザー名:</label>
          <input 
            type="text" 
            defaultValue="tanstack_user" 
            style={{ padding: '8px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>メールアドレス:</label>
          <input 
            type="email" 
            defaultValue="user@example.com" 
            style={{ padding: '8px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>通知設定:</label>
          <label style={{ marginRight: '15px' }}>
            <input type="checkbox" defaultChecked /> メール通知
          </label>
          <label>
            <input type="checkbox" defaultChecked /> プッシュ通知
          </label>
        </div>

        <button 
          onClick={handleSave}
          style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          保存
        </button>
        
        {saved && (
          <span style={{ marginLeft: '10px', color: '#28a745' }}>✓ 保存しました</span>
        )}
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e8f8ff', borderRadius: '5px' }}>
        <p><strong>注意:</strong> このページも認証が必要です。</p>
        <p>パス: /settings（_authenticatedレイアウト経由）</p>
      </div>
    </div>
  )
}