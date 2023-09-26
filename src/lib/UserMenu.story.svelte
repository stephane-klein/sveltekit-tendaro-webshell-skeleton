<script>
    import { Menu, MenuButton } from "@rgossiaux/svelte-headlessui";
    import MenuItems from "$lib/MenuItems.svelte";
    import MenuItem from "$lib/MenuItem.svelte";
    import SectionTitle from "$lib/SectionTitle.svelte";

    export let Hst;
</script>

<Hst.Story>
    <div class="h-screen p-4">
        <div class="flex flex-row flex-row-reverse mb-48">
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

        <hr />

        <div class="relative p-4">
            <Menu let:open>
                <MenuItems static>
                    <SectionTitle align="left" class="p-2 text-xs">
                        <span class="text-xs font-bold">Personal Settings</span>
                    </SectionTitle>
                    <MenuItem href="/my/profile">Profile, password</MenuItem>
                    <MenuItem href="/my/preferences">Preferences</MenuItem>
                    <MenuItem href="/logout/">Log out</MenuItem>
                </MenuItems>
            </Menu>
        </div>
    </div>
</Hst.Story>
