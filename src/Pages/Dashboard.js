import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import * as ReactIcons from "react-icons/fa";
import * as ReactIconbs from "react-icons/bs";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; 
// import 'chartjs-adapter-moment'; // or another adapter to avoid moment
Chart.register(...registerables)

export const Dashboard = () => {
 
  return (
    <>
      <div className="py-4">
        <Row xl={3} xs={1} className="g-4">
          <Col>
            <Card className="p-4 w-100 position-relative rounded-lg shadow-md border-0">
              <span className="Icons-container">
                <ReactIcons.FaUserAlt className="text-2xl text-white" />
              </span>
              <p className="fs-5 pb-4 text-grey-600"> Total Users</p>
              <p className="display-5 fw-bold">1000</p>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 w-100 position-relative rounded-lg shadow-md border-0">
              <span className="Icons-container">
                <ReactIcons.FaGift className="text-2xl text-white" />
              </span>
              <p className="fs-5 pb-4 text-grey-600"> Total Gifts</p>
              <p className="display-5 fw-bold">30</p>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 w-100 position-relative rounded-lg shadow-md border-0">
              <span className="Icons-container">
                <ReactIcons.FaCoins className="text-2xl text-white" />
              </span>
              <p className="fs-5 pb-4 text-grey-600"> Total Coins spent</p>
              <p className="display-5 fw-bold">2000</p>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 w-100 position-relative rounded-lg shadow-md border-0">
              <span className="Icons-container">
                <ReactIcons.FaVideo className="text-2xl text-white" />
              </span>
              <p className="fs-5 pb-4 text-grey-600"> Total Live hours</p>
              <p className="display-5 fw-bold">10000</p>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 w-100 position-relative rounded-lg shadow-md border-0">
              <span className="Icons-container">
                <ReactIcons.FaCheck className="text-2xl text-white" />
              </span>
              <p className="fs-5 pb-4 text-grey-600"> Current online host</p>
              <p className="display-5 fw-bold">30</p>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 w-100 position-relative rounded-lg shadow-md border-0">
              <span className="Icons-container">
                <ReactIcons.FaGlobeAmericas className="text-2xl text-white" />
              </span>
              <p className="fs-5 pb-4 text-grey-600"> Total Countries</p>
              <p className="display-5 fw-bold">20</p>
            </Card>
          </Col>
        </Row>

        <Row xl={2} xs={1} className="g-4">
          
        </Row>
      </div>
    </>
  );
};
