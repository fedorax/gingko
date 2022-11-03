import AppHeader from "./header/AppHeader";
import Container from "./container/Container";
import Row from "./row/Row";
import Col from "./col/Col";

function AppLayout() {
    return (
        <>
            <header>
                <AppHeader />
            </header>
            <main>
                <Container>
                    <Row>
                        <Col>
                            <h2>sample</h2>
                            <p>
                                The default grid format closely mirrors Bootstrap grid. At the top-level, you define a container with the .bx--grid class. Inside of a grid, you have multiple rows where you use .bx--row. Inside of a row, you use our column classes
                            </p>
                        </Col>
                    </Row>

                    <Row className="bg-white">
                        <Col className="bg-primary">
                            1-1
                        </Col>
                        <Col>
                            1-2
                        </Col>
                        <Col>
                            1-3
                        </Col>
                        <Col>
                            1-4
                        </Col>
                        <Col>
                            1-5
                        </Col>
                        <Col>
                            1-6
                        </Col>
                        <Col>
                            1-7
                        </Col>
                        <Col>
                            1-8
                        </Col>
                        <Col>
                            1-9
                        </Col>
                        <Col>
                            1-10
                        </Col>
                        <Col>
                            1-11
                        </Col>
                        <Col>
                            1-12
                        </Col>
                        <Col>
                            2-1
                        </Col>
                        <Col>
                            2-2
                        </Col>
                        <Col>
                            2-3
                        </Col>
                        <Col>
                            2-4
                        </Col>
                        <Col>
                            2-5
                        </Col>
                        <Col>
                            2-6
                        </Col>
                        <Col>
                            2-7
                        </Col>
                        <Col>
                            2-8
                        </Col>
                        <Col>
                            2-9
                        </Col>
                        <Col>
                            2-10
                        </Col>
                        <Col>
                            2-11
                        </Col>
                        <Col>
                            2-12
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            1-1 of 3
                        </Col>
                        <Col className="col-5">
                            2 of 3 (wider)
                        </Col>
                        <Col>
                            1-3 of 3
                        </Col>
                    </Row>
                    <Row>
                        <div className="col">col</div>
                        <div className="col">col</div>
                        <div className="col">col</div>
                        <div className="col">col</div>
                    </Row>
                    <Row>
                        <div className="col-8">col-8</div>
                        <div className="col-4">col-4</div>
                    </Row>
                </Container>
            </main>
        </>
    );
};

export default AppLayout;
