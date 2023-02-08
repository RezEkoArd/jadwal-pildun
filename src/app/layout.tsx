import './globals.css'
import "moment/locale/id"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className='container min-h-screen'>
         {children}
        </main>
        <footer className='p-[40px] bg-zinc-100 mt-[10px]'>
          Made By Rezekoard @2023
        </footer>
      </body>
    </html>
  )
}
