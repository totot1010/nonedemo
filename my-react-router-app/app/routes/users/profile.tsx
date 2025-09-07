import { useParams } from "react-router";

export default function UserProfile() {
  const { userId } = useParams();
  
  const user = {
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`,
    joinDate: "2024-01-15",
    role: userId === "123" ? "Admin" : "Member",
    avatar: `https://ui-avatars.com/api/?name=User+${userId}&background=random`,
  };
  
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">User Profile</h1>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
        
        <div className="relative px-6 pb-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full border-4 border-white -mt-12 mb-4"
          />
          
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">User ID</p>
              <p className="font-semibold">{user.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-semibold">{user.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Join Date</p>
              <p className="font-semibold">{user.joinDate}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">動的セグメントの仕組み</h3>
        <p className="mb-2">
          このページは動的ルートパラメータ <code>:userId</code> を使用しています。
        </p>
        <pre className="bg-gray-800 text-white p-2 rounded text-sm">
          <code>{`route("users/:userId", "routes/users/profile.tsx")

// URLパラメータの取得
const { userId } = useParams();
// 現在のuserId: ${userId}`}</code>
        </pre>
        <p className="mt-2 text-sm">
          URLを変更してみてください: <code>/users/456</code>, <code>/users/789</code>
        </p>
      </div>
    </div>
  );
}