function customRender(reactelement, container) {

  const domElement = document.createElement(reactelement.type);

  domElement.innerHTML = reactelement.children;
  // domElement.setAttribute('target', reactelement.props.target);domElement.setAttribute('src', reactelement.props.src)

  //optimized code
  for (const prop in reactelement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactelement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactelement = {
  type: 'a',
  props: { href: "https://www.google.com", target: "_blank" },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root"); // const mainContainer = document.querySelector('#root');

customRender(reactelement, container);
