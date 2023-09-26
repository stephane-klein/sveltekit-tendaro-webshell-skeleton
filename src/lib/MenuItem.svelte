<script>
    import { MenuItem } from "@rgossiaux/svelte-headlessui";

    export let href = "";
</script>

<MenuItem let:active>
    <a {href} class={`${active ? "bg-gray-200" : ""} rounded block text-xs p-2 w-full`}>
        <slot />
    </a>
</MenuItem>
