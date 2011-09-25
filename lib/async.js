var asyncJSON = require("async-json"),
	fs = require("fs"),
	path = require("path");

exports = module.exports = function (file_name, callback)
{
	path.exists(file_name, function (exists)
	{
		if (!exists)
		{
			callback(file_name+" does not seem to exist!");
		}
		else
		{
			fs.readFile(file_name, function (error, data)
			{
				if (!error)
				{
					try
					{
						var parsed = JSON.parse(data);
						asyncJSON.stringify(parsed, function (error3, stringed)
						{
							if (!error3)
							{
								callback(false, parsed, stringed);
							}
							else
							{
								callback(error3);
							}
						});
					}
					catch (error2)
					{
						callback(error2);
					}
				}
				else
				{
					callback(error);
				}
			});
		}
	});
};
