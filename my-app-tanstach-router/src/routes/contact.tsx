import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: ContactComponent,
})

function ContactComponent() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Page</h2>
      <p>お問い合わせページの例です。</p>
      <p>パス: /contact</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e8f4f8', borderRadius: '5px' }}>
        <h3>連絡先情報:</h3>
        <ul>
          <li>Email: example@tanstack.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: Tokyo, Japan</li>
        </ul>
      </div>
    </div>
  )
}