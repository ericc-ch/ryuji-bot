# discord.js Guide

Source: https://discordjs.guide/voice

## Introduction

"Voice" refers to Discord bots being able to send audio in voice channels. This is supported in discord.js via [@discordjs/voiceopen in new window](https://github.com/discordjs/discord.js/tree/main/packages/voice), a standalone library made by the developers of discord.js. While you can use it with any Node.js Discord API library, this guide will focus on using it with discord.js.

## Installation

### Barebones

To add voice functionality to your discord.js bot, you will need the `@discordjs/voice` package, as well as one of the encryption packages listed below. For example:

```
npm install @discordjs/voice libsodium-wrappers
```

```
yarn add @discordjs/voice libsodium-wrappers
```

```
pnpm add @discordjs/voice libsodium-wrappers
```

```
bun add @discordjs/voice libsodium-wrappers
```

After this, you'll be able to play Ogg and WebM Opus files without any other dependencies. If you want to play audio from other sources, or want to improve performance, consider installing some of the extra dependencies listed below.

WARNING

This guide assumes you have installed at least one additional dependency – FFmpeg. More information on this can be found in the section below.

-   An Opus encoding library
    -   [`@discordjs/opus`open in new window](https://github.com/discordjs/opus) (best performance)
    -   [`opusscript`open in new window](https://github.com/abalabahaha/opusscript/)
-   FFmpeg – allows you to play a range of media (e.g. MP3s).
    -   [`ffmpeg`open in new window](https://ffmpeg.org/) - install and add to your system environment
    -   [`ffmpeg-static`open in new window](https://www.npmjs.com/package/ffmpeg-static) - to install FFmpeg via npm
-   Encryption packages
    -   [`sodium`open in new window](https://www.npmjs.com/package/sodium) (best performance)
    -   [`sodium-native`open in new window](https://www.npmjs.com/package/sodium-native)
    -   [`libsodium-wrappers`open in new window](https://www.npmjs.com/package/libsodium-wrappers)
    -   [`tweetnacl`open in new window](https://www.npmjs.com/package/tweetnacl)

TIP

Outside a development environment, it is recommended for you to use `@discordjs/opus` and `sodium` to improve performance and improve the stability of audio playback!

If you're struggling to install these dependencies, make sure you have build tools installed first. On Windows, this is as easy as running the following command!

```
npm install --global --production --add-python-to-path windows-build-tools
```

```
yarn global add --production --add-python-to-path windows-build-tools
```

```
pnpm add --global --production --add-python-to-path windows-build-tools
```

```
bun add --global --production --add-python-to-path windows-build-tools
```

## Debugging Dependencies

The library includes a helper function that helps you to find out which dependencies you've successfully installed. This information is also very helpful if you ever need to submit an issue on the `@discordjs/voice` issue tracker.

```
const { generateDependencyReport } = require('@discordjs/voice');

console.log(generateDependencyReport());

/*
--------------------------------------------------
Core Dependencies
- @discordjs/voice: 0.3.1
- prism-media: 1.2.9

Opus Libraries
- @discordjs/opus: 0.5.3
- opusscript: not found

Encryption Libraries
- sodium: 3.0.2
- libsodium-wrappers: not found
- tweetnacl: not found

FFmpeg
- version: 4.2.4-1ubuntu0.1
- libopus: yes
--------------------------------------------------
*/
```

1  
2  
3  
4  
5  
6  
7  
8  
9  
10  
11  
12  
13  
14  
15  
16  
17  
18  
19  
20  
21  
22  
23  
24  

-   **Core Dependencies**
    -   These are dependencies that should definitely be available.
-   **Opus Libraries**
    -   If you want to play audio from many different file types, or alter volume in real-time, you will need to have one of these.
-   **Encryption Libraries**
    -   You should have at least one encryption library installed to use `@discordjs/voice`.
-   **FFmpeg**
    -   If you want to play audio from many different file types, you will need to have FFmpeg installed.
    -   If `libopus` is enabled, you will be able to benefit from increased performance if real-time volume alteration is disabled.

---


# discord.js Guide

Source: https://discordjs.guide/voice/voice

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/voice/whats-new.html

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/voice/requesting-more-content

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/voice/whats-new

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/voice/voice/life-cycles

## 404

> How did we get here?

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/voice/voice/voice-connections

## 404

> That's a Four-Oh-Four.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/voice/voice/audio-player

## 404

> Looks like we've got some broken links.

[Take me home](/)

---


# discord.js Guide

Source: https://discordjs.guide/voice/voice/audio-resources

## 404

> How did we get here?

[Take me home](/)

---

