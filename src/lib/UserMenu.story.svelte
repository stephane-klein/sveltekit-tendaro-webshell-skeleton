<script>
    import { Menu, MenuButton } from "@rgossiaux/svelte-headlessui";
    import MenuItems from "$lib/MenuItems.svelte";
    import MenuItem from "$lib/MenuItem.svelte";

    export let Hst;
</script>

<Hst.Story>
    <div class="flex flex-row flex-row-reverse h-screen p-4">
        <Menu class="relative">
            <MenuButton>
                <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </MenuButton>
            <MenuItems>
                <MenuItem href="/my/profile">Profile, password</MenuItem>
                <MenuItem href="/my/preferences">Preferences</MenuItem>
                <MenuItem href="/logout/">Log out</MenuItem>
            </MenuItems>
        </Menu>
    </div>
</Hst.Story>
