<script>
    import logo from "$lib/assets/tendaro.svg";
    import { Menu, MenuButton } from "@rgossiaux/svelte-headlessui";
    import MenuItems from "$lib/MenuItems.svelte";
    import MenuItem from "$lib/MenuItem.svelte";
    import SectionTitle from "$lib/SectionTitle.svelte";

    export let data;
</script>

<div class="flex flex-col h-screen">
    <nav class="flex flex-row w-full items-center px-3 my-2">
        <div class="w-40">
            <a href="/" class="flex flex-row items-center gap-1">
                <img alt="Tendaro logo" class="w-8" src={logo} />
                <span class="font-semibold">Tendaro</span>
            </a>
        </div>

        <div class="flex flew-row gap-4 grow justify-center">
            <a href="/" class="text-gray-600 text-sm font-bold">Accueil</a>
            <a href="/" class="text-gray-600 text-sm font-bold">Chat</a>
            <a href="/" class="text-gray-600 text-sm font-bold">Notifications</a>
            <a href="/" class="text-gray-600 text-sm font-bold">Activités</a>
            <a href="/" class="text-gray-600 text-sm font-bold">Rechercher</a>
        </div>

        <div class="w-40 flex flex-row flex-row-reverse">
            <Menu class="relative">
                <MenuButton>
                    <img
                        class="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </MenuButton>
                <MenuItems>
                    <SectionTitle align="left" class="p-2 text-xs">
                        <span class="text-xs font-bold">Notifications are on</span>
                    </SectionTitle>
                    <p class="text-xs p-2 color-gray-700">
                        You're set to receive email and browser notifications for everything all the time.
                    </p>
                    <SectionTitle align="left" class="p-2 text-xs">
                        <span class="text-xs font-bold">Personal Settings</span>
                    </SectionTitle>
                    <MenuItem href="/my/profile">Profile, password</MenuItem>
                    <MenuItem href="/my/preferences">Preferences</MenuItem>
                    <MenuItem href="/logout/">Log out</MenuItem>
                </MenuItems>
            </Menu>
        </div>
    </nav>

    <div class="grow flex flex-col p-4">
        <slot />
    </div>
</div>
