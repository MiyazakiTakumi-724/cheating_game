"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { games } from "@/lib/games";

export function Sidebar() {
    return (
        <aside className="w-48 bg-zinc-800">
            <nav>
                {games.map((game) => (
                    <Link key={game.href} href={game.href}>
                        {game.name}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}