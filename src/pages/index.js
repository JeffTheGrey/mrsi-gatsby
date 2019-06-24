import React from "react"
import { Link } from "gatsby"
import bgImg from "./../images/usace-construction.JPG"
import Layout from "../components/layout/layout"

import cosIcon from "../images/cos-icon.svg"
import crstIcon from "../images/crst-icon.svg"
import rfpIcon from "../images/wizard-icon.svg"
import sustainIcon from "../images/sustain-icon.svg"

const iconStyle = {
  marginBottom: ".5rem",
  marginRight: "1.25rem",
  maxWidth: "4.5rem",
  float: "none",
}

const IndexPage = () => (
  <Layout sidenav>
    <section class="site-hero">
      <div
        class="grid-container"
        style={{
          backgroundImage: "url(" + bgImg + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 400,
        }}
      >
        <div
          class="maxw-mobile-lg"
          style={{
            backgroundColor: "rgba(252, 252, 252, .95)",
            padding: "1px 20px",
            display: "inline-block",
            borderRadius: "5px",
            marginTop: "32px",
          }}
        >
          <h1>Welcome to MRSI</h1>
          <p>
            This site consolidates useful MILCON information in order to provide
            the facility community with the tools they need to build and
            maintain the Army's facility infrastructure.
          </p>
        </div>
      </div>
    </section>
    <section class="usa-section usa-graphic-list grid-container">
      <div class="grid-row grid-gap">
        <div class="desktop:grid-col-3 tablet:grid-col-6 usa-media-block margin-bottom-3 desktop:margin-bottom-0">
          <img
            class="usa-media-block__img"
            style={iconStyle}
            src={cosIcon}
            alt=""
          />
          <div class="usa-media-block__body">
            <h3>COS</h3>
            <p>
              To learn about facilities standardization, please visit the COS
              pages. All supported facilities are listed, and where available,
              Army Standards and USACE Standard Designs have been uploaded and
              are available for download.
            </p>

            <p>
              <Link to="/cos/">Browse the Standards</Link>
            </p>
          </div>
        </div>
        <div class="desktop:grid-col-3 tablet:grid-col-6 usa-media-block margin-bottom-3 desktop:margin-bottom-0">
          <img
            class="usa-media-block__img"
            style={iconStyle}
            src={crstIcon}
            alt=""
          />
          <div class="usa-media-block__body">
            <h3>CRST</h3>
            <p>
              The Combat Readiness Support Team evaluates the Army's
              requirements for impacts on our facilities. Visit the CRST site to
              see how changes may impact on the Army's facilities life-cycle.
            </p>

            <p>
              <Link to="/crst/">Visit CRST</Link>
            </p>
          </div>
        </div>
        <div class="desktop:grid-col-3 tablet:grid-col-6 usa-media-block margin-bottom-3 desktop:margin-bottom-0">
          <img
            class="usa-media-block__img"
            style={iconStyle}
            src={rfpIcon}
            alt=""
          />
          <div class="usa-media-block__body">
            <h3>Model RFP</h3>
            <p>
              The Model RFP defines the standard templates for MILCON RFP. The
              RFP Wizards were developed as the implementation of the Model RFP.
            </p>

            <p>
              <Link to="/model-rfp/">View the Wizards</Link>
            </p>
          </div>
        </div>
        <div class="desktop:grid-col-3 tablet:grid-col-6 usa-media-block margin-bottom-3 desktop:margin-bottom-0">
          <img
            class="usa-media-block__img"
            style={iconStyle}
            src={sustainIcon}
            alt=""
          />
          <div class="usa-media-block__body">
            <h3>Sustain</h3>
            <p>
              The folks with Engineering and Construction Sustainability are
              experts in sustainability. They are an active community with a
              passion for producing innovative and creative solutions for
              sustainable design and construction.
            </p>

            <p>
              <Link to="/sustain/">Browse Sustainability</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="usa-section usa-graphic-list grid-container">
      <div class="grid-row grid-gap">
        Welcome to the MILCON Requirements, Standardization, and Integration
        (MRSI) home page. This site consolidates useful MILCON information in
        order to provide the facility community with the tools they need to
        build and maintain the Army's facility infrastructure.
      </div>
    </section>
  </Layout>
)

export default IndexPage
