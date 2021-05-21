import React from "react";

//import project photos
import stock from "../img/weather-gallery.png";
import stock1 from "../img/facethamuzik.png";
import stock2 from "../img/messaging-app.png";

class Portfolio extends React.Component {
  render() {
    return (
      // Project Title
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="row">
            {/* Project 1 */}
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/iorellana21/weather-gallery" target="_blank">
                  <div className="work-img">
                    <img src={stock} alt="weather-gallery" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Weather Gallery</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML CSS Bootstrap JS
                    </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/jessicaramirezcalderon/face-rec-modrou" target="_blank">
                  <div className="work-img">
                    <img src={stock1} alt="facethamuzik" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">FaceThaMuzik</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML CSS Bootstrap JS MySQL
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/iorellana21/project3" target="_blank">
                  <div className="work-img">
                    <img src={stock2} alt="messaging-app" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Messaging App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML CSS Bootstrap JS ReactJS MySQL
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
