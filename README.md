## About

Simple module that parses a given JSON file. At the moment it only supports async, but I plan on expanding it to not only support async + sync for local JSON, but HTTP requests and maybe even streams (much like twitter's) for remote JSON :)


## Install

You can install this through npm:

    $ npm install json-parse


## Basic Use

Async:

    var json = require("json-parse");
    json.async("./test.json", function (error, data)
    {
      if (!error)
      {
        console.log(data.something_from_test_dot_json);
      }
      else
      {
        console.log("test.json doesnt exist!");
      }
    });


## License

Copyright 2011, do whatever you want, just dont sue me. If you want a more elaborate answer, look at the FreeBSD / MIT styled licenses.
