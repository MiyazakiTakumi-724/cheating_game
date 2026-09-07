"use client";

import { useState } from "react";
import { RouletteWheel } from "@/app/components/RouletteWheel";

export default function RoulettePage() {
    const [items, setItems] = useState(["", ""]);

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

    return (
        <div>
            <h1>いかさまルーレット</h1>
            <div className="flex gap-8">
                <RouletteWheel items={items} />
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
        </div>
    );
}