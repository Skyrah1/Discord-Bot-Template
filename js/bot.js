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

const readline = require("readline-sync");
const Discord = require("discord.js");
const reply = require("./reply");
const client = new Discord.Client();

const token = readline.question("Please enter your bot token: ", {
    hideEchoBack: true,
});

function errorMessage(msg){
    msg.channel.send("???");
}

client.on("ready", () => {
    client.user.setStatus("available");
    client.user.setPresence({
        game: {
            type: "PLAYING",
            name: `with my creator's feelings`
        }
    });
    console.log(`${client.user.tag} is online!`);
});

client.on("message", msg => {
    let prefix = "!bot ";
    var validMessage = true;
    if (msg.content.startsWith(prefix)){
        validMessage = reply.reply(prefix, client, msg);
        if (validMessage){
            console.log("Message sent!");
        }
    }
    if (!validMessage){
        errorMessage(msg);
    }
});

client.login(token);