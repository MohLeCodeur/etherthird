import './globals.css';
import Head from 'next/head';
import { ThirdwebProvider } from 'thirdweb/react';


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Head>
                <title>Ethereum (ETH) Blockchain Explorer</title>
                <meta name="description" content="Etherscan allows you to explore Ethereum blockchain." />
                
            </Head>
            <body>
            <ThirdwebProvider>
                {children}
                </ThirdwebProvider>
          
            </body>
        </html>
    );
}
