import React from 'react/addons';
import ReactSwitchRender from '../lib/react-switch-render.jsx';

describe('ReactSwitchRender', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactSwitchRender/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('react-switch-render');
  });
});
