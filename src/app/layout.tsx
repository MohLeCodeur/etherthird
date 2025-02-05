import './globals.css';
import { ThirdwebProvider } from 'thirdweb/react';
import Script from 'next/script'; // Import du composant Script
import { ConnectionProvider } from "@/context/ConnectionContext";

export const metadata = {
  title: 'Etherscan',
  description: 'Etherscan allows you to explore Ethereum blockchain.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Inclusion du script jQuery avant l'interactivité */}
   

      
    
        <ConnectionProvider>   <ThirdwebProvider>{children}</ThirdwebProvider>  </ConnectionProvider>
      </body>
    </html>
  );
}
