---
permalink: /mods/strive.html
---
# Guilty Gear Strive Information
Mod link: [github.com/TheLettuceClub/StriveSAMMI-Release](https://github.com/TheLettuceClub/StriveSAMMI-Release)

Extension link: [github.com/Krackatoa/STRIVE-x-SAMMI](https://github.com/Krackatoa/STRIVE-x-SAMMI/releases)

## How to use this mod with SAMMI
1. Download and install the mod from the mod link above.
2. Download and install SAMMI from [here](https://sammi.solutions)
3. Download the file "GGST.x.SAMMI.1_4.zip" from the extension link above.
    * Extract it anywhere.
4. Open SAMMI, then click "Install an extension". Find the sef you just downloaded.
5. From the same menu, click "Open in a browser"
    * Make sure "GGST x SAMMI" appears as one of the extensions listed.
6. Design your funny stream events in SAMMI
    * Consult SAMMI documentation and [Krackatoa's exellent tutorial](https://www.youtube.com/watch?v=Jdt871b644o).
7. Profit.

## Implementation-Specific notes:
* This mod uses UE4SS to inject into the game. Other common mods like Sevoii's frame viewer use an incompatible version of it, so you can't use both at one, unfortunately.
    * I've seen one person get both working at the same time, so try it out.
* The Arcade version of Strive had debug symbols accidentally shipped with it, so I can see function names and data structure offsets and then compare with the current version to find correct function signatures and offsets to use.
    * More detail: [here](https://docs.google.com/document/d/19SLtZE39rVosIQEIUAlRiTOn6MAm2D0ayBqbDO22aS0/)
* To prevent cheating, every event is delayed internally by 20 frames.
    * To prevent bypassing of this, the mod is closed-source. If you'd like to know more, contact me directly.
