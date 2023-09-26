<script>
    export let as = "h3";
    export let align = "left";
</script>

<!-- <svelte:element -->
<!--     this={as} -->
<!--     class={`relative inline-block box-border w-full ${align == "center" ? "text-center" : ""} ${$$props.class}`} -->
<!-- > -->
<!--     <div class="absolute w-full top-1/2 box-border z-10 px-2"><div class="border-b border-b-gray-200"></div></div> -->
<!--     <span class={`relative z-20 bg-transparent ${align == "left" ? "pr-2" : "px-2"}`}><slot /></span> -->
<!-- </svelte:element> -->
<svelte:element this={as} class={`flex flex-row gap-2 w-full items-center ${$$props.class}`}>
    {#if align == "center"}
        <div class="grow border-b border-b-gray-200 h-1"></div>
    {/if}
    <span><slot /></span>
    <div class="grow border-b border-b-gray-200 h-1"></div>
</svelte:element>
