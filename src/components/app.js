import React, { Component } from "react";
import Horizontal from "./horizontal";
import data from "./data";
import unityData from "./unity-data";
import ReactModal from "react-modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      modalContent: {},
      index: null,
    };
  }
  handleOpenModal = (project, i) => {
    this.setState({
      showModal: true,
      modalContent: project,
      index: i,
    });
  };
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { showModal, modalContent, index } = this.state;
    console.log("modalContent is:", modalContent);
    console.log("index is:", index);
    return (
      <>
        {showModal ? (
          <ReactModal
            isOpen={this.state.showModal}
            content={this.state.modalContent}
            className="rModal"
          >
            <button className="xBtn" onClick={this.handleCloseModal}>X</button>
            <h5>{modalContent.name}</h5>
            <img className="img-fluid" src={modalContent.img[index].path} />
          </ReactModal>
        ) : (
          <div></div>
        )}

        <nav
          className="navbar navbar-expand-lg fixed-top navbar-color"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger navbar-a" style={{color:"white", fontWeight: 600}}>
              Matthew Shields - 3D / CAD / ARCHITECTURE
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger navbar-a"
                    href="https://www.linkedin.com/in/mshields-arch/"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger navbar-a"
                    href="mailto: mdshields.arch@gmail.com"
                  >
                    Email
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger navbar-a"
                    href="tel: 16305546255"
                  >
                    Phone
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="m-t4" id="portfolio">
          {data.map((item, index) => (
            <Horizontal handle={this.handleOpenModal} proj={item} key={index} />
          ))}
        </section>

        <section className="m-t4" id="unity">
          {unityData.map((item, index) => (
            <Horizontal proj={item} key={index} />
          ))}
        </section>

        <footer className="container" id="#contact"></footer>
      </>
    );
  }
}

export { App };
