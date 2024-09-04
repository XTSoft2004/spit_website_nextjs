"use client";
import Image from "next/image";
import Link from "next/link";
import './app.css';
import { Card } from "react-bootstrap";
interface MemberProps {
  last_name: string;
  first_name: string;
  birth_date: string;
  phone_number: string;
  email_address: string;
  gender: string;
  class: string;
  position: string[];
  generation: string;
  image: string;
}
interface CardMemberProps {
  id: string,
  last_name: string;
  first_name: string;
  position: string;
  image: string;
}
const CardMember = ({
  id,
  last_name,
  first_name,
  position,
  image,
}: CardMemberProps) => {
  // const lastPosition = position.length > 0 ? position[position.length - 1] : "";
  return (
    <>
      <Link href={`/gioi-thieu/${id}`}>
        <div className="card-item mb-3" style={{ position: 'relative' }}>
          <Card className="card-item text-center"
            style={{ position: 'absolute' }}>
            <Card.Img
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                marginBottom: '20px'
              }}
              variant="top"
              src={image}
            />
            <Card.Body>
              <Card.Title
                className="truncate-line-2 fw-bold"
                style={{ fontSize: "15px" }}
              >
                {first_name} {last_name}
              </Card.Title>
              <Card.Text className="truncate-line-2" style={{ fontSize: "12px" }}>
                {position == "" ? "Không có chức vụ" : position}
              </Card.Text>

              {/* {position.map((position) => {
            return (
              <Card.Text
                className="truncate-line-1"
                style={{ fontSize: "12px" }}
              >
                {position}
              </Card.Text>
            );
          })} */}
            </Card.Body>
          </Card>
        </div >
      </Link>


    </>
  );
};
export default CardMember;
