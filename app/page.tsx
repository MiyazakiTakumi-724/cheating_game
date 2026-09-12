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
            <div className="bg-white p-6 rounded max-w-sm">
              <h2 className="font-bold mb-2">遊び方</h2>
              <p>
                ゲームを選んで、選択肢を入れて、回すだけ。<br />
                公平な運試しで、今日の犠牲者を決めよう。
              </p>
            </div>
          </div>
        </div>
      )
      }
    </main>
  )
}