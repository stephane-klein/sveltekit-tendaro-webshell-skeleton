<script>
    export let id = undefined;
    export let label = undefined;
</script>

<div class="flex gap-2 justify-items-start">
    <input
        {id}
        type="checkbox"
        class="my-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        {...$$restProps}
    />
    <div class="flex flex-col">
        <label for={id} class="font-semibold">{label}</label>
        <slot />
    </div>
</div>
