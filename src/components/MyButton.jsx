import React from 'react'
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

export default function MyButton(
  as = 'button',
  text = 'Button',
  variant = 'orange',
  href = "/",
) {

  let findalResult = "";
  switch (variant) {
    case "orange":
      findalResult = { className: "bg-orange text-white", icon: null };
      break;
    case "outline":
      findalResult = { className: "bg-transparent tex-black", icon: null };
      break
    case "link":
      findalResult = { className: "bg-transparent tex-gray", icon: <ChevronRight className='text-orange' />};
      break
  }
  return (
    <>

      {as === "buytton" ? (
        <Button className={`rounded-none ${findalResult}`}>{text}</Button>
      ) : (
        <Link href={href}>{text}</Link>
      )}
    </>
  )
}
