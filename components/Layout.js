import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

const Layout = ({children, title, description, backButton}) => {
    return(
    <div>
    <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
    </Head>
    <div className="container">
        <nav>
            {backButton && <span onClick={() => Router.back()} className="back-button">&#x2b05;</span>}
            <Link href="/">
                <a>
                    <span className="main-title">
                        Hacker Next
                    </span>
                </a>
            </Link>
        </nav>

        {children}

        
        
    </div>
    <style jsx>
            {`
                .container{
                    max-width: 800px;
                    margin: 0 auto;
                    background: #f6f6ef
                }
                nav{
                    background: #f60;
                    padding: 1em;
                }
                nav > * {
                    display: inline-block;
                    color: #000;
                }
                nav a{
                    text-decoration:none;
                }
                nav .main-title{
                    font-weight: bold;
                }
                nav .back-button {
                    font-size: 0.9 rem;
                    padding-right: 1em;
                    cursor: pointer;
                }
            `}
        </style>
    <style global jsx>
            {`
                body{
                    background: #FFFFFF;
                    font-family: Futura, Avenir, sans-serif;
                }
            `}
        </style>
    </div>
    )
}

export default Layout;