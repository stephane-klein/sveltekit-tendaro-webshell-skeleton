<script>
    import { MenuItems } from "@rgossiaux/svelte-headlessui";
</script>

<MenuItems class="absolute right-0 w-56 mt-1 origin-top-right bg-white shadow shadow-slate-300 rounded p-2 z-50">
    <div class="px-1 py-1 flex flex-col w-full">
        <slot />
    </div>
</MenuItems>
