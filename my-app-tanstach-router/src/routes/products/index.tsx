import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/')({
  component: ProductsIndexComponent,
})

function ProductsIndexComponent() {
  const products = [
    { id: 1, name: 'ノートパソコン', category: 'electronics', price: '¥120,000' },
    { id: 2, name: 'プログラミング入門書', category: 'books', price: '¥3,000' },
    { id: 3, name: 'Tシャツ', category: 'clothing', price: '¥2,500' },
    { id: 4, name: 'スマートフォン', category: 'electronics', price: '¥80,000' },
  ]

  return (
    <div>
      <h3>すべての商品</h3>
      <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
            <h4>{product.name}</h4>
            <p>カテゴリー: {product.category}</p>
            <p>価格: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}