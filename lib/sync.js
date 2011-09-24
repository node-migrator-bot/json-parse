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
			try
			{
				var data = JSON.parse(fs.readFileSync(file_name));
				cb(false, data);
			}
			catch (error)
			{
				cb(error, false);
			}
		}
	});
};
