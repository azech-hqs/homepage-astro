import type { Component } from "solid-js";
import { JustifiedContent } from "./JustifiedContent";
import { Navbar } from "./Navbar";
import { ToggleTheme } from "./ToggleTheme";

export const Header: Component = () => {
    return (
        <JustifiedContent class="">
            <div class="relative flex gap-4">
                <div class="flex flex-1"></div>
                <Navbar />
                <div class="flex justify-end md:flex-1">
                    <ToggleTheme />
                </div>
            </div>
        </JustifiedContent>
    );
};
