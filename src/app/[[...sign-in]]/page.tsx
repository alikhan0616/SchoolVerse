"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();
  useEffect(() => {
    const role = user?.publicMetadata.role;
    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);
  return (
    <div className="h-screen flex items-center justify-center bg-alisky-light px-4">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white p-12 rounded-md shadow-2xl flex flex-col items-center gap-2"
        >
          <h1 className="flex text-xl font-bold items-center gap-2">
            <Image src="/logo.png" alt="" width={24} height={24} />
            School Verse
          </h1>
          <h2 className="text-gray-400">Sign in to your account</h2>

          <Clerk.GlobalError className="text-red-400 text-sm" />
          <Clerk.Field name="identifier" className="flex flex-col gap-2 w-full">
            <Clerk.Label className="text-gray-500 text-xs">
              Username
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="p-2 rounded-md ring-1 ring-gray-400"
            />
            <Clerk.FieldError className="text-red-400 text-xs" />
          </Clerk.Field>
          <Clerk.Field name="password" className="flex flex-col gap-2 w-full">
            <Clerk.Label className="text-gray-500 text-xs">
              Password
            </Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="p-2 rounded-md ring-1 ring-gray-400"
            />
            <Clerk.FieldError className="text-red-400 text-xs" />
          </Clerk.Field>
          <SignIn.Action
            className="my-1 w-full bg-aliyellow p-[10px] text-sm text-black hover:shadow-sm hover:cursor-pointer rounded-md"
            submit
          >
            Sign In
          </SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
};

export default LoginPage;
