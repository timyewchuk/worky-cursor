export default function PeoplePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">People</h1>
      <p className="text-gray-600">
        Manage your team structure and members.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-2 text-lg font-medium">Team Directory</h3>
          <p className="text-sm text-gray-500">View and manage your team members.</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-2 text-lg font-medium">Org Chart</h3>
          <p className="text-sm text-gray-500">Visualize your organization's structure.</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-2 text-lg font-medium">Roles & Permissions</h3>
          <p className="text-sm text-gray-500">Manage access control and permissions.</p>
        </div>
      </div>
    </div>
  );
} 