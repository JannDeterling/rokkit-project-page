import React from "react";
import "./App.scss";
import ContentContainer from "./content-container/ContentContainer";
import Footer from "./footer/Footer";
import Section from "./section/Section";
import Header from "./header/header";
import GetStarted from "./get-started/GetStarted";

const apiDesign = (
  <>
    <p>
      Let's dive in deeper and see why these aspects are so important to us.
      Most developer will argue that they would expect an API to have{" "}
      <b>Comprehensive functionallity</b> by default. But actually often an API
      provides nessecarry features, but we think that sometimes these features
      are not enough.There are multiple APIs which are build due to its
      functionallity but they do not care about the needs/ wishes of the
      developers.
      <br />
      So for Rokkit.ts comprehensive functionallity does not only mean providing
      all expected features of our users, its more about the quality of the API,
      about its handling and its structure.
    </p>
    <p>
      Quality is also defined by the readability of an API. Therefor an API
      needs clear and reasonable names. There are multiple names that will be
      exposed. The entrypoint to an API is the package name / namespace. This
      first point should already provide information about the containing
      features. <br />
      The first entrypoint in an API are the methodnames. Every methodname
      should try to state the exact reason why it is there and what its purpose
      is.
      <br />
      Beside methodnames parametername and typename are highly important all of
      these publish information to the developer and the developer will infer
      knowledge from these names.
    </p>
    <p>
      Most APIs provide the ability to configure the underlying behaivor. This
      can get very complex, due to the neverending options or the lack of
      documentation and understanding. Rokkit.ts tries to combine two aspects:
      1. It lets the developer configure everything to provide maximal
      flexability. But this comes with a huge downside the information overflow.
      There may be hunderets of options to configure an webserver. But the
      developer only wants to change some of these instead of the whole thing.
      Here our 2. aspect should provide some help. Rokkit.ts will always try to
      provide an opinionated configuration that would work out of the box.
      <br />
      If this is not working for what ever reason Rokkit.ts will at least
      provide you default values for the configuration to support the developer
      expierence as much as possible.
    </p>
    <p>
      The last aspect is to create precise documentations for all methods,
      classes and types. Good documentation should be short but also
      understandable. The documentation should only provide information that are
      valueable for the developer. Valueable is hard to define, we think the
      information should contain the most basic questions:
    </p>
    <ol type="I">
      <li>What is it for?</li>
      <li>What could be achieved by using it?</li>
      <li>What has to be provided?</li>
      <li>What is the result?</li>
    </ol>
    <p>
      Rokkit.ts combines all of these aspects to create easy to use APIs for our
      users. If you recognize any API within Rokkit.ts that needs improvement,
      do not hesitate to create an issue of the corresponding GitHub repository
      or when you even have an idea how to fix it send a pull request. Rokkit.ts
      should be a framework for a community, build by a community.
    </p>
  </>
);

const App = () => {
  return (
    <div className="site">
      <Header />
      <ContentContainer>
        <img
          className="logo"
          src="../static/rokkit-ts-logo.svg"
          alt="Rokkit.ts Logo"
        />
        <h1 className="slogan">
          The Microservice Framework for Node.js with TypeScript
        </h1>
        <a className="get-started-link" href="#getting-started">
          <button className="get-started">GET STARTED</button>
        </a>
        <hr />
        <Section
          heading="Modular Component System"
          imageLeft="../static/images/building_blocks.svg"
        >
          <p>
            Rokkit is based on a modular component system to be versatile and
            adaptable for most needs. The framework is diided into dirrent
            functionallities.
          </p>
          <p>
            Currently we offer two modules for the users needs. The first module
            is the Core-Framework. This module offers you depency injection out
            of the box and helps you to compose multiple Rokkit modules. The
            second available module is a Web-Module that offers you the abaility
            to spin up your own webserver and create an easy to use REST APIs.
          </p>
          <p>
            There are more modules planned. The next module will be a messaging
            module include a Apache Kafka Client. So that the microservice is
            able to receive or send events to Kafka.
          </p>
        </Section>
        <hr />
        <Section
          heading="Dependency Injection"
          imageRight="../static/images/fitting_pieces.svg"
        >
          Rokkit.ts comes with its own depency inejction module. Dependency
          injection is a simple method where the depencies of a class /
          component are injected through a function or by the constructor.
          Rokkit.ts is currently able scan every user project class and inject
          it into an other through the constructor. Rokkit.ts only offers
          constructor injection to only have one single point where the
          inejction happens. Moreover dependency injection helps unit testing
          any class / component, because instead of the actaul implementation a
          stub, mock or spy could be provided. <br />
          Rokkit.ts enables the developer to provide its own injector
          definitions and configure them as needed or simple use the automaticly
          created definitions by Rokkit.ts.
        </Section>
        <hr />
        <Section
          heading="Easy Configuration"
          imageLeft="../static/images/breaking_barries.svg"
        >
          <p>
            Rokkit.ts tries to provide a simple to use configuration for each of
            its packages.
          </p>
          <p>
            In order to be flexible a configuration needs to be precise and
            offer engouhg options. A big downside of such an configuration is
            that it can be frustating to configure everything up front.
          </p>
          <p>
            To be able to run your service as fast as possible Rokkit.ts comes
            with an opinionated configuration for every package. The developer
            can just overwrite the configuration and adapt it to their needs.
          </p>
        </Section>
        <hr />
        <Section
          heading="Native for TypeScript"
          imageRight="../static/images/typings.svg"
        >
          <p>
            Rokkit.ts is build in TypeScript and for TypeScript.
            <br />
            TypeScript provides typesafety and lets developers use modern
            JavaScript features without the need of polyfills.
          </p>
          <p>
            For backend systems typesafety is highly important. Furthermore
            TypeScript helps to document the source code with its type
            defenitions. Currently Rokkit.ts focuses only on the development for
            TypeScript.
            <br />
            There are some ideas to support native JavaScript later in the
            development process.
          </p>
        </Section>
        <hr />
        <Section
          heading="Focus on developer experience"
          imageLeft="../static/images/abstract.svg"
          readMore={apiDesign}
        >
          <p>
            Rokkit.ts tries to optimize your development experience by providing
            easy to use APIs. For us an easy to use API includes four key
            aspects:
          </p>
          <ul>
            <li>Comprehensive functionallity</li>
            <li>Self explaining method names</li>
            <li>Reasonable and lightweight configuration</li>
            <li>Understandable and short documentation</li>
          </ul>
        </Section>
        <hr id="getting-started" />
        <Section heading="Getting started">
          {/* imageRight="../static/images/starting.svg" */}
          <GetStarted />
        </Section>
        <hr />
        <Section
          heading="Contribute to Rokkit.ts"
          imageLeft="../static/images/contribute.svg"
        >
          <p>
            If you want to contribute to the project, check out our{" "}
            <a href="https://github.com/rokkit-ts">GitHub</a> repositories. You
            can either create, discuss issues or fix them by sending us a pull
            request. Please always respect everyone, there is no room for
            discrimination nor insulting of anybody.
            <br />
            Always rember the prime directive:
          </p>
          <p>
            “
            <b>
              Regardless of what we discover, we understand and truly believe
              that everyone did the best job they could, given what they knew at
              the time, their skills and abilities, the resources available, and
              the situation at hand.
            </b>
            ”
          </p>
        </Section>
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default App;
