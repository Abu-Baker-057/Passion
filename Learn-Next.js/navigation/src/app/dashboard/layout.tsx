import React from 'react'
import Link from 'next/link'

function layout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
  return (
    <html>
        <header className="bg-blue-500 p-5 flex gap-10 font-bold">
            <Link href={"/"}>Home</Link>
            <Link href={"/dashboard/food"}>Food</Link>
            <Link href={"/dashboard/customer"}>Customer</Link>
        </header>
        {children}
    </html>
  )
}

export default layout

