## About

Simple module that parses a given JSON file.


## Install

You can install this through npm:

    $ npm install json-parse


## Usage & Functions demo (see test/ for more detailed running demos)

    //require the library
    var json = require("json-parse");

    //sync version
    var sync = json.sync("./test.json");
    console.log(sync.some_var);
    console.log(JSON.stringify(sync));

    //async version
    json.async("./test.json", function (error, parsed)
    {
      console.log(parsed.some_var);
    });

    //http version
    json.http("http://some.example.site.com/test.json", function (error, parsed)
    {
      console.log(parsed.some_var);
    });


## TODO

    1) HTTP request / remote JSON method started with basic GET support, please fork and hack in some POST, etc support!
    2) Streaming / Long polling / "COMET" styled HTTP requests will come after (at minimum) POST is supported (see above entry)


## License (MIT)

Copyright (c) 2011 muted87

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
