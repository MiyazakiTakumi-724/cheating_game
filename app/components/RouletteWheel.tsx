import { sliceAngle, sliceCenterAngle } from "@/lib/roulette";

const COLORS = ["#f87171", "#60a5fa", "#facc15", "#4ade80", "#c084fc", "#fb923c"];

export function RouletteWheel({ items }: { items: string[] }) {
    const angle = sliceAngle(items.length);

    const stops = items
        .map((_, i) => `${COLORS[i % COLORS.length]} ${angle * i}deg ${angle * (i + 1)}deg`)
        .join(", ");

    return (
        <div
            className="relative w-64 h-64 rounded-full"
            style={{ background: `conic-gradient(${stops})` }}
        >
            {items.map((item, i) => (
                <div
                    key={i}
                    className="absolute left-1/2 top-1/2"
                    style={{
                        transform: `rotate(${sliceCenterAngle(i, items.length)}deg) translateY(-80px)`,
                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}