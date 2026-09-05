"use client";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <h1>いかさまゲーム</h1>
      <button onClick={() => setIsOpen(true)}>
        遊び方
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}>
          <div className="bg-white p-6 rounded">
            <p>説明</p>
          </div>
        </div>
      )
      }
    </main>
  )
}