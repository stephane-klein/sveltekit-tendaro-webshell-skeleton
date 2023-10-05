<script>
    import logo from "$lib/assets/tendaro.svg";
    import Avatar from "$lib/Avatar.svelte";
    import { Menu, MenuButton } from "@rgossiaux/svelte-headlessui";
    import MenuItems from "$lib/MenuItems.svelte";
    import MenuItem from "$lib/MenuItem.svelte";
    import SectionTitle from "$lib/SectionTitle.svelte";
    import { t } from "$lib/translations";

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
            <a href="/" class="text-gray-600 text-sm font-bold">{$t("menu.Home")}</a>
            <a href="/" class="text-gray-600 text-sm font-bold">{$t("menu.Chat")}</a>
            <a href="/" class="text-gray-600 text-sm font-bold">{$t("menu.Notifications")}</a>
            <a href="/" class="text-gray-600 text-sm font-bold">{$t("menu.Activity")}</a>
            <a href="/" class="text-gray-600 text-sm font-bold">{$t("menu.Find")}</a>
        </div>

        <div class="w-40 flex flex-row flex-row-reverse">
            <Menu class="relative">
                <MenuButton>
                    <Avatar first_name={data.user.first_name} last_name={data.user.last_name} />
                </MenuButton>
                <MenuItems>
                    <SectionTitle align="left" class="p-2 text-xs">
                        <span class="text-xs font-bold">{$t("menu.Notifications are on")}</span>
                    </SectionTitle>
                    <p class="text-xs p-2 color-gray-700">
                        {$t("menu.You're set to receive email and browser notifications for everything all the time.")}
                    </p>
                    <SectionTitle align="left" class="p-2 text-xs">
                        <span class="text-xs font-bold">{$t("menu.Personal Settings")}</span>
                    </SectionTitle>
                    <MenuItem href="/my/profile">{$t("menu.Profile, password")}</MenuItem>
                    <MenuItem href="/my/preferences">{$t("menu.Preferences")}</MenuItem>
                    <MenuItem href="/logout/">{$t("menu.Log out")}</MenuItem>
                </MenuItems>
            </Menu>
        </div>
    </nav>

    <div class="grow flex flex-col p-4">
        <slot />
    </div>
</div>
