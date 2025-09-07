import type { Route } from "./+types/contact";
import { Form } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - React Router Demo" },
    { name: "description", content: "Contact page with form example" },
  ];
}

export default function Contact() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Contact Page</h1>
      <p className="text-lg">
        お問い合わせフォームの例（デモ用）
      </p>
      
      <Form className="max-w-lg space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            お名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="山田太郎"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            メッセージ
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="お問い合わせ内容を入力してください"
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          送信（デモ）
        </button>
      </Form>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">ルート定義</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>{`route("contact", "routes/contact.tsx")`}</code>
        </pre>
      </div>
    </div>
  );
}