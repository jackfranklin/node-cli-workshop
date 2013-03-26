## Project One

You can create any arbitary JS script and run it through Node.js easily. Create a new file, `test.js`, and just add:

```javascript
console.log("Hello World");
```

Now save that file, head back to your command line, and run:

```sh
$ node test.js
```

You'll see `Hello World` returned. This is the base on which all our scripts will be built upon.

Now change the file to read:

```javascript
console.log(process.argv);
```

Then run it again. You'll see:

```
[ 'node',
  '/Users/JackFranklin/Dropbox/Sites/node_cli_workshop/project_one/test.js' ]
```

Now run it with some arbitary arguments:

```
$ node test.js jack
```

Now you'll see:

```
[ 'node',
  '/Users/JackFranklin/Dropbox/Sites/node_cli_workshop/project_one/test.js',
  'jack' ]
```

So any user arguments passed in can be got at through `process.argv`, ignoring the first two arguments.

Running `node test.js` gets boring. Instead, we can tell the shell how to execute the file, and then we can run `./test.js` instead.

Add this line as the __very first line__ in your JS file:

```
#! /usr/bin/env node
```

You might need to make the file executable:

```
$ chmod +x test.js
```

And now you can run

```
$ ./test.js
```

If we want to deal with user arguments, we can easily get rid of the first two, which we don't care about:

```javascript
var userArgs = process.argv.slice(2);
```

```javascript
#! /usr/bin/env node

var args = process.argv.slice(2);
console.log(args);
```

```sh
$ ./test.js foo bar
[ 'foo', 'bar' ]
```


## Project Two

The power of Node is in its packages - installed with npm.

Lets kick off a new project, which we'll build as an npm module.

```
$ mkdir project_two && cd project_two
```

```
$ npm init
```

Once you answer all the questions, you'll be left with a good base for building on in the shape of a `package.json` file. We need to add to it. Make it look like this:

```javascript
{
  "name": "project_two",
  "version": "0.0.0",
  "description": "our test project",
  "preferGlobal": "true",
  "bin": {
    "project_two": "app.js"
  },
  "author": "Jack Franklin",
  "license": "MIT"
}
```

Create a sample app.js file:

```javascript
#! /usr/bin/env node
console.log("hello world");
```

You can install local npm modules by running:

```
$ npm link
```

Now you should be able to run:

```
$ project_two
hello world
```

You've just made your first npm command line tool. The only way is up!

Lets make an app that lets us run `project_two file_name` and list all files in the current directory that match `file_name`.

```javascript
#! /usr/bin/env node
var userArgs = process.argv.slice(2);
var searchParam = userArgs[0];

var exec = require('child_process').exec;

var child = exec('ls -a | grep ' + searchParam, function(err, stdout, stderr) {
  if (err) throw err;
  console.log(stdout);
});
```

```sh
$ project_two package
package.json
```

## Project Three

