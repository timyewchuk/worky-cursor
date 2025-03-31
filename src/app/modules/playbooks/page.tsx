export default function PlaybooksPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Playbooks</h1>
      <p className="text-gray-600">
        Create and manage standardized processes and checklists.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-2 text-lg font-medium">Process Templates</h3>
          <p className="text-sm text-gray-500">Create reusable process templates.</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-2 text-lg font-medium">Checklists</h3>
          <p className="text-sm text-gray-500">Build and share checklists with your team.</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-2 text-lg font-medium">Policies</h3>
          <p className="text-sm text-gray-500">Document and share company policies.</p>
        </div>
      </div>
    </div>
  );
} 