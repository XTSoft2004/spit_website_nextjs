import { Card } from "react-bootstrap";
interface CardRoleProps {
  namerole: string;
  description: string;
  number: string;
}
const CardRole = ({ namerole, description, number }: CardRoleProps) => {
  const num = parseInt(number);
  const cntText = description.length;
  return (
    <Card
      className="mb-3 item-broad"
      style={{
        width: "20rem",
        height: "25rem",
        background: "#103994",
        color: "#fff",
      }}
    >
      <Card.Body>
        <Card.Title className="fs-1 mb-3 fw-bold">{namerole}</Card.Title>
        <Card.Title className="mb-2 opacity-75">{description}</Card.Title>
      </Card.Body>
      <p
        className="fw-bold opacity-75"
        style={{
          fontSize: num >= 10 ? "170px" : "150px",
          position: "absolute",
          top: "60%",
          left: num >= 10 ? "47%" : "43%",
        }}
      >
        {number}
      </p>
    </Card>
  );
};
export default CardRole;
