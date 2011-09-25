//mostly based on node-jsonreq @ https://github.com/aseemk/node-jsonreq - also MIT licensed
//TODO: support POST fully (only works with GET requests as of this writing)
var asyncJSON = require("async-json"),
	http = require("http"),
	uri = require("url");

exports = module.exports = function (url, method, params, callback)
{
	if (typeof(method) == "function")
	{
		callback = method;
		method = "GET";
		params = null;
	}
	if (typeof(params) == "function")
	{
		callback = params;
		params = null;
		method = "GET";
	}
	url = uri.parse(url);
	var options = {
		host: url.hostname,
		port: url.port || 80,
		path: url.pathname + (url.search || ""),
		method: method,
		headers:
		{
			"Accept": "application/json"
		}
	};
	if (method == "POST")
	{
		options.headers["Content-Length"] = "chunked";
	}
	if (options.url == 443)
	{
		var http_request = https.request;
	}
	else
	{
		var http_request = http.request;
	}
	var request = http_request(options, function (response)
	{
		var code = response.statusCode;
		if (code >= 400)
		{
			callback("bad http status code", null, null, code);
		}
		var body = [];
		response.setEncoding("utf8");
		response.on("data", function (chunk)
		{
			body.push(chunk);
		});
		response.on("end", function ()
		{
			try
			{
				var data = body.join(""),
					parsed = JSON.parse(data);
				asyncJSON.stringify(parsed, function (error2, stringed)
				{
					if (!error2)
					{
						callback(null, parsed, stringed, code);
					}
					else
					{
						callback(error2, null, null, code);
					}
				});
			}
			catch (error)
			{
				callback(error, null, null, code);
			}
		});
	});
	request.on("error", function (error)
	{
		var code = error.statusCode;
		callback(error, null, null, code);
	});
	request.end(params);
};
