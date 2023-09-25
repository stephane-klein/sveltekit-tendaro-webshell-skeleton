<script>
    export let title = "Title";
</script>

<div class={`border rounded ${$$props.class}`}>
    <h2 class="p-2 border-b text-gray-800 text-center font-semibold text-base">{title}</h2>
    <div class="m-4">
        <slot />
    </div>
</div>
