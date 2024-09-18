import Head from 'next/head';

export const AppHead = () => {
  return (
    <Head>
      <title>Fivicon</title>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-JD6976L2TL`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-JD6976L2TL', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
      <meta name="description" content="Fivicon is an icon API platform that provides icons via API, giving a list of logo types and sizes. Using Fivicon logos assets on your website will keep it always up-to-date with the latest companies' icons, so you don't need to wait for vendor updates to keep up with changes in the companies' logos." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Fivicon - Logo API" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://iili.io/HNAjpzN.jpg" />
      <meta
        property="og:description"
        content="Fivicon is an icon API platform that provides icons via API, giving a list of logo types and sizes. Using Fivicon logos assets on your website will keep it always up-to-date with the latest companies' icons, so you don't need to wait for vendor updates to keep up with changes in the companies logos."
      />
      <meta property="og:image" content="https://iili.io/HNAjpzN.jpg" />
      <meta property="og:image:width" content="32" />
      <meta property="og:image:height" content="32" />
      <link rel="icon" href="https://iili.io/HNAjpzN.jpg" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700&family=Rubik:wght@600&display=swap"
        rel="stylesheet"></link>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      />
      <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&family=Space+Grotesk:wght@700&display=swap"
        rel="stylesheet"></link>
    </Head>
  );
};
