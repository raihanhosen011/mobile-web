import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Footer = () => {
  return (
    <div className="footer max-width">
      <div className="footer__wrapper">
        <div className="footer__top">
          <div className="footer__top__left">
            <h1>OneTech</h1>
            <p>Got Question? Call Us 24/7</p>
            <h3>+38 068 005 3570</h3>

            <div className="footer__top__left__diffP">
              <p>17 Princess Road, London</p>
              <p>Grester London NW18JR, UK</p>
            </div>

            <div className="footer__left__icons">
              <FacebookIcon />
              <TwitterIcon />
              <YouTubeIcon />
              <InstagramIcon />
              <TelegramIcon />
            </div>
          </div>

          <div className="footer__top__right">
            <div className="footer__top__right__box">
              <div className="footer__top__right__p__wrapper">
                <p className="footer__top__right__box__mainP">Find it Fast</p>
              </div>

              <p>Computers & Laptops</p>
              <p>Cameras & Photos</p>
              <p>Hardware</p>
              <p>Smartphones & Tablets</p>
              <p>TV & Audio</p>
              <p>Gadgets</p>
              <p>Car Electronics</p>
            </div>

            <div className="footer__top__right__box">
              <p>Video Games & Consoles</p>
              <p>Accessories</p>
              <p>Cameras & Photos</p>
              <p>Hardware</p>
              <p>Computers & Laptops</p>
            </div>

            <div className="footer__top__right__box">
              <div className="footer__top__right__p__wrapper">
                <p className="footer__top__right__box__mainP">Customer Care</p>
              </div>

              <p>My Account</p>
              <p>Order Tracking</p>
              <p>Wish List</p>
              <p>Customer Services</p>
              <p>Returns / Exchange</p>
              <p>FAQs</p>
              <p>Product Support</p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom__left">
            <p>
              Copyright ©2021 All rights reserved | This template is made with ❤
              by <a href="#abcd">Colorlib</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
