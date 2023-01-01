/**
 * What Parcel Advantages--
 *
 * 1-Hot Module Replacement
 * 2-File watcher algorithm
 * 3-Bundling
 * 4-Minifying
 * 5-clearing up code
 * 6-manages dev and production build
 * 7-super fast build algorithm
 * 8-Images Optimization
 * 9-Caching while development
 * 10-Compresses files
 * 11-Compatibility with older versions of browsers
 * 12- HTTPS on development
 * 13- port number
 * 14- consistant hashing algorithm
 * 15-Zero Configuration bulder
 * 16-Transitive Dependency
 * 17-Tree Shaking
 *
 *
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement('h1', {}, 'Heading-1 from parcel');
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
