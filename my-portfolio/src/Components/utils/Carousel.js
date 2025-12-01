import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
  const scrollRef = useRef(null);

  // LOGO LIST
  const logos = [
    {
      name: "SQL",
      src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    },
    {
      name: "Confluence",
      src: "https://cdn.worldvectorlogo.com/logos/confluence-1.svg",
    },
    {
      name: "Mixpanel",
      src: "https://cdn.brandfetch.io/mixpanel.com/w/400/h/400/theme/dark/logo.png",
    },
    {
      name: "Python",
      src: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    {
      name: "Airflow",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg",
    },
    {
      name: "Figma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Excel",
      src: "https://cdn-icons-png.flaticon.com/512/732/732220.png",
    },
    {
        name: "Postman",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
    }
  ];

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const speed = 2; // lower = slower

    function startScrolling() {
      container.scrollLeft += speed;
      scrollAmount += speed;

      // When fully scrolled, reset seamlessly
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      }

      container._loop = requestAnimationFrame(startScrolling);
    }

    function stopScrolling() {
      cancelAnimationFrame(container._loop);
    }

    startScrolling();

    // Pause on hover
    container.addEventListener("mouseenter", stopScrolling);
    container.addEventListener("mouseleave", startScrolling);

    return () => {
      container.removeEventListener("mouseenter", stopScrolling);
      container.removeEventListener("mouseleave", startScrolling);
      cancelAnimationFrame(container._loop);
    };
  }, []);

  return (
    <div className="container mb-5">
      <div
        className="d-flex overflow-hidden"
        ref={scrollRef}
        style={{
          whiteSpace: "nowrap",
          gap: "40px",
          scrollBehavior: "auto",
        }}
      >
        {/* DUPLICATE LIST TWICE FOR TRUE INFINITE EFFECT */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="d-flex align-items-center justify-content-center p-3 mx-2"
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "12px",
              background: "#e8ecf1ff",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
