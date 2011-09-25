var http = require("http"),
	json = require("../"),
	test = json.sync("./test/test.json");

var server = http.createServer(function (req, res)
{
	var body = [], code, data;
	res.setHeader("Content-Type", "application/json");
	req.setEncoding("utf8");
	req.on("data", function (chunk)
	{
		body.push(chunk);
	});
	req.on("end", function ()
	{
		var bodyStr = body.join("");
		if (!bodyStr)
		{
			res.statusCode = 200;
			return res.end(JSON.stringify(test));
		}
		else
		{
			try
			{
				res.statusCode = 200;
				return res.end(JSON.stringify(JSON.parse(bodyStr).reverse()));
			}
			catch (error)
			{
				res.statusCode = 400;
				return res.end(JSON.stringify({error: error}));
			}
		}
	});
});

server.listen(3005);
