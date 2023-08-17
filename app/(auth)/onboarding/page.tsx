import AccountProfile from '@/components/forms/AccountProfile'
import { currentUser } from '@clerk/nextjs'
import React from 'react'


async function Page() {
  const user = await currentUser();
  
  const userInfo = {};

  // question mark to confirm it exist
  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,


  }

  return (
    <div className='bg-dark-1'>
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20 '>
      <h1 className='text-heading2-bold text-light-2'>Onboarding</h1>
      <p className='mt-3 text-base-regular text-light-2 '>
        Complete your profile to use WalmartUnity
      </p>
      <section className='mt-9 bg-dark-2 p-10'>
        <AccountProfile user={userData} 
        btnTitle="Continue" 
      />
      </section>
    </main>
    </div>
  )
}

export default Page