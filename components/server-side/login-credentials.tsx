"use server";
import authOptions from "@/lib/actions/auth";
import { getServerSession } from "next-auth";

export default async function LoginCredentials() {
  const data = await getServerSession(authOptions);
  return <div>{JSON.stringify(data)}</div>;
}
