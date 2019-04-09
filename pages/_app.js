import App, { Container } from 'next/app';
import Link from 'next/link';

const navLinks = ['/', '/another', '/test'];

const Nav = () =>
  navLinks.map(path => [
    <Link prefetch href={path} key={path}>
      <a>Go to {path}</a>
    </Link>,
    ' ',
  ]);

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Nav />
        <Component {...pageProps} />
      </Container>
    );
  }
}
