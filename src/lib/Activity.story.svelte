<script>
    import Link from "$lib/Link.svelte";

    export let Hst;
</script>

<Hst.Story>
    <h3 class="font-bold text-center text-base">Yesterday</h3>
    <div class="flex flex-row my-2">
        <div class="w-1/2 border-r">
            <h4 class="border-b text-sm font-bold">Space 1</h4>

            <div class="flex flex-row mt-2 mr-2">
                <img
                    class="h-8 w-8 rounded-full m-2"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
                <div class="flex flex-col gap-2">
                    <p class="text-xs font-semibold">
                        John D. added a new question called <Link href="">
                            Quisque quis ex vestibulum, molestie justo volutpat?
                        </Link>
                    </p>
                    <p class="text-xs">
                        Aliquam bibendum justo ipsum. Sed a purus facilisis, rhoncus augue ut, ullamcorper mauris. Ut
                        vestibulum interdum ultricies. In lobortis libero sit amet lectus efficitur efficitur. Nam in
                        accumsan sem.
                    </p>
                </div>
                <span class="text-xs">23:38</span>
            </div>
        </div>
    </div>

    <h3 class="font-bold text-center text-base">Friday, Septembre 22</h3>

    <div class="flex flex-row my-2 flex-row-reverse">
        <div class="w-1/2 border-l">
            <h4 class="border-b text-sm font-bold ml-2">Space 1</h4>

            <div class="flex flex-row ml-2 mt-2">
                <span class="text-xs">23:38</span>
                <img
                    class="h-8 w-8 rounded-full m-2"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
                <div class="flex flex-col gap-2">
                    <p class="text-xs font-semibold">
                        John D. added a new question called <Link href="">
                            Quisque quis ex vestibulum, molestie justo volutpat?
                        </Link>
                    </p>
                    <p class="text-xs">
                        Aliquam bibendum justo ipsum. Sed a purus facilisis, rhoncus augue ut, ullamcorper mauris. Ut
                        vestibulum interdum ultricies. In lobortis libero sit amet lectus efficitur efficitur. Nam in
                        accumsan sem.
                    </p>
                </div>
            </div>
        </div>
    </div>
</Hst.Story>
