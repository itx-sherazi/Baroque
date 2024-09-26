import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Props from '../Sub-components/Props';

import Footersecound from '../Footersecound';

function Shawals(props) {
  return (
    <>
      <Container fluid>
        <div className="text-center text-3xl py-2">
          <span>Shawals</span>
        </div>
        <hr />

        {/* Product Count */}
        <div className="text-center text-xl py-2">
          <span>35 Products</span>
        </div>
        <hr className="w-full" />
        <Container>
        <Row>
          {/* Accordion section */}

        <Col sm={3}>
            <div className='hidden md:block sticky top-40' style={{width: '250px', height: '900px' }}>
                <Accordion defaultActiveKey="0" style={{ height: '100%', overflowY: 'auto',top:'0' }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Accordion Item #3</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Accordion Item #4</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Accordion Item #5</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Accordion Item #6</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Col>



          {/* Product images section */}
          <Col sm={9}  className="text-clip mt-2">
            <Row>
              
                <Props imgUral="https://baroque.pk/cdn/shop/products/38_19.jpg?v=1693402721&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/41_17.jpg?v=1693402721&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/76_62567c68-60c9-4e79-ad2b-817d9a784227.jpg?v=1694854013&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/78_18f2d4d1-5d28-438a-8313-030a67c0a020.jpg?v=1694854014&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral=" https://baroque.pk/cdn/shop/products/65.jpg?v=1632894665&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/68.jpg?v=1632894665&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/48_15.jpg?v=1693402740&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/50_14.jpg?v=1693402740&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/38_19.jpg?v=1693402721&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/41_17.jpg?v=1693402721&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/76_62567c68-60c9-4e79-ad2b-817d9a784227.jpg?v=1694854013&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/78_18f2d4d1-5d28-438a-8313-030a67c0a020.jpg?v=1694854014&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral=" https://baroque.pk/cdn/shop/products/65.jpg?v=1632894665&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/68.jpg?v=1632894665&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/48_15.jpg?v=1693402740&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/50_14.jpg?v=1693402740&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                
              
                
              
            </Row>
          </Col>
        </Row>
        </Container>
      </Container>
      <Footersecound className="mt-10" />
    </>
  );
}

export default Shawals;
