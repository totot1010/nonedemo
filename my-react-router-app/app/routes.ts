import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // 1. 基本的なルート
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),

  // 2. ネストされたルート（レイアウト付き）
  route("dashboard", "routes/dashboard/layout.tsx", [
    index("routes/dashboard/home.tsx"),
    route("analytics", "routes/dashboard/analytics.tsx"),
    route("reports", "routes/dashboard/reports.tsx"),
    route("settings", "routes/dashboard/settings.tsx"),
  ]),

  // 3. 動的セグメントルート
  route("users/:userId", "routes/users/profile.tsx"),
  route("products/:categoryId/:productId", "routes/products/detail.tsx"),

  // 4. オプショナルセグメントルート（多言語対応）
  route(":lang?/shop", "routes/shop/index.tsx"),
  route(":lang?/shop/:category", "routes/shop/category.tsx"),

  // 5. Splat（ワイルドカード）ルート
  route("files/*", "routes/files/browser.tsx"),

  // 6. 404キャッチオールルート
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
