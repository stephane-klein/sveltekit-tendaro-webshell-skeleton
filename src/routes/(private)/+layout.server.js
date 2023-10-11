import { loadFlash } from "sveltekit-flash-message/server";

export const load = loadFlash(async({parent}) => {
    return {
        ...(await parent())
    };
});

/*
export async function load({parent}) {
    return {
        ...(await parent())
    };
}*/
