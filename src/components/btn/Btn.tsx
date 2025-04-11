import "./btn.css";

function Btn({ text = "Click Me" }) {
  return (
    <button className="btn" role="button">
      {text}
    </button>
  );
}
export default Btn;
