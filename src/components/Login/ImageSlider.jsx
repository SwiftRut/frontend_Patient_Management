import { useEffect, useRef } from "react";

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const imageElements = slider.querySelectorAll("img");
    const dots = slider.querySelectorAll(".dot");

    const updateSlider = (index) => {
      imageElements.forEach((image) => (image.style.display = "none"));
      imageElements[index].style.display = "block";
      dots.forEach((dot, idx) => dot.classList.toggle("active", idx === index));
    };

    const handleDotClick = (index) => {
      currentIndexRef.current = index;
      updateSlider(currentIndexRef.current);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => handleDotClick(index));
    });

    // Initialize the slider
    updateSlider(currentIndexRef.current);

    return () => {
      dots.forEach((dot) => {
        dot.removeEventListener("click", () => handleDotClick(currentIndexRef.current));
      });
    };
  }, [images]);

  return (
    <div className="slider" ref={sliderRef}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} style={{ display: index === 0 ? 'block' : 'none' }} />
      ))}
      <div className="dots">
        {images.map((_, index) => (
          <span key={index} className={`dot ${index === 0 ? "active" : ""}`}></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 