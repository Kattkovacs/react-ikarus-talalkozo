import React from "react";
import Map from "./Map";
import cityMapHu from "../city_map_hu.jpg";
// import cityTripHu from "../city_trip_hu.jpg";
import roundTrip from "../felvonulas24_hu.jpg";
import cityMapEn from "../city_map_en.jpg";
import underConst from "../under_const.jpg";
// import cityTripEn from "../city_trip_en.jpg";
// import bus25059 from "../25059.JPG";
// import bus25098 from "../25098.jpg";
// import bus5521 from "../5521.jpg";
// import { MdOutlineReadMore } from "react-icons/md";

const Approach = ({ currentLanguage }) => {
  return (
    <section className="event" id="approach">
      {currentLanguage === "hu" ? (
        <div className="container">
          <div>
            <h1>MEGKÖZELÍTÉS</h1>
            <strong>Helyszín </strong>
            <p>Veszprém megye, Tapolca város, volt Kinizsi laktanya</p>
            <br />
            <div hidden={true}>

            <Map />
            </div>
            <br />
            <strong>Tömegközlekedéssel</strong>
            <p>
              <a href="http://menetrendek.hu" className="link">
                menetrendek.hu
              </a>{" "}
              oldalon kereshetőek a járatok. Autóbusszal Tapolca,
              autóbuszállomás megállóig, vonattal Tapolca, vasútállomásig kell
              tervezni. 
            </p>
            <br />
            <strong>Gépjárművel</strong>
            <p>
              A helyszínen autó parkolásra van lehetőség.
            </p>
            <br />
            {/* <strong>Nosztalgia különvonattal</strong>
            <p>
              A különvonat nosztalgia BCmot motorkocsi és Cmn kocsi
              összeállításban közlekedik. A különvonat utasait a találkozó
              szervezői különbuszokkal viszik az esemény helyszínére.
            </p> */}
            {/* <table>
              <tbody>
                <tr>
                  <th>Útvonal (oda és vissza)</th>
                  <th>Járművek típusa</th>
                  <th>Részletek és foglalás</th>
                </tr>
                <tr>
                  <td>Budapest Kelenföld - Balaton északi part - Tapolca </td>
                  <td>BCmot, Cmn</td>
                  <td>
                    <button>
                      <MdOutlineReadMore className="biBus" size="18px" />
                      <a
                        href="https://www.mavrailtours.hu/hu/programs/show/124"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Részletek
                      </a>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table> */}

            <br />
            <strong>Nosztalgia különjáratokkal</strong>
            <p>Egyeztetés alatt...</p>
            {/* <p>
              Az alábbiakban felsorolt buszokkal van lehetőség eljutni a
              Találkozó helyszínére. A "Részletek és foglalás" résznél lehet
              érdeklődni a buszos utazással kapcsolatban.
            </p>
            <br />
            <table>
              <tbody>
                <tr>
                  <th>Útvonal (oda és vissza)</th>
                  <th>Jármű típusa</th>
                  <th>Részletek és foglalás</th>
                </tr>
                <tr>
                  <td>Budapest - Székesfehérvár - Tapolca, Köztársaság tér</td>
                  <td>250.59</td>
                  <td>
                    <button>
                      <MdOutlineReadMore className="biBus" size="18px" />
                      <a
                        href={bus25059}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Részletek
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Szécsény - Népliget - Székesfehérvár - Tapolca, Köztársaság
                    tér
                  </td>
                  <td>250.98</td>
                  <td>
                    <button>
                      <MdOutlineReadMore className="biBus" size="18px" />
                      <a
                        href={bus25098}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Részletek
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Budapest - Székesfehérvár - Balatonfűzfő - Tapolca</td>
                  <td>55.21</td>
                  <td>
                    <button>
                      <MdOutlineReadMore className="biBus" size="18px" />
                      <a
                        href={bus5521}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Részletek
                      </a>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>További különjáratok meghirdetése egyeztetés alatt!</p>
            <br /> */}
          </div>
          <div hidden={true}>
          <div className="boxes">
            <a
              href="https://www.google.com/maps/d/u/0/viewer?mid=1gRK6n2cPKwoKXMb4NW-8lyedSLpEWs0N&ll=46.88090011481434%2C17.436230000000002&z=16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="sidebarStyle">
                <div>Tapolca belváros</div>
              </div>
              <img src={cityMapHu} alt="megkozelites" className="mapImg" />
            </a>
            <a
              href="https://www.google.com/maps/d/u/0/viewer?mid=10wK4wL-BFe8fUO6bL8LwXSR066l40WBC&ll=46.86826900882221%2C17.524713850000005&z=13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="sidebarStyle">
                <div>Felvonulás</div>
              </div>
              <img src={roundTrip} alt="felvonulas" className="mapImg" />
            </a>
            <a
              href="https://www.google.com/maps/d/u/0/viewer?mid=1aOxfPsKxw6FMZNNljYsUEYZhoMFkaPVA&ll=46.88336529699366%2C17.43563999999999&z=15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="sidebarStyle">
                <div>Nosztalgia autóbusz körjáratok</div>
              </div>
              <img src={underConst} alt="varosijarat" className="mapImg" />
            </a>
          </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div>
            <h1>APPROACH</h1>
            <strong>Location </strong>
            <p>Hungary, Veszprém county, Tapolca city, Köztársaság square</p>
            <br />
            <Map />
            <br />
            <strong>Approaching by public transport</strong>
            <p>
              You can find the timetables on{" "}
              <a href="http://menetrendek.hu" className="link">
                menetrendek.hu
              </a>{" "}
              Traveling by public coach you need to get off at Tapolca bus
              station, while traveling by train disembark at Tapolca train
              station. From the bus station the event is an approximately 5
              minutes walk away while, from the train station the walk is
              approximately 15 minutes long.
            </p>
            <br />
            <strong>Approaching by car</strong>
            <p>
              Recommended parking: in the green area next to the Halápi road roundabout.
              Additional parking: Tapolca can be reached from the east (from Veszprém) and from the
              west (from route 84) on route 77. At the intersection of the south
              bypass route 77 and the Tapolca-creek, there is a high capacity
              car park at the visitor's service. From these parkings the event can be
              reached with a couple of minutes walk.
            </p>
            <br />
            {/* <strong>Nostalgic charter train service</strong>
            <p>
              The special train runs in a nostalgia BCmot motor car and Cmn car
              combination. The passengers of the special train are taken to the
              event venue by special buses.
            </p> */}
            {/* <table>
              <tbody>
                <tr>
                  <th> Route (back and forth) </th>
                  <th> Vehicle type </th>
                  <th> Details and booking </th>
                </tr>
                <tr>
                  <td>
                    Budapest Kelenföld Station - Lake Balaton north coast -
                    Tapolca Station
                  </td>
                  <td>BCmot, Cmn</td>
                  <td>
                    <button>
                      <MdOutlineReadMore className="biBus" size="18px" />
                      <a
                        href="https://www.mavrailtours.hu/hu/programs/show/124"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Details
                      </a>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table> */}
            <strong>Old timer charter bus services:</strong>
            <p>Old timer charter bus services are being negotiated!</p>
            {/* <p>
              The buses listed below will take you to the Meeting Venue. You can
              inquire about old timer bus travel in the "Details and booking"
              section.
            </p>
            <br />
            <table>
              <tbody>
                <tr>
                  <th> Route (back and forth)</th>
                  <th> Vehicle type </th>
                  <th> Details and booking </th>
                </tr>
                <tr>
                  <td>Budapest - Székesfehérvár - Tapolca, Köztársaság tér</td>
                  <td>250.59</td>
                  <td>
                    <button>
                      <MdOutlineReadMore className="biBus" size="18px" />
                      <a
                        href={bus25059}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Details
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Szécsény - Népliget - Székesfehérvár - Tapolca, Köztársaság
                    tér
                  </td>
                  <td>250.98</td>
                  <td>
                    <button>
                      <MdOutlineReadMore className="biBus" size="18px" />
                      <a
                        href={bus25098}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Details
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Budapest - Székesfehérvár - Balatonfűzfő - Tapolca</td>
                  <td>55.21</td>
                  <td>
                    <button>
                      <MdOutlineReadMore className="biBus" size="18px" />
                      <a
                        href={bus5521}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Details
                      </a>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>More old timer charter bus services are being negotiated!</p>
            <br /> */}
          </div>
          <div>
            <a
              href="https://www.google.com/maps/d/u/0/viewer?mid=1gRK6n2cPKwoKXMb4NW-8lyedSLpEWs0N&ll=46.88090011481434%2C17.436230000000002&z=16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="sidebarStyle">
                <div>Tapolca city center</div>
              </div>
              <img src={cityMapEn} alt="megkozelitesen" className="mapImg" />
            </a>
            <a
              href="https://www.google.com/maps/d/u/0/viewer?mid=10wK4wL-BFe8fUO6bL8LwXSR066l40WBC&ll=46.86826900882221%2C17.524713850000005&z=13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="sidebarStyle">
                <div>Procession</div>
              </div>
              <img src={roundTrip} alt="felvonulasen" className="mapImg"></img>
            </a>
            <a
              href="https://www.google.com/maps/d/u/0/viewer?mid=1aOxfPsKxw6FMZNNljYsUEYZhoMFkaPVA&ll=46.88336529699366%2C17.43563999999999&z=15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="sidebarStyle">
                <div>Nostalgia bus tours</div>
              </div>
              <img
                src={underConst}
                alt="varosijaraten"
                className="mapImg"
              ></img>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Approach;
