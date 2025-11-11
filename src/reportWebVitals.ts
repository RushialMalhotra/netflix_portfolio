import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }

  // --- Added traffic tracking logic (safe, non-blocking) ---
  try {
    fetch('https://<your-datocms-endpoint>/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: window.location.pathname,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      }),
      keepalive: true,
    }).catch(() => {}); // silent fail-safe
  } catch {
    // ignored to avoid breaking render
  }
};

export default reportWebVitals;
