import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: ProductsLayout,
})

function ProductsLayout() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>商品カタログ</h2>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <aside style={{ width: '200px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
          <h3>カテゴリー</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/products" activeOptions={{ exact: true }}>すべての商品</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/products/$category" params={{ category: "electronics" }}>電化製品</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/products/$category" params={{ category: "books" }}>書籍</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/products/$category" params={{ category: "clothing" }}>衣類</Link>
            </li>
          </ul>
        </aside>
        <main style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '5px' }}>
          <Outlet />
        </main>
      </div>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f9f0ff', borderRadius: '5px' }}>
        <h4>ネストされたレイアウトの特徴:</h4>
        <ul>
          <li>共通のレイアウト（サイドバーなど）を提供</li>
          <li>子ルートはOutletに表示される</li>
          <li>親と子の両方のコンポーネントが同時に表示</li>
        </ul>
      </div>
    </div>
  )
}