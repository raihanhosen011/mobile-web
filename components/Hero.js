import { Button } from "@material-ui/core";

const Hero = () => {
  return (
    <div className="hero">
      <div className="home__wrapper">
        <div className="home__details">
          <h1>NEW ERA OF SMARTPHONES</h1>

          <div className="home__detail__more">
            <h3>
              <del>$530</del> <span>$460</span>
            </h3>
            <p>Apple Iphone 6s</p>
            <Button variant="contained" color="primary">
              Shop Now
            </Button>
          </div>
        </div>

        <div className="home__image">
          <img
            src="https://preview.colorlib.com/theme/onetech/images/xbanner_product.png.pagespeed.ic.8YoeI51pih.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;