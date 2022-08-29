import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <Col
      md={3}
      className={"mt-3"}
      style={{
        width: 300,
        height: 220,
        cursor: "pointer",
        borderRadius: 5,
        display: "flex",
      }}
      border={"red"}
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card>
        <Image
          style={{ width: "100%", height: "150px", borderRadius: 5 }}
          src={process.env.REACT_APP_API_URL + device.img}
        />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-start p-1">
          <div style={{ color: "black", fontSize: 14, width: 70 }}>
            {device.name}
          </div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
