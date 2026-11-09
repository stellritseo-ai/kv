// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
  vite: {
    plugins: [
      {
        name: "api-send-email-dev",
        configureServer(server) {
          server.middlewares.use("/api/send-email", async (req, res, next) => {
            if (req.method !== "POST") return next();
            try {
              let bodyStr = "";
              for await (const chunk of req) {
                bodyStr += chunk;
              }
              const body = JSON.parse(bodyStr || "{}");
              const { sendEmailNotification } = await server.ssrLoadModule("/src/server/mail-sender.ts");
              const result = await sendEmailNotification(body);
              res.setHeader("Content-Type", "application/json");
              res.statusCode = result.success ? 200 : 500;
              res.end(JSON.stringify(result));
            } catch (err: any) {
              res.setHeader("Content-Type", "application/json");
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: err?.message }));
            }
          });
        },
      },
    ],
  },
});
