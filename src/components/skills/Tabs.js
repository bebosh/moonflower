import React from "react";
import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "Web",
    render: () => (
      <Tab.Pane attached={false}>
        <p className="fantasy-dark">In web page cocktails I start with <strong>HTML5</strong> and <strong>CSS3</strong> ( or <strong>Sass / Less</strong> some
        time ). </p>
        <p className="fantasy-dark">Mixing all with <strong>Javascript</strong> ( With <strong>jQuery</strong> ) and <strong>PHP</strong> on <strong>Wordpress</strong> or
        <strong>React.JS / VUE.JS</strong> for web apps. </p>
        <p className="fantasy-dark">Then I add a drop or two of <strong>Bootstrap4,
        Materialize, and Semantic UI </strong>as styling.</p>
        <p className="fantasy-dark">What about databases? <strong>Wordpress and PHP</strong> are natural partners as <strong>JS and MongoDB</strong>; one of my best new enrty is <strong>Firebase</strong> back end service </p>.
        
      </Tab.Pane>
    )
  },
  {
    menuItem: "Mobile",
    render: () => <Tab.Pane attached={false}> 
      <p className="fantasy-dark">For mobile apps I have experience with <strong>React-Native and PWA technology</strong>. to be able to provide app vis browsers or to publish on app stores.</p> 
      <p className="fantasy-dark">Materialize and Semantic-UI-React are my favorite mobile libraries </p>

      </Tab.Pane>
  },
  {
    menuItem: "Design",
    render: () => <Tab.Pane attached={false}>
      <p className="fantasy-dark">For web page prototyping  and visual design I use <strong>Sketch and Figma</strong>.</p>
      <p className="fantasy-dark">To add a personal touch for icons and element i draw my own SVG in <strong>GravitDesigner</strong>.</p>
      <p className="fantasy-dark"> For 3d drawings and models I have  good experience with <strong>Blender and Autodesk 3D</strong>.</p>
       </Tab.Pane>
  }
];

const TabExampleSecondaryPointing = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
);

export default TabExampleSecondaryPointing;
