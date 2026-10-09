import sitemap from "@astrojs/sitemap";
import postAudit from "@casoon/astro-post-audit";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://rehacek.dev",
    integrations: [
        sitemap(),
        postAudit({
            preset: "standard",
            failOn: "never",
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
