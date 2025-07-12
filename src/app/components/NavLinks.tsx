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
  "flex flex-col items-center justify-center gap-1 px-3 py-1 transition hover:text-primary",
  isActive ? "text-white font-semibold underline underline-offset-4" : "text-white/80"
)}
    >
      {children}
    </Link>
  );
}
