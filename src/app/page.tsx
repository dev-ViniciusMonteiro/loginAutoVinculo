import { redirect } from "next/navigation";

export default function Home() {
  redirect("/vincular");
  return null; // This line is never reached due to the redirect
}