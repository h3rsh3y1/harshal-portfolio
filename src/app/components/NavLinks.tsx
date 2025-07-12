'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';




export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "transition-all px-2 py-1 hover:text-black hover:underline underline-offset-4",
        isActive ? "text-black underline font-semibold" : "text-gray-500"
      )}
    >
      {children}
    </Link>
  );
}
