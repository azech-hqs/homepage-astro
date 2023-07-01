import type { Component } from "solid-js";

export const NavBarItem: Component<{ title: string; href: string }> = (props) => {
    const { title, href } = props;
    return (
        <li>
            <a
                class="relative block px-3 py-2 transition hover:text-blue-600 dark:hover:text-blue-400"
                href={href}
            >
                {title}
            </a>
        </li>
    );
};
