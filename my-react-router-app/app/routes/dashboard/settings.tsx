import { Form } from "react-router";

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">General Settings</h2>
        
        <Form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Site Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              defaultValue="My Dashboard"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Notifications
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>All notifications</option>
              <option>Important only</option>
              <option>None</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Language
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>日本語</option>
              <option>English</option>
              <option>中文</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Timezone
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>Asia/Tokyo (JST)</option>
              <option>America/New_York (EST)</option>
              <option>Europe/London (GMT)</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="darkMode" className="rounded" />
            <label htmlFor="darkMode" className="text-sm">
              Enable dark mode
            </label>
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save Settings
          </button>
        </Form>
      </div>
      
      <div className="bg-red-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Danger Zone</h3>
        <p className="text-sm text-red-600 mb-3">
          These actions are irreversible. Please be careful.
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
          Delete Account
        </button>
      </div>
    </div>
  );
}