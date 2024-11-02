import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { auth, signOut, signIn } from '@/auth';

const Navbar = async () => {
  const session = await auth()

  return (
    <header className=" shadow-sm px-5 py-3 bg-white font-work-sans text-black">
      <nav className="flex justify-between items-center ">
        <Link href="/" className="">
          <Image 
            src="/logo.svg" 
            alt="logo" 
            width={100} 
            height={28} 
            className="object-contain"
          />
        </Link>


        <div className=''> 
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                 
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ): (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;