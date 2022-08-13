// global variable DOM
// ReactDOM.render(<h1>Hello People!</h1>, document.getElementById("root"));
// ReactDOM.render(
//   <ul>
//     <li>School</li>
//     <li>High</li>
//     <li>Church</li>
//   </ul>,
//   document.getElementById("root")
// );
// function MainContent() {
//   return <h1>I am Learning react</h1>;
// }
// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// );

// JSX-javascript xml. a flavour of js that lkooks likie html.
const page = (
  <div>
    <h1>Hello, JSX</h1>
    <p>We are Learning react by doing</p>
  </div>
);
const navbar = (
  <nav>
    <h1>Manu Sales</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
// ReactDOM.render(page, document.getElementById("root"));
ReactDOM.render(navbar, document.getElementById("root"));
