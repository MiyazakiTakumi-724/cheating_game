"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { games } from "@/lib/games";

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-48 bg-zinc-800">
            <nav className="flex flex-col">
                <Link href="/"
                    className={pathname === "/" ? "bg-zinc-600 text-white" : "text-zinc-400"}>
                    トップページ
                </Link>
                {games.map((game) => (
                    <Link key={game.href} href={game.href}
                        className={pathname === game.href ? "bg-zinc-600 text-white" : "text-zinc-400"}>
                        {game.name}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}