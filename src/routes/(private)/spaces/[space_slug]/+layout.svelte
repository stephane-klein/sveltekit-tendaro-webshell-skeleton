<script>
    import Card from "$lib/Card.svelte";
    import Button from "$lib/Button.svelte";
    import FlatCard from "$lib/FlatCard.svelte";
    import OptionButton from "$lib/OptionButton.svelte";

    export let data;
</script>

<Card class="w-4/5 m-auto flex flex-col gap-4 relative">
    <h2 class="text-center text-xl font-semibold text-gray-600">{data.space.title}</h2>

    <OptionButton class="absolute top-2 right-2" />

    <p class="text-xs w-4/5 text-center m-auto">{data.space.description}</p>

    <div class="flex flex-row gap-2 justify-center content-center">
        <Button color="secondary" size="small">Add some people</Button>

        <img
            class="h-6 w-6 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
        />
    </div>

    <div class="flex flex-row gap-2 justify-center flex-wrap">
        <FlatCard title="Message Board" class="m-2 w-1/4">
            <p class="text-xs">
                Post announcements, pitch ideas, and gather feedback while keeping discussions organized and on-topic.
            </p>
        </FlatCard>

        <FlatCard title="Message Board" class="m-2 w-1/4">
            <p class="text-xs">
                Post announcements, pitch ideas, and gather feedback while keeping discussions organized and on-topic.
            </p>
        </FlatCard>

        <FlatCard title="Message Board" class="m-2 w-1/4">
            <p class="text-xs">
                Post announcements, pitch ideas, and gather feedback while keeping discussions organized and on-topic.
            </p>
        </FlatCard>

        <FlatCard title="Message Board" class="m-2 w-1/4">
            <p class="text-xs">
                Post announcements, pitch ideas, and gather feedback while keeping discussions organized and on-topic.
            </p>
        </FlatCard>

        <FlatCard title="Message Board" class="m-2 w-1/4">
            <p class="text-xs">
                Post announcements, pitch ideas, and gather feedback while keeping discussions organized and on-topic.
            </p>
        </FlatCard>

        <slot />
    </div>
</Card>
