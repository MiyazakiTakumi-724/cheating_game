import { RouletteWheel } from "@/app/components/RouletteWheel";

export default function RoulettePage() {
    return (
        <div>
            <h1>いかさまルーレット</h1>
            <RouletteWheel items={["A", "B", "C", "D", "E"]} />
        </div>
    );
}