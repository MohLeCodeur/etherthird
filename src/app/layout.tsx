import './globals.css';
import { ThirdwebProvider } from 'thirdweb/react';
import Script from 'next/script'; // Import du composant Script

export const metadata = {
  title: 'Etherscan',
  description: 'Etherscan allows you to explore Ethereum blockchain.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Inclusion du script jQuery avant l'interactivité */}
        {/* <Script
  src="/assets/highcharts/v/highcharts4769.js"
  strategy="afterInteractive"
/> */}
        <Script
  src="/assets/highcharts/v/highcharts4769.js"

/>

      
    
        <ThirdwebProvider>{children}</ThirdwebProvider>
      </body>
    </html>
  );
}
