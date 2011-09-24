var fs = require("fs"),
	path = require("path");

exports = module.exports = function (file_name, cb)
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
				if (!error)
				{
					try
					{
						cb(false, JSON.parse(data));
					}
					catch (error)
					{
						cb(error, false);
					}
				}
				else
				{
					cb(error, false);
				}
			});
		}
	});
};
