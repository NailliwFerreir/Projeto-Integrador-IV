import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function SimpleSlider(props) {
  const { className, settings, children, selector } = props;

  return (
    <Slider ref={selector} className={`${className || ""}`} {...settings}>
      {children}
    </Slider>
  );
}
