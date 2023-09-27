<script>
    import Card from "./Card.svelte";
    import ContextMenu from "$lib/ContextMenu.svelte";
    import ContextMenuItem from "$lib/ContextMenuItem.svelte";

    export let Hst;
</script>

<Hst.Story>
    <div class="m-4">
        <Card title="Message Board" class="w-96 h-48 relative">
            <ContextMenu>
                <ContextMenuItem href="./edit/">Edit workspace details</ContextMenuItem>
                <ContextMenuItem href="./setup/">Setup modules</ContextMenuItem>
                <ContextMenuItem href="./users/">Add some people</ContextMenuItem>
                <ContextMenuItem href="./delete/">Archive or delete</ContextMenuItem>
            </ContextMenu>
            <p class="text-xs">Hello world</p>
        </Card>
    </div>
</Hst.Story>
