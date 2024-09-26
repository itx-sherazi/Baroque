import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Props from '../Sub-components/Props';

import Footersecound from '../Footersecound';

function Bottoms(props) {
  return (
    <>
      <Container fluid>
        <div className="text-center text-3xl py-2">
          <span>Bottoms</span>
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
              
                <Props imgUral="https://baroque.pk/cdn/shop/products/930A2022_-_Skin.jpg?v=1570117940&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/930A2023_-_Skin.jpg?v=1570117940&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/930A2091.jpg?v=1580707818&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/930A2095.jpg?v=1580707818&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/930A2022.jpg?v=1570090943&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/930A2026.jpg?v=1570090943&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/07_76dc5eef-ef76-4430-a5ae-2a53f394e555.jpg?v=1641196171&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/08_30e5e675-3a1a-4154-b196-035ae09e907d.jpg?v=1641196171&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/04_9c35cc6a-27bb-4166-b057-1f21f4d0ec08.jpg?v=1644665663&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/05_efa610dc-b43e-489e-9de6-4e6733261fc9.jpg?v=1644665663&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/40_17.jpg?v=1662206463&width=1000"  hoverImg="https://cdn.shopify.com/s/files/1/2277/5269/products/39_17.jpg?v=1662206615&width=400"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/10_26.jpg?v=1697121620&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/08_4.jpg?v=1697121620&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/39_17.jpg?v=1662206615&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/38_17.jpg?v=1662206614&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/930A2022_-_Skin.jpg?v=1570117940&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/930A2023_-_Skin.jpg?v=1570117940&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/930A2091.jpg?v=1580707818&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/930A2095.jpg?v=1580707818&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/930A2022.jpg?v=1570090943&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/930A2026.jpg?v=1570090943&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/07_76dc5eef-ef76-4430-a5ae-2a53f394e555.jpg?v=1641196171&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/08_30e5e675-3a1a-4154-b196-035ae09e907d.jpg?v=1641196171&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/04_9c35cc6a-27bb-4166-b057-1f21f4d0ec08.jpg?v=1644665663&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/05_efa610dc-b43e-489e-9de6-4e6733261fc9.jpg?v=1644665663&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/40_17.jpg?v=1662206463&width=1000"  hoverImg="https://cdn.shopify.com/s/files/1/2277/5269/products/39_17.jpg?v=1662206615&width=400"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/10_26.jpg?v=1697121620&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/08_4.jpg?v=1697121620&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/products/39_17.jpg?v=1662206615&width=1000"  hoverImg="https://baroque.pk/cdn/shop/products/38_17.jpg?v=1662206614&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
               
              
            </Row>
          </Col>
        </Row>
        </Container>
      </Container>
      <Footersecound className="mt-10" />
    </>
  );
}

export default Bottoms;
