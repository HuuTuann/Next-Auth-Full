"use client";

import { getUser } from "@/api/auth";

export default function Private() {
  const handleClick = async () => {
    const result = await getUser();
    console.log(result);
  };

  return (
    <div>
      <h1>Private</h1>
      <button onClick={handleClick}>Get User</button>
    </div>
  );
}
