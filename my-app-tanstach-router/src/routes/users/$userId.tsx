import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$userId')({
  component: UserProfileComponent,
  loader: ({ params }) => {
    // 実際のアプリケーションではここでユーザーデータをフェッチ
    return {
      id: params.userId,
      name: params.userId.charAt(0).toUpperCase() + params.userId.slice(1),
      email: `${params.userId}@example.com`,
      joinDate: '2024-01-01',
    }
  },
})

function UserProfileComponent() {
  const { userId } = Route.useParams()
  const userData = Route.useLoaderData()
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>ユーザープロフィール</h2>
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h3>{userData.name}のプロフィール</h3>
        <div style={{ marginTop: '15px' }}>
          <p><strong>ユーザーID:</strong> {userData.id}</p>
          <p><strong>名前:</strong> {userData.name}</p>
          <p><strong>メール:</strong> {userData.email}</p>
          <p><strong>登録日:</strong> {userData.joinDate}</p>
        </div>
      </div>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e8f8e8', borderRadius: '5px' }}>
        <h4>ローダーの特徴:</h4>
        <ul>
          <li>ルートがマッチした時にデータをフェッチ</li>
          <li>パラメータにアクセスしてデータを取得</li>
          <li>useLoaderData()でデータにアクセス</li>
          <li>URLパラメータ: userId = <strong>{userId}</strong></li>
        </ul>
      </div>
    </div>
  )
}