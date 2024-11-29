import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { auth, signOut, signIn } from '@/auth';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from './ui/button';

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
                <Button type="submit">
                  <span className="text-sm md:text-base max-sm:hidden">Logout</span>
                </Button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ): (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <Button type="submit">
                <span className="text-sm md:text-base">Login</span>
              </Button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
