import Link from "next/link";

const cards = [
  {
    name: "River Market",
    buildings: [
      { name: "Chase Lofts", url: "", picURL: "" },
      { name: "Old Town Lofts", url: "", picURL: "" },
    ],
  },
  {
    name: "Business Loop",
    buildings: [
      { name: "917 Lofts", url: "", picURL: "" },
      { name: "Waltower Lofts", url: "", picURL: "" },
      { name: "Hanover Lofts", url: "", picURL: "" },
      { name: "Graphic Arts", url: "", picURL: "" },
      { name: "Chambers Lofts", url: "", picURL: "" },
      { name: "Finance Lofts", url: "", picURL: "" },
    ],
  },
  {
    name: "Crossroads",
    buildings: [
      { name: "Columbia Lofts", url: "", picURL: "" },
      { name: "Carriage Lofts", url: "", picURL: "" },
      { name: "Star Lofts", url: "", picURL: "" },
    ],
  },
  {
    name: "Wellington",
    buildings: [{ name: "Wellington", url: "", picURL: "" }],
  },
  {
    name: "Lucas Place",
    buildings: [{ name: "Lucas Place", url: "", picURL: "" }],
  },
];
const Cards = () => (
  <div>
    <div style={{ color: "blue" }}>cards here</div>
    {cards.map((zone) =>
      zone.buildings.map((building) => (
        <div style={{ color: "yellow" }}> {building.name}</div>
      ))
    )}
    {/* <Link href="/[artiste.artistName]" as={`/${artiste.pageName}`}>
              <div className="fileContainer" key={artiste.artistName}>
                <img className="iconImg" src="/Folder-icon.png" />
                <a>{artiste.artistName}</a>
              </div>
            </Link> */}
    <style jsx>{``}</style>
  </div>
);

export default Cards;
