import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { z } from 'zod'

const searchSchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
  sort: z.enum(['relevance', 'date', 'popularity']).optional(),
})

export const Route = createFileRoute('/search')({
  validateSearch: searchSchema,
  component: SearchComponent,
})

function SearchComponent() {
  const navigate = useNavigate({ from: '/search' })
  const { q, category, sort } = Route.useSearch()
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    navigate({
      search: {
        q: formData.get('query') as string,
        category: formData.get('category') as string,
        sort: formData.get('sort') as any,
      },
    })
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>検索ページ</h2>
      <form onSubmit={handleSearch} style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <input
            type="text"
            name="query"
            placeholder="検索キーワード"
            defaultValue={q}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <select
            name="category"
            defaultValue={category}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">すべてのカテゴリー</option>
            <option value="products">商品</option>
            <option value="blog">ブログ</option>
            <option value="users">ユーザー</option>
          </select>
          <select
            name="sort"
            defaultValue={sort}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="relevance">関連度順</option>
            <option value="date">日付順</option>
            <option value="popularity">人気順</option>
          </select>
          <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            検索
          </button>
        </div>
      </form>
      
      {q && (
        <div style={{ marginTop: '30px' }}>
          <h3>検索結果</h3>
          <p>キーワード: <strong>{q}</strong></p>
          {category && <p>カテゴリー: <strong>{category}</strong></p>}
          {sort && <p>並び順: <strong>{sort}</strong></p>}
        </div>
      )}
      
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e8f4ff', borderRadius: '5px' }}>
        <h4>検索パラメータの特徴:</h4>
        <ul>
          <li>URLクエリパラメータを自動的に管理</li>
          <li>zodスキーマによる検証</li>
          <li>useSearch()でパラメータにアクセス</li>
          <li>navigateでパラメータを更新</li>
          <li>現在のURL: {window.location.pathname + window.location.search}</li>
        </ul>
      </div>
    </div>
  )
}