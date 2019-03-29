const chalk = require('chalk');
const inquirer = require('inquirer');
const path = require('path');
const { copy, readFile, writeFile } = require('slimz');

function koa2(){
	const From = path.resolve(__dirname,'../temp/koa2');
	let To;
	inquirer
	  .prompt([
	    /* Pass your questions in here */
	      {
	        type: 'input',
	        name: 'name',
	        message: `${chalk.magenta(' Your project folder: ')}`,
	        default: 'koa2'
	      }
	   
	  ])
	  .then(answers => {
	     To = './'+answers.name;
        return copy(From,To).then(()=>{
            return {
            	fileData:readFile('./'+answers.name+'/package.json'),
            	name:answers.name
            }     	
         })
	  }).then(data=>{
	  	    data.fileData.then((file_data)=>{
	  		const newData=file_data.replace(/@sc\/mina/g,data.name);
	  		writeFile('./'+data.name+'/package.json',newData).then(()=>{
	  			console.log(`   Project ${chalk.blue.bold(data.name)} was created successfully!`)
	  		})
	  	})
        
	  }).catch(err=>{
	  	console.log(err)
	  })
}

module.exports={
	koa2
}