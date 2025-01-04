import './globals.css';
import { ThirdwebProvider } from 'thirdweb/react';

export const metadata = {
  title: 'Ethereum (ETH) Blockchain Explorer',
  description: 'Etherscan allows you to explore Ethereum blockchain.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider>{children}</ThirdwebProvider>
      </body>
    </html>
  );
}
