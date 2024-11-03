'use client';
import { X } from "lucide-react";
import { Button } from "./ui/button";

import Link from "next/link";

export default function SearchFormReset() {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <Button 
      type="reset" 
      onClick={reset}
    >
      <Link href="/" className="search-btn text-white">
        <X className="size-5"/>
      </Link>
    </Button>
  );
}