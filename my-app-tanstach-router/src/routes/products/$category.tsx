import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$category')({
  component: ProductsCategoryComponent,
})

function ProductsCategoryComponent() {
  const { category } = Route.useParams()
  
  const productsByCategory: Record<string, Array<{ id: number; name: string; price: string }>> = {
    electronics: [
      { id: 1, name: 'ノートパソコン', price: '¥120,000' },
      { id: 2, name: 'スマートフォン', price: '¥80,000' },
      { id: 3, name: 'タブレット', price: '¥60,000' },
    ],
    books: [
      { id: 1, name: 'プログラミング入門書', price: '¥3,000' },
      { id: 2, name: 'デザインパターン', price: '¥4,500' },
      { id: 3, name: 'アルゴリズム図鑑', price: '¥2,800' },
    ],
    clothing: [
      { id: 1, name: 'Tシャツ', price: '¥2,500' },
      { id: 2, name: 'ジーンズ', price: '¥8,000' },
      { id: 3, name: 'ジャケット', price: '¥15,000' },
    ],
  }

  const products = productsByCategory[category] || []
  const categoryName = {
    electronics: '電化製品',
    books: '書籍',
    clothing: '衣類',
  }[category] || category

  return (
    <div>
      <h3>{categoryName}</h3>
      <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} style={{ padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
              <h4>{product.name}</h4>
              <p>価格: {product.price}</p>
            </div>
          ))
        ) : (
          <p>このカテゴリーの商品はありません。</p>
        )}
      </div>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#fff5e8', borderRadius: '5px' }}>
        <strong>動的カテゴリールート:</strong> カテゴリーパラメータ = "{category}"
      </div>
    </div>
  )
}