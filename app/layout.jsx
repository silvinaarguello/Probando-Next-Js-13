import './globals.css';
import { Navigation } from "./components/navigation"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
     <title> Esto es una hermosura </title>
     </head>
      <body>
       <Navigation />
        {children}
        </body>
    </html>
  )
}
