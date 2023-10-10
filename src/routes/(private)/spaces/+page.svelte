<script>
    import Card from "$lib/Card.svelte";
    import Button from "$lib/Button.svelte";
    import Avatar from "$lib/Avatar.svelte";
    import { t } from "$lib/translations";

    export let data;
</script>

<div class="flex flex-row gap-2 justify-center m-4">
    <Button href="./new/">{$t("buttons.Make a new workspace")}</Button>
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
            <div class="flex flex-row gap-1">
                {#each space.users as user}
                    <Avatar first_name={user.first_name} last_name={user.last_name} size="small" />
                {/each}
            </div>
        </Card>
    {/each}
</div>
