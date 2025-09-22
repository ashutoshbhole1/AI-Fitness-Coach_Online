"use client"
import { SignedIn, SignedOut, SignIn, SignOutButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Jai shree krishna</h1>
      This is HOME va page
<br />
      <SignedOut>
        <SignIn />
      </SignedOut>
<br />
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}

export default page
