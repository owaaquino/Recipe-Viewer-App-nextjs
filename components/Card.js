import Link from "next/link";

const Card = ({ data }) => {
  return (
    <li className="card-item">
      <img src={data.img_src} alt={data.title} />
      <span>
        <h3>{data.title}</h3>
        <p>{data.description.substring(0, 255) + "..."}</p>
        <Link as={`/${data.slug}`} href={`post?title=${data.title}`}>
          <a>Read More</a>
        </Link>
      </span>

      <style jsx>
        {`
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

          @media only screen and (max-width: 768px) {
            .cards {
              display: block;
            }
            .card-item {
              width: 100%;
            }
          }
        `}
      </style>
    </li>
  );
};

export default Card;
