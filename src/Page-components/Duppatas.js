import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Props from '../Sub-components/Props';

import Footersecound from '../Footersecound';

function Duppatas(props) {
  return (
    <>
      <Container fluid>
        <div className="text-center text-3xl py-2">
          <span>Duppatas</span>
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
              
                <Props imgUral="https://baroque.pk/cdn/shop/products/3_13_cbf31baa-bbf1-450c-926b-cae46b6ac04e.jpg?v=1638602800&width=600"  hoverImg="https://baroque.pk/cdn/shop/products/3_13_cbf31baa-bbf1-450c-926b-cae46b6ac04e.jpg?v=1638602800&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/10_3_fbe3c0f2-2362-448f-89dd-03b43bbd89da.jpg?v=1638602834&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/12_3.jpg?v=1638602834&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/20_2.jpg?v=1638602795&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/16_2_f038779b-2bf7-4fcc-a966-c0a4e3ae6dac.jpg?v=1638602795&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/34_4.jpg?v=1636697449&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/32_5.jpg?v=1636697450&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/44_2.jpg?v=1638602612&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/37_4.jpg?v=1638602612&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/2_3f3d1ab1-7784-43de-b376-0e307201565b.jpg?v=1629109542&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/1_45405c3e-b1f1-469f-87d4-d7770fdbef5c.jpg?v=1629109542&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/3_13_cbf31baa-bbf1-450c-926b-cae46b6ac04e.jpg?v=1638602800&width=600"  hoverImg="https://baroque.pk/cdn/shop/products/3_13_cbf31baa-bbf1-450c-926b-cae46b6ac04e.jpg?v=1638602800&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/10_3_fbe3c0f2-2362-448f-89dd-03b43bbd89da.jpg?v=1638602834&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/12_3.jpg?v=1638602834&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/20_2.jpg?v=1638602795&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/16_2_f038779b-2bf7-4fcc-a966-c0a4e3ae6dac.jpg?v=1638602795&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/34_4.jpg?v=1636697449&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/32_5.jpg?v=1636697450&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/44_2.jpg?v=1638602612&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/37_4.jpg?v=1638602612&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/2_3f3d1ab1-7784-43de-b376-0e307201565b.jpg?v=1629109542&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/1_45405c3e-b1f1-469f-87d4-d7770fdbef5c.jpg?v=1629109542&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
               
              
            </Row>
          </Col>
        </Row>
        </Container>
      </Container>
      <Footersecound className="mt-10" />
    </>
  );
}

export default Duppatas;
