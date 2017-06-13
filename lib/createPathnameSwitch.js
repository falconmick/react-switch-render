import { createSwitch } from './reactSwitchRender'

const removeTrailingSlash = (str) => {
  if (str.length > 0 && str[str.length - 1] === '/') {
    return str.slice(0, -1);
  }
  return str;
}

export default (defaultFooter = '', customFooters = []) => {
  const mySwitch = createSwitch(defaultFooter, customFooters);
  return (pathname, props) => {
    return mySwitch((route) => {
      return removeTrailingSlash(pathname) === route;
    })(props);
  };
}
