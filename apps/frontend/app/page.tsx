import { ThemeModeToggler } from '@/components/shared/theme-toggler';
import { Button } from '@workspace/ui/components/button';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex items-center justify-center min-h-svh'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold'>Frontend App (Public App)</h1>
        <Button size='sm'>Button</Button>
        <ThemeModeToggler />
        <Link href={'/login'}>Login</Link>
        <Link href={'/sign-up'}>Sign up</Link>
      </div>
    </div>
  );
}
