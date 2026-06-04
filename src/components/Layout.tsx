import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'Elkana Juanro Manullang — Full Stack Engineer' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Full-Stack Engineer with 2.5 years experience specializing in PHP (Laravel), React/Next.js, and Supabase ecosystems." />
      </Head>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}