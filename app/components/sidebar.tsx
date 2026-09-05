"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { games } from "@/lib/games";

export function Sidebar() {
    return (
        <aside className="bg-zinc-800">
            <p>
                サイドバー
            </p>
        </aside>
    )
}