import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>


              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
              <link rel="manifest" href="/site.webmanifest" />
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
              <meta name="msapplication-TileColor" content="#da532c" />
              <meta name="theme-color" content="#ffffff"></meta>
              <meta name="title" content="MB Web Design" />
              <meta name="description" content="Sito Web e Portfolio di Michelangelo Bencivenga"/>
              <meta name="keywords" content="web design, portfolio, michelangelo, bencivenga"/>
              <meta name="robots" content="index, follow" />
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
              <meta name="language" content="Italian" />
              <meta property="og:title" content="MB Web Design" />
              <meta property="og:site_name" content="MB Web Design"/>
              <meta property="og:url" content="https://www.mbencivenga.it" />
              <meta property="og:description" content="Sito Web e Portfolio di Michelangelo Bencivenga" />
              <meta property="og:type" content="" />
              <meta property="og:image" content="/foto-michelangelo-bencivenga.jpg" />


        </Head>
        <body>
          <Main />
          <div id="mobile-dialog">

          </div>
          <NextScript />

          <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.5.9/js/uikit.min.js"
            integrity="sha512-OZ9Sq7ecGckkqgxa8t/415BRNoz2GIInOsu8Qjj99r9IlBCq2XJlm9T9z//D4W1lrl+xCdXzq0EYfMo8DZJ+KA==" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.5.9/js/uikit-icons.min.js"
            integrity="sha512-hcz3GoZLfjU/z1OyArGvM1dVgrzpWcU3jnYaC6klc2gdy9HxrFkmoWmcUYbraeS+V/GWSgfv6upr9ff4RVyQPw==" crossorigin="anonymous"></script>

        </body>
      </Html>
    );
  }
}

export default MyDocument;
