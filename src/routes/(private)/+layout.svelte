<script>
    import logo from "$lib/assets/tendaro.svg";

    export let data;
</script>

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
        <button
            type="button"
            class="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            title={data.user.username}
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
        >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">Open user menu</span>
            <img
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            />
        </button>
    </div>
</nav>

<slot />
