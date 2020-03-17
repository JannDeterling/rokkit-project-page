import React, { useState } from "react";
import "./getStarted.scss";

const GetStarted = props => {
  const install = "install";
  const create = "create";
  const deploy = "deploy";
  const [state, setState] = useState(undefined);

  const installRokkit =
    state && state === install ? (
      <>
        <div className="description-container">
          <div className="description">
            <h4 className="highlight-text">Install Rokkit.ts</h4>
            <p>
              Before hacking with Rokkit.ts, you need to install its modules.
              Rokkit.ts is splitted into functional modules to reduce size and
              seperate concerns. Depending on the application you want to build
              you can install different modules. The major module is the
              "Rokkit.ts core". The core helps you starting and preconfiguring
              other modules. Moreover this module is capable of the framework's
              dependency injection.
              <br />
              Currentlty there is only one further module the web module. Its
              purpose is to build restful APIs or to query other services. It
              comes with a buildin web-server (restify) and provides you the
              ability to easily create controllers. We will discover this
              functionallity a bit later. <br />
              To use Rokkit.ts make sure you have typescript installed and that
              you created a simple "tsconfig.json" Now you can just run the
              install commands on the right.
            </p>
          </div>
          <div>
            <img className="code-img" src="../../static/images/install.svg" />
          </div>
        </div>
        <div className="description-container">
          <div className="description">
            <h4 className="highlight-text">Use the Rokkit.ts CLI</h4>
            <p>
              Beside creating your project from scratch you can also use the
              Rokkit.ts CLI. The cli currently supports three commands.
              <ul>
                <li>Init -- initialize a new project</li>
                <li>Build -- build the application</li>
                <li>Run -- run the application</li>
              </ul>
              The cli comes with our core package and can easily be used. We
              recommend it to create your first project. Just use the same
              command as provided on the right side.
            </p>
          </div>
          <div>
            <img className="code-img" src="../../static/images/cli.svg" />
          </div>
        </div>
      </>
    ) : null;

  const createApp =
    state && state === create ? (
      <>
        <div className="description-container">
          <div className="description">
            <h4 className="highlight-text">Base class</h4>
            <p>
              Now that you have installed the needed modules of Rokkit.ts let's
              starting developing. We will build a simple REST API that returns
              hello world.
              <br />
              We will start with our base class. Rokkit.ts needs an entry point
              to your project. As you can see on the right. The base class is
              quite empty and just annotated with the "RokkitRunner" decorator.
              This decorator tells Rokkit.ts to run the start procedure. You
              have to provide the root path of your source directory to the
              decorator. We need this path to find your further classes. You
              don't even need a constructor in this class, we are planning to
              provide more functionality for the base class in the future. For
              now it is just an entry point to the project.
            </p>
          </div>
          <div>
            <img
              className="code-img"
              src="../../static/images/init-class.svg"
            />
          </div>
        </div>
        <div className="description-container">
          <div className="description">
            <h4 className="highlight-text">Building a controller</h4>
            <p>
              So we created our base class let's create a controller to send our
              hello world message. On the right you can see a new class for our
              controller. It is marked with the controller decorator. the
              controller decorator expects an uri base path. We use "/sample"
              here. This means that our controller will be available on the
              following URI: "http://host:port/sample".
              <br />
              Within our controller we now want to add some functionality.
              Therefore we can add a method that will respond to a request on a
              mapped path. In our code on the right we have the method
              "greetWorld". Because of its decorator it will respond to every
              GET request against our resource. You can also fill a request path
              into the decorator to specify the whole path. The result of the
              method will be used as the result of the request.
            </p>
          </div>
          <div>
            <img
              className="code-img"
              src="../../static/images/simple-controller.svg"
            />
          </div>
        </div>
        <div className="description-container">
          <div className="description">
            <h4 className="highlight-text">Using dependency injection</h4>
            <p>
              We managed to create a basic controller, but how about extending
              this one by using the Rokkit.ts dependency injection. As you can
              see we added a constructor to our class. With two arguments. The
              first argument is a "GreetingGenerator". It's just another user
              class which hold some kind of logic. The second argument is a
              basic string. In order to use the dependency injection for native
              objects like strings, numbers, booleans, you have to use the
              annotation "Inject" and provide the value that will be injected.
              In our case "Hello" will be injected we the class is created. You
              can also use this decorator for user classes but there is a easier
              way. Because the "GreetingGenerator" is a registered class of the
              project. Rokkit.ts is able to automatically inject an instance. So
              you just have to declare it a the constructor. There is only one
              thing you need to do, you need to annotate the user comoponent
              that will be inejcted with one of the following decorators
              "Component", "Controller", "Service". This tells Rokkit.ts that
              this class is important for the dependency injection. Classes
              without that decorators won't be recognized.
            </p>
          </div>
          <div>
            <img
              className="code-img"
              src="../../static/images/controller.svg"
            />
          </div>
        </div>
      </>
    ) : null;
  const deployApp =
    state && state === deploy ? (
      <>
        <div className="description-container">
          <div className="description">
            <h4 className="highlight-text">
              Running an app in development mode
            </h4>
            <p>
              After completing your first controller let's start your
              application and test it. In order to run Rokkit.ts in development
              mode you need to install ts-node. After installing it, just use it
              to run your entry point class.
            </p>
          </div>
          <div>
            <img className="code-img" src="../../static/images/dev.svg" />
          </div>
        </div>
        <div className="description-container">
          <div className="description">
            <h4 className="highlight-text">
              Running an app in production mode
            </h4>
            <p>
              When you finished your development and want to run the application
              in production mode, you need to build it. There are two steps to
              build the application currentlty: 1. Run the application with
              ts-node. This will generate an directory with an declaration file.
              This file is needed for Rokkit.ts in production. This file
              provides important information for the dependency injection and
              speeds up the whole starting process. In development mode the file
              will be recreate every time. After running the app in development
              mode use the TypeScript compiler to build the project. At this
              time you need to use "build" as the outDir in the "tsconfig.json".
              After build your application just run the entrypoint class with
              Node.
            </p>
          </div>
          <div>
            <img className="code-img" src="../../static/images/prod.svg" />
          </div>
        </div>
      </>
    ) : null;

  const setActive = action => {
    setState(action);
  };

  return (
    <div>
      <button
        className={state === install ? "active-button" : ""}
        onClick={() => setActive(install)}
      >
        Install Rokkit.ts
      </button>
      {installRokkit}
      <button
        className={state === create ? "active-button" : ""}
        onClick={() => setActive(create)}
      >
        Creating your first app
      </button>
      {createApp}
      <button
        className={state === deploy ? "active-button" : ""}
        onClick={() => setActive(deploy)}
      >
        Deploying the application
      </button>
      {deployApp}
    </div>
  );
};

export default GetStarted;
