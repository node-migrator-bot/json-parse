var json = require("../");

var parsed = json.sync("./test/test.json");
if (!parsed)
{
	console.log("test.json could not be parsed!");	
}
else
{
	console.log("sync: found the file to work with!", JSON.stringify(parsed));
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
