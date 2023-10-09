<script>
    import { superForm } from "sveltekit-superforms/client";

    import Button from "$lib/Button.svelte";
    import Card from "$lib/Card.svelte";
    import Input from "$lib/Input.svelte";
    import InputLabel from "$lib/InputLabel.svelte";

    export let data;

    const { form } = superForm(data.form);
</script>

<Card class="w-[40rem] mx-auto relative px-8 flex flex-col items-center">
    <h2 class="text-3xl font-semibold m-6">Change your password</h2>
    <form method="POST" class="flex flex-col gap-4 my-4 w-full">
        <div>
            <InputLabel for="new_password">Create a new password:</InputLabel>
            <Input type="password" name="new_password" bind:value={$form.new_password} />
        </div>
        <div>
            <InputLabel for="confirm_new_password">Confirm your new password:</InputLabel>
            <Input type="password" name="confirm_new_password" bind:value={$form.confirm_new_password} />
        </div>
        <Button>Save password</Button>
    </form>
</Card>
