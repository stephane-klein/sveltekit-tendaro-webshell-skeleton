<script>
    import { superForm } from "sveltekit-superforms/client";

    import Button from "$lib/Button.svelte";
    import Card from "$lib/Card.svelte";
    import InputLabel from "$lib/InputLabel.svelte";
    import Input from "$lib/Input.svelte";
    import Textarea from "$lib/Textarea.svelte";
    import Checkbox from "$lib/Checkbox.svelte";
    import { t } from "$lib/translations";

    export let data;

    const { form } = superForm(data.form);
</script>

<Card class="w-[60rem] mx-auto relative px-8 flex flex-col items-center">
    <h2 class="text-3xl font-semibold m-6">{$t("space_edit.Edit details for this workspace")}</h2>

    <form method="POST" class="flex flex-col gap-4 my-4 w-full">
        <div>
            <InputLabel for="title">{$t("menu.Slug:")}</InputLabel>
            <Input type="text" name="slug" bind:value={$form.slug} />
        </div>
        <div>
            <InputLabel for="title">{$t("menu.Title:")}</InputLabel>
            <Input type="text" name="title" bind:value={$form.title} />
        </div>
        <div>
            <InputLabel for="description">{$t("menu.Description:")}</InputLabel>
            <Textarea type="text" name="description" bind:value={$form.description} />
        </div>
        <Checkbox
            id="is_publicly_browsable"
            name="is_publicly_browsable"
            label={$t("menu.Publicly browsable")}
            bind:checked={$form.is_publicly_browsable}
        ></Checkbox>
        <Checkbox
            id="invitation_required"
            name="invitation_required"
            label={$t("menu.Invite only")}
            bind:checked={$form.invitation_required}
        >
            <p>{$t("space_edit.Only people who are explicitly invited can see this workspace")}</p>
        </Checkbox>

        <Button>{$t("menu.Save my changes")}</Button>
    </form>
</Card>
