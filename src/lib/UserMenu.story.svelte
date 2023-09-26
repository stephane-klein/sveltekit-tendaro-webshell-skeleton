<script>
    import OptionButton from "./OptionButton.svelte";
    import { Menu, MenuButton, MenuItems, MenuItem } from "@rgossiaux/svelte-headlessui";

    export let Hst;
</script>

<Hst.Story>
    <div class="flex flex-row flex-row-reverse h-screen p-4">
        <Menu class="relative inline-block text-left">
            <MenuButton>
                <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </MenuButton>
            <MenuItems
                class="absolute right-0 w-56 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md
                shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2"
            >
                <div class="px-1 py-1 flex flex-col w-full">
                    <MenuItem let:active>
                        <a href="/my/profile" class={`${active ? "bg-gray-200" : ""} rounded block text-xs p-2 w-full`}>
                            Profile, password
                        </a>
                    </MenuItem>
                    <MenuItem let:active>
                        <a
                            href="/my/preferences"
                            class={`${active ? "bg-gray-200" : ""} rounded block text-xs p-2 w-full`}
                        >
                            Preferences
                        </a>
                    </MenuItem>
                    <MenuItem let:active>
                        <a href="/logout/" class={`${active ? "bg-gray-200" : ""} rounded block text-xs p-2 w-full`}>
                            Log out
                        </a>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    </div>
</Hst.Story>
