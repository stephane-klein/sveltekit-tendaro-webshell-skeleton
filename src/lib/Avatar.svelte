<script>
    export let first_name = "John";
    export let last_name = "Doe";
    export let size = "normal";
</script>

<span>
    <span
        title={`${first_name} ${last_name}`}
        class={`flex flex-col justify-center items-center rounded-full bg-amber-600 box-border text-white
            ${size === "small" ? "w-8 h-8" : ""}
            ${size === "normal" ? "w-12 h-12" : ""}
            ${size === "big" ? "w-32 h-32" : ""}
        `}
    >
        <span
            class={`
                ${size === "small" ? "text-sm" : ""}
                ${size === "normal" ? "text-lg" : ""}
                ${size === "big" ? "text-6xl" : ""}`}
        >
            {first_name.substring(0, 1).toUpperCase()}{last_name.substring(0, 1).toUpperCase()}
        </span>
    </span>
</span>
