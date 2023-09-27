<script>
    import { Menu, MenuButton, MenuItems } from "@rgossiaux/svelte-headlessui";
    import OptionButton from "./OptionButton.svelte";
</script>

<Menu class="absolute top-0 right-0" let:open>
    <div class={`flex flex-col items-end ${open ? "bg-slate-500" : ""}`}>
        <MenuButton class="p-2">
            {#if open}
                <button type="button" class="rounded-full border border-slate-400 p-1 m-auto text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-x"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </svg>
                </button>
            {:else}
                <OptionButton />
            {/if}
        </MenuButton>
        <MenuItems class="flex flex-col">
            <slot />
        </MenuItems>
    </div>
</Menu>
