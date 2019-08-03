import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="root">
      <Head>
        <title>Recipe Viewer</title>
      </Head>
      <body>
        {children}
        <footer>&copy; {new Date().getFullYear()}</footer>
      </body>
      <style jsx>
        {`
          body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          ul,
          .cards li {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          div.root {
            margin: 100px auto;
            width: 80%;
            height: auto;
            padding: 50px 50px;
            /* background-color: #6C5B7B; */
            /* border-radius: 15px; */
            /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
            display: flex;
            justify-content: center;
            flex-direction: column;
            /* align-items: center; */
          }

          /* FOOTER */
          footer {
            text-align: center;
          }

          footer span {
            color: pink;
          }

          footer p a {
            text-decoration: none;
            color: #262626;
          }

          footer p a:hover {
            color: pink;
          }

          .cards {
            display: flex;
            justify-content: space-around;
          }

          .card-item {
            background: #eeeeee;
            width: 30%;
            display: flex;
            flex-direction: column;
            text-align: left;
          }

          .card-item img {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }

          .card-item span {
            margin: 1em;
          }

          /* RECEPIE PAGE */

          .recipie-container {
            width: 90%;
            margin: 0 auto;
          }

          .recipie-container h2:after {
            position: relative;
            top: 10px;
            border-bottom: 4px solid tomato;
            width: 30%;
            padding-bottom: 5px;
          }

          .recipie-top {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          .recipie-left,
          .recipie-right {
            width: 50%;
          }

          .recipie-right img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          @media only screen and (max-width: 768px) {
            .cards {
              display: block;
            }
            .card-item {
              width: 100%;
            }

            .recipie-top {
              display: block;
            }
            .recipie-left,
            .recipie-right {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
