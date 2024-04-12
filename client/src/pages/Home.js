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
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    AOS.init();
  }, [])

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
              <img src={process.env.PUBLIC_URL + "/lab.png"} alt="lab-img"/>
            </div>
          </div>
        </div>
        {/* section */}
        <div className="section" data-aos="zoom-in">
          <div className="head">
            <h2 className="title t-1">
              Nous produisons des résultats satisfaisants et impactants
              possibles que grâce aux valeurs que nous imprimons
            </h2>
          </div>
          <div className="container">
            <div className="item">
              <BsCheck2All className="icon" />
              <h3 className="title t-3">Créativité</h3>
            </div>
            <div className="item">
              <BsCheck2All className="icon" />
              <h3 className="title t-3">Rapidité</h3>
            </div>
            <div className="item">
              <BsCheck2All className="icon" />
              <h3 className="title t-3">Intégrité</h3>
            </div>
            <div className="item">
              <BsCheck2All className="icon" />
              <h3 className="title t-3">Serviabilité</h3>
            </div>
          </div>
        </div>
        {/* service */}
        <div className="services">
          <div className="head">
            <h1 className="title t-1">Nos services</h1>
            <p className="title t-2">
              Consultance, Création rapide d'une expérience numérique.
            </p>
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
                <h3 className="title t-1">Développement des Applications</h3>
                <p className="title t-2">
                  Avec une approche intégrée, nous développons des applications
                  web, mobiles, plateforme sur mesure.
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-up"  data-aos-duration="3000">
              <div className="item-icon">
                <div className="icon-inside">
                  <MdDevices className="icon" />
                </div>
              </div>
              <div>
                <h3 className="title t-1">Conception et Design</h3>
                <p className="title t-2">
                  Conception UI/UX Responsive des interfaces utilisateurs web et
                  mobile ergonomique avec une expérience d'utilisation
                  intuitive.
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-up"  data-aos-duration="4000">
              <div className="item-icon">
                <div className="icon-inside">
                  <FaChartPie className="icon" />
                </div>
              </div>
              <div>
                <h3 className="title t-1">Ingénierie des données</h3>
                <p className="title t-2">
                  Traitement et Analyse de Données; Suivant le standard
                  adequate, nous traitons et donnons de la valeur aux données
                  pour une explotation efficiente.
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-up"  data-aos-duration="5000">
              <div className="item-icon">
                <div className="icon-inside">
                  <IoCloudUpload className="icon" />
                </div>
              </div>
              <div>
                <h3 className="title t-1">Déploiement sur Cloud</h3>
                <p className="title t-2">
                  Avec nos conseils bénéfiques sur le choix dans l'ensemble des
                  fournisseurs cloud, nous aidons les clients à mettre leurs
                  solutions sur Cloud afin de bénéficier de services y relatif.
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-up"  data-aos-duration="6000">
              <div className="item-icon">
                <div className="icon-inside">
                  <TbApi className="icon" />
                </div>
              </div>
              <div>
                <h3 className="title t-1">Développement d'APIs</h3>
                <p className="title t-2">
                  Avec notre expertise dans plusieurs technologies (Python,
                  JavaScripy, .Net, Java, etc.), nous concevons et implementons
                  des APIs adaptées seloin les besoins du client.
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-up"  data-aos-duration="7000">
              <div className="item-icon">
                <div className="icon-inside">
                  <AiTwotoneApi className="icon" />
                </div>
              </div>
              <div>
                <h3 className="title t-1">Intégrations</h3>
                <p className="title t-2">
                  Intégrations des solutions sous forme de differentes bloques
                  afin d'en constituer une seule et unique solution.
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-up"  data-aos-duration="8000">
              <div className="item-icon">
                <div className="icon-inside">
                  <MdUnfoldMoreDouble className="icon" />
                </div>
              </div>
              <div>
                <h3 className="title t-1">Plus</h3>
                <p className="title t-2">
                  D'autres services liés au numérique.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ruban */}
        <div className="ruban">
          <div className="container">
            <h2 className="title t-1">Commençon quelque chose de grand!</h2>
            <div>
              <p className="title t-2">
                Parlez de votre idée de projet pour lequel vous comptez
                travailler avec nous; et nous vous repondons dans les 48heures
                qui suivent!
              </p>
              <button>Démarer une conversation</button>
            </div>
          </div>
        </div>
        {/* product */}
        <div className="products">
          <div className="head">
            <h1 className="title t-1">Nos Produits</h1>
            <p className="title t-2">
              Nous avons proposé sur le marché, les produits digitals qui
              impacte la vie quotidienne de la société....
            </p>
          </div>
          <div className="container">
            <div className="item">
              <div className="item-icon">
                <div className="icon-left">
                  <img src={MASOMO} alt="masomo-img"/>
                </div>
                <div className="icon-right">
                  <span>EdTech</span>
                </div>
              </div>
              <div>
                <h3 className="title t-1">MASOMO</h3>
                <p className="title t-2">
                  Un école numérique, accessible partout et à n'importe quel
                  moment.
                </p>
              </div>
              <div className="more">
                <Link to="" className="link">
                  <span>Propriétaire</span>
                  <span style={{ color: "#d4af37" }}>(Beta)</span>
                  <HiOutlineExternalLink />
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="item-icon">
                <div className="icon-left">
                  <img src={SHOP} alt="shop-img"/>
                </div>
                <div className="icon-right">
                  <span>Business</span>
                </div>
              </div>
              <div>
                <h3 className="title t-1">SHOP</h3>
                <p className="title t-2">
                  ERP, une plateforme de gestion d'une organisation dotée de
                  plusieurs modules de gestion.
                </p>
              </div>
              <div className="more">
                <Link to="" className="link">
                  <span>Propriétaire</span>
                  <span style={{ color: "#d4af37" }}>(Beta)</span>
                  <HiOutlineExternalLink />
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="item-icon">
                <div className="icon-left">
                  <img src={AFYA} alt="afya-img"/>
                </div>
                <div className="icon-right">
                  <span>HealthTech</span>
                </div>
              </div>
              <div>
                <h3 className="title t-1">AFYA</h3>
                <p className="title t-2">
                  Une plateforme de gestion de dossier medicale et controle de
                  son État de Santé.
                </p>
              </div>
              <div className="more">
                <Link to="" className="link">
                  <span>Propriétaire</span>
                  <span style={{ color: "#d4af37" }}>(Beta)</span>
                  <HiOutlineExternalLink />
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="item-icon">
                <div className="icon-left">
                  <img src={NA_AI} alt="na-ai_img"/>
                </div>
                <div className="icon-right">
                  <span>AI</span>
                </div>
              </div>
              <div>
                <h3 className="title t-1">NA-AI</h3>
                <p className="title t-2">
                  Une plateforme à de fins d'intelligence artificielle.
                </p>
              </div>
              <div className="more">
                <Link to="" className="link">
                  <span>Propriétaire</span>
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
              <h2 className="title t-1">A propos de nous</h2>
              <p>
                Nous sommes une structure engagée et déterminer à faire de la
                technologie, un outil puissant et accompagnateur de la société
                dans son quotidien; afin de rendre certaines tâches beaucoup
                plus simple!
              </p>
              <h3 className="title t-2">
                Nous sommes, <br /> <span>Afik Foundation.</span>
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
                <span>
                  C'est aussi un laboratoire d'Intelligence Artificielle...
                </span>
              </h3>
              <p>
                Nous nous servons de données pour développer des outils
                intelligent bénéfique pour l'industrie...
              </p>
              <h2 className="title t-1">IA pour la société!</h2>
            </div>
          </div>
        </div>
        {/* Partners */}
        <div className="partnership">
          <h1 className="title t-2">
            There are working with us.
          </h1>
          <div className="container">
            <img src={PAMOJA_AI} alt="pamoja-ai"/>
            <img src={NA_AI} alt="na-ai"/>
            <img src={AFYA} alt="afya"/>
          </div>
        </div>
        {/* Contacts */}
        <div className="contacts">
          <div className="head">
            <h1 className="title t-1">Contactez-nous</h1>
            <p className="title t-2">
              24heure/24, Notre équipe d'assistance est disponible et prête à
              vous répondre.
            </p>
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
                    Kinshasa - Democratic Republic of Congo
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <form>
                <input type="text" id="" name="" placeholder="Votre noms" />
                <input type="text" id="" name="" placeholder="Votre e-mail" />
                <input
                  type="text"
                  id=""
                  name=""
                  placeholder="Objet du message"
                />
                <textarea name="" placeholder="Votre message"></textarea>
                <input type="button" id="" name="" value="Envoyer" />
              </form>
            </div>
          </div>
        </div>
        {/* Testimonies */}
        <div className="testimony">
          <div className="c-90 m-auto">
            <h3 className="title t-2">Ce que l'on dit de nous !</h3>
          </div>
          <div className="container">
            <div className="testimony-item">
              <div className="testy-card m-auto">
                <p className="title t-2">
                  Merci Afik Foundation pour le service combien louable que vous
                  nous avez rendu pour la numérisation de nos travaux.
                </p>
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
