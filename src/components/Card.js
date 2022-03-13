import Graduate from "./Graduate";
import './Card.css';

function Card(props) {
  const {title, quote } = props;
  return (
    <article className="card">
      <Graduate {...props}></Graduate>
      <h5 className="card-title">
        {title}
      </h5>
      <p className="card-quote">
        {quote}
      </p>
    </article>
  );
}


export default Card;