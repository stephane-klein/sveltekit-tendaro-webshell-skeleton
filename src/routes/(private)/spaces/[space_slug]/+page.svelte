<script>
    import Card from "$lib/Card.svelte";
    import Button from "$lib/Button.svelte";
    import FlatCard from "$lib/FlatCard.svelte";
    import ContextMenu from "$lib/ContextMenu.svelte";
    import ContextMenuItem from "$lib/ContextMenuItem.svelte";
    import SectionTitle from "$lib/SectionTitle.svelte";
    import Link from "$lib/Link.svelte";
    import Avatar from "$lib/Avatar.svelte";
    import { t } from "$lib/translations";

    export let data;
</script>

<Card class="w-4/5 max-w-screen-xl m-auto relative grow px-8 p-4">
    <div class="flex flex-col gap-4">
        <div class="flex-initial">
            <h2 class="text-center text-xl font-semibold text-gray-600">{data.space.title}</h2>

            <ContextMenu>
                <ContextMenuItem href="./edit/">{$t("menu.Edit workspace details")}</ContextMenuItem>
                <ContextMenuItem href="./setup/">{$t("menu.Setup modules")}</ContextMenuItem>
                <ContextMenuItem href="./users/">{$t("menu.Add some people")}</ContextMenuItem>
                <ContextMenuItem href="./delete/">{$t("menu.Archive or delete")}</ContextMenuItem>
            </ContextMenu>
        </div>

        <p class="text-xs w-4/5 text-center m-auto flex-initial">{data.space.description}</p>

        <div class="flex flex-row gap-2 justify-center content-center">
            {#if data.space.users.length == 1}
                <Button href="./members/" color="secondary" size="small">{$t("menu.Add some people")}</Button>
            {:else}
                <Button href="./members/" color="secondary" size="small">{$t("menu.Set up people")}</Button>
            {/if}

            <div class="flex flex-row gap-1">
                {#each data.space.users as user}
                    <Avatar first_name={user.first_name} last_name={user.last_name} size="small" />
                {/each}
            </div>
        </div>

        <div class="flex flex-row gap-2 justify-center flex-wrap m-auto flex-none">
            <FlatCard title="Message Board" class="m-2 w-1/5 h-48">
                <p class="text-xs">
                    Post announcements, pitch ideas, and gather feedback while keeping discussions organized and
                    on-topic.
                </p>
            </FlatCard>

            <FlatCard title="Message Board" class="m-2 w-1/5 h-48">
                <p class="text-xs">
                    Post announcements, pitch ideas, and gather feedback while keeping discussions organized and
                    on-topic.
                </p>
            </FlatCard>

            <FlatCard title="Message Board" class="m-2 w-1/5 h-48">
                <p class="text-xs">
                    Post announcements, pitch ideas, and gather feedback while keeping discussions organized and
                    on-topic.
                </p>
            </FlatCard>

            <FlatCard title="Message Board" class="m-2 w-1/5 h-48">
                <p class="text-xs">
                    Post announcements, pitch ideas, and gather feedback while keeping discussions organized and
                    on-topic.
                </p>
            </FlatCard>

            <FlatCard title="Message Board" class="m-2 w-1/5 h-48">
                <p class="text-xs">
                    Post announcements, pitch ideas, and gather feedback while keeping discussions organized and
                    on-topic.
                </p>
            </FlatCard>

            <SectionTitle align="center" class="mt-4"><span class="font-bold">Workspace Activity</span></SectionTitle>

            <div class="flex flex-col">
                <h3 class="font-bold text-center text-base">Yesterday</h3>
                <div class="flex flex-row my-2">
                    <div class="w-1/2 border-r">
                        <h4 class="border-b text-sm font-bold">Space 1</h4>

                        <div class="flex flex-row mt-2 mr-2">
                            <img
                                class="h-8 w-8 rounded-full m-2"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <div class="flex flex-col gap-2">
                                <p class="text-xs font-semibold">
                                    John D. added a new question called <Link href="">
                                        Quisque quis ex vestibulum, molestie justo volutpat?
                                    </Link>
                                </p>
                                <p class="text-xs">
                                    Aliquam bibendum justo ipsum. Sed a purus facilisis, rhoncus augue ut, ullamcorper
                                    mauris. Ut vestibulum interdum ultricies. In lobortis libero sit amet lectus
                                    efficitur efficitur. Nam in accumsan sem.
                                </p>
                            </div>
                            <span class="text-xs">23:38</span>
                        </div>
                    </div>
                </div>

                <h3 class="font-bold text-center text-base">Friday, Septembre 22</h3>

                <div class="flex flex-row my-2 flex-row-reverse">
                    <div class="w-1/2 border-l">
                        <h4 class="border-b text-sm font-bold ml-2">Space 1</h4>

                        <div class="flex flex-row ml-2 mt-2">
                            <span class="text-xs">23:38</span>
                            <img
                                class="h-8 w-8 rounded-full m-2"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <div class="flex flex-col gap-2">
                                <p class="text-xs font-semibold">
                                    John D. added a new question called <Link href="">
                                        Quisque quis ex vestibulum, molestie justo volutpat?
                                    </Link>
                                </p>
                                <p class="text-xs">
                                    Aliquam bibendum justo ipsum. Sed a purus facilisis, rhoncus augue ut, ullamcorper
                                    mauris. Ut vestibulum interdum ultricies. In lobortis libero sit amet lectus
                                    efficitur efficitur. Nam in accumsan sem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <slot />
        </div>
    </div>
</Card>
