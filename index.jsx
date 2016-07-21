import React from 'react';
import { render } from 'react-dom';
import detectIt from 'detect-it';
import 'current-input';

function App() {
  function toString(item) {
    return item === undefined ? 'undefined' : item.toString();
  }

  function testResult(item, prefix) {
    return <div>{item}: {toString(prefix ? detectIt.state[prefix][item] : detectIt[item])}</div>;
  }

  return (
    <div>
      <h1 id="detect-it">Detect It &#8212; Live Detection Test</h1>
      <div><a href="https://github.com/rafrex/detect-it" target="_blank">https://github.com/rafrex/detect-it</a></div>
      <div>
        {testResult('deviceType')}
        {testResult('hasTouchEventsApi')}
        {testResult('hasPointerEventsApi')}
        {testResult('hasTouch')}
        {testResult('maxTouchPoints')}
        {testResult('primaryHover')}
        {testResult('primaryPointer')}
      </div>
      <div>
        Detect It's state is a deterministic function of the state of the four
        micro state machines that it contains:
      </div>

      <h2 id="detect-hover">Detect Hover</h2>
      <div><a href="https://github.com/rafrex/detect-hover" target="_blank">https://github.com/rafrex/detect-hover</a></div>
      <div>
        {testResult('hover', 'detectHover')}
        {testResult('none', 'detectHover')}
        {testResult('anyHover', 'detectHover')}
        {testResult('anyNone', 'detectHover')}
      </div>

      <h2 id="detect-pointer">Detect Pointer</h2>
      <div><a href="https://github.com/rafrex/detect-pointer" target="_blank">https://github.com/rafrex/detect-pointer</a></div>
      <div>
        {testResult('fine', 'detectPointer')}
        {testResult('coarse', 'detectPointer')}
        {testResult('none', 'detectPointer')}
        {testResult('anyFine', 'detectPointer')}
        {testResult('anyCoarse', 'detectPointer')}
        {testResult('anyNone', 'detectPointer')}
      </div>

      <h2 id="detect-touch-events">Detect Touch Events</h2>
      <div><a href="https://github.com/rafrex/detect-touch-events" target="_blank">https://github.com/rafrex/detect-touch-events</a></div>
      <div>
        {testResult('hasApi', 'detectTouchEvents')}
        {testResult('maxTouchPoints', 'detectTouchEvents')}
      </div>

      <h2 id="detect-pointer-events">Detect Pointer Events</h2>
      <div><a href="https://github.com/rafrex/detect-pointer-events" target="_blank">https://github.com/rafrex/detect-pointer-events</a></div>
      <div>
        {testResult('hasApi', 'detectPointerEvents')}
        {testResult('requiresPrefix', 'detectPointerEvents')}
        {testResult('hasTouch', 'detectPointerEvents')}
        {testResult('maxTouchPoints', 'detectPointerEvents')}
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
