import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import  { useState } from 'react';
import Accordion from "react-bootstrap/Accordion";
import Props from "../Sub-components/Props";

import Footersecound from "../Footersecound";

function Secound(props) {
  const [img1, setImg1] = useState('https://baroque.pk/cdn/shop/products/146_1.jpg?v=1679118640&width=1000');
  const [img2, setImg2] = useState('https://baroque.pk/cdn/shop/products/10_cec111f6-b209-4f7c-8e70-1abd31fb2fad.jpg?v=1629111146&width=1000');
  const [img3, setImg3] = useState('https://baroque.pk/cdn/shop/products/5_42.jpg?v=1627906631&width=1000');
  return (
    <>
      <Container fluid>
        <div className="text-center text-3xl py-2">
          <span>CHANTELLE</span>
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
              <div
                className="hidden lg:block sticky top-40"
                style={{ width: "250px", height: "900px" }}
              >
                <Accordion
                  defaultActiveKey="0"
                  style={{ height: "100%", overflowY: "auto", top: "0" }}
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Accordion Item #3</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Accordion Item #4</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Accordion Item #5</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Accordion Item #6</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
            {/* <img 
                src={currentImage} 
                alt={props.title} 
                onMouseEnter={() => setCurrentImage(props.hoverImg)} // Change image on mouse enter
                onMouseLeave={() => setCurrentImage(props.imgUral)} // Revert image on mouse leave
            /> */}

            {/* Product images section */}
            <Col sm={9} className="text-clip mt-2">
            <Row>
             
            <Row>
  <Col xxl={6} md={4} sm={12}>
    <Link to="/Cartshop">
      <div style={{ textAlign: 'center' }}>
        <img
          className="zoom-img img-fluid cursor-pointer"
          src={img1}
          alt="Shawls"
          title="EMBROIDERED PRINTED LAWN"
          onMouseLeave={() => setImg1('https://baroque.pk/cdn/shop/products/146_1.jpg?v=1679118640&width=1000')}
          onMouseEnter={() => setImg1('https://baroque.pk/cdn/shop/products/147_1.jpg?v=1679118640&width=1000')}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <div style={{ marginTop: '10px' }}>
          <h6 style={{ margin: '5px 0', fontSize: '1rem' }}>EMBROIDERED PRINTED LAWN</h6>
          <p style={{ margin: '5px 0' }}><b>PKR 8,990.00 </b></p>
          <p style={{ margin: '5px 0' }}>UF-711</p>
        </div>
      </div>
    </Link>
  </Col>

  <Col xxl={6} md={4} sm={12}>
    <Link to="/Cartshop">
      <div style={{ textAlign: 'center' }}>
        <img
          className="zoom-img img-fluid cursor-pointer"
          src={img2}
          alt="Shawls"
          title="EMBROIDERED PRINTED LAWN"
          onMouseLeave={() => setImg2('https://baroque.pk/cdn/shop/products/10_cec111f6-b209-4f7c-8e70-1abd31fb2fad.jpg?v=1629111146&width=1000')}
          onMouseEnter={() => setImg2('https://baroque.pk/cdn/shop/products/11_a1b43d3b-de18-47dd-92e6-fbbf49e82bcb.jpg?v=1629111146&width=1000')}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <div style={{ marginTop: '10px' }}>
          <h6 style={{ margin: '5px 0', fontSize: '1rem' }}>EMBROIDERED PRINTED LAWN</h6>
          <p style={{ margin: '5px 0' }}><b>PKR 8,990.00 </b></p>
          <p style={{ margin: '5px 0' }}>UF-711</p>
        </div>
      </div>
    </Link>
  </Col>

  <Col xxl={6} md={4} sm={12}>
    <Link to="/Cartshop">
      <div style={{ textAlign: 'center' }}>
        <img
          className="zoom-img img-fluid cursor-pointer"
          src={img3}
          alt="Shawls"
          title="EMBROIDERED PRINTED LAWN"
          onMouseLeave={() => setImg3('https://baroque.pk/cdn/shop/products/5_42.jpg?v=1627906631&width=1000')}
          onMouseEnter={() => setImg3('https://baroque.pk/cdn/shop/products/4_50.jpg?v=1627906631&width=1000')}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <div style={{ marginTop: '10px' }}>
          <h6 style={{ margin: '5px 0', fontSize: '1rem' }}>EMBROIDERED PRINTED LAWN</h6>
          <p style={{ margin: '5px 0' }}>
            <b>PKR 8,990.00 </b></p>
          <p style={{ margin: '5px 0' }}>UF-711</p>
        </div>
      </div>
    </Link>
  </Col>
</Row>

              <Row>
              <Props imgUral="https://baroque.pk/cdn/shop/files/06_3945eed1-0259-4076-9ea1-d717ed0fb1a3.jpg?v=1727073689&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/07_bef04f33-49c0-4057-bdbe-057cfc6ff121.jpg?v=1727073689&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/13_6c4438df-278f-430f-9a75-b9e0b9a2b9fe.jpg?v=1727073884&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/15_dc7f41ed-5593-429e-996e-f41b5fd09d23.jpg?v=1727073884&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/86_058777f4-4b39-46a1-9b3d-dd45ae0c57fd.jpg?v=1727076185&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/90_38cb2618-2fb2-4fe0-83bd-55da1abc38c5.jpg?v=1727076185&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/22_540af69a-1f91-4a5c-92e9-1860e826f8ff.jpg?v=1727074143&width=600"  hoverImg="https://baroque.pk/cdn/shop/files/22_540af69a-1f91-4a5c-92e9-1860e826f8ff.jpg?v=1727074143&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/41_ef3dc750-a0ee-4b94-8a7d-ec4704b7ed61.jpg?v=1722236363&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/36_e00da766-ab7f-4cf5-bf95-a0d7557f260d.jpg?v=1722236363&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/63_e11f5232-9ea9-4c8c-b98f-82c973f9c118.jpg?v=1727075243&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/60_a08f7df3-a46f-4e4f-b7ab-b7c563499508.jpg?v=1727075243&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/64_9138a768-819b-446c-ae11-a2bf4c0ec78a.jpg?v=1727075650&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/66_4a9b4c83-dc47-4088-86c6-d3482efd74e7.jpg?v=1727075650&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/06_3945eed1-0259-4076-9ea1-d717ed0fb1a3.jpg?v=1727073689&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/07_bef04f33-49c0-4057-bdbe-057cfc6ff121.jpg?v=1727073689&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/22_540af69a-1f91-4a5c-92e9-1860e826f8ff.jpg?v=1727074143&width=600"  hoverImg="https://baroque.pk/cdn/shop/files/22_540af69a-1f91-4a5c-92e9-1860e826f8ff.jpg?v=1727074143&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/64_9138a768-819b-446c-ae11-a2bf4c0ec78a.jpg?v=1727075650&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/66_4a9b4c83-dc47-4088-86c6-d3482efd74e7.jpg?v=1727075650&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/22_540af69a-1f91-4a5c-92e9-1860e826f8ff.jpg?v=1727074143&width=600"  hoverImg="https://baroque.pk/cdn/shop/files/22_540af69a-1f91-4a5c-92e9-1860e826f8ff.jpg?v=1727074143&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/41_ef3dc750-a0ee-4b94-8a7d-ec4704b7ed61.jpg?v=1722236363&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/36_e00da766-ab7f-4cf5-bf95-a0d7557f260d.jpg?v=1722236363&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/63_e11f5232-9ea9-4c8c-b98f-82c973f9c118.jpg?v=1727075243&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/60_a08f7df3-a46f-4e4f-b7ab-b7c563499508.jpg?v=1727075243&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/06_3945eed1-0259-4076-9ea1-d717ed0fb1a3.jpg?v=1727073689&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/07_bef04f33-49c0-4057-bdbe-057cfc6ff121.jpg?v=1727073689&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/13_6c4438df-278f-430f-9a75-b9e0b9a2b9fe.jpg?v=1727073884&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/15_dc7f41ed-5593-429e-996e-f41b5fd09d23.jpg?v=1727073884&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/86_058777f4-4b39-46a1-9b3d-dd45ae0c57fd.jpg?v=1727076185&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/90_38cb2618-2fb2-4fe0-83bd-55da1abc38c5.jpg?v=1727076185&width=1000" title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/86_058777f4-4b39-46a1-9b3d-dd45ae0c57fd.jpg?v=1727076185&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/90_38cb2618-2fb2-4fe0-83bd-55da1abc38c5.jpg?v=1727076185&width=1000" title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/86_058777f4-4b39-46a1-9b3d-dd45ae0c57fd.jpg?v=1727076185&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/90_38cb2618-2fb2-4fe0-83bd-55da1abc38c5.jpg?v=1727076185&width=1000" title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
              </Row>

              </Row>



           
            </Col>
          </Row>
        </Container>
      </Container>
      <Footersecound className="mt-10" />
    </>
  );
}

export default Secound;
