import { defineConfig } from "histoire";
import { HstSvelte } from "@histoire/plugin-svelte";

export default defineConfig({
    setupFile: "/src/histoire-setup.js",
    plugins: [
        HstSvelte()
    ],
    backgroundPresets: [
        {
            label: "Light theme",
            color: "#fffcf9",
            contrastColor: "#333"
        }
    ]
});
