import ReactGA from 'react-ga';

export const initGA = (trackingID: string) => {
  ReactGA.initialize(trackingID, { gaOptions: { siteSpeedSampleRate: 100 } });
};

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = ({ category, action, label, value }: any) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};
