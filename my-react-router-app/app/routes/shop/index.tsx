import { useParams, Link } from "react-router";

export default function Shop() {
  const { lang } = useParams();
  
  const translations = {
    ja: {
      title: "ショップ",
      description: "商品をご覧ください",
      categories: "カテゴリー",
      electronics: "電子機器",
      clothing: "衣類",
      books: "書籍",
      food: "食品",
      featured: "おすすめ商品",
      viewCategory: "カテゴリーを見る",
    },
    en: {
      title: "Shop",
      description: "Browse our products",
      categories: "Categories",
      electronics: "Electronics",
      clothing: "Clothing",
      books: "Books",
      food: "Food",
      featured: "Featured Products",
      viewCategory: "View Category",
    },
  };
  
  const t = lang === "ja" ? translations.ja : translations.en;
  const currentLang = lang || "en";
  
  const categories = [
    { id: "electronics", name: t.electronics, count: 156 },
    { id: "clothing", name: t.clothing, count: 234 },
    { id: "books", name: t.books, count: 89 },
    { id: "food", name: t.food, count: 67 },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{t.title}</h1>
          <p className="text-gray-600 mt-2">{t.description}</p>
        </div>
        
        <div className="flex space-x-2">
          <Link
            to="/shop"
            className={`px-3 py-1 rounded ${!lang ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            EN
          </Link>
          <Link
            to="/ja/shop"
            className={`px-3 py-1 rounded ${lang === "ja" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            日本語
          </Link>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">{t.categories}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/${lang ? `${lang}/` : ""}shop/${category.id}`}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="bg-gray-200 h-24 rounded mb-4"></div>
              <h3 className="font-semibold text-lg">{category.name}</h3>
              <p className="text-gray-600">{category.count} items</p>
              <p className="text-blue-600 mt-2">{t.viewCategory} →</p>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">オプショナルセグメントの仕組み</h3>
        <p className="mb-2">
          言語パラメータ <code>:lang?</code> は省略可能です:
        </p>
        <pre className="bg-gray-800 text-white p-2 rounded text-sm">
          <code>{`route(":lang?/shop", "routes/shop/index.tsx")

// パラメータの取得
const { lang } = useParams();
// 現在の言語: ${lang || "undefined (デフォルト: en)"}

// 有効なURL:
// /shop (英語版)
// /ja/shop (日本語版)`}</code>
        </pre>
      </div>
    </div>
  );
}