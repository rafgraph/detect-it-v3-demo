import React from 'react';
import { render } from 'react-dom';
import detectIt from 'detect-it';
import 'current-input';
import styles from './styles/styles';

function App() {
  function toString(item) {
    return item === undefined ? 'undefined' : item.toString();
  }

  function testResult(item, prefix) {
    const value = toString(prefix ? detectIt.state[prefix][item] : detectIt[item]);
    const color = styles.testResultColor(value);
    return <div style={styles.testResult}>{item}: <span style={{ color }}>{value}</span></div>;
  }

  return (
    <div style={styles.app}>
      <h1 id="detect-it" style={styles.h1}>Detect It &#8212; Live Detection Test</h1>
      <div style={styles.repoLink}><a href="https://github.com/rafrex/detect-it" target="_blank">https://github.com/rafrex/detect-it</a></div>
      <div style={styles.code}>
        <div style={styles.detects}>
          {testResult('deviceType')}
          {testResult('passiveEvents')}
          {testResult('hasTouchEventsApi')}
          {testResult('hasPointerEventsApi')}
          {testResult('hasTouch')}
          {testResult('maxTouchPoints')}
          {testResult('primaryHover')}
          {testResult('primaryPointer')}
        </div>
      </div>


      <h2 id="detect-hover" style={styles.h2}>Detect Hover</h2>
      <div style={styles.repoLink}><a href="https://github.com/rafrex/detect-hover" target="_blank">https://github.com/rafrex/detect-hover</a></div>
      <div style={styles.code}>
        <div style={styles.detects}>
          {testResult('hover', 'detectHover')}
          {testResult('none', 'detectHover')}
          {testResult('anyHover', 'detectHover')}
          {testResult('anyNone', 'detectHover')}
        </div>
      </div>

      <h2 id="detect-pointer" style={styles.h2}>Detect Pointer</h2>
      <div style={styles.repoLink}><a href="https://github.com/rafrex/detect-pointer" target="_blank">https://github.com/rafrex/detect-pointer</a></div>
      <div style={styles.code}>
        <div style={styles.detects}>
          {testResult('fine', 'detectPointer')}
          {testResult('coarse', 'detectPointer')}
          {testResult('none', 'detectPointer')}
          {testResult('anyFine', 'detectPointer')}
          {testResult('anyCoarse', 'detectPointer')}
          {testResult('anyNone', 'detectPointer')}
        </div>
      </div>

      <h2 id="detect-touch-events" style={styles.h2}>Detect Touch Events</h2>
      <div style={styles.repoLink}><a href="https://github.com/rafrex/detect-touch-events" target="_blank">https://github.com/rafrex/detect-touch-events</a></div>
      <div style={styles.code}>
        <div style={styles.detects}>
          {testResult('hasApi', 'detectTouchEvents')}
          {testResult('maxTouchPoints', 'detectTouchEvents')}
        </div>
      </div>

      <h2 id="detect-pointer-events" style={styles.h2}>Detect Pointer Events</h2>
      <div style={styles.repoLink}><a className="test" href="https://github.com/rafrex/detect-pointer-events" target="_blank">https://github.com/rafrex/detect-pointer-events</a></div>
      <div style={styles.code}>
        <div style={styles.detects}>
          {testResult('hasApi', 'detectPointerEvents')}
          {testResult('requiresPrefix', 'detectPointerEvents')}
          {testResult('hasTouch', 'detectPointerEvents')}
          {testResult('maxTouchPoints', 'detectPointerEvents')}
        </div>
      </div>

      <h2 id="detect-passive-events" style={styles.h2}>Detect Passive Events</h2>
      <div style={styles.repoLink}><a className="test" href="https://github.com/rafrex/detect-passive-events" target="_blank">https://github.com/rafrex/detect-passive-events</a></div>
      <div style={styles.code}>
        <div style={styles.detects}>
          {testResult('hasSupport', 'detectPassiveEvents')}
        </div>
      </div>

      <div style={styles.creditLink}><a className="extended-link" href="http://www.rafaelpedicini.com" target="_blank">Code and concept by <span>Rafael Pedicini</span></a></div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
