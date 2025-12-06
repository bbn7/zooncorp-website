import Head from 'next/head'
import '../styles/globals.css'
export default function Home(){
  return (
    <>
      <Head>
        <title>ZOON CORP</title>
        <meta name="description" content="ZOON CORP — dry-fruit exports & IT services" />
      </Head>
      <header className="site-header">
        <div className="wrap"><a href="/">ZOON CORP</a><nav><a href="/services">Services</a></nav></div>
      </header>
      <main className="wrap">
        <h1>Supply. Systems. Scale.</h1>
        <p>Premium produce. Enterprise-grade systems.</p>
      </main>
      <footer className="site-footer wrap">© ZOON CORP</footer>
    </>
  )
}