<script>
    import { MenuItem } from "@rgossiaux/svelte-headlessui";

    export let href = "";
</script>

<MenuItem let:active>
    <a {href} class={`${active ? "bg-slate-800" : ""} block text-sm px-2 px-4 py-2 w-full text-gray-100`}>
        <slot />
    </a>
</MenuItem>
