import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn('w-64 h-screen bg-white border-r border-gray-200 flex flex-col', className)}>
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-primary">Worky</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link 
              href="/modules/execution"
              className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <span>Execution</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/modules/scorecards"
              className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <span>Scorecards</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/modules/playbooks"
              className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <span>Playbooks</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/modules/people"
              className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <span>People</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-700">User Name</p>
            <p className="text-xs text-gray-500">user@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
} 