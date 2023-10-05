<script>
    export let first_name = "John";
    export let last_name = "Doe";
    export let size = "normal";
</script>

<span>
    <span
        title={`${first_name} ${last_name}`}
        class={`rounded-full bg-amber-600 box-border text-white ${
            size == "small" ? "leading-6 text-sm p-1" : "leading-10 text-base p-2"
        }`}
    >
        {first_name.substring(0, 1).toUpperCase()}{last_name.substring(0, 1).toUpperCase()}
    </span>
</span>
