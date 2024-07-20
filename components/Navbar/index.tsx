import type { NextPage } from 'next';
import { useState } from 'react';
import { navs } from './config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import Login from '@/components/Login';
import { useSession, signOut } from 'next-auth/react';


const Navbar: NextPage = () => {
  const { pathname } = useRouter();
  const [isShowLogin, setIsShowLogin] = useState(false);
  const { data: session, status } = useSession();

  const handleGoToWriteArticle = () => {
   
  }

  const handleLogin = () => {
    setIsShowLogin(true);
  }

  const handleClose = () => {
    setIsShowLogin(false);
  }
 
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between bg-white h-14 items-center text-slate-800 px-4">
      <section className='text-balck text-xl font-bold'>
          lOGO
      </section>
      <section className="md:flex space-x-7 text-lg flex-1 justify-center">
        {
          navs?.map((nav) => (
            <Link key={nav?.label} href={nav?.value} className={pathname ==nav?.value?`text-blue-500 `:``}>{nav?.label}</Link>
          ))
        }
      </section>
      <section className='space-x-2'>
        <Button variant="outlined" onClick={handleGoToWriteArticle}>Write article</Button>
        {!session? <Button variant="contained" onClick={handleLogin}>Sign in</Button>:<Button onClick={() => signOut()}>Sign out</Button>}
    
      </section>
      <Login isShow={isShowLogin} onClose={handleClose} />

    </div>
  );
};
export default Navbar;