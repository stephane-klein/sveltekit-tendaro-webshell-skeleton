<script>
    export let as = "h3";
    export let align = "left";
</script>

<svelte:element this={as} class={`flex flex-row gap-2 w-full items-center ${$$props.class}`}>
    {#if align == "center"}
        <div class="grow border-b border-b-gray-200 h-1"></div>
    {/if}
    <span><slot /></span>
    <div class="grow border-b border-b-gray-200 h-1"></div>
</svelte:element>
