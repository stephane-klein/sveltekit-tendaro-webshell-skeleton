<script>
    export let color = "primary";
    export let size = "normal";
    export let type = "submit";
    export let href = undefined;
</script>

<svelte:element
    this={href == undefined ? "button" : "a"}
    type={href == undefined ? type : undefined}
    {href}
    class={`rounded-full
${color == "primary" ? "text-gray-100 bg-zinc-600 font-semibold " : ""}
${color == "secondary" ? "text-gray-700 bg-white border border-zinc-600" : ""}
${size == "small" ? "px-4 py-1 text-xs" : ""}
${size == "normal" ? "px-4 py-2 text-base" : ""}
`}
    {...$$restProps}
>
    <slot />
</svelte:element>
