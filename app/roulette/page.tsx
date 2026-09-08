"use client";

import { useState } from "react";
import { RouletteWheel } from "@/app/components/RouletteWheel";
import { computeRotation } from "@/lib/roulette";

export default function RoulettePage() {
    const [items, setItems] = useState(["", ""]);
    const [rotation, setRotation] = useState(0);

    const handleAdd = () => {
        if (items.length >= 8) return;
        setItems([...items, ""]);
    }

    const handleDelete = () => {
        if (items.length <= 2) return;
        setItems(items.slice(0, -1));
    }

    const handleChange = (index: number, value: string) => {
        const next = [...items];
        next[index] = value;
        setItems(next);
    };

    const handleSpin = () => {
        const targetIndex = Math.floor(Math.random() * items.length);
        setRotation(computeRotation(rotation, targetIndex, items.length));
    };

    return (
        <div>
            <h1>いかさまルーレット</h1>
            <div className="flex gap-8">
                <div className="relative">
                    <div className="absolute left-1/2 -top-2 -translate-x-1/2 text-2xl z-10">
                        ▼
                    </div>
                    <RouletteWheel items={items} rotation={rotation} />
                </div>
                <div className="flex flex-col gap-2">
                    {items.map((item, index) => (
                        <input
                            key={index}
                            value={item}
                            onChange={(e) => handleChange(index, e.target.value)}
                            className="border p-2"
                        />
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