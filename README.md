# react-switch-render
Configure a switch and render content based upon props passed in

### Installation

```
yarn add react-switch-render
```
OR
```
npm i react-switch-render
```
If your not using yarn

### Basic Usage

SameplePageFooter.jsx
```javascript
import React from 'react';
import {createSwitchItem} from 'react-switch-render';

const sameplePageFooter = (props) => {
  const {siteName} = props;
  return (
    <p>I am a unique butterfly on the url: {siteName}</p>
  );
};

export default createSwitchItem('/sample-page')(sameplePageFooter);

```

Footer.jsx
```javascript
import React from 'react';
import moment from 'moment';
import {createSwitch} from 'react-switch-render';
import SamplePageFooter from './sameplePageFooter';

const defaultFooter = (props) => {
  return (
    <p>Copyright {props.siteName} {moment().format('YYYY')}</p>
  );
};

// const footerSwitch = createPathnameSwitch(defaultFooter, [SamplePageFooter]);
const footerSwitch = createSwitch(defaultFooter, [SamplePageFooter]);

export const Footer = props => {
  const {pathname, ...args} = props; // App passes in pathname: '/some-route' and args are whatever else you passed down
  return (                           // I am using pathname as the way to switch on which component to render
    <footer className="content-info" role="contentinfo">
      {
        footerSwitch((item) => pathname === item)(args)
      }
    </footer>
  );
};

```


Alternativly you could use the helper switch which deals with direct routes and deals automatically with pitfalls as such as trailing slashes via this setup:

Footer.jsx v2
```javascript
import React from 'react';
import moment from 'moment';
import {createPathnameSwitch} from 'react-switch-render';
import SamplePageFooter from './sameplePageFooter';

const defaultFooter = (props) => {
  return (
    <p>Copyright {props.siteName} {moment().format('YYYY')}</p>
  );
};

const footerSwitch = createPathnameSwitch(defaultFooter, [SamplePageFooter]);

export const Footer = props => {
  const {pathname, ...args} = props;
  return (
    <footer className="content-info" role="contentinfo">
      {
        footerSwitch(pathname, args)
      }
    </footer>
  );
};
```

### About
This project was born out of the need for a need for a re-usable scalable solution to change what apears in the footer depending on the route. Allot needs to be done as such as remove react as a dependanciy as this actually doesn't need react (maybe it should be renamed too :|) but it does what it needs to
