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

<form method="POST" class="flex flex-col items-center gap-4">
    <h2 class="text-3xl font-semibold m-6">Make a new workspace</h2>

    <Card class="w-[40rem] mx-auto relative px-8 flex flex-col items-center">
        <div class="flex flex-col gap-4 my-4 w-full">
            <div>
                <InputLabel for="title">Slug:</InputLabel>
                <Input type="text" name="slug" bind:value={$form.slug} />
            </div>
            <div>
                <InputLabel for="title">Title:</InputLabel>
                <Input type="text" name="title" bind:value={$form.title} />
            </div>
            <div>
                <InputLabel for="description">Description:</InputLabel>
                <Textarea type="text" name="description" bind:value={$form.description} />
            </div>
        </div>
    </Card>

    <Button>Create this workspace</Button>
</form>
