<script>
    import { superForm } from "sveltekit-superforms/client";

    import Button from "$lib/Button.svelte";
    import Card from "$lib/Card.svelte";
    import InputLabel from "$lib/InputLabel.svelte";
    import Input from "$lib/Input.svelte";

    export let data;

    const { form } = superForm(data.form);
</script>

<Card class="w-[65rem] mx-auto relative flex flex-col items-center grow" title="">
    <div class="border-b w-full py-4 relative">
        <h2 class="text-3xl font-semibold m-2 text-center">Invite a member</h2>
    </div>
    <div class="p-4 w-full">
        <form method="POST" class="flex flex-col gap-4 my-4 w-full">
            {#if form?.error}<p class="error">{form.error}</p>{/if}
            <div>
                <InputLabel for="title">Email:</InputLabel>
                <Input type="text" name="email" bind:value={$form.email} />
            </div>

            <Button>Invite</Button>
        </form>
    </div>
</Card>
