import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { ColorPicker, PhoneCall } from 'tabler-icons-react';





export default function Home() {
  return (
    <>
      <Head>
        <title>نقاش علی اکبر</title>
        <meta name="description" content="نقاشی ساختمان انواع رنگ پلاستیک اکرولیک و روغنی رنگ امیزی کناف، درب و پنجره  ،با بهترین کیفیت در خدمت مشتریهای عزیز" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://parspamchalpaint.com/wp-content/uploads/2018/06/actions-fill-color-icon-1.png" />
      </Head>
      <main className={styles.home} id='home'>

        <Navbar fixed='top' expand="lg" dir='rtl' className={styles.navb}>
          <Container>
            <Navbar.Brand href="#home" className={styles.tali}>نقاش علی اکبر</Navbar.Brand>
            <img className={styles.icon} src='https://parspamchalpaint.com/wp-content/uploads/2018/06/actions-fill-color-icon-1.png' />
            <Navbar.Toggle aria-controls="basic-navbar-nav" id={styles.btnnav} />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link href="#khadamat" className={styles.tnav}>نمونه کارها <ColorPicker color='green' /></Nav.Link>
                <Nav.Link href="#call" className={styles.tnav}>تماس با من <PhoneCall color='green' /></Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Container fluid className={styles.bgim}>
          <Row>
            <Col className={styles.mtrangar} sm={12}>
              <br />
              <br />
              <br />
              <br />
              <br />


              <p className={styles.tnaqash}>نقاش  <b className={styles.tali}>علی اکبر</b> بندرعباس</p>
              <p>
                نقاشی ساختمان انواع رنگ پلاستیک اکرولیک و روغنی رنگ آمیزی کناف، درب و پنجره  ،با بهترین کیفیت در خدمت مشتریهای عزیز

              </p>
              <div className={styles.bnd}>نقاشی ساختمان سر تا سر بندرعباس پذیرفته میشه <br/>شماره تماس : <b className={styles.shomar}>09337382190</b></div>
            </Col>

            <Col className={styles.imgrang2}>
              <img className={styles.imgrang} src='https://tablighbartar.com/wp-content/uploads/2019/08/%DA%A9%D9%86%D8%A7%D9%81.jpg' />
              <p>رنگ آمیزی کناف</p>

            </Col>

            <Col className={styles.imgrang2}>
              <img className={styles.imgrang} src='https://digirang.shop/wp-content/uploads/2020/01/%D8%AF%DB%8C%D9%88%D8%A7%D8%B1-300x229.jpg' />
              <p>رنگ آمیزی دیوار</p>

            </Col>
            <Col className={styles.imgrang2}>
              <img className={styles.imgrang} src='https://taav.ir/wp-content/uploads/2022/12/%D8%AF%D8%B1%D8%A8-%D8%B3%D9%81%DB%8C%D8%AF.jpg' />
              <p>رنگ آمیزی درب</p>

            </Col>

            <Col className={styles.imgrang2}>
              <img className={styles.imgrang} src='https://www.faradwin.com/wp-content/uploads/window2-2.jpg' />
              <p>رنگ آمیزی پنجره</p>

            </Col>

          </Row>
        </Container>

        <br />
        <br />


        <Container id='khadamat' fluid className={styles.kha}>
          <Row>


            <Col className={styles.imgrang3} sm={4}>
              <Link target='#blank' href={"/a1.jpg"}>
                <img className={styles.imgrang0} src='/a1.jpg' />

              </Link>

              <p className={styles.kh}>رنگ سفید و طلایی جای کولر</p>
              <hr />
              <p>کد 210</p>

            </Col>

            <Col className={styles.imgrang3} sm={4}>
              <Link target='#blank' href={"/a2.jpg"}>
                <img className={styles.imgrang0} src='/a2.jpg' />

              </Link>

              <p className={styles.kh}>رنگ آمیزی کمد دیواری </p>
              <hr />
              <p>کد 220</p>

            </Col>


            <Col className={styles.imgrang3} sm={3}>
              <Link target='#blank' href={"/a3.jpg"}>
                <img className={styles.imgrang0} src='/a3.jpg' />

              </Link>

              <p className={styles.kh}>رنگ آمیزی درب </p>
              <hr />
              <p>کد 230</p>

            </Col>


            <Col className={styles.imgrang3} sm={6}>
              <Link target='#blank' href={"/a4.jpg"}>
                <img className={styles.imgrang0} src='/a4.jpg' />

              </Link>

              <p className={styles.kh}>رنگ آمیزی درب سفید و طلایی </p>
              <hr />
              <p>کد 240</p>

            </Col>


            <Col className={styles.imgrang3} sm={3}>
              <Link target='#blank' href={"/a5.jpg"}>
                <img className={styles.imgrang0} src='/a5.jpg' />

              </Link>

              <p className={styles.kh}>رنگ آمیزی درب  </p>
              <hr />
              <p>کد 250</p>

            </Col>


            <Col className={styles.imgrang3} sm={3}>
              <Link target='#blank' href={"/a6.jpg"}>
                <img className={styles.imgrang0} src='/a6.jpg' />

              </Link>

              <p className={styles.kh}>رنگ آمیزی استخر  </p>
              <hr />
              <p>کد 260</p>

            </Col>


            <Col className={styles.imgrang3} sm={3}>
              <Link target='#blank' href={"/a7.jpg"}>
                <img className={styles.imgrang0} src='/a7.jpg' />

              </Link>

              <p className={styles.kh}>رنگ آمیزی کناف  </p>
              <hr />
              <p>کد 270</p>

            </Col>

            <Col className={styles.imgrang3} sm={3}>
              <Link target='#blank' href={"/a8.jpg"}>
                <img className={styles.imgrang0} src='/a8.jpg' />

              </Link>

              <p className={styles.kh}>رنگ دیوار با طرح برگ   </p>
              <hr />
              <p>کد 280</p>

            </Col>


            <Col className={styles.imgrang3} sm={3}>
              <Link target='#blank' href={"/a9.jpg"}>
                <img className={styles.imgrang0} src='/a9.jpg' />

              </Link>

              <p className={styles.kh}>رنگ دیوار با طرح برگ   </p>
              <hr />
              <p>کد 290</p>

            </Col>

            <Col className={styles.imgrang3} sm={3}>
              <Link target='#blank' href={"/a10.jpg"}>
                <img className={styles.imgrang0} src='/a10.jpg' />

              </Link>

              <p className={styles.kh}>رنگ دیوار ساده </p>
              <hr />
              <p>کد 300</p>

            </Col>

            <Col className={styles.imgrang3} sm={3}>
              <Link target='#blank' href={"/a11.jpg"}>
                <img className={styles.imgrang0} src='/a11.jpg' />

              </Link>

              <p className={styles.kh}>رنگ آمیزی کناف  </p>
              <hr />
              <p>کد 310</p>

            </Col>



          </Row>
        </Container>



        <Container fluid className={styles.call} id='call'>
          <Row>
            <Col className={styles.tamas}> تماس با من</Col>

            <hr />

            <Col sm={12}> شماره تماس : <b className={styles.sh}>09337382190</b></Col>

            <Col id={styles.abdollah}>طراحی شده توسط <a href='https://abdollahchelasi.vercel.app/'
              target='#blank' id={styles.abd}>عبدالله چلاسی</a></Col>
          </Row>

        </Container>




      </main>


    </>
  )
}
