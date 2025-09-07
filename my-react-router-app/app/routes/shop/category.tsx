import { useParams, Link } from "react-router";

export default function ShopCategory() {
  const { lang, category } = useParams();
  
  const translations = {
    ja: {
      back: "ショップに戻る",
      products: "商品",
      inStock: "在庫あり",
      outOfStock: "在庫なし",
      addToCart: "カートに追加",
      price: "価格",
    },
    en: {
      back: "Back to Shop",
      products: "Products",
      inStock: "In Stock",
      outOfStock: "Out of Stock",
      addToCart: "Add to Cart",
      price: "Price",
    },
  };
  
  const t = lang === "ja" ? translations.ja : translations.en;
  
  const categoryNames = {
    electronics: lang === "ja" ? "電子機器" : "Electronics",
    clothing: lang === "ja" ? "衣類" : "Clothing",
    books: lang === "ja" ? "書籍" : "Books",
    food: lang === "ja" ? "食品" : "Food",
  };
  
  const products = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `${categoryNames[category as keyof typeof categoryNames] || category} ${i + 1}`,
    price: Math.floor(Math.random() * 10000) + 1000,
    inStock: Math.random() > 0.3,
  }));
  
  return (
    <div className="space-y-6">
      <div>
        <Link
          to={lang ? `/${lang}/shop` : "/shop"}
          className="text-blue-600 hover:underline"
        >
          ← {t.back}
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold">
        {categoryNames[category as keyof typeof categoryNames] || category}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-6">
            <div className="bg-gray-200 h-48 rounded mb-4"></div>
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <p className="text-2xl font-bold mb-2">
              ¥{product.price.toLocaleString()}
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className={`text-sm ${
                product.inStock ? "text-green-600" : "text-red-600"
              }`}>
                {product.inStock ? t.inStock : t.outOfStock}
              </span>
            </div>
            <button
              className={`w-full py-2 rounded ${
                product.inStock
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!product.inStock}
            >
              {t.addToCart}
            </button>
          </div>
        ))}
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">複数のオプショナルセグメント</h3>
        <p className="mb-2">
          このページは言語とカテゴリーの両方を使用:
        </p>
        <pre className="bg-gray-800 text-white p-2 rounded text-sm">
          <code>{`route(":lang?/shop/:category", "routes/shop/category.tsx")

// パラメータ
const { lang, category } = useParams();
// lang: ${lang || "undefined"}
// category: ${category}

// 有効なURL例:
// /shop/electronics (英語)
// /ja/shop/electronics (日本語)`}</code>
        </pre>
      </div>
    </div>
  );
}