import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Recipies } from "../static/public/recipes";

const Post = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="recipie-container">
        <div className="recipie-top">
          <div className="recipie-left">
            <h2>{router.query.title}</h2>
            <p>{router.query.description}</p>
            <p>
              <strong>Ingredients</strong>
            </p>
            {/* <ul>
              {router.query.ingredients.map((ingredient, key) => {
                return <li>{ingredient}</li>;
              })}
            </ul> */}
          </div>
          <div className="recipie-right">
            <img src={router.query.img_src} alt={router.query.title} />
          </div>
        </div>

        <div className="steps">
          <p>
            <strong>Steps</strong>
          </p>
          {/* <ol>
            {router.query.steps.map((step, key) => {
              return <li key={key}>{step}</li>;
            })}
          </ol> */}
        </div>
      </div>

      <style jsx>{`
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
          .recipie-top {
            display: block;
          }
          .recipie-left,
          .recipie-right {
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Post;
