import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/$')({
  component: ApiCatchAllComponent,
})

function ApiCatchAllComponent() {
  const params = Route.useParams()
  const splat = params['_splat'] // $ルートのパラメータは_splatとして取得
  
  // スプラットパスを分解
  const pathSegments = splat?.split('/') || []
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>API Catch-All Route</h2>
      <p>これはキャッチオール（スプラット）ルートの例です。</p>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px', fontFamily: 'monospace' }}>
        <h3>リクエストパス:</h3>
        <p>/api/{splat}</p>
      </div>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff5f5', borderRadius: '5px' }}>
        <h3>パスセグメント:</h3>
        <ul>
          {pathSegments.map((segment, index) => (
            <li key={index}>{segment}</li>
          ))}
        </ul>
      </div>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e8f8e8', borderRadius: '5px' }}>
        <h4>APIレスポンス（サンプル）:</h4>
        <pre style={{ backgroundColor: '#2d2d2d', color: '#f8f8f2', padding: '10px', borderRadius: '4px', overflow: 'auto' }}>
{JSON.stringify({
  endpoint: `/api/${splat}`,
  method: 'GET',
  status: 200,
  data: {
    message: 'This is a mock API response',
    path: pathSegments,
    timestamp: new Date().toISOString(),
  }
}, null, 2)}
        </pre>
      </div>
      
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#ffeaa7', borderRadius: '5px' }}>
        <h4>キャッチオール/スプラットルートの特徴:</h4>
        <ul>
          <li>$記号でスプラットルートを定義</li>
          <li>残りのすべてのパスセグメントをキャプチャ</li>
          <li>404ページやAPIプロキシとして使用可能</li>
          <li>パラメータは_splatとしてアクセス</li>
          <li>例: /api/v1/users/123 → splat = "v1/users/123"</li>
        </ul>
      </div>
    </div>
  )
}