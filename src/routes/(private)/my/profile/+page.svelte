<script>
    import { superForm } from "sveltekit-superforms/client";

    import Button from "$lib/Button.svelte";
    import Card from "$lib/Card.svelte";
    import Avatar from "$lib/Avatar.svelte";
    import Input from "$lib/Input.svelte";
    import InputLabel from "$lib/InputLabel.svelte";

    export let data;

    const { form } = superForm(data.form);
</script>

<Card class="w-[40rem] mx-auto relative px-8 flex flex-col items-center">
    <Avatar size="big" first_name={data.form.data.first_name} last_name={data.form.data.last_name} />

    <form method="POST" class="flex flex-col gap-4 my-4 w-full">
        <div>
            <InputLabel for="username">Username:</InputLabel>
            <Input type="text" name="username" bind:value={$form.username} />
        </div>
        <div>
            <InputLabel for="first_name">Firstname:</InputLabel>
            <Input type="text" name="first_name" bind:value={$form.first_name} />
        </div>
        <div>
            <InputLabel for="last_name">Lastname:</InputLabel>
            <Input type="text" name="last_name" bind:value={$form.last_name} />
        </div>
        <div>
            <InputLabel for="email">Email:</InputLabel>
            <Input type="text" name="email" bind:value={$form.email} />
        </div>
        <Button>Save my changes</Button>
    </form>
</Card>
