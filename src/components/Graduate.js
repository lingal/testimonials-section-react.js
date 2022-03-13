import './Graduate.css';


function Graduate(props) {
  const { img, graduate, status } = props;
  return (
    <div className="graduate">
      <div className="graduate-img">
        <img src={img} alt="graduate" />
      </div>
      <div className="graduate-name">
        <h4>{graduate}</h4>
        <p>{status}</p>
      </div>
    </div>
  );
}

export default Graduate;