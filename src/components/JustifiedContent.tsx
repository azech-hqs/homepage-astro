import type { ParentComponent } from "solid-js";

export const JustifiedContent: ParentComponent<{ class?: string }> = (props) => {
    return (
        <div class={props.class}>
            <div class="mx-auto max-w-7xl lg:px-8">
                <div class="relative px-4 sm:px-8 lg:px-12">
                    <div class="mx-auto max-w-2xl lg:max-w-5xl">{props.children}</div>
                </div>
            </div>
        </div>
    );
};
