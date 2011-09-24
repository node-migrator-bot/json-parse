var json = require("../");

json.async("./test.json", function (error, parsed, stringed)
{
	if (!error)
	{
		console.log("found the file to work with!", stringed);
		for (var index in parsed)
		{
			var item = parsed[index];
			switch (typeof(item))
			{
				case "string":
					var item_type = "hey its a string";
				break;
				case "boolean":
					var item_type = "cool a boolean";
				break;
				case "number":
					var item_type = "wow numbers";
				break;
				default:
					var item_type = "some other crazy type not in the default test suite!";
				break;
			}
			console.log(item_type+": "+item);
		}
	}
	else
	{
		console.log("couldnt find a find to start with!");
	}
});

