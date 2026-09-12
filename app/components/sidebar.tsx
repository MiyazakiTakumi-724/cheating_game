"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { games } from "@/lib/games";

export function Sidebar() {
    const pathname = usePathname();

    const linkClass = (href: string) =>
        `border-l-2 px-4 py-2.5 text-sm leading-snug transition ${
            pathname === href
                ? "border-red-500 bg-zinc-900 font-medium text-white"
                : "border-transparent text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-200"
        }`;

    return (
        <aside className="flex w-44 shrink-0 flex-col border-r border-zinc-700 bg-zinc-800 md:w-52">
            <nav className="flex flex-col py-3">
                <Link href="/" className={linkClass("/")}>
                    トップページ
                </Link>
                <p className="mt-4 mb-1 px-4 text-xs tracking-wider text-zinc-500">
                    ゲーム
                </p>
                {games.map((game) => (
                    <Link key={game.href} href={game.href} className={linkClass(game.href)}>
                        {game.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
