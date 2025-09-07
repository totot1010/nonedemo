import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanstackDevtools } from "@tanstack/react-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div style={{ padding: "20px" }}>
      <header style={{ marginBottom: "20px" }}>
        <h1>TanStack Router サンプル集</h1>
        <nav
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "15px",
          }}
        >
          <Link to="/" style={{ color: "#007bff", textDecoration: "none" }}>
            [Home]
          </Link>
          <Link
            to="/about"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            [About]
          </Link>
          <Link
            to="/contact"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            [Contact]
          </Link>
          <Link to="/blog" style={{ color: "#007bff", textDecoration: "none" }}>
            [Blog]
          </Link>
          <Link
            to="/blog/$postId"
            params={{ postId: "123" }}
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            [Blog Post #123]
          </Link>
          <Link
            to="/users/$userId"
            params={{ userId: "john" }}
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            [User: john]
          </Link>
          <Link
            to="/products"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            [Products]
          </Link>
          <Link
            to="/products/$category"
            params={{ category: "electronics" }}
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            [Electronics]
          </Link>
          <Link
            to="/dashboard"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            [Dashboard]
          </Link>
          <Link
            to="/settings"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            [Settings]
          </Link>
          <Link
            to="/search"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            [Search]
          </Link>
          <Link
            to="/search"
            search={{ q: "tanstack" }}
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            [Search: tanstack]
          </Link>
          <Link
            to="/api/$"
            params={{ _splat: "v1/users" }}
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            [API Catch-all]
          </Link>
        </nav>
      </header>
      <hr style={{ margin: "20px 0" }} />
      <main>
        <Outlet />
      </main>
      <TanstackDevtools
        config={{
          position: "bottom-left",
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </div>
  );
}
