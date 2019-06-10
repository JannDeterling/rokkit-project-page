import React from 'react';
import './App.scss';
import Header from "./header/header";
import BackgroundContainer from "./background-container/backgroundContainer";
import BackgroundContainerReverted
  from "./background-container/backgroundContainerReverted";
import ContentContainer from "./content-container/contentContainer";
import Footer from "./footer/Footer";
import SyntaxHighlighter from '../node_modules/react-syntax-highlighter';
import {dracula} from '../node_modules/react-syntax-highlighter/dist/esm/styles/hljs';

const sampleControllerCode = `
 import {Controller, Get} from "rokkit.ts-web";

 @Controller("/hello")
 export class MyController {

   @Get("/")
   public getHello(): string {
     return "Hello World, it's Rokkit.ts!"
   }
 }
`;

const sampleConfiguration = `
 /* config.json -- main config file */
 {
    "server": {
      "name": "MyRokkit.ts Project"
    },
    environment: {
      "active": "dev"
    }
 }
 
 /* config-dev.json -- config file for development */
 {
    server: {
      "port": 8080,
      "adapter": "express"
    }
 }
 /* config-prod.json -- config file for production */
 {
    server: {
      "port": 8080,
      "adapter": "express"
    }
 }
`;

function App() {
  return (
      <div className="App">
        <Header/>
        <BackgroundContainer highlight="Rokkit.ts"/>
        <ContentContainer>
          <div className="attribute-box">
            <div className="attribute-text">
              <h2 className="text-color-pink">Focused</h2>
              <p>Rokkit focuses on major microservices attributes:</p>
              <ul className="highlight-list">
                <li>Communication</li>
                <li>Resilience</li>
                <li>Scalability</li>
                <li>Performance</li>
                <li>Technical independence</li>
              </ul>
            </div>
            <div className="attribute-text">
              <h2 className="text-color-pink">Modulized</h2>
              <p>Rokkit.ts is separated into modules to reduce the build size
                and deliver the perfect application, instead of rely on unused
                dependencies. Each module of Rokkit.ts can be used independently
                or combined by the Rokkit Core.<br/>
                Rokkits comes with 5 modules:
              </p>
              <p className="text-color-pink">Core,&nbsp;
                Web,&nbsp;
                Messaging,&nbsp;
                Data,&nbsp;
                Logging & Monitoring
              </p>

            </div>
            <div className="attribute-text">
              <h2 className="text-color-pink">TypeScript</h2>
              <p>
                Rokkit.ts is written for TypeScript.<br/>
                We use TypeScript to ensure type safeness and
                empower developers in their application.<br/>
                TypeScript enables us to detect types error during development
                and provides safeness in production.
              </p>
            </div>
          </div>
        </ContentContainer>
        <BackgroundContainerReverted highlight="Easy to Develop"/>
        <ContentContainer>
          <div className="attribute-box">
            <div className="attribute-text">
              <h2 className="text-color-pink">Annotation based development</h2>
              <p>
                Rokkit's features are primary used by annotations.<br/>
                Annotations keeps your code clean and deliver maximal
                functionality!
              </p>
              <SyntaxHighlighter className="syntax-hl" language="typescript"
                                 style={dracula}>
                {sampleControllerCode}
              </SyntaxHighlighter>
            </div>
            <div className="attribute-text">
              <h2 className="text-color-pink">Conditional configuration</h2>
              <p>
                Rokkit.ts can be configured for multiple environments.
              </p>
              <SyntaxHighlighter className="syntax-hl" language="json"
                                 style={dracula}>
                {sampleConfiguration}
              </SyntaxHighlighter>

            </div>
          </div>
        </ContentContainer>
        <BackgroundContainer highlight="Fast & Resource saving"/>
        <ContentContainer>
          <div className="attribute-box">
            <div className="attribute-text">
              <h2 className="text-color-pink">Fast start up</h2>
              <p>Microservices need to scale up fast, when necessary due to load
                peaks or failures of other instances. Rokkit.ts is designed to
                start up fast and take requests as early as possible. Only
                needed
                modules and components will be started by Rokkit.ts.</p>
            </div>
            <div className="attribute-text">
              <h2 className="text-color-pink">Low memory consumption</h2>
              <p>
                Rokkit.ts will not consume unnecessary amounts of memory.
                Rokkit.ts will manage class instances and tries to reuse as many
                instances as possible. Beside the framework Node.js offers a
                high-performing runtime with low memory consumption.
              </p>
            </div>

          </div>
        </ContentContainer>
        <BackgroundContainerReverted highlight="Diverse"/>
        <ContentContainer>
          <div className="attribute-box">
            <div className="attribute-text">
              <h2 className="text-color-pink">Use diverse frameworks</h2>
              <p> Rokkit.ts is designed to plug in diverse frameworks. Such as
                HTTP-Server frameworks. The are default adapter which are
                shipped with the framework. For example default adapters for
                Express.js and Restify contained within the http-module. Each
                module could provide several default adapters.
                The users could also develop their own adapters for any
                framework they like to.
              </p>
            </div>
            <div className="attribute-text">
              <h2 className="text-color-pink">Polyglot Runtimes</h2>
              <p> Rokkit.ts is originally planned for Node.js, but the upcoming
                development of Deno, the new TypeScript runtime by Ryan Dahl the
                creator of Node.js.
                The project is interesting and should be focused in the near
                future!
              </p>
            </div>
          </div>
        </ContentContainer>
        <Footer/>
      </div>
  )
      ;
}

export default App;
