<script>
    import Card from "$lib/Card.svelte";
    import Avatar from "$lib/Avatar.svelte";
    import Button from "$lib/Button.svelte";
    import SectionTitle from "$lib/SectionTitle.svelte";
    import { t } from "$lib/translations";

    export let data;
</script>

<Card class="w-[60rem] mx-auto relative flex flex-col items-center grow" title="">
    <div class="border-b w-full py-4 relative">
        <Button href="./add/" class="absolute top-0 left-0 mx-4 my-6 flex flex-row gap-2" size="normal">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-user-plus"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M16 19h6"></path>
                <path d="M19 16v6"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
            </svg>
            <span>{$t("menu.Add people")}</span>
        </Button>
        <h2 class="text-3xl font-semibold m-2 text-center">{$t("space_members.People who can see this project")}</h2>
    </div>
    <div class="p-4 w-full">
        <div class="flex flex-col gap-2 w-full">
            {#each data.members as member}
                <div class="flex flex-row gap-2">
                    <Avatar size="small" first_name={member.first_name} last_name={member.last_name} />
                    <div class="flex flex-col gap-2">
                        <div>
                            {member.first_name}
                            {member.last_name}
                        </div>
                        <div>
                            {#if member.role == "space.OWNER"}Owner{/if}
                        </div>
                    </div>
                </div>
            {/each}

            <SectionTitle class="my-8 text-xl" as="h3" align="center">
                {$t("space_members.Pending people")}
            </SectionTitle>

            {#each data.invitations as invite}
                <div class="flex flex-row gap-2">
                    {invite.email}
                    {$t("space_members.invited by")}
                    {invite.invited_by_first_name}
                    {invite.invited_by_last_name} at {invite.invited_at}
                </div>
            {/each}
        </div>
    </div>
</Card>
