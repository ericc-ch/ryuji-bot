# discord.js Guide

Source: https://discordjs.guide/creating-your-bot

## Configuration files

Once you [add your bot to a server](/preparations/adding-your-bot-to-servers), the next step is to start coding and get it online! Let's start by creating a config file for your client token and a main file for your bot application.

As explained in the ["What is a token, anyway?"](/preparations/setting-up-a-bot-application#what-is-a-token-anyway) section, your token is essentially your bot's password, and you should protect it as best as possible. This can be done through a `config.json` file or by using environment variables.

Open your application in the [Discord Developer Portalopen in new window](https://discord.com/developers/applications) and go to the "Bot" page to copy your token.

## Using `config.json`

Storing data in a `config.json` file is a common way of keeping your sensitive values safe. Create a `config.json` file in your project directory and paste in your token. You can access your token inside other files by using `require()`.

```
{
	"token": "your-token-goes-here"
}
```

1  
2  
3  

```
const { token } = require('./config.json');

console.log(token);
```

1  
2  
3  

## Using environment variables

Environment variables are special values for your environment (e.g., terminal session, Docker container, or environment variable file). You can pass these values into your code's scope so that you can use them.

One way to pass in environment variables is via the command line interface. When starting your app, instead of `node index.js`, use `TOKEN=your-token-goes-here node index.js`. You can repeat this pattern to expose other values as well.

You can access the set values in your code via the `process.env` global variable, accessible in any file. Note that values passed this way will always be strings and that you might need to parse them to a number, if using them to do calculations.

```
A=123 B=456 DISCORD_TOKEN=your-token-goes-here node index.js
```

```
console.log(process.env.A);
console.log(process.env.B);
console.log(process.env.DISCORD_TOKEN);
```

1  
2  
3  

### Using dotenv

Another common approach is storing these values in a `.env` file. This spares you from always copying your token into the command line. Each line in a `.env` file should hold a `KEY=value` pair.

You can use the [`dotenv` packageopen in new window](https://www.npmjs.com/package/dotenv) for this. Once installed, require and use the package to load your `.env` file and attach the variables to `process.env`:

```
# dotenv is not necessary with Bun
# Bun reads .env files automatically
```

```
A=123
B=456
DISCORD_TOKEN=your-token-goes-here
```

1  
2  
3  

```
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.A);
console.log(process.env.B);
console.log(process.env.DISCORD_TOKEN);
```

1  
2  
3  
4  
5  
6  
7  

Online editors (Glitch, Heroku, Replit, etc.)

While we generally do not recommend using online editors as hosting solutions, but rather invest in a proper virtual private server, these services do offer ways to keep your credentials safe as well! Please see the respective service's documentation and help articles for more information on how to keep sensitive values safe:

-   Glitch: [Storing secrets in .envopen in new window](https://help.glitch.com/hc/articles/16287550167437)
-   Heroku: [Configuration variablesopen in new window](https://devcenter.heroku.com/articles/config-vars)
-   Replit: [Secrets and environment variablesopen in new window](https://docs.replit.com/programming-ide/workspace-features/secrets)

## Git and `.gitignore`

Git is a fantastic tool to keep track of your code changes and allows you to upload progress to services like [GitHubopen in new window](https://github.com/), [GitLabopen in new window](https://about.gitlab.com/), or [Bitbucketopen in new window](https://bitbucket.org/product). While this is super useful to share code with other developers, it also bears the risk of uploading your configuration files with sensitive values!

You can specify files that Git should ignore in its versioning systems with a `.gitignore` file. Create a `.gitignore` file in your project directory and add the names of the files and folders you want to ignore:

```
node_modules
.env
config.json
```

1  
2  
3  

TIP

Aside from keeping credentials safe, `node_modules` should be included here. Since this directory can be restored based on the entries in your `package.json` and `package-lock.json` files by running `npm install`, it does not need to be included in Git.

You can specify quite intricate patterns in `.gitignore` files, check out the [Git documentation on `.gitignore`open in new window](https://git-scm.com/docs/gitignore) for more information!

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/voice

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/whats-new.html

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/requesting-more-content

## 404

> That's a Four-Oh-Four.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/whats-new

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/preparations

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/preparations/setting-up-a-linter

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/preparations/setting-up-a-bot-application

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/preparations/adding-your-bot-to-servers

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/creating-your-bot

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/creating-your-bot/main-file

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/creating-your-bot/slash-commands

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/creating-your-bot/command-handling

## 404

> That's a Four-Oh-Four.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/creating-your-bot/command-deployment

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/creating-your-bot/event-handling

## 404

> That's a Four-Oh-Four.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/additional-features/cooldowns

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/additional-features/reloading-commands

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/slash-commands/response-methods

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/slash-commands/advanced-creation

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/slash-commands/parsing-options

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/slash-commands/permissions

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/slash-commands/autocomplete

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/slash-commands/deleting-commands

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/message-components/action-rows

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/message-components/buttons

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/message-components/select-menus

## 404

> That's a Four-Oh-Four.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/message-components/interactions

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/interactions/modals

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/interactions/context-menus

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/faq

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/audit-logs

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/canvas

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/collectors

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/embeds

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/errors

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/formatters

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/intents

## 404

> That's a Four-Oh-Four.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/partials

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/permissions

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/permissions-extended

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/reactions

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/threads

## 404

> That's a Four-Oh-Four.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/popular-topics/webhooks

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/miscellaneous/cache-customization

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/miscellaneous/useful-packages

## 404

> That's a Four-Oh-Four.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/sequelize

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/sequelize/currency

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/keyv

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/sharding

## 404

> That's a Four-Oh-Four.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/sharding/additional-information

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/sharding/extended

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/oauth2

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/improving-dev-environment/pm2

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/improving-dev-environment/package-json-scripts

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/additional-info/notation

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/additional-info/es6-syntax

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/additional-info/collections

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/additional-info/async-await

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/additional-info/rest-api

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/additional-info/changes-in-v13

## 404

> There's nothing here.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/creating-your-bot/additional-info/changes-in-v14

## 404

> That's a Four-Oh-Four.

[Take me home](/)

---

