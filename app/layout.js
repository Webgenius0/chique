import { DM_Sans, Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

// Primary - DM Sans (all weights)
const primaryFont = DM_Sans({
    subsets: ['latin'],
    variable: '--font-primary',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

// Secondary - Playfair Display (all weights/styles)
const secondaryFont = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-secondary',
    weight: ['400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
});

// Special - Poppins (all weights)
const specialFont = Poppins({
    subsets: ['latin'],
    variable: '--font-special',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${primaryFont.variable} ${secondaryFont.variable} ${specialFont.variable}`}>
            <body>
                <AntdRegistry>
                    {children}
                </AntdRegistry>
            </body>
        </html>
    );
}


