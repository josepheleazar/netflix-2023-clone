import React from 'react';
import styles from './styles.module.scss';
import { Container, Col, Row } from 'reactstrap';

export default function Footer(){
  return(
    <footer>
      <Container className={`g-0 ${styles['footer__row__1']}`}>
        <h4>Questions? Contact us.</h4>
      </Container>

      <Container className={`g-0 ${styles['footer__row__2']}`}>
        <Row className='g-0'>
          <Col xs={6} md={3}> <p>FAQ</p> </Col> 
          <Col xs={6} md={3}> <p>Help Center</p> </Col>
          <Col xs={6} md={3}> <p>Account</p> </Col>
          <Col xs={6} md={3}> <p>Media Center</p> </Col>
        </Row>
        <Row className='g-0'>
          <Col xs={6} md={3}> <p>Investor Relations</p> </Col> 
          <Col xs={6} md={3}> <p>Jobs</p> </Col>
          <Col xs={6} md={3}> <p>Redeem Gift Cards</p> </Col>
          <Col xs={6} md={3}> <p>Buy Gift Cards</p> </Col>
        </Row>
        <Row className='g-0'>
          <Col xs={6} md={3}> <p>Ways to Watch</p> </Col> 
          <Col xs={6} md={3}> <p>Terms of Use</p> </Col>
          <Col xs={6} md={3}> <p>Privacy</p> </Col>
          <Col xs={6} md={3}> <p>Cookie Preferences</p> </Col>
        </Row>
        <Row className='g-0'>
          <Col xs={6} md={3}> <p>Corporate Information</p> </Col> 
          <Col xs={6} md={3}> <p>Contact Us</p> </Col>
          <Col xs={6} md={3}> <p>Speed Test</p> </Col>
          <Col xs={6} md={3}> <p>Legal Notices</p> </Col>
        </Row>
        <Row className='g-0'>
          <Col xs={6} md={3}> <p>Only on Netflix</p> </Col> 
        </Row>
      </Container>
    
      {/* new ver of dropdown container */}
      <div className={styles["footer__row__3"]}>
        <div className={styles["dropdown__container"]}>
          <i className="fas fa-globe"></i>
          <select
            name="languages"
            id="languagesSelect"
            className={styles["language__drop__down"]}
            defaultValue="english"
          >
            <option value="english">English</option>
            <option value="filipino">Filipino</option>
          </select>
        </div>
      </div>
      <div className={styles["footer__row__4"]}>
        <p>Netflix Philippines</p>
      </div>
    </footer>
  );
}