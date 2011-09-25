var json = require("../"),
	test = json.sync("./test/test.json");

json.http("http://127.0.0.1:3005/", function (error, parsed, stringed, code)
{
	if (!error && code == 200)
	{
		console.log("http: found the url to work with!", stringed, code);
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
		console.log(error, code);
	}
});

/*json.http("http://127.0.0.1:3005/", "POST", "data=data&data2=data2", function (error, parsed, stringed, code)
{
	if (!error && code == 200)
	{
		console.log("http: found the url to work with!", stringed, code);
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
		console.log(error, code);
	}
});*/
