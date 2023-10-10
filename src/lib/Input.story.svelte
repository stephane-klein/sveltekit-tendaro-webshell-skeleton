<script>
    import Input from "$lib/Input.svelte";
    import Select from "$lib/Select.svelte";
    import Textarea from "$lib/Textarea.svelte";
    import InputLabel from "$lib/InputLabel.svelte";
    import Checkbox from "$lib/Checkbox.svelte";

    export let Hst;
</script>

<Hst.Story>
    <div>
        <InputLabel for="username">Username:</InputLabel>
        <Input type="text" name="username" />
    </div>
    <div>
        <InputLabel for="lang">Language:</InputLabel>
        <Select name="lang">
            <option value="EN">English</option>
            <option value="FR">French</option>
        </Select>
    </div>
    <div>
        <InputLabel for="description">Description:</InputLabel>
        <Textarea type="text" name="description"></Textarea>
    </div>
    <Checkbox id="invitation_required" name="invitation_required" label="Invite only">
        <p>Only people who are explicitly invited can see this project</p>
    </Checkbox>
</Hst.Story>
