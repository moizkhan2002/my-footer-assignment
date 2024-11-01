import React from "react";
import Link from "next/link";

export default function Footer(){
    return(
        <div>
<ul className="flex justify-center gap-10 bg-orange-600 text-white text-3xl h-20 items-center">
    <li> <Link href="/">Home</Link></li>
    <li> <Link href="/about">about</Link></li>
    <li> <Link href="/login">login</Link></li>
      </ul>
        </div>
    )
}