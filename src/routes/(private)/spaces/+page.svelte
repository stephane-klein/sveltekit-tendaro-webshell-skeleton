<script>
    import Card from "$lib/Card.svelte";
    import Button from "$lib/Button.svelte";
    import { t } from "$lib/translations";

    export let data;
</script>

<div class="flex flex-row gap-2 justify-center m-4">
    <Button>{$t("buttons.Make a new workspace")}</Button>
    <Button>{$t("buttons.Invite people")}</Button>
</div>

<p class="text-center text-xs">{$t("spaces.Pinned and recent workspace below")}.</p>

<div class="flex flex-row gap-4 m-4 justify-center">
    {#each data.spaces as space}
        <Card class="w-64 h-48 flex flex-col gap-2">
            <h2 class="text-base font-semibold text-gray-600">
                <a data-sveltekit-reload href={`/spaces/${space.slug}/`}>{space.title}</a>
            </h2>
            <div class="grow">
                <p class="text-xs">{space.description}</p>
            </div>
            <div>
                <img
                    class="h-6 w-6 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </div>
        </Card>
    {/each}
</div>
