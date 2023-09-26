<script>
    import Card from "$lib/Card.svelte";
    import Button from "$lib/Button.svelte";
    import FlatCard from "$lib/FlatCard.svelte";
    import OptionButton from "$lib/OptionButton.svelte";
    import SectionTitle from "$lib/SectionTitle.svelte";

    export let data;
</script>

<Card class="w-4/5 max-w-screen-xl m-auto relative grow">
    <div class="flex flex-col gap-4">
        <div class="flex-initial">
            <h2 class="text-center text-xl font-semibold text-gray-600">{data.space.title}</h2>

            <OptionButton class="absolute top-2 right-2" />
        </div>

        <p class="text-xs w-4/5 text-center m-auto flex-initial">{data.space.description}</p>

        <div class="flex flex-row gap-2 justify-center content-center">
            <Button color="secondary" size="small">Add some people</Button>

            <img
                class="h-6 w-6 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            />
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

            <slot />
        </div>
    </div>
</Card>
