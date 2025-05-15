import { auth } from "@clerk/nextjs/server";

interface UserAuth {
  role: string | undefined;
  userId: string | null;
}

export async function getUserAuth(): Promise<UserAuth> {
  const { userId, sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  return {
    role,
    userId,
  };
}
