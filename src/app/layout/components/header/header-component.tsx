import { withTranslation } from 'react-i18next';
import { TRANSLATION_NAMESPACES } from '~/app/constant/common.constant';
import { HeaderComponentProps } from '~/app/layout/components/header/header-component.props.ts';
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import styles from './header-component.module.scss';
import UtilsCommon from '~/app/utils/utils-common.ts';
import React from 'react';

// https://youtu.be/7dKTNAFw9C0, https://youtu.be/zPIkyluosVs
const cx = UtilsCommon.cx(styles);

const HeaderComponent = (props: HeaderComponentProps) => {
    const { t } = props;
    const navList = ['home', 'introduce', 'blog', 'contact'];

    return (
        <Container fluid className={cx('container')}>
            <Row className={`justify-content-between`}>
                <Col className={cx('content')} xl>
                    <Navbar expand="lg" className={cx('navbar')}>
                        <Navbar.Brand href="#">
                            <p className={cx('text-gradient')}>LE NUTRA</p>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                {navList.map((nav: string) => {
                                    return (
                                        <Nav.Link className={cx('nav-link')} href="#action1">
                                            {t(nav)}
                                        </Nav.Link>
                                    );
                                })}
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder={t('search')}
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">{t('search')}</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default withTranslation(TRANSLATION_NAMESPACES.GENERAL)(HeaderComponent);
