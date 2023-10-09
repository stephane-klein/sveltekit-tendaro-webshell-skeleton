<script>
    import Input from "$lib/Input.svelte";
    import InputLabel from "$lib/InputLabel.svelte";

    export let Hst;
</script>

<Hst.Story>
    <div>
        <InputLabel for="username">Username:</InputLabel>
        <Input type="text" name="username" />
    </div>
</Hst.Story>
