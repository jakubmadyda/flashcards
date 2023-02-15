import MainNavbar from "../MainNavbar/MainNavbar";
import {Col, Container, Row} from "react-bootstrap";
import {Outlet} from "react-router-dom";

import '../../styles/main.scss'

function Layout() {
    return (
        <>
        <MainNavbar/>
        <Container>
            <Row>
              <Col>
                  <Outlet/>
              </Col>
            </Row>
        </Container>
        </>
    );
}

export default Layout;