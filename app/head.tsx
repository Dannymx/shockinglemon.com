import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>Shocking Lemon</title>
      <meta
        name="description"
        content="Fan dedicated website for the Japanese rock band Shocking Lemon"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" key="charset" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" key="apple" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
        key="icon16"
      />
      <link rel="icon" href="/favicon.ico" key="favicon" />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-255T0ZF51F"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-255T0ZF51F');
        `}
      </Script>
    </>
  );
}
