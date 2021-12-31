import Head from 'next/head';
import Footer from './Footer';

export default function Layout({ title, keywords, description, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
                <link rel="stylesheet" href="https://use.typekit.net/zyv7wbc.css"></link>
            </Head>

            <div>{children}</div>
            <Footer />
        </div>
    )
}
