"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function LoginCredentials() {
  const data = await getServerSession(authOptions);
  return <div>{JSON.stringify(data)}</div>;
}
