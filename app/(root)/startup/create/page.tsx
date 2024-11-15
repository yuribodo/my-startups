import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import StartupForm from '@/components/StartupForm';

const Page = async () => {

  const session = await auth();

  if (!session) redirect("/");

  return (
    <div className="min-h-screen bg-gradient-to-br  p-8">
      <StartupForm/>
    </div>
  );
};

export default Page;