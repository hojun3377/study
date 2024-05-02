const router = (...routes) => {
  return (req, reqContext) => {
    for (const route of routes) {
      if (route.pathname !== reqContext.url.pathname) continue;
      if (route.method !== reqContext.method) continue;

      const { headers, body } = route.controller(req, reqContext);

      return {
        ...reqContext,
        statusCode: 200,
        statusMessage: 'OK',
        responseHeaders: headers,
        responseBody: body,
        closeConnection: true,
      };
    }

    return {
      ...reqContext,
      statusCode: 404,
      statusMessage: 'Not Found',
      responseBody: 'Not Found',
    };
  };
};

export default router;
