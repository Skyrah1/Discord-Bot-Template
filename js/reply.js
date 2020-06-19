/*
MIT License

Copyright (c) 2020 Skyrah1

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
*/

const commandLib = require("./command");

var botClient;
var message;
var messageString = "";

const validCommands = [];

validCommands.push(new commandLib.Command(
    "helloWorld",
    "A simple 'Hello World' command.",
    () => {
        messageString = "Hello World!\n";
        message.channel.send(messageString);
        return true;
    }
));

validCommands.push(new commandLib.Command(
    "testPingReply",
    "Do I see you?",
    () => {
        messageString = `I see you, ${message.author.toString()}.`;
        message.channel.send(messageString);
        return true;
    }
));

validCommands.push(new commandLib.Command(
    "help",
    "I mean...you're using it right now, so...",
    () => {
        let pm = "Here's the list of commands:\n";
        //pm += "```";
        for (let i in validCommands){
            pm += `\n**${validCommands[i].getKeyword()}** - ${validCommands[i].getDescription()}`;
        }
        //pm += "\n```";
        message.author.send(pm);
        messageString = "Alright, I've sent you the list of my commands.";
        message.channel.send(messageString);
        return true;
    }
));

function reply(prefix, client, msg) {
    message = msg;
    messageString = "";
    botClient = client;
    var validMessage = false;
    var commandKeyword = msg.content.replace(prefix, "")
        .split(" ")[0];
    var args = msg.content.replace(prefix, "")
        .replace(commandKeyword + " ", "")
        .split(" ");

    console.log(`Arguments: ${args}`);
    console.log(commandKeyword);
    console.log(args.toString());

    for (i = 0; i < validCommands.length && !validMessage; i++) {
        validMessage = validCommands[i].execute(commandKeyword, args);
    }

    if (validMessage) {
        console.log("----------------------------------------");
        console.log(messageString);
        console.log("----------------------------------------");
    }
    return validMessage;
}

function sendImage(string, image){
    message.channel.send(`${string}\n`, {
        files: [image]
    });
}



module.exports = {
    reply
};