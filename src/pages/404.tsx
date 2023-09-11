import Head from "next/head";
import Link from "next/link";
import Container from "~/components/Container";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Nicole Haraj</title>
        <meta name="description" content="An online CV for Nicole Haraj" />
      </Head>
      <Container>
        <h2 className="text-4xl font-semibold md:text-5xl">You seem lost!</h2>
        <p>The page you are looking for does not exist. </p>

        <Link href="/" className="external-link">
          Let&apos;s go back home
        </Link>
      </Container>
    </>
  );
}
