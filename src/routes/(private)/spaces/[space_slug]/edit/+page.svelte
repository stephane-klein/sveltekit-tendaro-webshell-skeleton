<script>
    import { superForm } from "sveltekit-superforms/client";

    import Button from "$lib/Button.svelte";
    import Card from "$lib/Card.svelte";
    import InputLabel from "$lib/InputLabel.svelte";
    import Input from "$lib/Input.svelte";
    import Textarea from "$lib/Textarea.svelte";

    export let data;

    const { form } = superForm(data.form);
</script>

<Card class="w-[40rem] mx-auto relative px-8 flex flex-col items-center">
    <h2 class="text-3xl font-semibold m-6">Edit details for this workspace</h2>

    <form method="POST" class="flex flex-col gap-4 my-4 w-full">
        <div>
            <InputLabel for="title">Title:</InputLabel>
            <Input type="text" name="title" bind:value={$form.title} />
        </div>
        <div>
            <InputLabel for="description">Description:</InputLabel>
            <Textarea type="text" name="description" bind:value={$form.description} />
        </div>
        <Button>Save my changes</Button>
    </form>
</Card>
