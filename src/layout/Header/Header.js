import React, { useState } from "react";
import "./Header.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase";
import { Container, Button, Offcanvas } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
export default function Header() {
  const signInWithGoogle = async (event) => {
    event.preventDefault();
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleOffcanvasToggle = () =>
    setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
  return (
    <div>
      <Navbar expand="lg" bg="black" variant="dark">
        <Container fluid>
          <div className="logo-container">
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="me-auto"
              onClick={handleOffcanvasToggle}
            ></Navbar.Toggle>
            <Navbar.Brand className="logo " href="/">
              <img
                src={"/images/logo.webp"}
                alt=" "
                style={{
                  width: "100%",
                  display: "block",
                  marginLeft: "40px",
                  verticalAlign: "middle",
                }}
              />
            </Navbar.Brand>
          </div>
          <div
            className={`nav-container ${showOffcanvas ? "offcanvas-open" : ""}`}
          >
            <Navbar.Offcanvas
              placement="start"
              style={{ backgroundColor: "black" }}
              className="ps-4"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="logo-offcanvas">
                  <img
                    src={"/images/logo.webp"}
                    alt=" "
                    style={{
                      width: "100%",
                      display: "block",
                      marginTop: "5px",
                      marginLeft: "-15px",
                      verticalAlign: "middle",
                    }}
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <div className="nav-container">
                <Navbar.Collapse>
                  <Nav className="ms-auto text">
                    <Nav.Link className="face-text hot" href="/">
                      Face Swap
                    </Nav.Link>
                    <Nav.Link href="/ai_headshot" className="position-relative">
                      <span className="badge rounded-pill bg-danger position-absolute top-1 start-100 translate-middle">
                        new
                      </span>
                      AI Headshot
                    </Nav.Link>
                    <Nav.Link href="/" className="dropdown-name">
                      AI Tools
                    </Nav.Link>
                    <div className="dropdown">
                      <button
                        className=" btn "
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="white"
                          className="bi bi-chevron-down bold"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                          />
                        </svg>
                      </button>
                      <ul
                        className="dropdown-menu"
                        style={{ backgroundColor: "black" }}
                      >
                        <li>
                          <a className="dropdown-item" href="/">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                    <Nav.Link href="/">Join the Discord</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar.Offcanvas>
            <Navbar.Text className="gradient-badge ms-auto">
              Credits:7
            </Navbar.Text>
            <Button
              type="button"
              variant="outline-secondary"
              data-toggle="modal"
              data-target="#SignInModal"
              className="nav-button"
            >
              Sign In
            </Button>
            <div
              className="modal fade mt-5 my-4 pt-5"
              id="SignInModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLongTitle"
              aria-hidden="true"
            >
              <div className="  signin-wrapper modal-body modal-content modal-dialog">
                <button type="button" class="close ms-auto"></button>
                <div className="signin-title mb-3" style={{ fontSize: "16px" }}>
                  {" "}
                  Login to get subscribe
                </div>
                <div className="signin-login">
                  <img
                    className=" signin-img"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginRight: "16px",
                    }}
                    src="https://static.pica-ai.com/_next/static/media/google_logo.58bbd3c5.png"
                    alt="google logo"
                  />
                  <button
                  href="#"
                  onClick={(event) => signInWithGoogle(event)}
                  className="text"
                  style={{ backgroundColor: "transparent", color: "white", borderColor: "transparent" }}
                >
                    Continue with Google
                  </button>
                </div>
                <div class="signin-login">
                  <img
                    style={{
                      width: "24px",
                      height: "24px",
                      marginRight: "16px",
                    }}
                    src="https://static.pica-ai.com/_next/static/media/facebook_logo.de9b2562.png"
                    alt="facebook logo"
                  />
                  <div className="text">Continue with Facebook</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}