"use server";
import { getServerSession } from "next-auth";

export default async function CurrentUser() {
  const data = await getServerSession();
  return data;
}
