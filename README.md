Bubble
=========

Neatly construct nodejs console arguments as an object.

## Installation

  npm install bubble --save

## Usage

    > node source.js -h world -t -foo bar -z -b 32
        - will produce the following object as args in your script
           {
               h   : 'world',
               t   : true,
               foo : 'bar',
               z   : true,
               b   : 32
           }
       - integer and string parsing is maintained
       - use -option without post value to set it to true.

    var bubble = require('bubble').args;
    console.log(bubble);

## Release History

* 0.1.0 Initial release
* 0.1.1 Reflect readme with details