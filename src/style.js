export default {
  root: {
    backgroundColor: '#F0F0F0',
    maxWidth: '400px',
    padding: '10px 15px 25px',
    margin: '0 auto',
    fontFamily: 'helvetica, sans-serif',
    fontWeight: '300',
    fontSize: '16px',
    letterSpacing: '0.015em',
    WebkitTextSizeAdjust: 'none',
    MozTextSizeAdjust: 'none',
    msTextSizeAdjust: 'none',
    textSizeAdjust: 'none',
  },
  h1: {
    marginBottom: '-1px',
    fontSize: '24px',
  },
  h2: {
    margin: '30px 0 -1px',
    fontSize: '20px',
  },
  repoLink: {
    marginLeft: '1px',
    color: 'rgb(128, 128, 128)',
    fontSize: '14px',
  },
  creditLink: {
    margin: '20px 0 0 1px',
    fontSize: '14px',
  },
  code: {
    backgroundColor: '#E0E0E0',
    fontFamily: 'monospace',
    fontSize: '15px',
    padding: '1px 5px 1px 5px',
    borderRadius: '3px',
    margin: '8px 0',
  },
  detects: {
    margin: '8px 11px 10px',
  },
  testResult: {
    margin: '2px 0',
  },
  testResultColor: (value) => {
    switch (value) {
      case 'true':
        return 'rgb(0, 160, 0)';
      case 'false':
        return 'rgba(216, 0, 0, .75)';
      case 'undefined':
        return 'rgba(128, 128, 128, .75)';
      default:
        return 'rgba(0, 0, 208, .75)';
    }
  },
};
