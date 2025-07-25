const url = require("url");
const querystring = require("querystring");

function parseUrl(fullUrl) {
  const parsedUrl = url.parse(fullUrl);
  const query = querystring.parse(parsedUrl.query);

  return {
    hostname: parsedUrl.hostname,
    pathname: parsedUrl.pathname,
    query: query,
  };
}

module.exports = parseUrl;
