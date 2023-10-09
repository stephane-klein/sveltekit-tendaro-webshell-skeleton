<script>
    import Input from "$lib/Input.svelte";
    import Select from "$lib/Select.svelte";
    import InputLabel from "$lib/InputLabel.svelte";

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
</Hst.Story>
