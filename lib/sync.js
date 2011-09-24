var fs = require("fs"),
	path = require("path");

exports = module.exports = function (file_name, callback)
{
	path.exists(file_name, function (exists)
	{
		if (!exists)
		{
			throw new Error(file_name+" does not seem to exist!");
		}
	});
	try
	{
		var data = fs.readFileSync(file_name),
			parsed = JSON.parse(data);
		return parsed;
	}
	catch (error)
	{
		throw new Error(file_name+" parsing error: "+error);
	}
};
