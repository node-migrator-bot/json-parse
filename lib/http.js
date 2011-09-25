//mostly based on node-jsonreq @ https://github.com/aseemk/node-jsonreq - also MIT licensed
//TODO: support POST fully (only works with GET requests as of this writing)
var asyncJSON = require("async-json"),
	http = require("http"),
	parse = require("url").parse;

exports = module.exports = function (url, method, params, callback)
{
	url = parse(url);
	var options = {
		host: url.hostname,
		port: url.port || 80,
		path: url.pathname + (url.search || ""),
		method: method,
		headers:
		{
			"Accept": "application/json",
		},
	};
	var request = http.request(options, function (response)
	{
		var code = response.statusCode;
		if (code >= 400)
		{
			callback("bad http status code", null, null, code);
		}
		var body = new Array();
		response.setEncoding("utf8");
		response.on("data", function (chunk)
		{
			body.push(chunk);
		});
		response.on("end", function ()
		{
			try
			{
				var parsed = JSON.parse(body.join(""));
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
	request.end();
};
