<script>
    import { goto } from "$app/navigation";
    import { t } from "$lib/translations";
</script>

<div class="grow flex flex-col">
    <div
        class="bg-white p-3 shadow shadow-slate-300 rounded-t-lg w-[60rem] mx-auto cursor-pointer"
        on:click|self={() => {
            goto("../");
        }}
    >
        <h2 class="text-center text-base font-semibold text-blue-600 underline">
            <a href="./../">{$t("space_members.People who can see this project")}</a>
        </h2>
    </div>

    <slot />
</div>
