import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { auth, signOut, signIn } from '@/auth';

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="shadow-sm px-5 py-3 bg-white font-work-sans text-black">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="logo" 
            width={144} 
            height={30} 
            className="object-contain"
          />
        </Link>

        <div className='flex items-center gap-5'> 
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="text-sm md:text-base">Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="text-sm md:text-base max-sm:hidden">Logout</span>
                </button>
              </form>

              {/*
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
               */}
            </>
          ): (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">
                <span className="text-sm md:text-base">Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
