<script>
    import { superForm } from "sveltekit-superforms/client";

    import Button from "$lib/Button.svelte";
    import Card from "$lib/Card.svelte";
    import InputLabel from "$lib/InputLabel.svelte";
    import Select from "$lib/Select.svelte";

    export let data;

    const { form } = superForm(data.form);
</script>

<Card class="w-[40rem] mx-auto relative px-8 flex flex-col items-center">
    <h2 class="text-3xl font-semibold m-6">Preferences</h2>

    <form method="POST" class="flex flex-col gap-4 my-4 w-full">
        <div>
            <InputLabel for="lang">Language:</InputLabel>
            <Select name="lang">
                <option value="EN" selected={$form.lang == "EN"}>English</option>
                <option value="FR" selected={$form.lang == "FR"}>French</option>
            </Select>
        </div>
        <Button>Save my changes</Button>
    </form>
</Card>
