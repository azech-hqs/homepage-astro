import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { NavBarItem } from "./NavbarItem";

export const Navbar: Component = () => {
    const [isOpen, setIsOpen] = createSignal(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen());
    };

    return (
        <>
            <div class="flex flex-1 justify-end md:justify-center">
                <nav class="pointer-events-auto z-40">
                    <button
                        class="group flex items-center px-4 py-2 text-zinc-800 focus:outline-none dark:text-zinc-200 md:hidden"
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        Menu
                        <svg
                            class="ml-3 h-6 w-6 fill-zinc-800 dark:fill-zinc-200"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <ul
                        class={`${
                            isOpen() ? "absolute block" : "hidden"
                        } rounded bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 md:flex`}
                    >
                        <NavBarItem title="Home" href="/" />
                        <NavBarItem title="About" href="/about" />
                        <NavBarItem title="Blog" href="/blog" />
                    </ul>
                </nav>
            </div>
        </>
    );
};
