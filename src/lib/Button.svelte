<script>
    export let color = "primary";
    export let size = "normal";
    export let type = "submit";
</script>

<button
    {type}
    class={`rounded-full
${color == "primary" ? "text-gray-100 bg-zinc-600 font-semibold " : ""}
${color == "secondary" ? "text-gray-700 bg-white border border-zinc-600" : ""}
${size == "small" ? "px-2 py-1 text-xs" : ""}
${size == "normal" ? "px-2 py-2 text-base" : ""}
`}
>
    <slot />
</button>
