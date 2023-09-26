<script>
    import { MenuItem } from "@rgossiaux/svelte-headlessui";

    export let href = "";
</script>

<MenuItem let:active>
    <a {href} class={`${active ? "bg-gray-200" : ""} rounded block text-xs px-2 py-1 w-full text-gray-700`}>
        <slot />
    </a>
</MenuItem>
