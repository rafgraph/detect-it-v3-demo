import React from 'react';
import { render } from 'react-dom';
import detectIt from 'detect-it';
import Interactive from 'react-interactive';
import s from './style';

function App() {
  function toString(item) {
    return item === undefined ? 'undefined' : item.toString();
  }

  function testResult(item, prefix) {
    const value = toString(prefix ? detectIt.state[prefix][item] : detectIt[item]);
    const color = s.testResultColor(value);
    return <div style={s.testResult}>{item}: <span style={{ color }}>{value}</span></div>;
  }

  return (
    <div style={s.root}>
      <h1 id="detect-it" style={s.h1}>Detect It &#8211; Live Detection Test</h1>
      <div style={s.repoLink}>
        <Interactive
          as="a"
          href="https://github.com/rafrex/detect-it"
          {...s.link}
        >https://github.com/rafrex/detect-it</Interactive>
      </div>
      <div style={s.code}>
        <div style={s.detects}>
          {testResult('deviceType')}
          {testResult('passiveEvents')}
          {testResult('hasMouse')}
          {testResult('hasTouch')}
          {testResult('maxTouchPoints')}
          {testResult('primaryHover')}
          {testResult('primaryPointer')}
        </div>
      </div>


      <h2 id="detect-hover" style={s.h2}>Detect Hover</h2>
      <div style={s.repoLink}>
        <Interactive
          as="a"
          href="https://github.com/rafrex/detect-hover"
          {...s.link}
        >https://github.com/rafrex/detect-hover</Interactive>
      </div>
      <div style={s.code}>
        <div style={s.detects}>
          {testResult('hover', 'detectHover')}
          {testResult('none', 'detectHover')}
          {testResult('anyHover', 'detectHover')}
          {testResult('anyNone', 'detectHover')}
        </div>
      </div>

      <h2 id="detect-pointer" style={s.h2}>Detect Pointer</h2>
      <div style={s.repoLink}>
        <Interactive
          as="a"
          href="https://github.com/rafrex/detect-pointer"
          {...s.link}
        >https://github.com/rafrex/detect-pointer</Interactive>
      </div>
      <div style={s.code}>
        <div style={s.detects}>
          {testResult('fine', 'detectPointer')}
          {testResult('coarse', 'detectPointer')}
          {testResult('none', 'detectPointer')}
          {testResult('anyFine', 'detectPointer')}
          {testResult('anyCoarse', 'detectPointer')}
          {testResult('anyNone', 'detectPointer')}
        </div>
      </div>

      <h2 id="detect-touch-events" style={s.h2}>Detect Touch Events</h2>
      <div style={s.repoLink}>
        <Interactive
          as="a"
          href="https://github.com/rafrex/detect-touch-events"
          {...s.link}
        >https://github.com/rafrex/detect-touch-events</Interactive>
      </div>
      <div style={s.code}>
        <div style={s.detects}>
          {testResult('hasApi', 'detectTouchEvents')}
          {testResult('maxTouchPoints', 'detectTouchEvents')}
        </div>
      </div>

      <h2 id="detect-passive-events" style={s.h2}>Detect Passive Events</h2>
      <div style={s.repoLink}>
        <Interactive
          as="a"
          href="https://github.com/rafrex/detect-passive-events"
          {...s.link}
        >https://github.com/rafrex/detect-passive-events</Interactive>
      </div>
      <div style={s.code}>
        <div style={s.detects}>
          {testResult('hasSupport', 'detectPassiveEvents')}
        </div>
      </div>

      <div style={s.creditLink}>
        <Interactive
          as="a"
          href="http://www.rafaelpedicini.com"
          focusFromTab={{}}
          touchActive={{}}
          touchActiveTapOnly
          interactiveChild
          target="_blank"
          rel="noopener noreferrer"
        >Code and concept by <span {...s.creditLinkChildStyle}>Rafael Pedicini</span></Interactive>
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
