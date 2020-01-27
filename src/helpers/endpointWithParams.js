export const endpointWithParams = (endpoint, params) => {
  return Object.keys(params).reduce((endpoint, key) => {
    return endpoint.replace(`:${key}`, params[key]);
  }, endpoint);
};
