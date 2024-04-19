"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SomePage from '@/app/some/some'

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  return (
    <main className="flex min-h-screen flex-col ">
       <SomePage />
    </main>
  );
}
