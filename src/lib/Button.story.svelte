<script>
    import Button from "$lib/Button.svelte";

    export let Hst;
</script>

<Hst.Story>
    <Button color="primary">Primary</Button>

    <Button color="secondary">Secondary</Button>

    <br />

    <Button color="secondary" size="small">Secondary</Button>
</Hst.Story>
