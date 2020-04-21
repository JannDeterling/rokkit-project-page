(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"9Jkg":function(e,t,a){e.exports=a("oh+g")},RNiq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),i=(a("bbG7"),a("9wVb"),function(e){return o.a.createElement("div",{className:"content-container"},e.children)}),r=a("0iUn"),l=a("sLSF"),s=a("MI3g"),c=a("a7VT"),u=a("Tit0"),d=(a("Glu0"),function(e){function t(){return Object(r.default)(this,t),Object(s.default)(this,Object(c.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"footer-left-container"},o.a.createElement("a",{href:"https://github.com/rokkit-ts"},"GitHub"),o.a.createElement("span",null,"Rokkit.ts code is build under MIT License")),o.a.createElement("div",{className:"footer-right-container"},o.a.createElement("span",null),o.a.createElement("span",{className:"copyright"},"2019 Copyright All Rights Reserved by Jann Deterling")))}}]),t}(o.a.Component)),h=a("doui"),m=(a("hf3f"),function(e){var t=e.children,a=e.heading,i=e.imageLeft,r=e.imageRight,l=e.readMore,s=Object(n.useState)(!1),c=Object(h.default)(s,2),u=c[0],d=c[1],m=u?l:null,p=o.a.createElement("button",{className:u?"read-less":"read-more",onClick:function(){return d(!u)}},u?"Show less":"Show more");return o.a.createElement("section",{className:"section"},o.a.createElement("h2",{className:"section-heading"},a),o.a.createElement("div",{className:"section-content"},i?o.a.createElement("div",{className:"section-img-container"},o.a.createElement("img",{className:"section-img",src:i})):null,o.a.createElement("div",{className:"section-children"},t,l?p:null),r?o.a.createElement("div",{className:"section-img-container"},o.a.createElement("img",{className:"section-img",src:r})):null),l?m:null)}),p=(a("7TdG"),a("YFqc")),f=a.n(p),g=(a("Ius5"),function(e){function t(){return Object(r.default)(this,t),Object(s.default)(this,Object(c.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"rokkit-header-logo"},o.a.createElement(f.a,{href:"/"},o.a.createElement("a",{className:"rokkit-logo-link"},o.a.createElement("img",{className:"rokkit-logo",src:"../../../static/rokkit-ts-logo.svg",alt:"Rokkit.ts Logo"}))))}}]),t}(o.a.Component)),y=(a("MBs0"),function(e){function t(){return Object(r.default)(this,t),Object(s.default)(this,Object(c.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"image-link"},o.a.createElement(f.a,{href:this.props.link},o.a.createElement("a",null,o.a.createElement("img",{className:"image-link-logo",src:this.props.image,alt:this.props.link}))))}}]),t}(o.a.Component)),v=function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"header-logo"},o.a.createElement(g,null)),o.a.createElement("div",{className:"header-social-media"},o.a.createElement(y,{link:"https://github.com/rokkit-ts",image:"../../static/github.svg"}),o.a.createElement(y,{link:"https://twitter.com/JDeterling",image:"../../static/twitter.svg"})))},b=(a("X5gz"),function(e){var t=Object(n.useState)(void 0),a=Object(h.default)(t,2),i=a[0],r=a[1],l=i&&"install"===i?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"description-container"},o.a.createElement("div",{className:"description"},o.a.createElement("h4",{className:"highlight-text"},"Install Rokkit.ts"),o.a.createElement("p",null,'Before hacking with Rokkit.ts, you need to install its modules. Rokkit.ts is splitted into functional modules to reduce size and seperate concerns. Depending on the application you want to build you can install different modules. The major module is the "Rokkit.ts core". The core helps you starting and preconfiguring other modules. Moreover this module is capable of the framework\'s dependency injection.',o.a.createElement("br",null),"Currentlty there is only one further module the web module. Its purpose is to build restful APIs or to query other services. It comes with a buildin web-server (restify) and provides you the ability to easily create controllers. We will discover this functionallity a bit later. ",o.a.createElement("br",null),'To use Rokkit.ts make sure you have typescript installed and that you created a simple "tsconfig.json" Now you can just run the install commands on the right.')),o.a.createElement("div",null,o.a.createElement("img",{className:"code-img",src:"../../static/images/install.svg"}))),o.a.createElement("div",{className:"description-container"},o.a.createElement("div",{className:"description"},o.a.createElement("h4",{className:"highlight-text"},"Use the Rokkit.ts CLI"),o.a.createElement("p",null,"Beside creating your project from scratch you can also use the Rokkit.ts CLI. The cli currently supports three commands.",o.a.createElement("ul",null,o.a.createElement("li",null,"Init -- initialize a new project"),o.a.createElement("li",null,"Build -- build the application"),o.a.createElement("li",null,"Run -- run the application")),"The cli comes with our core package and can easily be used. We recommend it to create your first project. Just use the same command as provided on the right side.")),o.a.createElement("div",null,o.a.createElement("img",{className:"code-img",src:"../../static/images/cli.svg"})))):null,s=i&&"create"===i?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"description-container"},o.a.createElement("div",{className:"description"},o.a.createElement("h4",{className:"highlight-text"},"Base class"),o.a.createElement("p",null,"Now that you have installed the needed modules of Rokkit.ts let's starting developing. We will build a simple REST API that returns hello world.",o.a.createElement("br",null),'We will start with our entrypoint class. Rokkit.ts needs an entry point to your project. As you can see on the right. The base class is used to configure Rokkit.ts and its modules. The API allows you to specify your used Rokkit modules and configure them accordingly to your needs. In order to run the whole framework you need to call the "run" method at the end of the configuration chain. Beside the run command just annotated the class with our "RokkitRunner" decorator. This decorator tells Rokkit.ts to create an instance of this class and the start procedure.')),o.a.createElement("div",null,o.a.createElement("img",{className:"code-img",src:"../../static/images/entrypoint.svg"}))),o.a.createElement("div",{className:"description-container"},o.a.createElement("div",{className:"description"},o.a.createElement("h4",{className:"highlight-text"},"Building a controller"),o.a.createElement("p",null,'So we created our base class let\'s create a controller to send our hello world message. On the right you can see a new class for our controller. It is marked with the controller decorator. the controller decorator expects an uri base path. We use "/sample" here. This means that our controller will be available on the following URI: "http://host:port/sample".',o.a.createElement("br",null),'Within our controller we now want to add some functionality. Therefore we can add a method that will respond to a request on a mapped path. In our code on the right we have the method "greetWorld". Because of its decorator it will respond to every GET request against our resource. You can also fill a request path into the decorator to specify the whole path. The result of the method will be used as the result of the request.')),o.a.createElement("div",null,o.a.createElement("img",{className:"code-img",src:"../../static/images/simple-controller.svg"}))),o.a.createElement("div",{className:"description-container"},o.a.createElement("div",{className:"description"},o.a.createElement("h4",{className:"highlight-text"},"Using dependency injection"),o.a.createElement("p",null,'We managed to create a basic controller, but how about extending this one by using the Rokkit.ts dependency injection. As you can see we added a constructor to our class. With two arguments. The first argument is a "GreetingGenerator". It\'s just another user class which hold some kind of logic. The second argument is a basic string. In order to use the dependency injection for native objects like strings, numbers, booleans, you have to use the annotation "Inject" and provide the value that will be injected. In our case "Hello" will be injected we the class is created. You can also use this decorator for user classes but there is a easier way. Because the "GreetingGenerator" is a registered class of the project. Rokkit.ts is able to automatically inject an instance. So you just have to declare it a the constructor. There is only one thing you need to do, you need to annotate the user comoponent that will be inejcted with one of the following decorators "Component", "Controller", "Service". This tells Rokkit.ts that this class is important for the dependency injection. Classes without that decorators won\'t be recognized.')),o.a.createElement("div",null,o.a.createElement("img",{className:"code-img",src:"../../static/images/controller.svg"})))):null,c=i&&"deploy"===i?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"description-container"},o.a.createElement("div",{className:"description"},o.a.createElement("h4",{className:"highlight-text"},"Running an app in development mode"),o.a.createElement("p",null,"After completing your first controller let's start your application and test it. In order to run Rokkit.ts in development mode you need to install ts-node. After installing it, just use it to run your entry point class.")),o.a.createElement("div",null,o.a.createElement("img",{className:"code-img",src:"../../static/images/dev.svg"}))),o.a.createElement("div",{className:"description-container"},o.a.createElement("div",{className:"description"},o.a.createElement("h4",{className:"highlight-text"},"Running an app in production mode"),o.a.createElement("p",null,'When you finished your development and want to run the application in production mode, you need to build it. There are two steps to build the application currentlty: 1. Run the application with ts-node. This will generate an directory with an declaration file. This file is needed for Rokkit.ts in production. This file provides important information for the dependency injection and speeds up the whole starting process. In development mode the file will be recreate every time. After running the app in development mode use the TypeScript compiler to build the project. At this time you need to use "build" as the outDir in the "tsconfig.json". After build your application just run the entrypoint class with Node.')),o.a.createElement("div",null,o.a.createElement("img",{className:"code-img",src:"../../static/images/prod.svg"})))):null,u=function(e){r(e)};return o.a.createElement("div",null,o.a.createElement("button",{className:"install"===i?"active-button":"",onClick:function(){return u("install")}},"Install Rokkit.ts"),l,o.a.createElement("button",{className:"create"===i?"active-button":"",onClick:function(){return u("create")}},"Creating your first app"),s,o.a.createElement("button",{className:"deploy"===i?"active-button":"",onClick:function(){return u("deploy")}},"Deploying the application"),c)}),E=o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Let's dive in deeper and see why these aspects are so important to us. Most developer will argue that they would expect an API to have"," ",o.a.createElement("b",null,"Comprehensive functionallity")," by default. But actually often an API provides nessecarry features, but we think that sometimes these features are not enough.There are multiple APIs which are build due to its functionallity but they do not care about the needs/ wishes of the developers.",o.a.createElement("br",null),"So for Rokkit.ts comprehensive functionallity does not only mean providing all expected features of our users, its more about the quality of the API, about its handling and its structure."),o.a.createElement("p",null,"Quality is also defined by the readability of an API. Therefor an API needs clear and reasonable names. There are multiple names that will be exposed. The entrypoint to an API is the package name / namespace. This first point should already provide information about the containing features. ",o.a.createElement("br",null),"The first entrypoint in an API are the methodnames. Every methodname should try to state the exact reason why it is there and what its purpose is.",o.a.createElement("br",null),"Beside methodnames parametername and typename are highly important all of these publish information to the developer and the developer will infer knowledge from these names."),o.a.createElement("p",null,"Most APIs provide the ability to configure the underlying behaivor. This can get very complex, due to the neverending options or the lack of documentation and understanding. Rokkit.ts tries to combine two aspects: 1. It lets the developer configure everything to provide maximal flexability. But this comes with a huge downside the information overflow. There may be hunderets of options to configure an webserver. But the developer only wants to change some of these instead of the whole thing. Here our 2. aspect should provide some help. Rokkit.ts will always try to provide an opinionated configuration that would work out of the box.",o.a.createElement("br",null),"If this is not working for what ever reason Rokkit.ts will at least provide you default values for the configuration to support the developer expierence as much as possible."),o.a.createElement("p",null,"The last aspect is to create precise documentations for all methods, classes and types. Good documentation should be short but also understandable. The documentation should only provide information that are valueable for the developer. Valueable is hard to define, we think the information should contain the most basic questions:"),o.a.createElement("ol",{type:"I"},o.a.createElement("li",null,"What is it for?"),o.a.createElement("li",null,"What could be achieved by using it?"),o.a.createElement("li",null,"What has to be provided?"),o.a.createElement("li",null,"What is the result?")),o.a.createElement("p",null,"Rokkit.ts combines all of these aspects to create easy to use APIs for our users. If you recognize any API within Rokkit.ts that needs improvement, do not hesitate to create an issue of the corresponding GitHub repository or when you even have an idea how to fix it send a pull request. Rokkit.ts should be a framework for a community, build by a community.")),k=function(){return o.a.createElement("div",{className:"site"},o.a.createElement(v,null),o.a.createElement(i,null,o.a.createElement("div",null,o.a.createElement("img",{className:"logo",src:"../static/rokkit-ts-logo.svg",alt:"Rokkit.ts Logo"})),o.a.createElement("h1",{className:"slogan"},"The Microservice Framework for Node.js with TypeScript"),o.a.createElement("a",{className:"get-started-link",href:"#getting-started"},o.a.createElement("button",{className:"get-started"},"GET STARTED")),o.a.createElement("hr",null),o.a.createElement(m,{heading:"Modular Component System",imageLeft:"../static/images/building_blocks.svg"},o.a.createElement("p",null,"Rokkit is based on a modular component system to be versatile and adaptable for most needs. The framework is diided into dirrent functionallities."),o.a.createElement("p",null,"Currently we offer two modules for the users needs. The first module is the Core-Framework. This module offers you depency injection out of the box and helps you to compose multiple Rokkit modules. The second available module is a Web-Module that offers you the abaility to spin up your own webserver and create an easy to use REST APIs."),o.a.createElement("p",null,"There are more modules planned. The next module will be a messaging module include a Apache Kafka Client. So that the microservice is able to receive or send events to Kafka.")),o.a.createElement("hr",null),o.a.createElement(m,{heading:"Dependency Injection",imageRight:"../static/images/fitting_pieces.svg"},"Rokkit.ts comes with its own depency inejction module. Dependency injection is a simple method where the depencies of a class / component are injected through a function or by the constructor. Rokkit.ts is currently able scan every user project class and inject it into an other through the constructor. Rokkit.ts only offers constructor injection to only have one single point where the inejction happens. Moreover dependency injection helps unit testing any class / component, because instead of the actaul implementation a stub, mock or spy could be provided. ",o.a.createElement("br",null),"Rokkit.ts enables the developer to provide its own injector definitions and configure them as needed or simple use the automaticly created definitions by Rokkit.ts."),o.a.createElement("hr",null),o.a.createElement(m,{heading:"Easy Configuration",imageLeft:"../static/images/breaking_barries.svg"},o.a.createElement("p",null,"Rokkit.ts tries to provide a simple to use configuration for each of its packages."),o.a.createElement("p",null,"In order to be flexible a configuration needs to be precise and offer engouhg options. A big downside of such an configuration is that it can be frustating to configure everything up front."),o.a.createElement("p",null,"To be able to run your service as fast as possible Rokkit.ts comes with an opinionated configuration for every package. The developer can just overwrite the configuration and adapt it to their needs.")),o.a.createElement("hr",null),o.a.createElement(m,{heading:"Native for TypeScript",imageRight:"../static/images/typings.svg"},o.a.createElement("p",null,"Rokkit.ts is build in TypeScript and for TypeScript.",o.a.createElement("br",null),"TypeScript provides typesafety and lets developers use modern JavaScript features without the need of polyfills."),o.a.createElement("p",null,"For backend systems typesafety is highly important. Furthermore TypeScript helps to document the source code with its type defenitions. Currently Rokkit.ts focuses only on the development for TypeScript.",o.a.createElement("br",null),"There are some ideas to support native JavaScript later in the development process.")),o.a.createElement("hr",null),o.a.createElement(m,{heading:"Focus on developer experience",imageLeft:"../static/images/abstract.svg",readMore:E},o.a.createElement("p",null,"Rokkit.ts tries to optimize your development experience by providing easy to use APIs. For us an easy to use API includes four key aspects:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Comprehensive functionallity"),o.a.createElement("li",null,"Self explaining method names"),o.a.createElement("li",null,"Reasonable and lightweight configuration"),o.a.createElement("li",null,"Understandable and short documentation"))),o.a.createElement("hr",{id:"getting-started"}),o.a.createElement(m,{heading:"Getting started"},o.a.createElement(b,null)),o.a.createElement("hr",null),o.a.createElement(m,{heading:"Contribute to Rokkit.ts",imageLeft:"../static/images/contribute.svg"},o.a.createElement("p",null,"If you want to contribute to the project, check out our"," ",o.a.createElement("a",{href:"https://github.com/rokkit-ts"},"GitHub")," repositories. You can either create, discuss issues or fix them by sending us a pull request. Please always respect everyone, there is no room for discrimination nor insulting of anybody.",o.a.createElement("br",null),"Always rember the prime directive:"),o.a.createElement("p",null,"“",o.a.createElement("b",null,"Regardless of what we discover, we understand and truly believe that everyone did the best job they could, given what they knew at the time, their skills and abilities, the resources available, and the situation at hand."),"”"))),o.a.createElement(d,null))},w=a("m/Pd"),N=a.n(w);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(N.a,null,o.a.createElement("title",null,"Rokkit.ts - Framework"),o.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.ico"})),o.a.createElement(k,null))}},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var n=a("KI45"),o=n(a("9Jkg")),i=n(a("/HRN")),r=n(a("WaGi")),l=n(a("ZDA2")),s=n(a("/+P4")),c=n(a("N9n2")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var h=a("CxY0"),m=u(a("q1tI")),p=(d(a("17x9")),u(a("nOHt"))),f=a("Bu4q");function g(e){return e&&"object"==typeof e?f.formatWithValidation(e):e}var y=function(e){function t(){var e,a,n,o,r;return(0,i.default)(this,t),(e=(0,l.default)(this,(0,s.default)(t).apply(this,arguments))).formatUrls=(a=function(e,t){return{href:g(e),as:g(t)}},n=null,o=null,r=null,function(e,t){if(e===n&&t===o)return r;var i=a(e,t);return n=e,o=t,r=i,i}),e.linkClicked=function(t){var a=t.currentTarget,n=a.nodeName,o=a.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),r=i.href,l=i.as;if(function(e){var t=h.parse(e,!1,!0),a=h.parse(f.getLocationOrigin(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(r)){var s=window.location.pathname;r=h.resolve(s,r),l=l?h.resolve(s,l):r,t.preventDefault();var c=e.props.scroll;null==c&&(c=l.indexOf("#")<0),p.default[e.props.replace?"replace":"push"](r,l,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,c.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,a=h.resolve(e,t);p.default.prefetch(a)}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,o=a.as;"string"==typeof t&&(t=m.default.createElement("a",null,t));var i=m.Children.only(t),r={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(r.href=o||n),r.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(r.href=p.Router._rewriteUrlForNextExport(r.href)),m.default.cloneElement(i,r)}}]),t}(m.Component);t.default=y},"oh+g":function(e,t,a){var n=a("WEpk"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1","ad9d"]]]);