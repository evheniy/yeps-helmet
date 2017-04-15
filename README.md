# YEPS helmet

It helps you secure your YEPS apps by setting various HTTP headers

[![NPM](https://nodei.co/npm/yeps-sh.png)](https://npmjs.org/package/yeps-sh)

[![npm version](https://badge.fury.io/js/yeps-sh.svg)](https://badge.fury.io/js/yeps-sh)
[![Build Status](https://travis-ci.org/evheniy/yeps-sh.svg?branch=master)](https://travis-ci.org/evheniy/yeps-sh)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/yeps-sh/badge.svg?branch=master)](https://coveralls.io/github/evheniy/yeps-sh?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/yeps-sh/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/yeps-sh/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/yeps-sh)

[![Dependency Status](https://david-dm.org/evheniy/yeps-sh.svg)](https://david-dm.org/evheniy/yeps-sh)
[![devDependency Status](https://david-dm.org/evheniy/yeps-sh/dev-status.svg)](https://david-dm.org/evheniy/yeps-sh#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/yeps-sh)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/yeps-sh/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/yeps-sh.svg)](https://github.com/evheniy/yeps-sh/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/yeps-sh.svg)](https://github.com/evheniy/yeps-sh/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/yeps-sh.svg)](https://github.com/evheniy/yeps-sh/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/yeps-sh.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)


## How to install

    npm i -S yeps-sh
  

## How to use

    const App = require('yeps');
    const helmet = require('yeps-helmet');
    
    const app = new App();
    
    app.all([
        helmet();
    ]);

Or with options:

    app.all([
        helmet({...});
    ]);
    
See [helmet](https://github.com/helmetjs/helmet) documentation
    
#### [YEPS documentation](http://yeps.info/)