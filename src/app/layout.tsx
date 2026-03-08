import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import ThemeRegistry from "@/theme/ThemeRegistry"
import ReactQueryProvider from "@/lib/react-query/provider"
import Header from "./components/Header/Header"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <ReactQueryProvider>
              <Header/>
              {children}
            </ReactQueryProvider>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
