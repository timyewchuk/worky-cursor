export default function ScorecardsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Scorecards</h1>
      <p className="text-gray-600">
        Track and monitor key performance indicators.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-2 text-lg font-medium">Metrics</h3>
          <p className="text-sm text-gray-500">Monitor important metrics and KPIs.</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-2 text-lg font-medium">Import Data</h3>
          <p className="text-sm text-gray-500">Import CSV data for analysis.</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-2 text-lg font-medium">Reports</h3>
          <p className="text-sm text-gray-500">Generate custom reports from your data.</p>
        </div>
      </div>
    </div>
  );
} 