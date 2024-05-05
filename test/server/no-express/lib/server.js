import http from 'http';

const createServer = (...middlewares) => {
  return http.createServer(async (req, res) => {
    let requestContext = {
      method: req.method,
      closeConnection: false,
    };

    for (const middleware of middlewares) {
      if (requestContext.closeConnection === true) break;

      requestContext = await middleware(req, requestContext);
    }

    res.writeHead(
      requestContext.statusCode,
      requestContext.statusMessage,
      requestContext.responseHeaders
    );

    if (requestContext.responseBody != null) {
      res.end(requestContext.responseBody);
      return;
    }

    res.end();
  });
};

export { createServer };
