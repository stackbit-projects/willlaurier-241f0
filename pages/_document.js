import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    
    const bodyClasses = `single page page-template-default wp-custom-logo nv-sidebar-full-width nv-without-title menu_sidebar_slide_left `

    return (
      <Html lang="en" >
        <Head>
          <script type="text/javascript" src="/wp-js/jquery/jquery.min.js?ver=3.5.1"></script>
          <script type="text/javascript" src="/neve/js/global.js"></script>
          <script type="text/javascript" src="/neve/js/frontend.js?ver=2.10.2"></script>
        </Head>
        <body 
          className={bodyClasses}
          style={{height: '100vh'}}>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument