import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { BootScreen } from "@/components/boot-screen";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import appCss from "../styles.css?url";

const APP_NAME = "Geoff Walsh";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Geoff Walsh — operations leader in Calgary building data tools around a full-time job.",
      },
      { name: "theme-color", content: "#0c0b0b" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(localStorage.getItem("gw-boot")==="1"||/view=tv/.test(location.search)||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.boot="done"}catch(e){}',
          }}
        />
        <HeadContent />
      </head>
      <body className="bg-ink text-fg">
        <noscript>
          <style>{`html{overflow:auto}html .gw-boot{display:none}`}</style>
        </noscript>
        <PreviewHostBridge />
        <BootScreen />
        <AuthProvider>
          <div className="flex min-h-dvh flex-col">
            <SiteHeader />
            <div className="flex-1">
              <Outlet />
            </div>
            <SiteFooter />
          </div>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
