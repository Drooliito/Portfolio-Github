import { defineConfig } from "astro/config";

const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  site: isVercel
    ? "https://tusitio.vercel.app"
    : "https://drooliito.github.io/Portfolio-Github",
  base: isVercel ? "/" : "/Portfolio-Github/",
  output: "static",
});
