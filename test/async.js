var json = require("../");
json.async("./test.json", function (error, data)
{
	if (!error)
	{
		for (var index in data)
		{
			console.log(data[index]);
		}
	}
	else
	{
		console.log("test.json doesnt exist!");
	}
});
