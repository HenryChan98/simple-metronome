import React from 'react';
import ReactDOM from 'react-dom';
import MetronomeApp from './MetronomeApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MetronomeApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
