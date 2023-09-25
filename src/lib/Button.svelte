<script>
    export let color = "primary";
    export let size = "normal";
</script>

<button
    type="button"
    class={`rounded-full  ${
        color == "primary" ? "text-gray-200 bg-zinc-600 " : "text-gray-700 bg-white border border-zinc-600"
    } ${size == "small" ? "px-2 py-1 text-xs" : "px-4 py-2 text-sm"}`}
>
    <slot />
</button>
