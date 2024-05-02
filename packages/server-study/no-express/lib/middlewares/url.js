const url = () => {
  return (req, reqContext) => ({
    ...reqContext,
    url: new URL(req.url, `http://${req.headers.host}`),
  });
};

export default url;
