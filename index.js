#! /usr/bin/env node

import fs from "fs";

import { Command } from "commander";








const initProject = () => {
    try{
        fs.mkdirSync(".nigit")
        console.log("Initialized nigit repo");
    } catch (err) {
        if (err.code === "EEXIST") {
            console.log("A nigit repo already exists!");
        } else {
            console.log(err);
        }
    }

}


const status = () => {
    console.log("Status");
}

const add = () => {
    console.log("Add");
}

const commit = () => {
    console.log("Commit");
}







const program = new Command();

program.command('init').description('inits empty nigit repository').action(initProject);
program.command('status').description('shows status of nigit repository').action(status);
program.command('add').description('adds files to nigit repository').action(add);
program.command('commit').description('commits files to nigit repository').action(commit);



program.parse(process.argv);