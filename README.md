# YEPS helmet

It helps you secure your YEPS apps by setting various HTTP headers

[![NPM](https://nodei.co/npm/yeps-helmet.png)](https://npmjs.org/package/yeps-helmet)

[![npm version](https://badge.fury.io/js/yeps-helmet.svg)](https://badge.fury.io/js/yeps-helmet)
[![Build Status](https://travis-ci.org/evheniy/yeps-helmet.svg?branch=master)](https://travis-ci.org/evheniy/yeps-helmet)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/yeps-helmet/badge.svg?branch=master)](https://coveralls.io/github/evheniy/yeps-helmet?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/yeps-helmet/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/yeps-helmet/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/yeps-helmet)

[![Dependency Status](https://david-dm.org/evheniy/yeps-helmet.svg)](https://david-dm.org/evheniy/yeps-helmet)
[![devDependency Status](https://david-dm.org/evheniy/yeps-helmet/dev-status.svg)](https://david-dm.org/evheniy/yeps-helmet#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/yeps-helmet)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/yeps-helmet/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/yeps-helmet.svg)](https://github.com/evheniy/yeps-helmet/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/yeps-helmet.svg)](https://github.com/evheniy/yeps-helmet/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/yeps-helmet.svg)](https://github.com/evheniy/yeps-helmet/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/yeps-helmet.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)


## How to install

    npm i -S yeps-helmet
  

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