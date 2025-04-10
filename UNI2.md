---
permalink: /mods/UNI2.html
---
# Under Night In-Birth 2 Information
Mod link: [github.com/TheLettuceClub/UNI2xSAMMI-Release](github.com/TheLettuceClub/UNI2xSAMMI-Release)

Extension link: [github.com/Krackatoa/UNI2-x-SAMMI/](https://github.com/Krackatoa/UNI2-x-SAMMI/)

## How to use this mod with SAMMI
1. Download and install the mod from the mod link above.
2. Download and install SAMMI from [here](https://sammi.solutions)
3. Download the file "UNI2 x SAMMI.sef" from the extension link above.
4. Open SAMMI, then click "Install an extension". Find the sef you just downloaded.
5. From the same menu, click "Open in a browser"
    * Make sure "UNI2 x SAMMI" appears as one of the extensions listed.
6. Design your funny stream events in SAMMI
    * Consult SAMMI documentation and [Krackatoa's exellent tutorial](https://www.youtube.com/watch?v=Jdt871b644o).
7. Profit.

## Implementation-Specific notes:
* I mostly used Cheat Engine to find the data I export. In the course of that I figured out that the game uses at least three global data structures to hold all the data I need.
    * This means that their offset in game memory is always static, so I don't need to find functions that point to them to have access.
    * I found the hooked functions by using Cheat Engine's "find what writes to this address" feature to find where in code values I cared about were changed.
* To prevent cheating, every event is delayed internally by 20 frames.
    * To prevent bypassing of this, the mod is closed-source. If you'd like to know more, contact me directly.
