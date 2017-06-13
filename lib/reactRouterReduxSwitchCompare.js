const removeTrailingSlash = (str) => {
  if (str.length > 0 && str[str.length - 1] === '/') {
    return str.slice(0, -1);
  }
  return str;
}

export default (reactRouter) => {
  return (route) => {
    return removeTrailingSlash(reactRouter.locationBeforeTransitions.pathname) === route;
  }
}
