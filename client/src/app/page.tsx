import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-center">Next Auth</h1>
      <div>
        <ul>
          <li>
            <Link href={"/auth/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/auth/register"}>Register</Link>
          </li>
          <li>
            <Link href={"/private"}>Private</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
