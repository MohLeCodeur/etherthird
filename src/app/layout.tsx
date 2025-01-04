import './globals.css';
import Head from 'next/head';
import Script from 'next/script';
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
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-T1JC9RNQXV"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-T1JC9RNQXV', { 'anonymize_ip': true });
                `}} />
            </body>
        </html>
    );
}
export  function Scripts() {
    return (
        <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T1JC9RNQXV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-T1JC9RNQXV', { 'anonymize_ip': true });
        `}
      </Script>
      <Script src="/assets/vendor/jquery/dist/jquery.min4769.js" strategy="beforeInteractive" />
      <Script src="/jss/blockies4769.js" strategy="beforeInteractive" />
      <Script src="/assets/js/theme-appearance4769.js" strategy="lazyOnload" />
      <Script id="search-box-ads" strategy="lazyOnload">
        {`
          // Search box text ad
          var availableAd = [];
          var gotAd = [];

          availableAd = [
            "<div class='p-2'><a href='https://moonpay-affiliate-program.sjv.io/GmG56B' rel='nofollow' target='_blank' data-bs-toggle='tooltip' data-bs-trigger='hover' title='Links to an External Advertiser site' class='search-panel-ads d-flex align-items-center p-2 rounded'><div class='me-2'><img width='22' src='/images/gen/moonpay_20.png' alt='Ads'></div><div class='text-truncate'><h6 class='d-flex align-items-center fs-sm text-dark mb-0'><div class='text-truncate me-2'>MoonPay: Buy & Sell Crypto with a credit card.</div><span class='d-none d-sm-inline-block small bg-white text-muted rounded-1 border px-2 py-1 ms-1'>Sponsored</span><span class='d-inline-block d-sm-none small bg-white text-muted rounded-1 border px-2 py-1 ms-1'>Ad</span></h6></div></a></div>",
            "<div class='p-2'><a href='https://goto.etherscan.com/rd/KUBICX7P38SWJDDX9ANJIH3ZJ' rel='nofollow' target='_blank' data-bs-toggle='tooltip' data-bs-trigger='hover' title='Links to an External Advertiser site' class='search-panel-ads d-flex align-items-center p-2 rounded'><div class='me-2'><img width='22' src='/images/gen/lightchainai_20.png' alt='Lightchain'></div><div class='text-truncate'><h6 class='d-flex align-items-center fs-sm text-dark mb-0'><div class='text-truncate me-2'>Lightchain Protocol AI Presale Live</div><span class='d-none d-sm-inline-block small bg-white text-muted rounded-1 border px-2 py-1 ms-1'>Sponsored</span><span class='d-inline-block d-sm-none small bg-white text-muted rounded-1 border px-2 py-1 ms-1'>Ad</span></h6></div></a></div>",
            "<div class='p-2'><a href='https://goto.etherscan.com/rd/APT6W8I8NPHNUG4KHKADJSKRV' rel='nofollow' target='_blank' data-bs-toggle='tooltip' data-bs-trigger='hover' title='Links to an External Advertiser site' class='search-panel-ads d-flex align-items-center p-2 rounded'><div class='me-2'><img width='22' src='/images/gen/earnm2_20.png' alt='$EARNM'></div><div class='text-truncate'><h6 class='d-flex align-items-center fs-sm text-dark mb-0'><div class='text-truncate me-2'>$EARNM Initial Merge Offering (IMO)</div><span class='d-none d-sm-inline-block small bg-white text-muted rounded-1 border px-2 py-1 ms-1'>Sponsored</span><span class='d-inline-block d-sm-none small bg-white text-muted rounded-1 border px-2 py-1 ms-1'>Ad</span></h6></div></a></div>"
          ];
          gotAd = ["ShowAds"];
        `}
      </Script>
      <Script
        src="/assets/vendor/jquery/dist/jquery.min4769.js?v=25.1.1.0"
        strategy="beforeInteractive"
      />
      <Script
        src="/jss/blockies4769.js?v=25.1.1.0"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/theme-appearance4769.js?v=25.1.1.0"
        strategy="lazyOnload"
      />
        </>
    );
}