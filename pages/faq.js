import Header from "../components/header/header";
import BackgroundContainer
  from "../components/background-container/backgroundContainer";
import React from "react";
import "../components/App.scss";
import ContentContainer from "../components/content-container/contentContainer";

const faq = () => (
    <div className="App">
      <Header/>
      <BackgroundContainer highlight="FAQ"/>
      <ContentContainer>
        <h3>Content will be delivered with the first release.</h3>
      </ContentContainer>
    </div>
)

export default faq;
