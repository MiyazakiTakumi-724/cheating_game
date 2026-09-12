"use client";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 bg-zinc-900 p-8 text-zinc-100">
      <h1 className="text-4xl font-bold tracking-wider">いかさまゲーム</h1>
      <p className="text-zinc-400">友達と囲んで遊ぶミニゲーム集</p>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full border border-zinc-600 px-6 py-2 text-sm text-zinc-300 transition hover:border-zinc-400 hover:text-white"
      >
        遊び方
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 md:pl-48"
          onClick={() => setIsOpen(false)}>
          <div className="max-w-sm rounded-lg border border-zinc-700 bg-zinc-800 p-6 shadow-xl">
            <h2 className="font-bold mb-2">遊び方</h2>
            <p className="text-zinc-300">
              ゲームを選んで、選択肢を入れて、回すだけ。<br />
              公平な運試しで、今日の犠牲者を決めよう。
            </p>
          </div>
        </div>
      )
      }
    </main>
  )
}