import { useParams, Link } from "react-router";

export default function ProductDetail() {
  const { categoryId, productId } = useParams();
  
  const product = {
    id: productId,
    name: `Product ${productId}`,
    category: categoryId,
    price: Math.floor(Math.random() * 10000) + 1000,
    description: `This is a high-quality product from the ${categoryId} category.`,
    inStock: Math.random() > 0.3,
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 100) + 10,
  };
  
  const relatedProducts = [
    { id: "101", name: "Related Product 1", price: 2999 },
    { id: "102", name: "Related Product 2", price: 3999 },
    { id: "103", name: "Related Product 3", price: 4999 },
  ];
  
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <nav className="text-sm text-gray-600">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/products/${categoryId}`} className="hover:text-blue-600">
          {categoryId}
        </Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </nav>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Product Image</span>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1">{product.rating}</span>
            </div>
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </div>
          
          <p className="text-3xl font-bold">¥{product.price.toLocaleString()}</p>
          
          <p className="text-gray-600">{product.description}</p>
          
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm ${
              product.inStock 
                ? "bg-green-100 text-green-800" 
                : "bg-red-100 text-red-800"
            }`}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="w-full border border-gray-300 py-3 rounded-md hover:bg-gray-50">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedProducts.map((item) => (
            <Link
              key={item.id}
              to={`/products/${categoryId}/${item.id}`}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="bg-gray-100 h-32 rounded mb-2"></div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">¥{item.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">複数の動的セグメント</h3>
        <p className="mb-2">
          このページは2つの動的パラメータを使用しています:
        </p>
        <pre className="bg-gray-800 text-white p-2 rounded text-sm">
          <code>{`route("products/:categoryId/:productId", "routes/products/detail.tsx")

// URLパラメータの取得
const { categoryId, productId } = useParams();
// categoryId: ${categoryId}
// productId: ${productId}`}</code>
        </pre>
        <p className="mt-2 text-sm">
          他の例: <Link to="/products/books/789" className="text-blue-600 hover:underline">/products/books/789</Link>,
          <Link to="/products/games/321" className="text-blue-600 hover:underline ml-2">/products/games/321</Link>
        </p>
      </div>
    </div>
  );
}