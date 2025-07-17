import { DM_Sans, Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Toaster } from 'react-hot-toast';

export const metadata = {
    title: "Chique",
    description: "Your Personal Style Assistant. Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique AI.",

    // Open Graph (Facebook) meta tags
    openGraph: {
        title: "Chique",
        description: "Your Personal Style Assistant. Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique AI.",
        url: "https://chique-dev.netlify.app/", // Your actual URL
        siteName: "Chique",
        images: [
            {
                url: "/images/meta_images/facebook_meta.png", // Local path (inside `public`)
                width: 1200, // Recommended OG image size
                height: 630,
                alt: "Chique - Your Personal Style Assistant",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    // Twitter Card meta tags
    twitter: {
        card: "summary_large_image",
        title: "Chique | Home",
        description: "Your Personal Style Assistant. Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique AI.",
        images: ["/images/meta_images/facebook_meta.png"], // Same or different image for Twitter
        site: "@yourtwitterhandle", // Replace with your Twitter handle
        creator: "@yourtwitterhandle", // Replace with your Twitter handle
    },

    // Additional meta tags
    metadataBase: new URL("https://chique-dev.netlify.app"), // Must match your domain
    alternates: {
        canonical: "/",
    },
    themeColor: "#ffffff",
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};






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
        <html lang="en" suppressHydrationWarning className={`${primaryFont.variable} ${secondaryFont.variable} ${specialFont.variable}`}>
            <body suppressHydrationWarning>
                <Toaster position="top-center" />
                <AntdRegistry>
                    {children}
                </AntdRegistry>
            </body>
        </html>
    );
}


