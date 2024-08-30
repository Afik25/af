import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  BiPhone,
  BiMessage,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaAt,
  FaMapMarkerAlt,
} from "../../middlewares/icons";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="left">
            <img
              src={process.env.PUBLIC_URL + "/logo-white.png"}
              alt="white-logo"
            />
            <p className="title t-3">{t("components.footer.text-1")}</p>
          </div>
          <div className="center">
            <h3 className="title t-2">{t("components.footer.text-2")}</h3>
            <Link to="" className="link">
              {t("components.header.text-1")}
            </Link>
            <Link to="" className="link">
              {t("components.header.text-2")}
            </Link>
            <Link to="" className="link">
              {t("components.header.text-3")}
            </Link>
            <Link to="" className="link">
              {t("components.header.text-4")}
            </Link>
          </div>
          <div className="right">
            <h3 className="title t-2">{t("components.footer.text-3")}</h3>
            <p className="title t-3">
              <FaAt className="icon" /> <span>info@afoundation.org</span>
            </p>
            <p className="title t-3">
              <BiPhone className="icon" /> <span>+243 81 61 94 942</span>
            </p>
            <p className="title t-3">
              <FaMapMarkerAlt className="icon" />{" "}
              <span>{t("home.text-11.description.element-1")}</span>
            </p>
          </div>
          <div className="socials-network">
            <div className="c-70 m-auto">
              <p>{t("home.text-12.subtitle.element-1")}</p>
              <form className="display-flex justify-content-center align-items-center">
                <input type="text" placeholder="xyz@mail.com" />
                <button className="button">
                  <BiMessage />
                  <span>{t("home.text-12.subtitle.element-2")}</span>
                </button>
              </form>
            </div>
            <div className="socials">
              <Link to="" className="link">
                <span className="icon">
                  <FaFacebookF />
                </span>
                <span className="social">Facebook</span>
              </Link>
              <Link to="" className="link">
                <span className="icon">
                  <FaTwitter />
                </span>
                <span className="social">Twitter</span>
              </Link>
              <Link to="" className="link">
                <span className="icon">
                  <FaLinkedinIn />
                </span>
                <span className="social">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span>
              &copy; {new Date().getFullYear()} Afik Foundation,{" "}
              {t("components.footer.text-4")}.
            </span>
            <Link to="" className="link">
              {t("components.footer.text-5")}
            </Link>
          </div>
          <div className="right">
            <Link to="" className="link">
              {t("components.footer.text-6")}
            </Link>
            <Link to="" className="link">
              {t("components.footer.text-7")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
