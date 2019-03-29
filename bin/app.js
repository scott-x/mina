#!/usr/bin/env node
'use strict'

var chalk = require('chalk');
var inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
      {
        type: 'rawlist',
        name: 'type',
        message: `${chalk.magenta(' Choose your task: ')}`,
        choices: ['koa2','express'],
        default: 'koa2'
      }
   
  ])
  .then(answers => {
     switch (answers.type){
        case 'koa2':
           require('./task').koa2()
           break;
        case "express":
            //task2
           console.log('express') 
           break;      
     }

  }).catch(err=>{
    console.log(err)
  });
