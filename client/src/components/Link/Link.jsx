import "./Link.css";

export default function Link(props) {
  return (
    <a href={props.href} className="link">
      {props.text}
    </a>
  );
}
