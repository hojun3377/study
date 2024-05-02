const get = (pathname, controller) => {
  if (typeof controller !== 'function')
    throw new Error(
      'The get() HTTP method needs a controller to work as expected'
    );

  if (typeof pathname !== 'string')
    throw new Error(
      'The get() HTTP method needs a pathname to work as expected'
    );

  return { method: 'GET', pathname, controller };
};

export default get;
