"use client";

import { useState } from "react";
import { RouletteWheel } from "@/app/components/RouletteWheel";
import { computeRotation } from "@/lib/roulette";

export default function RoulettePage() {
    const [items, setItems] = useState(["", ""]);
    const [rotation, setRotation] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [fixedIndex, setFixedIndex] = useState<number | null>(null);

    const handleAdd = () => {
        if (items.length >= 8) return;
        setItems([...items, ""]);
    }

    const handleDelete = () => {
        if (items.length <= 2) return;
        const next = items.slice(0, -1);
        setItems(next);
        if (fixedIndex !== null && fixedIndex >= next.length) {
            setFixedIndex(null);   // 仕込んだマスが消えたら解除する
        }
    }

    const handleChange = (index: number, value: string) => {
        const next = [...items];
        next[index] = value;
        setItems(next);
    };

    const handleSpin = () => {
        const targetIndex = fixedIndex ?? Math.floor(Math.random() * items.length);
        setRotation(computeRotation(rotation, targetIndex, items.length));
    };

    return (
        <div className="flex flex-1 flex-col items-center gap-6 bg-zinc-900 p-6 text-zinc-100">
            <div className="relative inline-block">
                <h1
                    onDoubleClick={() => setIsOpen(!isOpen)}
                    className="select-none text-2xl font-bold tracking-wide"
                >
                    いかさまルーレット
                </h1>
                {isOpen && (
                    <div className="absolute left-0 top-full z-20 flex flex-col gap-0.5 rounded border border-zinc-700 bg-zinc-800 p-1.5 text-xs shadow-lg">
                        <button
                            onClick={() => { setFixedIndex(null); setIsOpen(false); }}
                            className={fixedIndex === null ? "text-red-400" : "text-zinc-400"}
                        >
                            ランダム
                        </button>
                        {items.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => { setFixedIndex(index); setIsOpen(false); }}
                                className={fixedIndex === index ? "text-red-400" : "text-zinc-400"}
                            >
                                {index + 1}: {item}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                <div className="relative">
                    <div className="absolute left-1/2 -top-3 -translate-x-1/2 text-2xl z-10 text-white drop-shadow">
                        ▼
                    </div>
                    <RouletteWheel items={items} rotation={rotation} />
                </div>
                <div className="flex flex-col gap-2">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="w-5 text-right text-zinc-400">{index + 1}</span>
                            <input
                                value={item}
                                onChange={(e) => handleChange(index, e.target.value)}
                                placeholder={`選択肢 ${index + 1}`}
                                className="rounded border border-zinc-600 bg-zinc-800 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:border-zinc-400 focus:outline-none"
                            />
                        </div>
                    ))}
                    <div className="flex gap-4">
                        <button
                            onClick={handleAdd}
                            disabled={items.length >= 8}
                            className="rounded border border-zinc-600 px-3 py-1 text-sm transition hover:bg-zinc-800 disabled:opacity-30"
                        >
                            + 追加
                        </button>
                        <button
                            onClick={handleDelete}
                            disabled={items.length <= 2}
                            className="rounded border border-zinc-600 px-3 py-1 text-sm transition hover:bg-zinc-800 disabled:opacity-30"
                        >
                            - 削除
                        </button>
                    </div>
                </div>
            </div>
            <button
                onClick={handleSpin}
                className="rounded-full bg-red-600 px-10 py-3 text-lg font-bold text-white shadow-lg transition hover:bg-red-500 active:scale-95"
            >
                回す
            </button>
        </div>
    );
}