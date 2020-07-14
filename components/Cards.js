import Link from "next/link";
import Masonry from "react-masonry-css";
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const cards = [
  { zone: "River Market", building: "Chase Lofts", url: "", picURL: "chaseLofts", color: "azure" },
  { zone: "River Market", building: "Old Town Lofts", url: "", picURL: "oldTownLofts", color: "azure" },
  { zone: "Business Loop", building: "917 Lofts", url: "", picURL: "917Lofts", color: "cornflowerblue" },
  { zone: "Business Loop", building: "Waltower Lofts", url: "", picURL: "waltowerLofts", color: "cornflowerblue" },
  { zone: "Business Loop", building: "Hanover Lofts", url: "", picURL: "hanoverLofts", color: "cornflowerblue" },
  { zone: "Business Loop", building: "Graphic Arts", url: "", picURL: "graphicArts", color: "cornflowerblue" },
  { zone: "Business Loop", building: "Chambers Lofts", url: "", picURL: "chambersLofts", color: "cornflowerblue" },
  { zone: "Business Loop", building: "Finance Lofts", url: "", picURL: "financeLofts", color: "cornflowerblue" },
  { zone: "Crossroads", building: "Columbia Lofts", url: "", picURL: "columbiaLofts", color: "#CADB72" },
  { zone: "Crossroads", building: "Carriage Lofts", url: "", picURL: "carriageLofts", color: "#CADB72" },
  { zone: "Crossroads", building: "Star Lofts", url: "", picURL: "starLofts", color: "#CADB72" },
  { zone: "", building: "Wellington", url: "", picURL: "wellington", color: "tomato" },
  { zone: "", building: "Lucas Place", url: "", picURL: "lucasPlace", color: "#BEA2F2" }
];
const Cards = () => (
  <div >
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {/* array of JSX items */}
      {cards.map((card) => (
        <div className="card" >
          <div> {card.building}</div>
        </div>)

      )}
    </Masonry>

    {/* <Link href="/[artiste.artistName]" as={`/${artiste.pageName}`}>
              <div className="fileContainer" key={artiste.artistName}>
                <img className="iconImg" src="/Folder-icon.png" />
                <a>{artiste.artistName}</a>
              </div>
            </Link> */}
    <style jsx>{`
     
    `}</style>
  </div >
);

export default Cards;
