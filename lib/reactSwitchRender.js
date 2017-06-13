export const createCustomFooter = (caseItem) => {
  return (render) => {
    return {
      caseItem,
      render: (props) => {
        return render(props);
      }
    };
  };
};

export const createFooterSwitch = (switchStatement) => {
  return (defaultFooter = '', customFooters = []) => {
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
