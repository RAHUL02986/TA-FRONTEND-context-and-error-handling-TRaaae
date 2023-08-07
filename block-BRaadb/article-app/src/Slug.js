import { Link } from "react-router-dom";
import withData from "./withData";

function Article(props) {
  return (
    <>
      <Link to="/article">
        <h4 style={{ marginBottom: "1rem" }}>
          <span role="img" aria-label="Finger Point">
            👈{" "}
          </span>
          Go back to articles
        </h4>
      </Link>
      <h1>
        The slug of the article is::: <b>{props.match.params.slug}</b>!
      </h1>
    </>
  );
}

export default withData(Article);
