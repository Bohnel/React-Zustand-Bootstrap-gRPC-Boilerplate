import useAuthStore from "@/store/useAuthStore";
import { useLogoutQuery } from "@/services/queries/auth.query";
import useProjectStore from "@/store/useProjectStore";
import useChapterStore from "@/store/useChapterStore";
import { useTranslation } from "react-i18next";
import logo from "@/assets/svg/T-Logo.svg";
import phoneIcon from "@/assets/svg/phone-number/phone.svg";
import { Link } from "react-router-dom";
import { Nav, Navbar, Image, Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Header = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <Navbar
      id="app-header"
      className="shadow-lg p-0 justify-content-between"
      {...props}
    >
      <Nav className="col-7">
        <Nav.Item>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-end col-5">
      </Nav>
    </Navbar>
  );
};

export default Header;
