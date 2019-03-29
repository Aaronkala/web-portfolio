const analytics = action => {
  const dataLayer = window.dataLayer || [];
  const data = {};
  data.event = action.event;
  if (action.payload) {
    data.payload = action.payload;
  }
  dataLayer.push(data);
  return dataLayer;
};

export default analytics;
