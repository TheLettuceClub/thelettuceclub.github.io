---
permalink: /mods/index.html
---
# Information about my State-Exporting/Live Content mods
I've created four mods for my favorite fighting games that export the internal state of the game in near-real time over a WebSockets connection.

If that doesn't make sense to you, imagine you're watching a Football game on TV. As soon as a player scores a touchdown, there's celebratory on-screen graphics and maybe a headshot of the player that did it. My program allows others to build a system that **automates** the process of triggering graphics and things like that based on events in-game.

This page serves to centralize some high-level technical information I've had in other documents.

## General information:
* How is this possible?
    * A: By hooking in-game function calls, taking their parameters, slurping out their pointed datas and then packaging it up as a JSON message and sending it out.
* How is the hooking done?
    * A: I'm putting a (implementation-specific) dll in the path of the game such that my code is loaded at runtime. I then use a library called [Safetyhook](https://github.com/cursey/safetyhook) to insert detours into my own code.
* How did you find which functions to hook?
    * A: Trial and error, mostly. This varies from game to game, so it is covered more on those pages, linked below.
* How do you know what data you're reading?:
    * A: Again, trial and error. This also varies greatly from game to game.
* How do I install the mod!?
    * A: instructions are provided in the Readme's of the repositories and included in each release ZIP file.
* I've installed the mod. Now what?
    * A: Well, you need another piece of software to read the data and do stuff with it. This project generally targets a piece of streamer-assistant software called [SAMMI](https://sammi.solutions). To use SAMMI with one of my mods, you should follow the instructions on that mod's sub-page here.
* Can I use something other than SAMMI?:
    * A: Of course! Any software that can connect to a WebSockets server and is performant enough to read a 60 Hz data stream will totally work!
* I have a question/problem! How can I get support?
    * A: [https://discord.gg/Qw8N7QcVRw](https://discord.gg/Qw8N7QcVRw)

## Game-specific pages:
* Under Night In-Birth 2: [here](/mods/UNI2.html)
* Guilty Gear Strive: [here](/mods/strive.html)
* BlazBlue: Central Fiction: [here](/mods/BBCF.html)
* Guilty Gear XX: Accent Core +R: [here](/mods/ACPR.html)

## I want to create a mod for another game!
Great! I have a long, rambling write-up on just that topic. It's gonna be ported to here eventually, but for now it's [here](https://docs.google.com/document/d/1ZIl4QGFErTk0MPerKNCA9ZrWpoTNMppEGsb9bYZIj00/).