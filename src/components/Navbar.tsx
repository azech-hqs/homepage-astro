import type { Component } from "solid-js";
import { NavBarItem } from "./NavbarItem";

export const Navbar: Component = () => {
    return (
        <>
            <div class="flex flex-1 justify-end md:justify-center">
                <nav class="pointer-events-auto hidden md:block">
                    <ul class="flex rounded bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        <NavBarItem title="Home" href="/" />
                        <NavBarItem title="About" href="/about" />
                        <NavBarItem title="Blog" href="/blog" />
                    </ul>
                </nav>
            </div>
        </>
    );
};
