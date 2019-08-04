import { Recipies } from "../static/public/recipes";
import Card from "../components/Card";

const Blog = () => {
  return (
    <div className="card-wrapper">
      <div className="title-header">
        <h2>Fooo</h2>
        <p>foo</p>
      </div>
      <div className="options">
        <ul className="cards">
          {Recipies.map((recipe, index) => {
            return <Card data={recipe} key={index} />;
          })}
        </ul>
      </div>

      <style jsx>
        {`
          .cards {
            display: flex;
            justify-content: space-around;
          }
        `}
      </style>
    </div>
  );
};

export default Blog;
