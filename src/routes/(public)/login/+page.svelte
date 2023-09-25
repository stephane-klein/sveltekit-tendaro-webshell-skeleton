<script>
    import Card from "$lib/Card.svelte";
    import logo from "$lib/assets/tendaro.svg";

    export let form;
</script>

<form method="POST">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <img alt="Tendaro logo" class="w-16 mx-auto" src={logo} />

        <Card>
            <h1 class="text-center my-4 text-xl font-semibold">Log in to Tendaro</h1>

            {#if form?.error}<p class="error">{form.error}</p>{/if}
            <div class="my-2">
                <label for="email">Email:</label>
                <input
                    class="w-full border p-2"
                    id="email"
                    name="email"
                    type="email"
                    value={form?.email ?? ""}
                    placeholder="jogn.doe@example.com"
                    autofocus="autofocus"
                    autocomplete="autocomplete"
                />
            </div>
            <div class="my-2">
                <label for="password">Password:</label>
                <input class="w-full border p-2 bg-white" id="password" name="password" type="password" />
            </div>

            <input
                class="text-center border-x border-t border-b-2 w-full my-2 py-1 cursor-pointer"
                type="submit"
                value="Login"
            />
        </Card>

        <p class="text-center py-8 text-sm underline text-blue-600">
            <a href="../password_reset/">Forget password?</a>
        </p>
    </div>
</form>
