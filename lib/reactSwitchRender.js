export const createSwitchItem = (caseItem) => {
  return (render) => {
    return {
      caseItem,
      render: (props) => {
        return render(props);
      }
    };
  };
};

export const createSwitch = (defaultFooter = '', customFooters = []) => {
  return (switchStatement) => {
    return (props) => {
      for (const footer of customFooters) {
        if (switchStatement(footer.caseItem)) {
          return footer.render(props);
        }
      }
      return defaultFooter(props);
    };
  };

}
