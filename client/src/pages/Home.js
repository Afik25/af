import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {
  BsCheck2All,
  MdOutlineImportantDevices,
  MdDevices,
  MdUnfoldMoreDouble,
  FaChartPie,
  IoCloudUpload,
  TbApi,
  AiTwotoneApi,
  HiOutlineExternalLink,
  BsPhone,
  BsAt,
  MdLocationPin,
} from "../middlewares/icons";
import MASOMO from "../assets/images/masomo.png";
import AFYA from "../assets/images/afya.png";
import NA_AI from "../assets/images/na-ai.png";
import SHOP from "../assets/images/shop.png";
import PAMOJA_AI from "../assets/images/Pamoja-AI.png";
import tile1 from "../assets/images/tile1.png";
import tile2 from "../assets/images/tile2.png";
import tile3 from "../assets/images/tile3.png";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Afik Foundation - The Digital Bridge.</title>
        <meta
          name="description"
          content="Des services et produits informatiques personnalisées pour votre entreprise."
        />
        <meta
          name="keywords"
          content="Technologie, Technology, Startup, Numérique, Numeric, Digitale, Digital."
        />
      </Helmet>
      <div className="home">
        <Header />
        <div className="banner">
          <div className="container margin-auto">
            <div className="left" data-aos="fade-right">
              <p className="title t-3">&#x2705; {t("home.text-1")}</p>
              <h2 className="title t-1">{t("home.text-2")}</h2>
              <div className="button">
                <Link to="/register" className="btn-join link">
                  {t("home.text-3")}
                </Link>
              </div>
            </div>
            <div className="right" data-aos="fade-left">
              <img src={process.env.PUBLIC_URL + "/lab.png"} alt="lab-img" />
            </div>
          </div>
        </div>
        {/* section */}
        <div className="section" data-aos="zoom-in">
          <div className="head">
            <h2 className="title t-1">{t("home.text-4.main")}</h2>
          </div>
          <div className="container">
            <div className="item">
              <BsCheck2All className="icon" />
              <h3 className="title t-3">{t("home.text-4.one")}</h3>
            </div>
            <div className="item">
              <BsCheck2All className="icon" />
              <h3 className="title t-3">{t("home.text-4.two")}</h3>
            </div>
            <div className="item">
              <BsCheck2All className="icon" />
              <h3 className="title t-3">{t("home.text-4.three")}</h3>
            </div>
            <div className="item">
              <BsCheck2All className="icon" />
              <h3 className="title t-3">{t("home.text-4.four")}</h3>
            </div>
          </div>
        </div>
        {/* service */}
        <div className="services">
          <div className="head">
            <h1 className="title t-1">{t("home.text-5.title")}</h1>
            <p className="title t-2">{t("home.text-5.subtitle")}</p>
            <hr />
          </div>
          <div className="container">
            <div className="item">
              <div className="item-icon">
                <div className="icon-inside">
                  <MdOutlineImportantDevices className="icon" />
                </div>
              </div>
              <div>
                <h3 className="title t-1">
                  {t("home.text-5.items.item-1.title")}
                </h3>
                <p className="title t-2">
                  {t("home.text-5.items.item-1.description")}
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-up" data-aos-duration="3000">
              <div className="item-icon">
                <div className="icon-inside">
                  <MdDevices className="icon" />
                </div>
              </div>
              <div>
                <h3 className="title t-1">
                  {t("home.text-5.items.item-2.title")}
                </h3>
                <p className="title t-2">
                  {t("home.text-5.items.item-2.description")}
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-up" data-aos-duration="4000">
              <div className="item-icon">
                <div className="icon-inside">
                  <FaChartPie className="icon" />
                </div>
              </div>
              <div>
                <h3 className="title t-1">
                  {t("home.text-5.items.item-3.title")}
                </h3>
                <p className="title t-2">
                  {t("home.text-5.items.item-3.description")}
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-up" data-aos-duration="5000">
              <div className="item-icon">
                <div className="icon-inside">
                  <IoCloudUpload className="icon" />
                </div>
              </div>
              <div>
                <h3 className="title t-1">
                  {t("home.text-5.items.item-4.title")}
                </h3>
                <p className="title t-2">
                  {t("home.text-5.items.item-4.description")}
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-up" data-aos-duration="6000">
              <div className="item-icon">
                <div className="icon-inside">
                  <TbApi className="icon" />
                </div>
              </div>
              <div>
                <h3 className="title t-1">
                  {t("home.text-5.items.item-5.title")}
                </h3>
                <p className="title t-2">
                  {t("home.text-5.items.item-5.description")}
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-up" data-aos-duration="7000">
              <div className="item-icon">
                <div className="icon-inside">
                  <AiTwotoneApi className="icon" />
                </div>
              </div>
              <div>
                <h3 className="title t-1">
                  {t("home.text-5.items.item-6.title")}
                </h3>
                <p className="title t-2">
                  {t("home.text-5.items.item-6.description")}
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-up" data-aos-duration="8000">
              <div className="item-icon">
                <div className="icon-inside">
                  <MdUnfoldMoreDouble className="icon" />
                </div>
              </div>
              <div>
                <h3 className="title t-1">
                  {t("home.text-5.items.item-7.title")}
                </h3>
                <p className="title t-2">
                  {t("home.text-5.items.item-7.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ruban */}
        <div className="ruban">
          <div className="container">
            <h2 className="title t-1">{t("home.text-6.one")}</h2>
            <div>
              <p className="title t-2">{t("home.text-6.two")}</p>
              <button>
                <Link to={""} className="link">
                  {t("home.text-6.three")}
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* product */}
        <div className="products">
          <div className="head">
            <h1 className="title t-1">{t("home.text-7.title")}</h1>
            <p className="title t-2">{t("home.text-7.subtitle")}</p>
          </div>
          <div className="container">
            <div className="item">
              <div className="item-icon">
                <div className="icon-left">
                  <img src={MASOMO} alt="masomo-img" />
                </div>
                <div className="icon-right">
                  <span>EdTech</span>
                </div>
              </div>
              <div>
                <h3 className="title t-1">
                  {t("home.text-7.items.item-1.title")}
                </h3>
                <p className="title t-2">
                  {t("home.text-7.items.item-1.description")}
                </p>
              </div>
              <div className="more">
                <Link to="https://masomo-edu.com" className="link">
                  <span>{t("home.text-7.items.item-1.type")}</span>
                  <span style={{ color: "#d4af37" }}>(Beta)</span>
                  <HiOutlineExternalLink />
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="item-icon">
                <div className="icon-left">
                  <img src={SHOP} alt="shop-img" />
                </div>
                <div className="icon-right">
                  <span>Business</span>
                </div>
              </div>
              <div>
                <h3 className="title t-1">
                  {t("home.text-7.items.item-2.title")}
                </h3>
                <p className="title t-2">
                  {t("home.text-7.items.item-2.description")}
                </p>
              </div>
              <div className="more">
                <Link to="https://www.shop-pro.store" className="link">
                  <span>{t("home.text-7.items.item-2.type")}</span>
                  <span style={{ color: "#d4af37" }}>(Beta)</span>
                  <HiOutlineExternalLink />
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="item-icon">
                <div className="icon-left">
                  <img src={AFYA} alt="afya-img" />
                </div>
                <div className="icon-right">
                  <span>HealthTech</span>
                </div>
              </div>
              <div>
                <h3 className="title t-1">
                  {t("home.text-7.items.item-3.title")}
                </h3>
                <p className="title t-2">
                  {t("home.text-7.items.item-3.description")}
                </p>
              </div>
              <div className="more">
                <Link to="" className="link">
                  <span>{t("home.text-7.items.item-3.type")}</span>
                  <span style={{ color: "#d4af37" }}>(Beta)</span>
                  <HiOutlineExternalLink />
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="item-icon">
                <div className="icon-left">
                  <img src={NA_AI} alt="na-ai_img" />
                </div>
                <div className="icon-right">
                  <span>AI</span>
                </div>
              </div>
              <div>
                <h3 className="title t-1">
                  {t("home.text-7.items.item-4.title")}
                </h3>
                <p className="title t-2">
                  {t("home.text-7.items.item-4.description")}
                </p>
              </div>
              <div className="more">
                <Link to="" className="link">
                  <span>{t("home.text-7.items.item-4.type")}</span>
                  <span style={{ color: "#d4af37" }}>(Beta)</span>
                  <HiOutlineExternalLink />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* about */}
        <div className="about">
          <div className="container">
            <div className="left">
              <h2 className="title t-1">{t("home.text-8.title")}</h2>
              <p>{t("home.text-8.description")}</p>
              <h3 className="title t-2">
                {t("home.text-8.subtitle")}, <br />{" "}
                <span>Afik Foundation.</span>
              </h3>
            </div>
            <div className="right">
              <div className="tile">
                <div className="s-tile st-4"></div>
                <div className="s-tile st-1"></div>
                <div className="s-tile st-2"></div>
                <div className="s-tile st-3"></div>
              </div>
              <div className="tile">
                <img src={tile1} alt="tile-1" />
              </div>
              <div className="tile">
                <div className="s-tile st-2"></div>
                <div className="s-tile st-1"></div>
                <div className="s-tile st-3"></div>
                <div className="s-tile st-4"></div>
              </div>
              <div className="tile">
                <img src={tile2} alt="tile-2" />
              </div>
              <div className="tile">
                <div className="s-tile st-1"></div>
                <div className="s-tile st-2"></div>
                <div className="s-tile st-4"></div>
                <div className="s-tile st-3"></div>
              </div>
              <div className="tile">
                <img src={tile3} alt="tile-3" />
              </div>
            </div>
          </div>
        </div>
        {/* lab */}
        <div className="labs">
          <div className="container">
            <div className="right">
              <img src={process.env.PUBLIC_URL + "/ai.png"} alt="ai-lab_img" />
            </div>
            <div className="left">
              <h3 className="title t-2">
                Afik Foundation, <br />
                <br />
                <span>{t("home.text-9.title")}</span>
              </h3>
              <p>{t("home.text-9.description")}</p>
              <h2 className="title t-1">{t("home.text-9.subtitle")}</h2>
            </div>
          </div>
        </div>
        {/* Partners */}
        <div className="partnership">
          <h1 className="title t-2">{t("home.text-10")}</h1>
          <div className="container">
            <img src={PAMOJA_AI} alt="pamoja-ai" />
            <img src={NA_AI} alt="na-ai" />
            <img src={AFYA} alt="afya" />
          </div>
        </div>
        {/* Contacts */}
        <div className="contacts">
          <div className="head">
            <h1 className="title t-1">{t("home.text-11.title")}</h1>
            <p className="title t-2">{t("home.text-11.subtitle")}</p>
          </div>
          <div className="container">
            <div className="left">
              <img src={process.env.PUBLIC_URL + "/drc.png"} alt="drc" />
              <div className="content">
                <div className="item">
                  <span className="icon">
                    <BsPhone />
                  </span>
                  <span className="details">+243 81 61 94 942</span>
                </div>
                <div className="item">
                  <span className="icon">
                    <BsAt />
                  </span>
                  <span className="details">afik.foundation@gmail.com</span>
                </div>
                <div className="item">
                  <span className="icon">
                    <MdLocationPin />
                  </span>
                  <span className="details">
                    {t("home.text-11.description.element-1")}
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <form>
                <input
                  type="text"
                  id=""
                  name=""
                  placeholder={t("home.text-11.description.element-2")}
                />
                <input
                  type="text"
                  id=""
                  name=""
                  placeholder={t("home.text-11.description.element-3")}
                />
                <input
                  type="text"
                  id=""
                  name=""
                  placeholder={t("home.text-11.description.element-4")}
                />
                <textarea
                  name=""
                  placeholder={t("home.text-11.description.element-5")}
                ></textarea>
                <input
                  type="button"
                  id=""
                  name=""
                  value={t("home.text-11.description.element-6")}
                />
              </form>
            </div>
          </div>
        </div>
        {/* Testimonies */}
        <div className="testimony">
          <div className="c-90 m-auto">
            <h3 className="title t-2">{t("home.text-12.title")}</h3>
          </div>
          <div className="container">
            <div className="testimony-item">
              <div className="testy-card m-auto">
                <p className="title t-2">{t("home.text-12.description")}</p>
                <h3 className="title t-1">Edourd ELOLO</h3>
                <p className="title t-3">MASOMO, Manager</p>
              </div>
            </div>
            <div className="testimony-item">
              <div className="clip-small"></div>
              <div className="clip-large"></div>
              <div className="clip-medium"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
