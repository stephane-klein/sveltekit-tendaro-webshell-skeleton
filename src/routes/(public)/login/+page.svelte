<script>
    import Card from "$lib/Card.svelte";
    import logo from "$lib/assets/tendaro.svg";

    import { t, locale, locales } from "$lib/translations";

    const handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;

        document.cookie = `lang=${value} ; path=/`;
    };

    export let form;
</script>

<div class="absolute top-0 right-0 p-2">
    <select bind:value={$locale} on:change={handleChange} class="bg-transparent text-xs">
        {#each $locales as value}
            <option {value}>{$t(`lang.${value}`)}</option>
        {/each}
    </select>
</div>

<form method="POST">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <img alt="Tendaro logo" class="w-16 mx-auto" src={logo} />

        <Card>
            <h1 class="text-center my-4 text-xl font-semibold">{$t("login.Log in to Tendaro")}</h1>

            {#if form?.error}<p class="error">{form.error}</p>{/if}
            <div class="my-2">
                <label for="email">{$t("login.Email:")}</label>
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
                <label for="password">{$t("login.Password:")}</label>
                <input class="w-full border p-2 bg-white" id="password" name="password" type="password" />
            </div>

            <input
                class="text-center border-x border-t border-b-2 w-full my-2 py-1 cursor-pointer"
                type="submit"
                value={$t("login.Login")}
            />
        </Card>

        <p class="text-center py-8 text-sm underline text-blue-600">
            <a href="../reset_password/">{$t("login.Forget password?")}</a>
        </p>
    </div>
</form>
