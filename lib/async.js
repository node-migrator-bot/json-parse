var fs = require("fs"),
	path = require("path");

exports = module.exports = function (file_name, cb)
{
	try
	{
		path.exists(file_name, function (exists)
		{
			if (!exists)
			{
				cb("could not find "+file_name, false);
			}
			else
			{
				fs.readFile(file_name, function (error, data)
				{
					if (!error || data.length > 0)
					{
						cb(false, JSON.parse(data));
					}
					else
					{
						cb(error, false);
					}
				});
			}
		});
	}
	catch (error)
	{
		throw new Error(error);
	}
};
