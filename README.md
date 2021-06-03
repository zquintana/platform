Suitability Score Concept
=========================

[![CircleCI](https://circleci.com/gh/zquintana/platform/tree/master.svg?style=svg))](https://circleci.com/gh/zquintana/platform/tree/master)

Takes in a set of names and addresses to determine their suitability score.

## Requirements

- Node 12.10 (see [`.nvm.rc`][1]);

## Getting Started

To start the project run `npm install`.

## How to use this.

After installing the dependencies with `npm install` you will then be able to 
exploe the application with the following cli command.

`node cli.js --help`

The command outputs instructions on how it's used.

## Bin scripts

A few scripts have been provided in the bin directly for convenience in scaffolding
a meaningful dev/test environment. You can use this for generating the expected
input files.

## Input files

This application accepts 2 input files, one for driver names and the other for 
addresses. Those files are newline seperated lists of their data type.

[1]: .nvmrc
