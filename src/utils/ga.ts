import ReactGA from 'react-ga';

export const initGA = (trackingID) => {
  ReactGA.initialize(trackingID, { gaOptions: { siteSpeedSampleRate: 100 } });
};

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = ({ category, action, label, value }) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};
