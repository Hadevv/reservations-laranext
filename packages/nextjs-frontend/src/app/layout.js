import '@/app/global.css'
import { Toaster } from 'sonner'

export const metadata = {
    title: 'Laravel',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
                <Toaster richColors />
            </body>
        </html>
    )
}

export default RootLayout
