// import React from "react";
import styles from "./Game2.module.scss";
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import piggy from "./resources/piggy.png";
import money from "./resources/money.png";
import lobby from "./resources/Lobby.png";
import bedroom from "./resources/bedroom.jpg";

const port = process.env.PORT || 4001;

const ENDPOINT = "http://127.0.0.1:" + port;

let locations = [];
const n = 6;
const socket = socketIOClient(ENDPOINT);
let x = [];
let y = [];

for (var i = 0; i < n; i++) {
  // locations.push([Math.random() * 50 + 20, Math.random() * 50 + 20]);
  locations.push([5 + 15 * i, 40]); //in percentages
  x[i] = 5 + 15 * i;
  y[i] = 40;
}

console.log(locations);

const max = 5;
const min = -5;

const Game2 = () => {
  const [wobble, setWobble] = React.useState(0);
  const [wobble1, setWobble1] = React.useState(0);
  const [wobble2, setWobble2] = React.useState(0);
  const [wobble3, setWobble3] = React.useState(0);
  const [wobble4, setWobble4] = React.useState(0);
  const [wobble5, setWobble5] = React.useState(0);
  const [wobble6, setWobble6] = React.useState(0);
  const [wobble7, setWobble7] = React.useState(0);
  const [dropIn, setDropIn] = React.useState(0);
  const [coordinates, setCoordinates] = React.useState(30);

  const [response, setResponse] = useState("");

  // setCoordinates {() => {
  //   for (var i = 0; i < n; i++) {
  //     // locations.push([Math.random() * 50 + 20, Math.random() * 50 + 20]);
  //     coordinates[i][0] += Math.floor(Math.random() * (max - min + 1)) + min;
  //     coordinates[i][1] += Math.floor(Math.random() * (max - min + 1)) + min;
  //   }
  // };

  useEffect(() => {
    socket.on("dropIn", (data) => {
      setDropIn(data);
      console.log("dropped money");
    });
    socket.on("wobble0", (data) => {
      // setResponse(data);
      setWobble(data);
      console.log("received 0");
    });

    socket.on("wobble1", (data) => {
      // setResponse(data);
      setWobble1(data);
      console.log("received 1");
    });

    socket.on("wobble2", (data) => {
      // setResponse(data);
      setWobble2(data);
      console.log("received 2");
    });

    socket.on("wobble3", (data) => {
      // setResponse(data);
      setWobble3(data);
      console.log("received 3");
    });

    socket.on("wobble4", (data) => {
      // setResponse(data);
      setWobble4(data);
      console.log("received 4");
    });

    socket.on("wobble5", (data) => {
      // setResponse(data);
      setWobble5(data);
      console.log("received 5");
    });
  }, []);

  // socket.on("wobble0", function (obj) {
  //   setWobble(obj);
  //   console.log("received");
  // });

  // document.body.style.backgroundColor = "white";
  // document.body.style.backgroundImage = "./resources/bedroom.jpg";
  // document.body.style =

  return (
    <div style={{ backgroundImage: `url("./resources/bedroom.jpg")` }}>
      <img className={styles.game} src={bedroom} alt="backgrounds" />
      <img className={styles.piggy} src={piggy} alt="randomised!" />

      <img
        className={styles.money}
        src={money}
        alt="randomised!"
        dropin={dropIn}
      />

      {/* {console.log("dropIn is " + dropIn)}
      {x.map((x) => x + Math.floor(Math.random() * (max - min + 1)) + min)}
      {console.log(x)} */}

      <img
        className={styles.image}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/devil_compressed.gif"
        alt="randomised!"
        style={{ left: locations[0][0] + "%", top: locations[0][1] + "%" }}
        onClick={() => {
          socket.emit("wobble0", 1);
          socket.emit("dropIn", 1);
          console.log("emitted");
          // setWobble(1);
        }}
        onAnimationEnd={() => {
          setWobble(0);
          setDropIn(0);
        }}
        wobble={wobble}
      />

      <img
        className={styles.image}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/devil_compressed.gif"
        alt="randomised!"
        style={{ left: locations[1][0] + "%", top: locations[1][1] + "%" }}
        onClick={() => {
          socket.emit("wobble1", 1);
          socket.emit("dropIn", 1);
          console.log("emitted");
          // setWobble(1);
        }}
        onAnimationEnd={() => {
          setWobble1(0);
          setDropIn(0);
        }}
        wobble={wobble1}
      />

      <img
        className={styles.image}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/devil_compressed.gif"
        alt="randomised!"
        style={{ left: locations[2][0] + "%", top: locations[2][1] + "%" }}
        onClick={() => {
          socket.emit("wobble2", 1);
          socket.emit("dropIn", 1);
          console.log("emitted");
          // setWobble(1);
        }}
        onAnimationEnd={() => {
          setWobble2(0);
          setDropIn(0);
        }}
        wobble={wobble2}
      />

      <img
        className={styles.image}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/devil_compressed.gif"
        alt="randomised!"
        style={{ left: locations[3][0] + "%", top: locations[3][1] + "%" }}
        onClick={() => {
          socket.emit("wobble3", 1);
          socket.emit("dropIn", 1);
          console.log("emitted");
          // setWobble(1);
        }}
        onAnimationEnd={() => {
          setWobble3(0);
          setDropIn(0);
        }}
        wobble={wobble3}
      />

      <img
        className={styles.image}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/devil_compressed.gif"
        alt="randomised!"
        style={{ left: locations[4][0] + "%", top: locations[4][1] + "%" }}
        onClick={() => {
          socket.emit("wobble4", 1);
          socket.emit("dropIn", 1);
          console.log("emitted");
          // setWobble(1);
        }}
        onAnimationEnd={() => {
          setWobble4(0);
          setDropIn(0);
        }}
        wobble={wobble4}
      />

      <img
        className={styles.image}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/devil_compressed.gif"
        alt="randomised!"
        style={{ left: locations[5][0] + "%", top: locations[5][1] + "%" }}
        onClick={() => {
          socket.emit("wobble5", 1);
          socket.emit("dropIn", 1);
          console.log("emitted");
          // setWobble(1);
        }}
        onAnimationEnd={() => {
          setWobble5(0);
          setDropIn(0);
        }}
        wobble={wobble5}
      />
    </div>
  );
};

export default Game2;

// import React from "react";
// import { render } from "react-dom";
// import { ReactP5Wrapper } from "react-p5-wrapper";
// import p5 from "p5";

// // Sloppy way of styling.. but it's a sandbox..
// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center",
//   overflow: "hidden",
// };

// // Sloppy way of styling.. but it's a sandbox..
// const header = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   position: "absolute",
//   width: "100%",
//   fontFamily: "fantasy",
//   fontSize: 34,
//   lineHeight: 0.2,
//   userSelect: "none",
//   color: "rgba(255,255,255,0.95)",
//   textShadow: "#222 1px 0px 15px",
// };

// const controls = {
//   background: "rgba(40,40,40,0.95)",
//   position: "fixed",
//   marginTop: 50,
//   // width: "50%",
//   display: "flex",
//   flexDirection: "column",
//   padding: 20,
//   cursor: "pointer",
// };

// const control = {
//   display: "flex",
//   flexDirection: "column",
//   color: "white",
//   cursor: "pointer",
// };

// // Particles along the path
// class Particle {
//   constructor(p, position, force, hue, drag, lifespan) {
//     this.p = p;
//     this.position = p.createVector(position.x, position.y);
//     this.velocity = p.createVector(force.x, force.y);
//     this.lifespan = lifespan;
//     this.force = force;
//     this.drag = drag;
//     this.hue = hue;

//     this.start = Date.now();
//   }

//   update() {
//     // Move it
//     this.position.add(this.velocity);

//     // Slow it down
//     this.velocity.mult(this.drag);

//     // Fade it out
//     let dt = Date.now() - this.start;
//     let vel = 0.01 * dt;
//     this.lifespan = this.lifespan - vel;
//   }

//   // Draw particle and connect it with a line
//   // Draw a line to another
//   display(other) {
//     this.p.stroke(0, this.lifespan);
//     this.p.fill(0, this.lifespan / 2);
//     this.p.ellipse(this.position.x, this.position.y, 8, 8);

//     // If we need to draw a line
//     if (other) {
//       this.p.line(
//         this.position.x,
//         this.position.y,
//         other.position.x,
//         other.position.y
//       );
//     }
//   }
// }

// // A Path is a list of particles
// class Paths {
//   constructor(p) {
//     this.particles = [];
//     this.p = p;
//   }

//   // Add a new particle with a position, force, and hue
//   add(particle) {
//     this.particles.push(particle);
//   }

//   // Display plath
//   update() {
//     for (var i = 0; i < this.particles.length; i++) {
//       this.particles[i].update();
//     }
//   }

//   // Display plath
//   display() {
//     // Loop through backwards
//     for (var i = this.particles.length - 1; i >= 0; i--) {
//       // If we shold remove it
//       if (this.particles[i].lifespan <= 0) {
//         this.particles.splice(i, 1);
//       } else {
//         // Otherwise, display it
//         this.particles[i].display(this.particles[i + 1]);
//       }
//     }
//   }
// }

// export default class Game2 extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       hue: 0,
//       drag: 0.2,
//       baseHue: 255,
//       lifespan: 255,
//       painting: false,
//     };

//     this.sketch = this.sketch.bind(this);
//   }

//   sketch(p) {
//     // All the paths
//     var paths = new Paths(p);

//     // How long until the next circle
//     var next = 0;

//     // Where are we now and where were we?
//     var current;
//     var previous;

//     p.setup = () => {
//       p.createCanvas(window.innerWidth, window.innerHeight);
//       current = p.createVector(0, 0);
//       previous = p.createVector(0, 0);
//       this.setState({ hue: p.random(this.state.baseHue) });
//     };

//     p.draw = () => {
//       p.background(255);

//       // If it's time for a new point
//       if (p.millis() > next && this.state.painting) {
//         // Grab mouse position
//         current.x = p.mouseX;
//         current.y = p.mouseY;

//         // New particle's force is based on mouse movement
//         var force = p5.Vector.sub(current, previous);
//         force.mult(0.05);

//         paths.particles[paths.particles.length - 1].add(
//           new Particle(
//             p,
//             current,
//             force,
//             this.state.hue,
//             this.state.drag,
//             this.state.lifespan
//           )
//         );

//         // Schedule next circle
//         next = p.millis() + p.random(10);

//         // Store mouse values
//         previous.x = current.x;
//         previous.y = current.y;
//       }

//       // Draw all paths
//       for (var i = 0; i < paths.particles.length; i++) {
//         paths.particles[i].update();
//         paths.particles[i].display(paths.particles[i]);
//       }
//     };

//     // Start it up
//     p.mousePressed = () => {
//       next = 0;
//       this.setState({ painting: true });
//       previous.x = p.mouseX;
//       previous.y = p.mouseY;
//       paths.particles.push(new Paths(p));
//     };

//     // Stop
//     p.mouseReleased = () => {
//       this.setState({ painting: false });
//     };
//   }

//   changeLifetime(e) {
//     e.persist();
//     // console.log(sketch.name);
//     // sketch.
//     this.setState({
//       baseHue: e.target.value,
//       lifespan: e.target.value,
//     });
//   }

//   render() {
//     return (
//       <div style={styles}>
//         <div style={header}>
//           <h1>Draw Something!</h1>
//           <h3>Click & Drag</h3>
//         </div>
//         <div style={controls}>
//           <div style={control}>
//             <label>Lifespan : {this.state.lifespan}</label>
//             <input
//               type="range"
//               onChange={this.changeLifetime.bind(this)}
//               min="255"
//               max="5000"
//             />
//           </div>
//         </div>
//         <ReactP5Wrapper sketch={this.sketch.bind(this)} />
//       </div>
//     );
//   }
// }

// // render(<App />, document.getElementById("root"));

// // import React, { useEffect, useState } from "react";
// // // import Sketch from "react-p5";
// // import { render } from "react-dom";
// // import P5Wrapper from "react-p5-wrapper";
// // import p5 from "p5";

// // import cx from "classnames";
// // // import styles from "./Game2.scss";
// // import TextBox from "./TextBox";

// // // import plant-cursor from "./resources/plant.ico"

// // import socketIOClient from "socket.io-client";
// // const ENDPOINT = "http://127.0.0.1:4001";

// // const Game2 = () => {
// //   // const [wobble, setWobble] = useState(1);

// //   // document.body.style.backgroundColor = "black";

// //   const [response, setResponse] = useState("");

// //   useEffect(() => {
// //     const socket = socketIOClient(ENDPOINT);
// //     socket.on("FromAPI", (data) => {
// //       setResponse(data);
// //       console.log(response);
// //     });
// //   }, []);

// //   let x = 50;
// //   let y = 50;
// //   let cnv;
// //   let characters;
// //   let nChars = 10;
// // //   const [coordinates, setCoordinates] = useState([]);
// // class Particle {
// //     constructor(p, position, force, hue, drag, lifespan) {
// //       this.p = p;
// //       this.position = p.createVector(position.x, position.y);
// //       this.velocity = p.createVector(force.x, force.y);
// //       this.lifespan = lifespan;
// //       this.force = force;
// //       this.drag = drag;
// //       this.hue = hue;

// //       this.start = Date.now();
// //     }

// //     update() {
// //       // Move it
// //       this.position.add(this.velocity);

// //       // Slow it down
// //       this.velocity.mult(this.drag);

// //       // Fade it out
// //       let dt = Date.now() - this.start;
// //       let vel = 0.01 * dt;
// //       this.lifespan = this.lifespan - vel;
// //     }

// //     // Draw particle and connect it with a line
// //     // Draw a line to another
// //     display(other) {
// //       this.p.stroke(0, this.lifespan);
// //       this.p.fill(0, this.lifespan / 2);
// //       this.p.ellipse(this.position.x, this.position.y, 8, 8);

// //       // If we need to draw a line
// //       if (other) {
// //         this.p.line(
// //           this.position.x,
// //           this.position.y,
// //           other.position.x,
// //           other.position.y
// //         );
// //       }
// //     }
// //   }

// //   class Paths {
// //     constructor(p) {
// //       this.particles = [];
// //       this.p = p;
// //     }

// //     // Add a new particle with a position, force, and hue
// //     add(particle) {
// //       this.particles.push(particle);
// //     }

// //     // Display plath
// //     update() {
// //       for (var i = 0; i < this.particles.length; i++) {
// //         this.particles[i].update();
// //       }
// //     }

// //     // Display plath
// //     display() {
// //       // Loop through backwards
// //       for (var i = this.particles.length - 1; i >= 0; i--) {
// //         // If we shold remove it
// //         if (this.particles[i].lifespan <= 0) {
// //           this.particles.splice(i, 1);
// //         } else {
// //           // Otherwise, display it
// //           this.particles[i].display(this.particles[i + 1]);
// //         }
// //       }
// //     }
// //   }

// //     class Game2 extends React.Component {
// //     constructor() {
// //       super();

// //       this.state = {
// //         hue: 0,
// //         drag: 0.2,
// //         baseHue: 255,
// //         lifespan: 255,
// //         painting: false
// //       };

// //       this.sketch = this.sketch.bind(this);
// //     }

// //     sketch(p) {
// //       // All the paths
// //       var paths = new Paths(p);

// //       // How long until the next circle
// //       var next = 0;

// //       // Where are we now and where were we?
// //       var current;
// //       var previous;

// //       p.setup = () => {
// //         p.createCanvas(window.innerWidth, window.innerHeight);
// //         current = p.createVector(0, 0);
// //         previous = p.createVector(0, 0);
// //         this.setState({ hue: p.random(this.state.baseHue) });
// //       };

// //       p.draw = () => {
// //         p.background(255);

// //         // If it's time for a new point
// //         if (p.millis() > next && this.state.painting) {
// //           // Grab mouse position
// //           current.x = p.mouseX;
// //           current.y = p.mouseY;

// //           // New particle's force is based on mouse movement
// //           var force = p5.Vector.sub(current, previous);
// //           force.mult(0.05);

// //           paths.particles[paths.particles.length - 1].add(
// //             new Particle(
// //               p,
// //               current,
// //               force,
// //               this.state.hue,
// //               this.state.drag,
// //               this.state.lifespan
// //             )
// //           );

// //           // Schedule next circle
// //           next = p.millis() + p.random(10);

// //           // Store mouse values
// //           previous.x = current.x;
// //           previous.y = current.y;
// //         }

// //         // Draw all paths
// //         for (var i = 0; i < paths.particles.length; i++) {
// //           paths.particles[i].update();
// //           paths.particles[i].display(paths.particles[i]);
// //         }
// //       };

// //       // Start it up
// //       p.mousePressed = () => {
// //         next = 0;
// //         this.setState({ painting: true });
// //         previous.x = p.mouseX;
// //         previous.y = p.mouseY;
// //         paths.particles.push(new Paths(p));
// //       };

// //       // Stop
// //       p.mouseReleased = () => {
// //         this.setState({ painting: false });
// //       };
// //     }

// //     changeLifetime(e) {
// //       e.persist();
// //       // console.log(sketch.name);
// //       // sketch.
// //       this.setState({
// //         baseHue: e.target.value,
// //         lifespan: e.target.value
// //       });
// //     }

// //     render() {
// //       return (
// //         <div style={styles}>
// //           <div style={header}>
// //             <h1>Draw Something!</h1>
// //             <h3>Click & Drag</h3>
// //           </div>
// //           <div style={controls}>
// //             <div style={control}>
// //               <label>Lifespan : {this.state.lifespan}</label>
// //               <input
// //                 type="range"
// //                 onChange={this.changeLifetime.bind(this)}
// //                 min="255"
// //                 max="5000"
// //               />
// //             </div>
// //           </div>
// //           <P5Wrapper sketch={this.sketch.bind(this)} />
// //         </div>
// //       );
// //     }
// //   }

// //   render(<App />, document.getElementById("root"));
// //   const setup = (p5, canvasParentRef) => {
// //     // use parent to render the canvas in this ref
// //     // (without that p5 will render the canvas outside of your component)
// //     cnv = p5
// //       .createCanvas(window.innerWidth, window.innerHeight)
// //       .parent(canvasParentRef);
// //     cnv.mousePressed((event) => {
// //       console.log("Clicked on the canvas. Event:", event);
// //     });

// //     characters = [];

// //     for (var i = 0; i < nChars; i++) {
// //       characters.push([
// //         Math.random() * window.innerWidth,
// //         Math.random() * window.innerHeight,
// //       ]);
// //       console.log(characters[i]);
// //     }
// //   };

// //   const draw = (p5) => {
// //     p5.background(0);
// //     // p5.ellipse(x, y, 70, 70);
// //     // p5.ellipse(p5.mouseX, p5.mouseY, 70, 70);

// //     console.log(characters[0][0]);
// //     characters.map((i) =>
// //       p5.ellipse(characters[i][0], characters[i][1], 70, 70)
// //     );

// //     // NOTE: Do not use setState in the draw function or in functions that are executed
// //     // in the draw function...
// //     // please use normal variables or class properties for these purposes
// //     x++;
// //   };

// //   return <Sketch setup={setup} draw={draw} />;

// //   //   return (
// //   //     <div style={{ cursor: "url(./resources/plant.ico),auto" }}> hello </div>
// //   //   );
// // };

// // export default Game2;

// // render(<App />, document.getElementById("root"));
