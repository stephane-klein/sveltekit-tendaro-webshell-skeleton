<script>
    import { goto } from "$app/navigation";

    export let data;
</script>

<div class="grow flex flex-col">
    <div
        class="bg-white p-3 shadow shadow-slate-300 rounded-t-lg w-[55rem] mx-auto cursor-pointer"
        on:click|self={() => {
            goto(`/spaces/${data.space.slug}/`);
        }}
    >
        <h2 class="text-center text-base font-semibold text-blue-600 underline">
            <a href={`/spaces/${data.space.slug}/`}>{data.space.title}</a>
        </h2>
    </div>

    <slot />
</div>
