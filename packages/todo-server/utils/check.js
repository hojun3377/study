const check = (...checks) => {
  let checkContext = {
    closeCheck: false,
  };

  for (const c of checks) {
    if (checkContext.closeCheck === true) break;

    checkContext = c(checkContext);
  }

  return checkContext;
};

const argument = (argv, callback) => {
  return checkContext => {
    const isOneArg = argv.length === 3 ? true : false;
    const isNum = isOneArg ? Number.parseInt(argv[2]) : false;

    if (isOneArg === false || isNum === false) {
      callback('Require one number argument');

      return {
        ...checkContext,
        argumentCheck: false,
      };
    }

    callback();

    return {
      port: argv[2],
      closeCheck: true,
    };
  };
};

export default check;
export { argument };
