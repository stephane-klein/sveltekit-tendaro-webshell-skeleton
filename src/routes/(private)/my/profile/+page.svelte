<script>
    import { superForm } from "sveltekit-superforms/client";

    import Button from "$lib/Button.svelte";
    import Card from "$lib/Card.svelte";
    import Avatar from "$lib/Avatar.svelte";

    export let data;

    const { form } = superForm(data.form);
</script>

<Card class="w-[40rem] mx-auto relative px-8 flex flex-col items-center">
    <Avatar size="big" first_name={data.form.data.first_name} last_name={data.form.data.last_name} />

    <form method="POST" class="flex flex-col gap-4 my-4 w-full">
        <div>
            <label class="font-semibold" for="username">Username:</label>
            <input class="w-full border p-2" type="text" name="username" bind:value={$form.username} />
        </div>
        <div>
            <label class="font-semibold" for="first_name">Firstname:</label>
            <input class="w-full border p-2" type="text" name="first_name" bind:value={$form.first_name} />
        </div>
        <div>
            <label class="font-semibold" for="last_name">Lastname:</label>
            <input class="w-full border p-2" type="text" name="last_name" bind:value={$form.last_name} />
        </div>
        <div>
            <label class="font-semibold" for="email">Email:</label>
            <input class="w-full border p-2" type="text" name="email" bind:value={$form.email} />
        </div>
        <Button>Save my changes</Button>
    </form>
</Card>
