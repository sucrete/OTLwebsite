import Head from "next/head";
import Cards from "../components/Cards";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Old Town Lofts</title>
        <link rel="icon" href="/brickwall.svg" />
      </Head>
      <main>
        <div className="marqueeWrapper">
          <div className="marquee"></div>

          <div className="OTLLogoContainer">
            <img src="/corner.svg" className="corner TL" />
            <img src="/corner.svg" className="corner TR" />
            <img src="/corner.svg" className="corner BL" />
            <img src="/corner.svg" className="corner BR" />
            <div className="innerFrame"></div>
            <div>Old Town Lofts</div>
            <div className="mask"></div>
          </div>
          <div className="KCContainer">
            <img className="diamond" src="/diamond.svg" />
            <div className="KCtext" data-heading="KC">
              KC
            </div>
            <div className="KCtext2">KC</div>
          </div>
          {/* <div className="transitionGradient"></div> */}
          <a href="#cards" className="buttonContainer">
            <span>Our Properties</span>
            <svg
              className="svgArrow"
              ns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M268.65 301.745C268.65 312.258 267.118 324.427 264.05 338.266 261.235 350.567 259.834 360.946 259.834 369.403L260.983 369.403C269.926 347.875 279.444 331.604 289.542 320.583 299.635 309.566 312.092 299.054 326.916 289.06L348 314.048C326.276 325.838 309.152 338.396 296.633 351.72 284.109 365.042 273.118 382.473 263.667 404L248.334 404C238.875 382.473 227.885 365.042 215.367 351.72 202.841 338.396 185.718 325.838 164 314.048L185.084 289.06C199.902 299.054 212.36 309.566 222.458 320.583 232.551 331.604 242.068 347.875 251.017 369.403L252.167 369.403C252.167 361.714 250.885 351.468 248.334 338.649 246.8 331.477 245.65 325.26 244.884 320.006 244.118 314.755 243.734 308.666 243.734 301.745L243.734 108 268.65 108 268.65 301.745Z" />
            </svg>
          </a>
        </div>
        <div id="cards" className="cardsCorpus">

          <Cards />
        </div>
      </main>
      <footer id="footer">
        <svg viewBox="0 0 1198 30" className="footerSVG">
          <path d="M-1,30C-1,30,599,30,599,30C599,30,599,19.33,599,0C453.66,0,374.09,14.24,199.67,22.97C89.21,28.49,-1,30,-1,30C-1,30,-1,30,-1,30M1199,30C1199,30,599,30,599,30C599,30,599,19.33,599,0C744.34,0,823.91,14.24,998.33,22.97C1108.79,28.49,1199,30,1199,30C1199,30,1199,30,1199,30"></path>
        </svg>

        <div className="footerContent">

          <div className="contact">
            <h1>Contact</h1>
            <div className="contactContainer">
              <div className="contactRow">
                <span className="left">phone number:</span>
                <a className="right" href="tel:+1-816-842-1424">
                  (816) 842-1424
                </a>{" "}
              </div>
              <div className="contactRow">
                <span className="left">office address:</span>
                <span
                  className="right"
                  style={{ position: "relative", left: "17%" }}
                >
                  934 Wyandotte St
                  <br /> Kansas City, MO 64105
                </span>
              </div>
            </div>
            <img className="eho" style={{ float: "right" }} src="/eho.svg" />
            <a
              className="appButton"
              href="https://www.oldtownloftskc.com/files/5215/9249/4482/Application_2020_Editable.pdf"
              target="_blank"
            >
              <span>Application</span>
              <img className="appImg" src="/file.svg" alt="my image" />
            </a>
          </div>
          <div className="freepikContainer">
            Some icons made by
            <a
              className="freepik"
              href="http://www.freepik.com/"
              title="Freepik"
              target="_blank"
            >
              Freepik
            </a>
            from
            <a
              href="https://www.flaticon.com/"
              target="_blank"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </div>
        </div>
      </footer>

      <style jsx global>{``}</style>
    </div>
  );
}
