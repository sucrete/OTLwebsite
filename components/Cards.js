import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Masonry from "react-masonry-css";
import useContainerDimensions from "./../src/retrieveWidth.js";
import { LazyLoadImage } from "react-lazy-load-image-component";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const cards = [
  {
    district: "Business Loop",
    building: "917 Lofts",
    url: "",
    picURL: "917Lofts",
    color: "hsla(53, 24%, 93%, 1.0)",
    color2: "hsla(53, 24%, 93%,",
    imgHeight: "370px",
  },
  {
    district: "Business Loop",
    building: "Waltower Lofts",
    url: "",
    picURL: "waltowerLofts",
    color: "hsla(53, 24%, 93%, 1.0)",
    color2: "hsla(53, 24%, 93%,",
    imgHeight: "349px",
  },
  {
    district: "Business Loop",
    building: "Hanover Lofts",
    url: "",
    picURL: "hanoverLofts",
    color: "hsla(53, 24%, 93%, 1.0)",
    color2: "hsla(53, 24%, 93%,",
    imgHeight: "360px",
  },
  {
    district: "Business Loop",
    building: "Graphic Arts",
    url: "",
    picURL: "graphicArts",
    color: "hsla(53, 24%, 93%, 1.0)",
    color2: "hsla(53, 24%, 93%,",
    imgHeight: "400px",
  },
  {
    district: "Business Loop",
    building: "Chambers Lofts",
    url: "",
    picURL: "chambersLofts",
    color: "hsla(53, 24%, 93%, 1.0)",
    color2: "hsla(53, 24%, 93%,",
    imgHeight: "343px",
  },
  {
    district: "Business Loop",
    building: "Finance Lofts",
    url: "",
    picURL: "financeLofts",
    color: "hsla(53, 24%, 93%, 1.0)",
    color2: "hsla(53, 24%, 93%,",
    imgHeight: "320px",
  },
  {
    district: "Crossroads",
    building: "Columbia Lofts",
    url: "",
    picURL: "columbiaLofts",
    color: "hsla(53, 24%, 93%, 1.0)",
    color2: "hsla(53, 24%, 93%,",
    imgHeight: "330px",
  },
  {
    district: "Crossroads",
    building: "Carriage Lofts",
    url: "",
    picURL: "carriageLofts",
    color: "hsla(53, 24%, 93%, 1.0)",
    color2: "hsla(53, 24%, 93%,",
    imgHeight: "320px",
  },
  {
    district: "Crossroads",
    building: "Star Lofts",
    url: "",
    picURL: "starLofts",
    color: "hsla(53, 24%, 93%, 1.0)",
    color2: "hsla(53, 24%, 93%,",
    imgHeight: "333px",
  },
  {
    district: "River Market",
    building: "Old Town Lofts",
    url: "",
    picURL: "oldTownLofts",
    color: "hsla(53, 24%, 93%,1.0)",
    color2: "hsla(53, 24%, 93%,",
    imgHeight: "300px",
  },
  {
    district: "River Market",
    building: "Chase Lofts",
    url: "",
    picURL: "chaseLofts",
    color: "hsla(53, 24%, 93%,1.0)",
    color2: "hsla(53, 24%, 93%,",
    imgHeight: "314px",
  },
  {
    district: "",
    building: "Lucas Place",
    url: "",
    picURL: "lucasPlace",
    color: "hsla(261, 75%, 79%, 1.0)",
    color2: "hsla(261, 75%, 79%,",
    imgHeight: "275px",
  },
];

function Cards() {
  const componentRef = useRef();
  const { width } = useContainerDimensions(componentRef);

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {cards.map((card) => (
          <div
            className="card"
            style={{ backgroundColor: `${card.color}` }}
            ref={componentRef}
          >
            <a>
              <div
                className="imageContainer"
                style={{
                  height: `${card.imgHeight}`,
                }}
              >
                <LazyLoadImage
                  effect="blur"
                  src={`/${card.picURL}.jpg`}
                  style={{
                    height: `${card.imgHeight}`,
                    minWidth: `${width}px`,
                  }}
                />
                <div
                  className="imgTransition"
                  style={{
                    background: `linear-gradient(to bottom, ${card.color2} 0) 0%,${card.color2} 0.013) 8.1%,${card.color2} 0.049) 15.5%,${card.color2} 0.104) 22.5%,${card.color2} 0.175) 29%,${card.color2} 0.259) 35.3%,${card.color2} 0.352) 41.2%,${card.color2} 0.45) 47.1%,${card.color2} 0.55) 52.9%,${card.color2} 0.648) 58.8%,${card.color2} 0.741) 64.7%,${card.color2} 0.825) 71%,${card.color2} 0.896) 77.5%,${card.color2} 0.951) 84.5%,${card.color2} 0.987) 91.9%,${card.color2} 45.1%) 100%)`,
                  }}
                ></div>
              </div>
              <div className="descriptionContainer">
                <div className="building"> {card.building}</div>
                <div className="district"> {card.district}</div>
              </div>
            </a>
          </div>
        ))}
      </Masonry>

      {/* <Link href="/[artiste.artistName]" as={`/${artiste.pageName}`}>
                <div className="fileContainer" key={artiste.artistName}>
                  <img className="iconImg" src="/Folder-icon.png" />
                  <a>{artiste.artistName}</a>
                </div>
              </Link> */}
      <style jsx>{``}</style>
    </div>
  );
}

export default Cards;
