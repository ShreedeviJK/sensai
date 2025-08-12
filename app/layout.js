import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">
              <div className="container mx-auto px-4">{children}</div>
            </main>
            <Toaster richColors />

            {/* Enhanced footer */}
            <footer className="relative border-t border-border/40 bg-background/60 backdrop-blur">
              {/* Decorative subtle glow */}
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_60%)]" />
              </div>

              <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
                  <div className="md:col-span-2">
                    <div className="mb-4 flex items-center gap-3">
                      {/* <img
                        src="/logo.png"
                        alt="AI Career Coach logo"
                        className="h-8 w-8 rounded"
                      /> */}
                      <span className="text-lg font-semibold tracking-tight">
                        AI Career Coach
                      </span>
                    </div>
                    <p className="max-w-md text-sm text-muted-foreground">
                      Personal AI guidance for resumes, interviews, and career
                      growth—built with Next.js and Clerk.
                    </p>
                  </div>

                  {/* <div>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">
                      Product
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        <a
                          className="hover:text-foreground hover:underline"
                          href="/features"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-foreground hover:underline"
                          href="/pricing"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-foreground hover:underline"
                          href="/roadmap"
                        >
                          Roadmap
                        </a>
                      </li>
                    </ul>
                  </div> */}

                  {/* <div>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">
                      Resources
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        <a
                          className="hover:text-foreground hover:underline"
                          href="/docs"
                        >
                          Docs
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-foreground hover:underline"
                          href="/blog"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-foreground hover:underline"
                          href="/support"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div> */}

                  {/* <div>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">
                      Company
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        <a
                          className="hover:text-foreground hover:underline"
                          href="/about"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-foreground hover:underline"
                          href="/careers"
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-foreground hover:underline"
                          href="/contact"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground md:flex-row">
                  <p>
                    © {new Date().getFullYear()} AI Career Coach. All rights
                    reserved.
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      className="hover:text-foreground hover:underline"
                      href="/legal/privacy"
                    >
                      Privacy
                    </a>
                    <span aria-hidden>•</span>
                    <a
                      className="hover:text-foreground hover:underline"
                      href="/legal/terms"
                    >
                      Terms
                    </a>
                    <span aria-hidden>•</span>
                    <a
                      className="hover:text-foreground hover:underline"
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
