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
        <div>
            <div className="relative inline-block">
                <h1 onClick={() => setIsOpen(true)}>いかさまルーレット</h1>
                {isOpen && (
                    <div className="absolute left-0 top-full z-20 flex flex-col gap-1 border bg-white p-2 text-sm">
                        <button
                            onClick={() => { setFixedIndex(null); setIsOpen(false); }}
                            className={fixedIndex === null ? "font-bold" : ""}
                        >
                            ランダム
                        </button>
                        {items.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => { setFixedIndex(index); setIsOpen(false); }}
                                className={fixedIndex === index ? "font-bold" : ""}
                            >
                                {index + 1}: {item}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex gap-8">
                <div className="relative">
                    <div className="absolute left-1/2 -top-2 -translate-x-1/2 text-2xl z-10">
                        ▼
                    </div>
                    <RouletteWheel items={items} rotation={rotation} />
                </div>
                <div className="flex flex-col gap-2">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="w-5 text-right">{index + 1}</span>
                            <input
                                value={item}
                                onChange={(e) => handleChange(index, e.target.value)}
                                className="border p-2"
                            />
                        </div>
                    ))}
                    <div className="flex gap-4">
                        <button onClick={handleAdd}>
                            + 追加
                        </button>
                        <button onClick={handleDelete}>
                            - 削除
                        </button>
                    </div>
                </div>
            </div>
            <button onClick={handleSpin} className="border px-4 py-2">
                回す
            </button>
        </div>
    );
}