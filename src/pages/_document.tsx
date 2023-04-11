import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import dotenv from 'dotenv';
dotenv.config();

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const config: any = process.env;
    ctx.env = process.env;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        ...process.env,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
