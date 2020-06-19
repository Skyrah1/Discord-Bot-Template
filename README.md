# Discord Bot Template

A template for a discord bot using Node.js.

## Overview

This template contains 3 basic example commands, which can be executed on the Discord server it's running on by entering the following into chat:

> !bot [command]

The template comes with 4 basic example commands:
- **helloWorld** (self explanatory)
- **testPingReply** (used to confirm that the bot can ping users)
- **cat** (displays a picture of a cat from the internet, along with the image source)
- **help** (privately messages the user *the entire list of commands* it's capable of responding to)

This template stores a list of *Command* objects in a list during run-time, with each object containing:
- a name (used as both an identifier and what a user would include in their Discord message)
- a description of the command (displayed upon entering the "help" command in Discord)
- a function (executed when the command is entered by a user on Discord, **must return true**. <small>It will still technically work if it doesn't return anything, but the bot will also send the error message for unknown commands to the server</small>)

The format might take some getting used to and it's not exactly the most space-efficient way of doing things, but it does means new commands automatically get added to the **help** list.

## Adding custom commands

In the *reply.js* file, you can add a custom command to your bot by pushing a new *Command* into the *validCommands* list in:

> validCommands.push(new commandLib.Command([name], [description], [function]));

## Node dependencies

- readline-sync
- discord.js

To install these dependencies, go to the project folder and run the following command in your terminal for each dependency:

> npm install [dependency-name]

## Starting up the bot

To start up the bot on your machine, type in your terminal:

> node js/bot.js

This will prompt you to enter your bot token (NOT YOUR USER TOKEN) into the terminal. This token can be found by going to the [Discord Development Portal](https://discord.com/developers/applications), clicking on your bot (or creating one if you don't have one yet), then going to the Bot tab in the Settings menu.

If the token is valid and you're connected to the internet, your bot should be up and running on your Discord server.
