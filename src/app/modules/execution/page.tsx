export default function ExecutionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Execution</h1>
      <p className="text-gray-600">
        Manage and track your team's tasks and projects.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-2 text-lg font-medium">Task Management</h3>
          <p className="text-sm text-gray-500">Create and manage tasks for your team.</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-2 text-lg font-medium">Project Overview</h3>
          <p className="text-sm text-gray-500">View and track project progress.</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-2 text-lg font-medium">Timeline</h3>
          <p className="text-sm text-gray-500">Visualize project timelines and milestones.</p>
        </div>
      </div>
    </div>
  );
} 