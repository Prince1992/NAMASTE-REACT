const heading1 = React.createElement('h1', {}, 'Heading-1');
const heading2 = React.createElement('h2', {}, 'Heading-2');
const container = React.createElement(
  'div',
  { id: 'container', hello: 'test' },
  [heading1, heading2]
);
console.log(container);
const root = ReactDOM.createRoot(document.getElementById('root'));
// passing react element inside the root
root.render(container);
