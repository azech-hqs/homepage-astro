import { createEffect, createSignal, type Component } from "solid-js";

export const ToggleTheme: Component = () => {
    const [theme, setTheme] = createSignal<string>(localStorage.getItem("theme") ?? "light");
    console.log(`ToggleTheme theme: ${theme()}`);
    function toggleTheme() {
        console.log(`theme before toggle: ${theme()}`);
        setTheme(theme() === "light" ? "dark" : "light");
        console.log(`theme after toggle: ${theme()}`);
    }

    createEffect(() => {
        if (theme() === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        console.log(`createEffect theme: ${theme()}`);
        localStorage.setItem("theme", theme());
    });

    return <button onClick={toggleTheme}>{theme() === "light" ? "🌙" : "🌞"}</button>;
};
