
const spellsJSON = `[
    {
        "name": "Abi-Dalzim's Horrid Wilting",
        "desc": "<p>You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one.</p><p>Nonmagical plants in the area that aren't creatures, such as trees and shrubs, wither and die instantly.</p>",
        "page": "EEPC 15, XGE 150",
        "range": "150 feet",
        "components": "V, S, M",
        "material": "a bit of sponge",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 8,
        "school": "necromancy",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Absorb Elements",
        "desc": "<p>The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
        "page": "EEPC 15, XGE 150",
        "range": "Self",
        "components": "S",
        "ritual": false,
        "duration": "1 round",
        "concentration": false,
        "casting_time": "1 reaction, which you take when you take acid, cold, fire, lightning, or thunder damage",
        "level": 1,
        "school": "abjuration",
        "classes": [
            "druids",
            "rangers",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Acid Splash",
        "desc": "<p>You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.</p><p>This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>",
        "page": "PHB 211",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "conjuration",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Aganazzar's Scorcher",
        "desc": "<p>A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher. the damage increases by 1d8 for each slot level above 2nd.",
        "page": "EEPC 15, XGE 150",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a red dragon's scale",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Aid",
        "desc": "<p>Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.",
        "page": "PHB 211",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a tiny strip of white cloth",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "abjuration",
        "classes": [
            "clerics",
            "paladins"
        ]
    },
    {
        "name": "Alarm",
        "desc": "<p>You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.</p><p>A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.</p><p>An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.</p>",
        "page": "PHB 211",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a tiny bell and a piece of fine silver wire",
        "ritual": true,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 1,
        "school": "abjuration",
        "classes": [
            "rangers",
            "wizards"
        ]
    },
    {
        "name": "Alter Self",
        "desc": "<p>You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.</p><p><b>Aquatic Adaptation.</b> You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.</p><p><b>Change Appearance.</b> You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.</p><p><b>Natural Weapons.</b> You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.</p>",
        "page": "PHB 211",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Animal Friendship",
        "desc": "<p>This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spells ends.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.",
        "page": "PHB 212",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a morsel of food",
        "ritual": false,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "enchantment",
        "classes": [
            "bards",
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Animal Messenger",
        "desc": "<p>By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as \\\"a man or woman dressed in the uniform of the town guard\\\" or \\\"a red-haired dwarf wearing a pointed hat.\\\" You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals.</p><p>When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell.</p>",
        "higher_level": "If you cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd.",
        "page": "PHB 212",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a morsel of food",
        "ritual": true,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "enchantment",
        "classes": [
            "bards",
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Animal Shapes",
        "desc": "<p>Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms.</p><p>The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells.</p><p>The target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment.</p>",
        "page": "PHB 212",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 24 hours",
        "concentration": true,
        "casting_time": "1 action",
        "level": 8,
        "school": "transmutation",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Animate Dead",
        "desc": "<p>This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature's game statistics).</p><p>On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.</p><p>The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones.",
        "page": "PHB 212",
        "range": "10 feet",
        "components": "V, S, M",
        "material": "a drop of blood, a piece of flesh, and a pinch of bone dust",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 3,
        "school": "necromancy",
        "classes": [
            "clerics",
            "wizards"
        ]
    },
    {
        "name": "Animate Objects",
        "desc": "<p>Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points.</p><p>As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.</p><h4>ANIMATED OBJECT STATISTICS</h4><table><tr><th>Size</th><th>HP</th><th>AC</th><th>Attack</th><th>Str</th><th>Dex</th></tr><tr><td>Tiny</td><td>20</td><td>18</td><td>+8 to hit, 1d4 + 4 damage</td><td>4</td><td>18</td></tr><tr><td>Small</td><td>25</td><td>16</td><td>+6 to hit, 1d8 + 2 damage</td><td>8</td><td>14</td></tr><tr><td>Medium</td><td>40</td><td>13</td><td>+5 to hit, 2d6 + 1 damage</td><td>10</td><td>12</td></tr><tr><td>Large</td><td>50</td><td>10</td><td>+6 to hit, 2d10 + 2 damage</td><td>14</td><td>10</td></tr><tr><td>Huge</td><td>80</td><td>10</td><td>+8 to hit, 2d12 + 4 damage</td><td>18</td><td>6</td></tr></table><p>An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.</p><p>If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form.</p>",
        "higher_level": "If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th.",
        "page": "PHB 213",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "transmutation",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Antilife Shell",
        "desc": "<p>A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration.</p><p>The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier.</p><p>If you move so that an affected creature is forced to pass through the barrier, the spell ends.</p>",
        "page": "PHB 213",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "abjuration",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Antimagic Field",
        "desc": "<p>A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you.</p><p>Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration.</p><p><b>Targeted Effects.</b> Spells and other magical effects, such as <i>magic missile</i> and <i>charm person</i>, that target a creature or an object in the sphere have no effect on that target.</p><p><b>Areas of Magic.</b> The area of another spell or magical effect, such as <i>fireball</i>, can't extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a <i>wall of fire</i> are suppressed within the sphere, creating a gap in the wall if the overlap is large enough.</p><p><b>Spells.</b> Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it.</p><p><b>Magic Items.</b> The properties and powers of magic items are suppressed in the sphere. For example, a <i>+1 longsword</i> in the sphere functions as a nonmagical longsword.</p><p>A magic weapon's properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits.</p><p><b>Magical Travel.</b> Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the <i>rope trick</i> spell, temporarily closes while in the sphere.</p><p><b>Creatures and Objects.</b> A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere.</p><p><b>Dispel Magic.</b> Spells and magical effects such as <i>dispel magic</i> have no effect on the sphere. Likewise, the spheres created by different <i>antimagic field</i> spells don't nullify each other.</p>",
        "page": "PHB 213",
        "range": "Self",
        "components": "V, S, M",
        "material": "a pinch of powdered iron or iron filings",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 8,
        "school": "abjuration",
        "classes": [
            "clerics",
            "wizards"
        ]
    },
    {
        "name": "Antipathy/Sympathy",
        "desc": "<p>This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect.</p><p><b>Antipathy.</b> The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 60 feet of it. While frightened by the target, the creature must use its movement to move to the nearest safe spot from which it can't see the target. If the creature moves more than 60 feet from the target and can't see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves within 60 feet of it.</p><p><b>Sympathy.</b> The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it can't willingly move away from the target. If the target damages or otherwise harms an affected creature, the affected creature can make a Wisdom saving throw to end the effect, as described below.</p><p><b>Ending the Effect.</b> If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a Wisdom saving throw. On a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spell is allowed another Wisdom saving throw every 24 hours while the spell persists.</p><p>A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again.</p>",
        "page": "PHB 214",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect",
        "ritual": false,
        "duration": "10 days",
        "concentration": false,
        "casting_time": "1 hour",
        "level": 8,
        "school": "enchantment",
        "classes": [
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Arcane Eye",
        "desc": "<p>You create an invisible, magical eye within range that hovers in the air for the duration.</p><p>You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction.</p><p>As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter.</p>",
        "page": "PHB 214",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a bit of bat fur",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "divination",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Arcane Gate",
        "desc": "<p>You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost.</p><p>The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal.</p><p>Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other; passing through a portal from the non-portal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction.</p>",
        "page": "PHB 214",
        "range": "500 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "conjuration",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Arcane Lock",
        "desc": "<p>You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting <i>knock</i> on the object suppresses <i>arcane lock</i> for 10 minutes.</p><p>While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10.</p>",
        "page": "PHB 215",
        "range": "Touch",
        "components": "V, S, M",
        "material": "gold dust worth at least 25gp, which the spell consumes",
        "ritual": false,
        "duration": "Until dispelled",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "abjuration",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Armor of Agathys",
        "desc": "<p>A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st.",
        "page": "PHB 215",
        "range": "Self",
        "components": "V, S, M",
        "material": "a cup of water",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "abjuration",
        "classes": [
            "warlocks"
        ]
    },
    {
        "name": "Arms of Hadar",
        "desc": "<p>You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
        "page": "PHB 215",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "conjuration",
        "classes": [
            "warlocks"
        ]
    },
    {
        "name": "Astral Projection",
        "desc": "<p>You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesn't need food or air and doesn't age.</p><p>Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut—something that can happen only when an effect specifically states that it does—your soul and body are separated, killing you instantly.</p><p>Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it.</p><p>The spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens.</p><p>The spell might also end early for you or one of your companions. A successful dispel <i>magic spell</i> used against an astral or physical body ends the spell for that creature. If a creature's original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature's astral form back to its body, ending its state of suspended animation.</p><p>If you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 hit points.</p>",
        "page": "PHB 215",
        "range": "10 feet",
        "components": "V, S, M",
        "material": "for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes",
        "ritual": false,
        "duration": "Special",
        "concentration": false,
        "casting_time": "1 hour",
        "level": 9,
        "school": "necromancy",
        "classes": [
            "clerics",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Augury",
        "desc": "<p>By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:</p><ul><li><i>Weal,</i> for good results</li><li><i>Woe,</i> for bad results</li><li><i>Weal and woe,</i> for both good and bad results</li><li><i>Nothing,</i> for results that aren't especially good or bad</li></ul><p>The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.</p><p>If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret.</p>",
        "page": "PHB 215",
        "range": "Self",
        "components": "V, S, M",
        "material": "specially marked sticks, bones, or similar tokens worth at least 25 gp",
        "ritual": true,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 2,
        "school": "divination",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Aura of Life",
        "desc": "<p>Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can't be reduced. In addition, a nonhostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points.</p>",
        "page": "PHB 216",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "abjuration",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Aura of Purity",
        "desc": "<p>Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) can't become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned.</p>",
        "page": "PHB 216",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "abjuration",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Aura of Vitality",
        "desc": "<p>Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points.</p>",
        "page": "PHB 216",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "evocation",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Awaken",
        "desc": "<p>After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. Your DM chooses statistics appropriate for the awakened plant, such as the statistics for the awakened shrub or the awakened tree.</p><p>The awakened beast or plant is charmed by you for 30 days or until you or your companions do anything harmful to it. When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed.</p>",
        "page": "PHB 216",
        "range": "Touch",
        "components": "V, S, M",
        "material": "an agate worth at least 1,000 gp, which the spell consumes",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "8 hours",
        "level": 5,
        "school": "transmutation",
        "classes": [
            "bards",
            "druids"
        ]
    },
    {
        "name": "Bane",
        "desc": "<p>Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
        "page": "PHB 216",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a drop of blood",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "enchantment",
        "classes": [
            "bards",
            "clerics"
        ]
    },
    {
        "name": "Banishing Smite",
        "desc": "<p>The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points or fewer, you banish it. If the target is native to a different plane of existence than the one you're on, the target disappears, returning to its home plane. If the target is native to the plane you're on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.</p>",
        "page": "PHB 216",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 5,
        "school": "abjuration",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Banishment",
        "desc": "<p>You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished.</p><p>If the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.</p><p>If the target is native to a different plane of existence than the one you're on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return.</p>",
        "higher_level": "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.",
        "page": "PHB 217",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "an item distasteful to the target",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "abjuration",
        "classes": [
            "clerics",
            "paladins",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Barkskin",
        "desc": "<p>You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing.</p>",
        "page": "PHB 217",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a handful of oak bark",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Beacon of Hope",
        "desc": "<p>This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing.</p>",
        "page": "PHB 217",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "abjuration",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Beast Bond",
        "desc": "<p>You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence score is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see.</p>",
        "page": "EEPC 15, XGE 150",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a bit of fur wrapped in a cloth",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "divination",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Beast Sense",
        "desc": "<p>You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses. While perceiving through the beast's senses, you gain the benefits of any special senses possessed by that creature, though you are blinded and deafened to your own surroundings.</p>",
        "page": "PHB 217",
        "range": "Touch",
        "components": "S",
        "ritual": true,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "divination",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Bestow Curse",
        "desc": "<p>You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options:</p><ul><li>Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.</li><li>While cursed, the target has disadvantage on attack rolls against you.</li><li>While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.</li><li>While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target.</li></ul><p>A <i>remove curse</i> spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect.</p>",
        "higher_level": "If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration.",
        "page": "PHB 218",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "necromancy",
        "classes": [
            "bards",
            "clerics",
            "wizards"
        ]
    },
    {
        "name": "Bigby's Hand",
        "desc": "<p>You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.</p><p>The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn't fill its space.</p><p>When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it.</p><p><b>Clenched Fist.</b> The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 force damage.</p><p><b>Forceful Hand.</b> The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it.</p><p><b>Grasping Hand.</b> The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier.</p><p><b>Interposing Hand.</b> The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is difficult terrain for the target.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th.",
        "page": "PHB 218",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "an eggshell and a snakeskin glove",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "evocation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Blade Barrier",
        "desc": "<p>You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain.</p><p>When a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage.</p>",
        "page": "PHB 218",
        "range": "90 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "evocation",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Blade Ward",
        "desc": "<p>You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.</p>",
        "page": "PHB 218",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "1 round",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "abjuration",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Bless",
        "desc": "<p>You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
        "page": "PHB 219",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a sprinkling of holy water",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "enchantment",
        "classes": [
            "clerics",
            "paladins"
        ]
    },
    {
        "name": "Blight",
        "desc": "<p>Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. The spell has no effect on undead or constructs.</p><p>If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it.</p><p>If you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw; it simply withers and dies.</p>",
        "higher_level": "When you cast this spell using a spell slot of 5th level of higher, the damage increases by 1d8 for each slot level above 4th.",
        "page": "PHB 219",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 4,
        "school": "necromancy",
        "classes": [
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Blinding Smite",
        "desc": "<p>The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon flares with bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends.</p><p>A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.</p>",
        "page": "PHB 219",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 3,
        "school": "evocation",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Blindness/Deafness",
        "desc": "<p>You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
        "page": "PHB 219",
        "range": "30 feet",
        "components": "V",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "necromancy",
        "classes": [
            "bards",
            "clerics",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Blink",
        "desc": "<p>Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action.</p><p>While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can't see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren't there can't perceive you or interact with you, unless they have the ability to do so.</p>",
        "page": "PHB 219",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Blur",
        "desc": "<p>Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight.</p>",
        "page": "PHB 219",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "illusion",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Bones of the Earth",
        "desc": "<p>You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target the ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius that lasts until the rubble is cleared. Each 5-foot-diameter portion of the area requires at least 1 minute to clear by hand.</p><p>If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.</p><p>If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creature's choice) against the spell's save DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it.</p>",
        "higher_level": "When you cast this spell using a spell slot of 7th level or higher, you can create two additional pillars for each slot level above 6th.",
        "page": "EEPC 15, XGE 150",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 6,
        "school": "transmutation",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Booming Blade",
        "desc": "<p>As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in booming energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 thunder damage, and the spell ends.</p><p>This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level.</p>",
        "page": "SCAG 142",
        "range": "5 feet",
        "components": "V, M",
        "material": "a weapon",
        "ritual": false,
        "duration": "1 round",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Branding Smite",
        "desc": "<p>The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it's invisible, and the target sheds dim light in a 5-foot radius and can't become invisible until the spell ends.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd.",
        "page": "PHB 219",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 2,
        "school": "evocation",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Burning Hands",
        "desc": "<p>As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.</p><p>The fire ignites any flammable objects in the area that aren't being worn or carried.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
        "page": "PHB 220",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Call Lightning",
        "desc": "<p>A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud).</p><p>When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one.</p><p>If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd.",
        "page": "PHB 220",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "conjuration",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Calm Emotions",
        "desc": "<p>You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.</p><p>Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise.</p>",
        "page": "PHB 221",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "enchantment",
        "classes": [
            "bards",
            "clerics"
        ]
    },
    {
        "name": "Catapult",
        "desc": "<p>Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st.",
        "page": "EEPC 15, XGE 150",
        "range": "60 feet",
        "components": "S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Catnap",
        "desc": "<p>You make a calming gesture, and up to three willing creatures of your choice that you can see within range fall unconscious for the spell's duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake. If a target remains unconscious for the full duration, that target gains the benefit of a short rest, and it can't be affected by this spell again until it finishes a long rest.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, you can target one additional willing creature for each slot level above 3rd.",
        "page": "XGE 151",
        "range": "30 feet",
        "components": "S, M",
        "material": "a pinch of sand",
        "ritual": false,
        "duration": "10 minutes",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Cause Fear",
        "desc": "<p>You awaken the sense of mortality in one creature you can see within range. A construct or an undead is immune to this effect. The target must succeed on a Wisdom saving throw or become frightened of you until the spell ends. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
        "page": "XGE 151",
        "range": "60 feet",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "necromancy",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Ceremony",
        "desc": "<p>You perform a special religious ceremony that is infused with magic. When you cast the spell, choose one of the following rites, the target of which must be within 10 feet of you throughout the casting.</p><p><b>Atonement.</b> You touch one willing creature whose alignment has changed, and you make a DC 20 Wisdom (Insight) check. On a successful check, you restore the target to its original alignment.</p><p><b>Bless Water.</b> You touch one vial of water and cause it to become holy water.</p><p><b>Coming of Age.</b> You touch one humanoid who is a young adult. For the next 24 hours, whenever the target makes an ability check, it can roll a d4 and add the number rolled to the ability check. A creature can benefit from this rite only once.</p><p><b>Dedication.</b> You touch one humanoid who wishes to be dedicated to your god's service. For the next 24 hours, whenever the target makes a saving throw, it can roll a d4 and add the number rolled to the save. A creature can benefit from this rite only once.</p><p><b>Funeral Rite.</b> You touch one corpse, and for the next 7 days, the target can't become undead by any means short of a <i>wish</i> spell. </p><p><b>Wedding.</b> You touch adult humanoids willing to be bonded together in marriage. For the next 7 days, each target gains a +2 bonus to AC while they are within 30 feet of each other. A creature can benefit from this rite again only if widowed.</p>",
        "page": "XGE 151",
        "range": "Touch",
        "components": "V, S, M",
        "material": "25 gp worth of powdered silver, which the spell consumes",
        "ritual": true,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 hour",
        "level": 1,
        "school": "abjuration",
        "classes": [
            "clerics",
            "paladins"
        ]
    },
    {
        "name": "Chain Lightning",
        "desc": "<p>You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts.</p><p>A target must make a Dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much damage on a successful one.</p>",
        "higher_level": "When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th.",
        "page": "PHB 221",
        "range": "150 feet",
        "components": "V, S, M",
        "material": "a bit of fur; a piece of amber, glass, or a crystal rod; and three silver pins",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 6,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Charm Monster",
        "desc": "<p>You attempt to charm a creature you can see within range. It must make a Wisdom saving throw, and it does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature is friendly to you. When the spell ends, the creature knows it was charmed by you.</p>",
        "higher_level": "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them.",
        "page": "XGE 151",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 4,
        "school": "enchantment",
        "classes": [
            "bards",
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Charm Person",
        "desc": "<p>You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
        "page": "PHB 221",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "enchantment",
        "classes": [
            "bards",
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Chaos Bolt",
        "desc": "<p>You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 + 1d6 damage. Choose one of the d8s. The number rolled on that die determines the attack's damage type, as shown below.</p><table><tr><th>d8</th><th>Damage Type</th></tr><tr><td>1</td><td>Acid</td></tr><tr><td>2</td><td>Cold</td></tr><tr><td>3</td><td>Fire</td></tr><tr><td>4</td><td>Force</td></tr><tr><td>5</td><td>Lightning</td></tr><tr><td>6</td><td>Poison</td></tr><tr><td>7</td><td>Psychic</td></tr><tr><td>8</td><td>Thunder</td></tr></table><p>If you roll the same number on both d8s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again.</p><p>A creature can be targeted only once by each casting of this spell.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, each target takes 1d6 extra damage of the type rolled for each slot level above 1st.",
        "page": "XGE 151",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "sorcerers"
        ]
    },
    {
        "name": "Chill Touch",
        "desc": "<p>You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target.</p><p>If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.</p><p>This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</p>",
        "page": "PHB 221",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "1 round",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "necromancy",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Chromatic Orb",
        "desc": "<p>You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 of the type you chose.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
        "page": "PHB 221",
        "range": "90 feet",
        "components": "V, S, M",
        "material": "a diamond worth at least 50 gp",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Circle of Death",
        "desc": "<p>A sphere of negative energy ripples out in a 60-foot-radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one.</p>",
        "higher_level": "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th.",
        "page": "PHB 221",
        "range": "150 feet",
        "components": "V, S, M",
        "material": "the powder of a crushed black pearl worth at least 500 gp",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 6,
        "school": "necromancy",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Circle of Power",
        "desc": "<p>Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw.</p>",
        "page": "PHB 221",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "abjuration",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Clairvoyance",
        "desc": "<p>You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with.</p><p>When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing.</p><p>A creature that can see the sensor (such as a creature benefiting from <i>see invisibility</i> or truesight) sees a luminous, intangible orb about the size of your fist.</p>",
        "page": "PHB 222",
        "range": "1 mile",
        "components": "V, S, M",
        "material": "a focus worth at least 100 gp, either a jeweled horn for hearing or a glass eye for seeing",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "10 minutes",
        "level": 3,
        "school": "divination",
        "classes": [
            "bards",
            "clerics",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Clone",
        "desc": "<p>This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside a sealed vessel and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed.</p><p>At any time after the clone matures, if the original creature dies, its soul transfers to the clone, provided that the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original's equipment. The original creature's physical remains, if they still exist, become inert and can't thereafter be restored to life, since the creature's soul is elsewhere.</p>",
        "page": "PHB 222",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a diamond worth at least 1,000 gp and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consumes, and a vessel worth at least 2,000 gp that has a sealable lid and is large enough to hold a Medium creature, such as a huge urn, coffin, mud-filled cyst in the ground, or crystal container filled with salt water",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 hour",
        "level": 8,
        "school": "necromancy",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Cloud of Daggers",
        "desc": "<p>You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell's area for the first time on a turn or starts its turn there.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd.",
        "page": "PHB 222",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a sliver of glass",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "conjuration",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Cloudkill",
        "desc": "<p>You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured.</p><p>When a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe.</p><p>The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.",
        "page": "PHB 222",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "conjuration",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Color Spray",
        "desc": "<p>A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see).</p><p>Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st.",
        "page": "PHB 222",
        "range": "Self",
        "components": "V, S, M",
        "material": "a pinch of powder or sand that is colored red, yellow, and blue",
        "ritual": false,
        "duration": "1 round",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "illusion",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Command",
        "desc": "<p>You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it.</p><p>Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can't follow your command, the spell ends.</p><p><b>Approach.</b> The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.</p><p><b>Drop.</b> The target drops whatever it is holding and then ends its turn.</p><p><b>Flee.</b> The target spends its turn moving away from you by the fastest available means.</p><p><b>Grovel.</b> The target falls prone and then ends its turn.</p><p><b>Halt.</b> The target doesn't move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
        "page": "PHB 223",
        "range": "60 feet",
        "components": "V",
        "ritual": false,
        "duration": "1 round",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "enchantment",
        "classes": [
            "clerics",
            "paladins"
        ]
    },
    {
        "name": "Commune",
        "desc": "<p>You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.</p><p>Divine beings aren't necessarily omniscient, so you might receive \\\"unclear\\\" as an answer if a question pertains to information that lies beyond the deity's knowledge. In a case where a one-word answer could be misleading or contrary to the deity's interests, the DM might offer a short phrase as an answer instead.</p><p>If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The DM makes this roll in secret.</p>",
        "page": "PHB 223",
        "range": "Self",
        "components": "V, S, M",
        "material": "incense and a vial of holy or unholy water",
        "ritual": true,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 5,
        "school": "divination",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Commune with Nature",
        "desc": "<p>You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in dungeons and towns.</p><p> You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area:</p><ul><li>terrain and bodies of water</li><li>prevalent plants, minerals, animals, or peoples</li><li>powerful celestials, fey, fiends, elementals, or undead</li><li>influence from other planes of existence</li><li>buildings</li></ul><p>For example, you could determine the location of powerful undead in the area, the location of major sources of safe drinking water, and the location of any nearby towns.</p>",
        "page": "PHB 224",
        "range": "Self",
        "components": "V, S",
        "ritual": true,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 5,
        "school": "divination",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Compelled Duel",
        "desc": "<p>You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move into a space that is more than 30 feet away from you; if it succeeds on this saving throw, the spell doesn't restrict the target's movement for that turn.</p><p>The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target.</p>",
        "page": "PHB 224",
        "range": "30 feet",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "enchantment",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Comprehend Languages",
        "desc": "<p>For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.</p><p>This spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language.</p>",
        "page": "PHB 224",
        "range": "Self",
        "components": "V, S, M",
        "material": "a pinch of soot and salt",
        "ritual": true,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "divination",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Compulsion",
        "desc": "<p>Creatures of your choice that you can see within range and that can hear you must make a Wisdom saving throw. A target automatically succeeds on this saving throw if it can't be charmed. On a failed save, a target is affected by this spell. Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you. Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take any action before it moves. After moving in this way, it can make another Wisdom save to try to end the effect.</p><p>A target isn't compelled to move into an obviously deadly hazard, such as a fire or a pit, but it will provoke opportunity attacks to move in the designated direction.</p>",
        "page": "PHB 224",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "enchantment",
        "classes": [
            "bards"
        ]
    },
    {
        "name": "Cone of Cold",
        "desc": "<p>A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one.</p><p>A creature killed by this spell becomes a frozen statue until it thaws.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.",
        "page": "PHB 224",
        "range": "Self",
        "components": "V, S, M",
        "material": "a small crystal or glass cone",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Confusion",
        "desc": "<p>This spell assails and distorts the minds of creatures, generating illusions and causing uncontrolled actions. Each creature in a sphere of 10-foot-radius centered on a point chosen in the range of the spell must make a Wisdom saving throw otherwise it will be affected by the spell.</p><p>An affected target can react and it must start at the beginning of 1d10 each of his game rounds to determine its behavior for that round.</p><table><tr><th>d10</th><th>Behavior</th></tr><tr><td>1</td><td>The creature uses all its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesn't take an action this turn.</td></tr><tr><td>2-6</td><td>The creature doesn't move or take actions this turn.</td></tr><tr><td>7-8</td><td>The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn.</td></tr><tr><td>9-10</td><td>The creature can act and move normally.</td></tr></table><p>At the end of each turn, an affected creature can make a saving throw of Wisdom. If successful, the effect of the spell ends for this target.</p>",
        "higher_level": "When you cast this spell using a level spell slot 5 or more, the radius of the sphere increases by 5 feet for each level of higher spell slot to 4.",
        "page": "PHB 224",
        "range": "90 feet",
        "components": "V, S, M",
        "material": "three walnut shells",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "enchantment",
        "classes": [
            "bards",
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Conjure Animals",
        "desc": "<p>You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:</p><ul><li>One beast of challenge rating 2 or lower</li><li>Two beasts of challenge rating 1 or lower</li><li>Four beasts of challenge rating 1/2 or lower</li><li>Eight beasts of challenge rating 1/4 or lower</li></ul><p>Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends.</p><p>The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.</p><p>The DM has the creatures' statistics.</p>",
        "higher_level": "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 5th-level slot, three times as many with a 7th-level.",
        "page": "PHB 225",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "conjuration",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Conjure Barrage",
        "desc": "<p>You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component.</p>",
        "page": "PHB 225",
        "range": "Self",
        "components": "V, S, M",
        "material": "one piece of ammunition or a thrown weapon",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "conjuration",
        "classes": [
            "rangers"
        ]
    },
    {
        "name": "Conjure Celestial",
        "desc": "<p>You summon a celestial of challenge rating 4 or lower, which appears in an unoccupied space that you can see within range. The celestial disappears when it drops to 0 hit points or when the spell ends.</p><p>The celestial is friendly to you and your companions for the duration. Roll initiative for the celestial, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the celestial, it defends itself from hostile creatures but otherwise takes no actions.</p><p>The DM has the celestial's statistics.</p>",
        "higher_level": "When you cast this spell using a 9th-level spell slot, you summon a celestial of challenge rating 5 or lower.",
        "page": "PHB 225",
        "range": "90 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 minute",
        "level": 7,
        "school": "conjuration",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Conjure Elemental",
        "desc": "<p>You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends.</p><p>The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don't issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions.</p><p>If your concentration is broken, the elemental doesn't disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can't be dismissed by you, and it disappears 1 hour after you summoned it.</p><p>The DM has the elemental's statistics.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th.",
        "page": "PHB 225",
        "range": "90 feet",
        "components": "V, S, M",
        "material": "burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or water and sand for water",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 minute",
        "level": 5,
        "school": "conjuration",
        "classes": [
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Conjure Fey",
        "desc": "<p>You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends.</p><p>The fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions.</p><p>If your concentration is broken, the fey creature doesn't disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature can't be dismissed by you, and it disappears 1 hour after you summoned it.</p><p>The DM has the fey creature's statistics.</p>",
        "higher_level": "When you cast this spell using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot level above 6th.",
        "page": "PHB 226",
        "range": "90 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 minute",
        "level": 6,
        "school": "conjuration",
        "classes": [
            "druids",
            "warlocks"
        ]
    },
    {
        "name": "Conjure Minor Elementals",
        "desc": "<p>You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the following options for what appears:</p><ul><li>One elemental of challenge rating 2 or lower</li><li>Two elementals of challenge rating 1 or lower</li><li>Four elementals of challenge rating 1/2 or lower</li><li>Eight elementals of challenge rating 1/4 or lower.</li></ul><p>An elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends.</p><p>The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.</p><p>The DM has the creatures' statistics.</p>",
        "higher_level": "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot.",
        "page": "PHB 226",
        "range": "90 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 minute",
        "level": 4,
        "school": "conjuration",
        "classes": [
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Conjure Volley",
        "desc": "<p>You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius. 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon.</p>",
        "page": "PHB 226",
        "range": "150 feet",
        "components": "V, S, M",
        "material": "one piece of ammunition or one thrown weapon",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "conjuration",
        "classes": [
            "rangers"
        ]
    },
    {
        "name": "Conjure Woodland Beings",
        "desc": "<p>You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:</p><ul><li>One fey creature of challenge rating 2 or lower</li><li>Two fey creatures of challenge rating 1 or lower</li><li>Four fey creatures of challenge rating 1/2 or lower</li><li>Eight fey creatures of challenge rating 1/4 or lower</li></ul><p>A summoned creature disappears when it drops to 0 hit points or when the spell ends.</p><p>The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.</p><p>The DM has the creatures' statistics.</p>",
        "higher_level": "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot.",
        "page": "PHB 226",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "one holly berry per creature summoned",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "conjuration",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Contact Other Plane",
        "desc": "<p>You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 Intelligence saving throw. On a failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you can't take actions, can't understand what other creatures say, can't read, and speak only in gibberish. A <i>greater restoration</i> spell cast on you ends this effect.</p><p>On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The DM answers each question with one word, such as \\\"yes,\\\" \\\"no,\\\" \\\"maybe,\\\" \\\"never,\\\" \\\"irrelevant,\\\" or \\\"unclear\\\" (if the entity doesn't know the answer to the question). If a one-word answer would be misleading, the DM might instead offer a short phrase as an answer.</p>",
        "page": "PHB 226",
        "range": "Self",
        "components": "V",
        "ritual": true,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 5,
        "school": "divination",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Contagion",
        "desc": "<p>Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, you afflict the creature with a disease of your choice from any of the ones described below.</p><p>At the end of each of the target's turns, it must make a Constitution saving throw. After failing three of these saving throws, the disease's effects last for the duration, and the creature stops making these saves. After succeeding on three of these saving throws, the creature recovers from the disease, and the spell ends.</p><p>Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease's effects apply to it.</p><p><b>Blinding Sickness.</b> Pain grips the creature's mind, and its eyes turn milky white. The creature has disadvantage on Wisdom checks and Wisdom saving throws and is blinded.</p><p><b>Filth Fever.</b> A raging fever sweeps through the creature's body. The creature has disadvantage on Strength checks, Strength saving throws, and attack rolls that use Strength.</p><p><b>Flesh Rot.</b> The creature's flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage.</p><p><b>Mindfire.</b> The creature's mind becomes feverish. The creature has disadvantage on Intelligence checks and Intelligence saving throws, and the creature behaves as if under the effects of the <i>confusion</i> spell during combat.</p><p><b>Seizure.</b> The creature is overcome with shaking. The creature has disadvantage on Dexterity checks, Dexterity saving throws, and attack rolls that use Dexterity.</p><p><b>Slimy Doom.</b> The creature begins to bleed uncontrollably. The creature has disadvantage on Constitution checks and Constitution saving throws. In addition, whenever the creature takes damage, it is stunned until the end of its next turn.</p>",
        "page": "PHB 227",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "7 days",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "necromancy",
        "classes": [
            "clerics",
            "druids"
        ]
    },
    {
        "name": "Contingency",
        "desc": "<p>Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell—called the contingent spell—as part of casting <i>contingency</i>, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a <i>contingency</i> cast with <i>water breathing</i> might stipulate that water breathing comes into effect when you are engulfed in water or a similar liquid. </p><p>The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to, and then <i>contingency</i> ends.</p><p>The contingent spell takes effect only on you, even if it can normally target others. You can use only one <i>contingency</i> spell at a time. If you cast this spell again, the effect of another <i>contingency</i> spell on you ends. Also, <i>contingency</i> ends on you if its material component is ever not on your person.</p>",
        "page": "PHB 227",
        "range": "Self",
        "components": "V, S, M",
        "material": "a statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gp",
        "ritual": false,
        "duration": "10 days",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 6,
        "school": "evocation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Continual Flame",
        "desc": "<p>A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A <i>continual flame</i> can be covered or hidden but not smothered or quenched.</p>",
        "page": "PHB 227",
        "range": "Touch",
        "components": "V, S, M",
        "material": "ruby dust worth 50 gp, which the spell consumes",
        "ritual": false,
        "duration": "Until dispelled",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "evocation",
        "classes": [
            "clerics",
            "wizards"
        ]
    },
    {
        "name": "Control Flames",
        "desc": "<p>You choose a nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:</p><ul><li>You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.</li><li>You instantaneously extinguish the flames within the cube.</li><li>You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.</li><li>You cause simple shapes—such as the vague form of a creature, an inanimate object, or a location—to appear within the flames and animate as you like. The shapes last for 1 hour.</li></ul><p>If you cast this spell multiple times, you can have up to three non-instantaneous effects created by it active at a time, and you can dismiss such an effect as an action.</p>",
        "page": "EEPC 16, XGE 152",
        "range": "60 feet",
        "components": "S",
        "ritual": false,
        "duration": "Instantaneous or 1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "transmutation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Control Water",
        "desc": "<p>Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one.</p><p><b>Flood.</b> You cause the water level of all standing water in the area to rise by as much as 20 feet. If the area includes a shore, the flooding water spills over onto dry land. If you choose an area in a large body of water, you instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave's path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing. The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts.</p><p><b>Part Water.</b> You cause water in the area to move apart and create a trench. The trench extends across the spell's area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored.</p><p><b>Redirect Flow.</b> You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell's area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the spell ends or you choose a different effect.</p><p><b>Whirlpool.</b> This effect requires a body of water at least 50 feet square and 25 feet deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by making a Strength (Athletics) check against your spell save DC. When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a Strength saving throw. On a failed save, the creature takes 2d8 bludgeoning damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isn't caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so.</p><p>The first time each turn that an object enters the vortex, the object takes 2d8 bludgeoning damage; this damage occurs each round it remains in the vortex.</p>",
        "page": "PHB 227",
        "range": "300 feet",
        "components": "V, S, M",
        "material": "a drop of water and a pinch of dust",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "transmutation",
        "classes": [
            "clerics",
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Control Weather",
        "desc": "<p>You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early.</p><p>When you cast the spell, you change the current weather conditions, which are determined by the DM based on the climate and season. You can change precipitation, temperature, and wind. It takes 1d4 × 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal.</p><p>When you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction.</p><h4>PRECIPITATION</h4><table><tr><th>Stage</th><th>Condition</th></tr><tr><td>1</td><td>Clear</td></tr><tr><td>2</td><td>Light clouds</td></tr><tr><td>3</td><td>Overcast or ground fog</td></tr><tr><td>4</td><td>Rain, hail, or snow</td></tr><tr><td>5</td><td>Torrential rain, driving hail, or blizzard</td></tr></table><h4>TEMPERATURE</h4><table><tr><th>Stage</th><th>Condition</th></tr><tr><td>1</td><td>Unbearable heat</td></tr><tr><td>2</td><td>Hot</td></tr><tr><td>3</td><td>Warm</td></tr><tr><td>4</td><td>Cool</td></tr><tr><td>5</td><td>Cold</td></tr><tr><td>6</td><td>Arctic cold</td></tr></table><h4>WIND</h4><table><tr><th>Stage</th><th>Condition</th></tr><tr><td>1</td><td>Calm</td></tr><tr><td>2</td><td>Moderate wind</td></tr><tr><td>3</td><td>Strong wind</td></tr><tr><td>4</td><td>Gale</td></tr><tr><td>5</td><td>Storm</td></tr></table>",
        "page": "PHB 228",
        "range": "Self",
        "components": "V, S, M",
        "material": "burning incense and bits of earth and wood mixed in water",
        "ritual": false,
        "duration": "Up to 8 hours",
        "concentration": true,
        "casting_time": "10 minutes",
        "level": 8,
        "school": "transmutation",
        "classes": [
            "clerics",
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Control Winds",
        "desc": "<p>You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you‘ve halted.</p><p><b>Gusts.</b> A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that enter or leave the cube or pass through it have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved.</p><p><b>Downdraft.</b> You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone.</p><p><b>Updraft.</b> You cause a sustained updraft within the cube, rising upward from the cube's bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal.</p>",
        "page": "EEPC 16, XGE 152",
        "range": "300 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "transmutation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Cordon of Arrows",
        "desc": "<p>You plant four pieces of nonmagical ammunition—arrows or crossbow bolts—in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains.</p><p>When you cast this spell, you can designate any creatures you choose, and the spell ignores them.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd.",
        "page": "PHB 228",
        "range": "5 feet",
        "components": "V, S, M",
        "material": "four or more arrows or bolts",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "rangers"
        ]
    },
    {
        "name": "Counterspell",
        "desc": "<p>You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.",
        "page": "PHB 228",
        "range": "60 feet",
        "components": "S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 reaction, which you take when you see a creature within 60 feet of you casting a spell",
        "level": 3,
        "school": "abjuration",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Create Bonfire",
        "desc": "<p>You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire's space for the first time on a turn or ends its turn there.</p><p>The bonfire ignites flammable objects in its area that aren't being worn or carried.</p><p>The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</p>",
        "page": "EEPC 16, XGE 152",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 0,
        "school": "conjuration",
        "classes": [
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Create Food and Water",
        "desc": "<p>You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn't go bad.</p>",
        "page": "PHB 229",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "conjuration",
        "classes": [
            "clerics",
            "paladins"
        ]
    },
    {
        "name": "Create Homunculus",
        "desc": "<p>While speaking an intricate incantation, you cut yourself with a jewel-encrusted dagger, taking 2d4 piercing damage that can't be reduced in any way. You then drip your blood on the spell's other components and touch them, transforming them into a special construct called a homunculus.</p><p>The statistics of the homunculus are in the <i>Monster Manual</i>. It is your faithful companion, and it dies if you die. Whenever you finish a long rest, you can spend up to half your Hit Dice if the homunculus is on the same plane of existence as you. When you do so, roll each die and add your Constitution modifier to it. Your hit point maximum is reduced by the total, and the homunculus's hit point maximum and current hit points are both increased by it. This process can reduce you to no lower than 1 hit point, and the change to your and the homunculus's hit points ends when you finish your next long rest. The reduction to your hit point maximum can't be removed by any means before then, except by the homunculus‘s death.</p><p>You can have only one homunculus at a time. If you cast this spell while your homunculus lives, the spell fails.</p>",
        "page": "XGE 152",
        "range": "Touch",
        "components": "V, S, M",
        "material": "clay, ash, and mandrake root, all of which the spell consumes, and a jewel-encrusted dagger worth at least 1,000 gp",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 hour",
        "level": 6,
        "school": "transmutation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Create or Destroy Water",
        "desc": "<p>You either create or destroy water.</p><p><b>Create Water.</b> You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range.</p><p><b>Destroy Water.</b> You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st.",
        "page": "PHB 229",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a drop of water if creating water, or a few grains of sand if destroying it",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "transmutation",
        "classes": [
            "clerics",
            "druids"
        ]
    },
    {
        "name": "Create Undead",
        "desc": "<p>You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control. (The DM has game statistics for these creatures.)</p><p>As a bonus action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.</p><p>The creature is under your control for 24 hours, after which it stops obeying any command you have given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell, rather than animating new ones.</p>",
        "higher_level": "When you cast this spell using a 7th-level spell slot, you can animate or reassert control over four ghouls. When you cast this spell using an 8th-level spell slot, you can animate or reassert control over five ghouls or two ghasts or wights. When you cast this spell using a 9th-level spell slot, you can animate or reassert control over six ghouls, three ghasts or wights, or two mummies.",
        "page": "PHB 229",
        "range": "10 feet",
        "components": "V, S, M",
        "material": "one clay pot filled with grave dirt, one clay pot filled with brackish water, and one 150 gp black onyx stone for each corpse",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 6,
        "school": "necromancy",
        "classes": [
            "clerics",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Creation",
        "desc": "<p>You pull wisps of shadow material from the Shadowfell to create a nonliving object of vegetable matter within range: soft goods, rope, wood, or something similar. You can also use this spell to create mineral objects such as stone, crystal, or metal. The object created must be no larger than a 5-foot cube, and the object must be of a form and material that you have seen before.</p><p>The duration depends on the object's material. If the object is composed of multiple materials, use the shortest duration.</p><table><tr><th>Material</th><th>Duration</th></tr><tr><td>Vegetable matter</td><td>1 day</td></tr><tr><td>Stone or crystal</td><td>12 hours</td></tr><tr><td>Precious metals</td><td>1 hour</td></tr><tr><td>Gems</td><td>10 minutes</td></tr><tr><td>Adamantine or mithral</td><td>1 minute</td></tr></table><p>Using any material created by this spell as another spell's material component causes that spell to fail.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, the cube increases by 5 feet for each slot level above 5th.",
        "page": "PHB 229",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a tiny piece of matter of the same type of the item you plan to create",
        "ritual": false,
        "duration": "Special",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 5,
        "school": "illusion",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Crown of Madness",
        "desc": "<p>One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes.</p><p>The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose.</p><p>The target can act normally on its turn if you choose no creature or if none are within its reach.</p><p>On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends.</p>",
        "page": "PHB 229",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Crown of Stars",
        "desc": "<p>Seven star-like motes of light appear and orbit your head until the spell ends. You can use a bonus action to send one of the motes streaking toward one creature or object within 120 feet of you. When you do so, make a ranged spell attack. On a hit, the target takes 4d12 radiant damage. Whether you hit or miss, the mote is expended. The spell ends early if you expend the last mote.</p><p>If you have four or more motes remaining, they shed bright light in a 30-foot radius and dim light for an additional 30 feet. If you have one to three motes remaining, they shed dim light in a 30-foot radius.</p>",
        "higher_level": "When you cast this spell using a spell slot of 8th level or higher, the number of motes created increases by two for each slot level above 7th.",
        "page": "XGE 153",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 7,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Crusader's Mantle",
        "desc": "<p>Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each nonhostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack.</p>",
        "page": "PHB 230",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "evocation",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Cure Wounds",
        "desc": "<p>A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.",
        "page": "PHB 230",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "paladins",
            "rangers"
        ]
    },
    {
        "name": "Dancing Lights",
        "desc": "<p>You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.</p><p>As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range.</p>",
        "page": "PHB 230",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a bit of phosphorus or wychwood, or a glowworm",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 0,
        "school": "evocation",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Danse Macabre",
        "desc": "<p>Threads of dark power leap from your fingers to pierce up to five Small or Medium corpses you can see within range. Each corpse immediately stands up and becomes undead. You decide whether it is a zombie or a skeleton (the statistics for zombies and skeletons are in the <i>Monster Manual</i>), and it gains a bonus to its attack and damage rolls equal to your spellcasting ability modifier.</p><p>You can use a bonus action to mentally command the creatures you make with this spell, issuing the same command to all of them. To receive the command, a creature must be within 60 feet of you. You decide what action the creatures will take and where they will move during their next turn, or you can issue a general command, such as to guard a chamber or passageway against your foes. If you issue no commands, the creatures do nothing except defend themselves against hostile creatures. Once given an order, the creatures continue to follow it until their task is complete.</p><p>The creatures are under your control until the spell ends, after which they become inanimate once more</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, you animate up to two additional corpses for each slot level above 5th.",
        "page": "XGE 153",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "necromancy",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Darkness",
        "desc": "<p>Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it.</p><p>If the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.</p><p>If any of this spell's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled.</p>",
        "page": "PHB 230",
        "range": "60 feet",
        "components": "V, M",
        "material": "bat fur and a drop of pitch or piece of coal",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Darkvision",
        "desc": "<p>You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet.</p>",
        "page": "PHB 230",
        "range": "Touch",
        "components": "V, S, M",
        "material": "either a pinch of dried carrot or an agate",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "druids",
            "rangers",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Dawn",
        "desc": "<p>The light of dawn shines down on a location you specify within range. Until the spell ends, a 30-foot-radius, 40-foot-high cylinder of bright light glimmers there. This light is sunlight.</p><p>When the cylinder appears, each creature in it must make a Constitution saving throw, taking 4d10 radiant damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw whenever it ends its turn in the cylinder.</p><p>If you're within 60 feet of the cylinder, you can move it up to 60 feet as a bonus action on your turn.</p>",
        "page": "XGE 153",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a sunburst pendant worth at least 100 gp",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "evocation",
        "classes": [
            "clerics",
            "wizards"
        ]
    },
    {
        "name": "Daylight",
        "desc": "<p>A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet.</p><p>If you chose a point on an object you are holding or one that isn't being worn or carried, the light shines from the object and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light.</p><p>If any of this spell's area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled.</p>",
        "page": "PHB 230",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "evocation",
        "classes": [
            "clerics",
            "druids",
            "paladins",
            "rangers",
            "sorcerers"
        ]
    },
    {
        "name": "Death Ward",
        "desc": "<p>You touch a creature and grant it a measure of protection from death.</p><p>The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends.</p><p>If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spell ends.</p>",
        "page": "PHB 230",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 4,
        "school": "abjuration",
        "classes": [
            "clerics",
            "paladins"
        ]
    },
    {
        "name": "Delayed Blast Fireball",
        "desc": "<p>A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one.</p><p>The spell's base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6.</p><p>If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes.</p><p>The fire damages objects in the area and ignites flammable objects that aren't being worn or carried.</p>",
        "higher_level": "When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th.",
        "page": "PHB 230",
        "range": "150 feet",
        "components": "V, S, M",
        "material": "a tiny ball of bat guano and sulfur",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 7,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Demiplane",
        "desc": "<p>You create a shadowy door on a flat solid surface that you can see within range. The door is large enough to allow Medium creatures to pass through unhindered. When opened, the door leads to a demiplane that appears to be an empty room 30 feet in each dimension, made of wood or stone. When the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side.</p><p>Each time you cast this spell, you can create a new demiplane, or have the shadowy door connect to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can have the shadowy door connect to its demiplane instead.</p>",
        "page": "PHB 231",
        "range": "60 feet",
        "components": "S",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 8,
        "school": "conjuration",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Destructive Wave",
        "desc": "<p>You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone.</p>",
        "page": "PHB 231",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "evocation",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Detect Evil and Good",
        "desc": "<p>For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated.</p><p>The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.</p>",
        "page": "PHB 231",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "divination",
        "classes": [
            "clerics",
            "paladins"
        ]
    },
    {
        "name": "Detect Magic",
        "desc": "<p>For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.</p><p>The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.</p>",
        "page": "PHB 231",
        "range": "Self",
        "components": "V, S",
        "ritual": true,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "divination",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "paladins",
            "rangers",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Detect Poison and Disease",
        "desc": "<p>For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.</p><p>The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.</p>",
        "page": "PHB 231",
        "range": "Self",
        "components": "V, S, M",
        "material": "a yew leaf",
        "ritual": true,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "divination",
        "classes": [
            "clerics",
            "druids",
            "paladins",
            "rangers"
        ]
    },
    {
        "name": "Detect Thoughts",
        "desc": "<p>For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected.</p><p>You initially learn the surface thoughts of the creature—what is most on its mind in that moment. As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature's thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends.</p><p>Questions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation.</p><p>You can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can't detect a creature with an Intelligence of 3 or lower or one that doesn't speak any language.</p><p>Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can't see it, but it must still be within range.</p>",
        "page": "PHB 231",
        "range": "Self",
        "components": "V, S, M",
        "material": "a copper piece",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "divination",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Dimension Door",
        "desc": "<p>You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as \\\"200 feet straight downward\\\" or \\\"upward to the northwest at a 45-degree angle, 300 feet.\\\"</p><p>You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell.</p><p>If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you.</p>",
        "page": "PHB 233",
        "range": "500 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 4,
        "school": "conjuration",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Disguise Self",
        "desc": "<p>You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.</p><p>The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.</p><p>To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.</p>",
        "page": "PHB 233",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "illusion",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Disintegrate",
        "desc": "<p>A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by <i>wall of force</i>.</p><p>A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. If this damage reduces the target to 0 hit points, it is disintegrated.</p><p>A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a <i>true resurrection</i> or a <i>wish</i> spell.</p><p>This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell.</p>",
        "higher_level": "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th.",
        "page": "PHB 233",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a lodestone and a pinch of dust",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 6,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Dispel Evil and Good",
        "desc": "<p>Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you.</p><p>You can end the spell early by using either of the following special functions.</p><p><b>Break Enchantment.</b> As your action, you touch a creature you can reach that is charmed, frightened, or possessed by a celestial, an elemental, a fey, a fiend, or an undead. The creature you touch is no longer charmed, frightened, or possessed by such creatures.</p><p><b>Dismissal.</b> As your action, make a melee spell attack against a celestial, an elemental, a fey, a fiend, or an undead you can reach. On a hit, you attempt to drive the creature back to its home plane. The creature must succeed on a Charisma saving throw or be sent back to its home plane (if it isn't there already). If they aren't on their home plane, undead are sent to the Shadowfell, and fey are sent to the Feywild.</p>",
        "page": "PHB 233",
        "range": "Self",
        "components": "V, S, M",
        "material": "holy water or powdered silver and iron",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "abjuration",
        "classes": [
            "clerics",
            "paladins"
        ]
    },
    {
        "name": "Dispel Magic",
        "desc": "<p>Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used.",
        "page": "PHB 234",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "abjuration",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "paladins",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Dissonant Whispers",
        "desc": "<p>You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
        "page": "PHB 234",
        "range": "60 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "enchantment",
        "classes": [
            "bards"
        ]
    },
    {
        "name": "Divination",
        "desc": "<p>Your magic and an offering put you in contact with a god or a god's servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen.</p><p>The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.</p><p>If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret.</p>",
        "page": "PHB 234",
        "range": "Self",
        "components": "V, S, M",
        "material": "incense and a sacrificial offering appropriate to your religion, together worth at least 25gp, which the spell consumes",
        "ritual": true,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 4,
        "school": "divination",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Divine Favor",
        "desc": "<p>Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit.</p>",
        "page": "PHB 234",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Divine Word",
        "desc": "<p>You utter a divine word, imbued with the power that shaped the world at the dawn of creation. Choose any number of creatures you can see within range. Each creature that can hear you must make a Charisma saving throw. On a failed save, a creature suffers an effect based on its current hit points:</p><ul><li>50 hit points or fewer: deafened for 1 minute</li><li>40 hit points or fewer: deafened and blinded for 10 minutes</li><li>30 hit points or fewer: blinded, deafened, and stunned for 1 hour</li><li>20 hit points or fewer: killed instantly</li></ul>Regardless of its current hit points, a celestial, an elemental, a fey, or a fiend that fails its save is forced back to its plane of origin (if it isn't there already) and can't return to your current plane for 24 hours by any means short of a <i>wish</i> spell.</p>",
        "page": "PHB 234",
        "range": "30 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 bonus action",
        "level": 7,
        "school": "evocation",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Dominate Beast",
        "desc": "<p>You attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.</p><p>While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \\\"Attack that creature,\\\" \\\"Run over there,\\\" or \\\"Fetch that object.\\\" If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability.</p><p>You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.</p>",
        "higher_level": "When you cast this spell with a 9th level spell slot, the duration is concentration, up to 8 hours.",
        "page": "PHB 234",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "enchantment",
        "classes": [
            "druids",
            "sorcerers"
        ]
    },
    {
        "name": "Dragon's Breath",
        "desc": "<p>You touch one willing creature and imbue it with the power to spew magical energy from its mouth, provided it has one. Choose acid, cold, fire, lightning, or poison. Until the spell ends, the creature can use an action to exhale energy of the chosen type in a 15-foot cone. Each creature in that area must make a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save, or half as much damage on a successful one.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
        "page": "XGE 154",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a hot pepper",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Drawmij's Instant Summons",
        "desc": "<p>You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an invisible mark on its surface and invisibly inscribes the name of the item on the sapphire you use as the material component. Each time you cast this spell, you must use a different sapphire.</p><p>At any time thereafter, you can use your action to speak the item's name and crush the sapphire. The item instantly appears in your hand regardless of physical or planar distances, and the spell ends.</p><p>If another creature is holding or carrying the item, crushing the sapphire doesn't transport the item to you, but instead you learn who the creature possessing the object is and roughly where that creature is located at that moment.</p><p><i>Dispel magic</i> or a similar effect successfully applied to the sapphire ends this spell's effect.</p>",
        "page": "PHB 235",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a sapphire worth 1,000 gp",
        "ritual": true,
        "duration": "Until dispelled",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 6,
        "school": "conjuration",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Dominate Monster",
        "desc": "<p>You attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.</p><p>While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \\\"Attack that creature,\\\" \\\"Run over there,\\\" or \\\"Fetch that object.\\\" If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability.</p><p>You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.</p><p>Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.</p>",
        "higher_level": "When you cast this spell with a 9th-level spell slot, the duration is concentration, up to 8 hours.",
        "page": "PHB 235",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 8,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Dominate Person",
        "desc": "<p>You attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.</p><p>While the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \\\"Attack that creature,\\\" \\\"Run over there,\\\" or \\\"Fetch that object.\\\" If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability.</p><p>You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.</p><p>Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.</p>",
        "higher_level": "When you cast this spell using a 6th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 7th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours.",
        "page": "PHB 235",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Dream",
        "desc": "<p>This spell shapes a creature's dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that don't sleep, such as elves, can't be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger.</p><p>While in the trance, the messenger is aware of his or her surroundings, but can't take actions or move.</p><p>If the target is asleep, the messenger appears in the target's dreams and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the effect of the spell early. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the target's dreams.</p><p>You can make the messenger appear monstrous and terrifying to the target. If you do, the messenger can deliver a message of no more than ten words and then the target must make a Wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the target's sleep and prevents the target from gaining any benefit from that rest. In addition, when the target wakes up, it takes 3d6 psychic damage.</p><p>If you have a body part, lock of hair, clipping from a nail, or similar portion of the target's body, the target makes its saving throw with disadvantage.</p>",
        "page": "PHB 236",
        "range": "Special",
        "components": "V, S, M",
        "material": "a handful of sand, a dab of ink, and a writing quill plucked from a sleeping bird",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 5,
        "school": "illusion",
        "classes": [
            "bards",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Druidcraft",
        "desc": "<p>Whispering to the spirits of nature, you create one of the following effects within range:</p><ul><li>You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.</li><li>You instantly make a flower bloom, a seed pod open, or a leaf bud bloom.</li><li>You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint order of skunk. The effect must fit in a 5-foot cube.</li><li>You instantly light or snuff out a candle, a torch, or a small campfire.</li></ul>",
        "page": "PHB 236",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "transmutation",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Druid Grove",
        "desc": "<p>You invoke the spirits of nature to protect an area outdoors or underground. The area can be as small as a 30-foot cube or as large as a 90-foot cube. Buildings and other structures are excluded from the affected area. If you cast this spell in the same area every day for a year, the spell lasts until dispelled.</p><p>The spell creates the following effects within the area. When you cast this spell, you can specify creatures as friends who are immune to the effects. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.</p><p>The entire warded area radiates magic. A <i>dispel magic</i> cast on the area, if successful, removes only one of the following effects, not the entire area. That spell's caster chooses which effect to end. Only when all its effects are gone is this spell dispelled.</p><p><b>Solid Fog.</b> You can fill any number of 5-foot squares on the ground with thick fog, making them heavily obscured. The fog reaches 10 feet high. In addition, every foot of movement through the fog costs 2 extra feet. To a creature immune to this effect, the fog obscures nothing and looks like soft mist, with motes of green light floating in the air.</p><p><b>Grasping Undergrowth.</b> You can fill any number of 5-foot squares on the ground that aren't filled with fog with grasping weeds and vines, as if they were affected by an <i>entangle</i> spell. To a creature immune to this effect, the weeds and vines feel soft and reshape themselves to serve as temporary seats or beds.</p><p><b>Grove Guardians.</b> You can animate up to four trees in the area, causing them to uproot themselves from the ground. These trees have the same statistics as an awakened tree, which appears in the <i>Monster Manual</i>, except they can't speak, and their bark is covered with druidic symbols. If any creature not immune to this effect enters the warded area, the grove guardians fight until they have driven off or slain the intruders. The grove guardians also obey your spoken commands (no action required by you) that you issue while in the area. If you don't give them commands and no intruders are present, the grove guardians do nothing. The grove guardians can‘t leave the warded area. When the spell ends, the magic animating them disappears, and the trees take root again if possible.</p><p><b>Additional Spell Effect.</b> You can place your choice of one of the following magical effects within the warded area:</p><ul><li>A constant <i>gust of wind</i> in two locations of your choice.</li><li><i>Spike growth</i> in one location of your choice.</li><li><i>Wind wall</i> in two locations of your choice.</li></ul><p>To a creature immune to this effect, the winds are a fragrant, gentle breeze, and the area of <i>spike growth</i> is harmless.</p>",
        "page": "XGE 154",
        "range": "Touch",
        "components": "V, S, M",
        "material": "mistletoe, which the spell consumes, that was harvested with a golden sickle under the light of a full moon",
        "ritual": false,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 6,
        "school": "abjuration",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Dust Devil",
        "desc": "<p>Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration.</p><p>Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away from the dust devil. On a successful save, the creature takes half as much damage and isn't pushed.</p><p>As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or light gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
        "page": "EEPC 17, XGE 154",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a pinch of dust",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "conjuration",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Earth Tremor",
        "desc": "<p>You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
        "page": "EEPC 17, XGE 155",
        "range": "10 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "bards",
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Earthbind",
        "desc": "<p>Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 feet for the spell's duration. An airborne creature affected by this spell safely descends at 60 feet per round until it reaches the ground or the spell ends.</p>",
        "page": "EEPC 17, XGE 154",
        "range": "300 feet",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Earthquake",
        "desc": "<p>You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area.</p><p>The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature's concentration is broken.</p><p>When you cast this spell and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone.</p><p>This spell can have additional effects depending on the terrain in the area, as determined by the DM.</p><p><b>Fissures.</b> Fissures open throughout the spell's area at the start of your next turn after you cast the spell. A total of 1d6 such fissures open in locations chosen by the DM. Each is 1d10 × 10 feet deep, 10 feet wide, and extends from one edge of the spell's area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens.</p><p>A fissure that opens beneath a structure causes it to automatically collapse (see below).</p><p><b>Structures.</b> The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a Dexterity saving throw. On a failed save, the creature takes 5d6 bludgeoning damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn't fall prone or become buried.</p>",
        "page": "PHB 236",
        "range": "500 feet",
        "components": "V, S, M",
        "material": "a pinch of dirt, a piece of rock, and a lump of clay",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 8,
        "school": "evocation",
        "classes": [
            "clerics",
            "druids",
            "sorcerers"
        ]
    },
    {
        "name": "Eldritch Blast",
        "desc": "<p>A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.</p><p>The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.</p>",
        "page": "PHB 237",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "evocation",
        "classes": [
            "warlocks"
        ]
    },
    {
        "name": "Elemental Bane",
        "desc": "<p>Choose one creature you can see within range, and choose one of the following damage types: acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends.</p>",
        "higher_level": "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them.",
        "page": "EEPC 17, XGE 155",
        "range": "90 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "transmutation",
        "classes": [
            "druids",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Elemental Weapon",
        "desc": "<p>A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits.</p>",
        "higher_level": "When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4.",
        "page": "PHB 237",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Enemies Abound",
        "desc": "<p>You reach into the mind of one creature you can see and force it to make an Intelligence saving throw. A creature automatically succeeds if it is immune to being frightened. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the spell ends. Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success.</p><p>Whenever the affected creature chooses another creature as a target, it must choose the target at random from among the creatures it can see within range of the attack, spell, or other ability it's using. If an enemy provokes an opportunity attack from the affected creature, the creature must make that attack if it is able to.</p>",
        "page": "XGE 155",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Enervation",
        "desc": "<p>A tendril of inky darkness reaches out from you, touching a creature you can see within range to drain life from it. The target must make a Dexterity saving throw. On a successful save, the target takes 2d8 necrotic damage, and the spell ends. On a failed save, the target takes 4d8 necrotic damage, and until the spell ends, you can use your action on each of your turns to automatically deal 4d8 necrotic damage to the target. The spell ends if you use your action to do anything else, if the target is ever outside the spell's range, or if the target has total cover from you.</p><p>Whenever the spell deals damage to a target, you regain hit points equal to half the amount of necrotic damage the target takes.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.",
        "page": "XGE 155",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "necromancy",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Enhance Ability",
        "desc": "<p>You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains that effect until the spell ends.</p><p><b>Bear's Endurance.</b> The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends. </p><p><b>Bull's Strength.</b> The target has advantage on Strength checks, and his or her carrying capacity doubles.</p><p><b>Cat's Grace.</b> The target has advantage on Dexterity checks. It also doesn't take damage from falling 20 feet or less if it isn't incapacitated.</p><p><b>Eagle's Splendor.</b> The target has advantage on Charisma checks.</p><p><b>Fox's Cunning.</b> The target has advantage on Intelligence checks.</p><p><b>Owl's Wisdom.</b> The target has advantage on Wisdom checks.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
        "page": "PHB 237",
        "range": "Touch",
        "components": "V, S, M",
        "material": "fur or a feather from a beast",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "sorcerers"
        ]
    },
    {
        "name": "Enlarge/Reduce",
        "desc": "<p>You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect.</p><p>If the target is a creature, everything it is wearing and carrying changes size with it. Any item dropped by an affected creature returns to normal size at once.</p><p><b>Enlarge.</b> The target's size doubles in all dimensions, and its weight is multiplied by eight. This growth increases its size by one category—from Medium to Large, for example. If there isn't enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. Until the spell ends, the target also has advantage on Strength checks and Strength saving throws. The target's weapons also grow to match its new size. While these weapons are enlarged, the target's attacks with them deal 1d4 extra damage.</p><p><b>Reduce.</b> The target's size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category—from Medium to Small, for example. Until the spell ends, the target also has disadvantage on Strength checks and Strength saving throws. The target's weapons also shrink to match its new size. While these weapons are reduced, the target's attacks with them deal 1d4 less damage (this can't reduce the damage below 1).</p> ",
        "page": "PHB 237",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a pinch of powdered iron",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Ensnaring Strike",
        "desc": "<p>The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away.</p><p>While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch a creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed.</p>",
        "higher_level": "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
        "page": "PHB 237",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "conjuration",
        "classes": [
            "rangers"
        ]
    },
    {
        "name": "Entangle",
        "desc": "<p>Grasping weeds and vines sprout from the ground in a 20-foot square starting form a point within range. For the duration, these plants turn the ground in the area into difficult terrain.</p><p>A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself.</p><p>When the spell ends, the conjured plants wilt away.</p>",
        "page": "PHB 238",
        "range": "90 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "conjuration",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Enthrall",
        "desc": "<p>You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a Wisdom saving throw. Any creature that can't be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you. The spell ends if you are incapacitated or can no longer speak.</p>",
        "page": "PHB 238",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "enchantment",
        "classes": [
            "bards",
            "warlocks"
        ]
    },
    {
        "name": "Erupting Earth",
        "desc": "<p>Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd.",
        "page": "EEPC 17, XGE 155",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a piece of obsidian",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Etherealness",
        "desc": "<p>You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you can't see anything more than 60 feet away.</p><p>While on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that aren't on the Ethereal Plane can't perceive you and can't interact with you, unless a special ability or magic has given them the ability to do so.</p><p>You ignore all objects and effects that aren't on the Ethereal Plane, allowing you to move through objects you perceive on the plane you originated from.</p><p>When the spell ends, you immediately return to the plane you originated from in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved.</p><p>This spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesn't border it, such as one of the Outer Planes.</p>",
        "higher_level": "When you cast this spell using a spell slot of 8th level or higher, you can target up to three willing creatures (including you) for each slot level above 7th. The creatures must be within 10 feet of you when you cast the spell.",
        "page": "PHB 238",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 7,
        "school": "transmutation",
        "classes": [
            "bards",
            "clerics",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Evard's Black Tentacles",
        "desc": "<p>Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain.</p><p>When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 bludgeoning damage.</p><p>A creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself.</p>",
        "page": "PHB 238",
        "range": "90 feet",
        "components": "V, S, M",
        "material": "a piece of tentacle from a giant octopus or a giant squid",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "conjuration",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Expeditious Retreat",
        "desc": "<p>This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.</p>",
        "page": "PHB 238",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Eyebite",
        "desc": "<p>For the spell's duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can use your action to target another creature but can't target a creature again if it has succeeded on a saving throw against this casting of eyebite.</p><p><b>Asleep.</b> The target falls unconscious. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake.</p><p><b>Panicked.</b> The target is frightened of you. On each of its turns, the frightened creature must take the Dash action and move away from you by the safest and shortest available route, unless there is nowhere to move. If the target moves to a place at least 60 feet away from you where it can no longer see you, this effect ends.</p><p><b>Sickened.</b> The target has disadvantage on attack rolls and ability checks. At the end of each of its turns, it can make another Wisdom saving throw. If it succeeds, the effect ends.</p>",
        "page": "PHB 238",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "necromancy",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Fabricate",
        "desc": "<p>You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, and clothes from flax or wool.</p><p>Choose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot cube, or eight connected 5-foot cubes), given a sufficient quantity of raw material. If you are working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a single 5-foot cube). The quality of objects made by the spell is commensurate with the quality of the raw materials.</p><p>Creatures or magic items can't be created or transmuted by this spell. You also can't use it to create items that ordinarily require a high degree of craftsmanship, such as jewelry, weapons, glass, or armor, unless you have proficiency with the type of artisan's tools used to craft such objects.</p>",
        "page": "PHB 239",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 4,
        "school": "transmutation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Faerie Fire",
        "desc": "<p>Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.</p><p>Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.</p>",
        "page": "PHB 239",
        "range": "60 feet",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "bards",
            "druids"
        ]
    },
    {
        "name": "False Life",
        "desc": "<p>Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st.",
        "page": "PHB 239",
        "range": "Self",
        "components": "V, S, M",
        "material": "a small amount of alcohol or distilled spirits",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "necromancy",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Far Step",
        "desc": "<p>You teleport up to 60 feet to an unoccupied space you can see. On each of your turns before the spell ends, you can use a bonus action to teleport in this way again.</p>",
        "page": "XGE 155",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 5,
        "school": "conjuration",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Fear",
        "desc": "<p>You project a phantasmal image of a creature's worst fears. Each creature in a 30-foot cone must succeed on a Wisdom saving throw or drop whatever it is holding and become frightened for the duration.</p><p>While frightened by this spell, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn't have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature.</p>",
        "page": "PHB 239",
        "range": "Self",
        "components": "V, S, M",
        "material": "a white feather or the heart of a hen",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "illusion",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Feather Fall",
        "desc": "<p>Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.</p>",
        "page": "PHB 239",
        "range": "60 feet",
        "components": "V, M",
        "material": "a small feather or a piece of down",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 reaction, which you take when you or a creature within 60 feet of you falls",
        "level": 1,
        "school": "transmutation",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Feeblemind",
        "desc": "<p>You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes 4d6 psychic damage and must make an Intelligence saving throw.</p><p>On a failed save, the creature's Intelligence and Charisma scores become 1. The creature can't cast spells, activate magic items, understand language, or communicate in any intelligible way. The creature can, however, identify its friends, follow them, and even protect them.</p><p>At the end of every 30 days, the creature can repeat its saving throw against this spell. If it succeeds on its saving throw, the spell ends.</p><p>The spell can also be ended by <i>greater restoration</i>, <i>heal</i>, or <i>wish</i>.</p>",
        "page": "PHB 239",
        "range": "150 feet",
        "components": "V, S, M",
        "material": "a handful of clay, crystal, glass, or mineral spheres",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 8,
        "school": "enchantment",
        "classes": [
            "bards",
            "druids",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Feign Death",
        "desc": "<p>You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.</p><p>For the spell's duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target's status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell's effect, the disease and poison have no effect until the spell ends.</p>",
        "page": "PHB 240",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a pinch of graveyard dirt",
        "ritual": true,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "necromancy",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Find Familiar",
        "desc": "<p>You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.</p><p>Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal.</p><p>When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again.</p><p>While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.</p><p>As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits your summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you.</p><p>You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.</p><p>Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.</p>",
        "page": "PHB 240",
        "range": "10 feet",
        "components": "V, S, M",
        "material": "10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier",
        "ritual": true,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 hour",
        "level": 1,
        "school": "conjuration",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Find Steed",
        "desc": "<p>You summon a spirit that assumes the form of an unusually intelligent, strong, and loyal steed, creating a long-lasting bond with it. Appearing in an unoccupied space within range, the steed takes on a form that you choose: a warhorse, a pony, a camel, an elk, or a mastiff. (Your DM might allow other animals to be summoned as steeds.) The steed has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of its normal type. Additionally, if your steed has an Intelligence of 5 or less, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.</p><p>Your steed serves you as a mount, both in combat and out, and you have an instinctive bond with it that allows you to fight as a seamless unit. While mounted on your steed, you can make any spell you cast that targets only you also target your steed.</p><p>When the steed drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss your steed at any time as an action, causing it to disappear. In either case, casting this spell again summons the same steed, restored to its hit point maximum.</p><p>While your steed is within 1 mile of you, you can communicate with it telepathically.</p><p>You can't have more than one steed bonded by this spell at a time. As an action, you can release the steed from its bond at any time, causing it to disappear.</p>",
        "page": "PHB 240",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 2,
        "school": "conjuration",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Find Greater Steed",
        "desc": "<p>You summon a spirit that assumes the form of a loyal, majestic mount. Appearing in an unoccupied space within range, the spirit takes on a form you choose: a griffon, a pegasus, a peryton, a dire wolf, a rhinoceros, or a saber-toothed tiger. The creature has the statistics provided in the <i>Monster Manual</i> for the chosen form, though it is a celestial, a fey, or a fiend (your choice) instead of its normal creature type. Additionally, if it has an Intelligence score of 5 or lower, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.</p><p>You control the mount in combat. While the mount is within 1 mile of you, you can communicate with it telepathically. While mounted on it, you can make any spell you cast that targets only you also target the mount.</p><p>The mount disappears temporarily when it drops to 0 hit points or when you dismiss it as an action. Casting this spell again re-summons the bonded mount, with all its hit points restored and any conditions removed.</p><p>You can't have more than one mount bonded by this spell or <i>find steed</i> at the same time. As an action, you can release a mount from its bond, causing it to disappear permanently.</p><p>Whenever the mount disappears, it leaves behind any objects it was wearing or carrying.</p>",
        "page": "XGE 156",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 4,
        "school": "conjuration",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Find the Path",
        "desc": "<p>This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence. If you name a destination on another plane of existence, a destination that moves (such as a mobile fortress), or a destination that isn't specific (such as \\\"a green dragon's lair\\\"), the spell fails.</p><p>For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. While you are traveling there, whenever you are presented with a choice of paths along the way, you automatically determine which path is the shortest and most direct route (but not necessarily the safest route) to the destination.</p>",
        "page": "PHB 240",
        "range": "Self",
        "components": "V, S, M",
        "material": "a set of divinatory tools—such as bones, ivory sticks, cards, teeth, or carved runes—worth 100 gp and an object from the location you wish to find",
        "ritual": false,
        "duration": "Up to 24 hours",
        "concentration": true,
        "casting_time": "1 minute",
        "level": 6,
        "school": "divination",
        "classes": [
            "bards",
            "clerics",
            "druids"
        ]
    },
    {
        "name": "Find Traps",
        "desc": "<p>You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the <i>alarm</i> spell, a <i>glyph of warding</i>, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.</p><p>This spell merely reveals that a trap is present. You don't learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense.</p>",
        "page": "PHB 241",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "divination",
        "classes": [
            "clerics",
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Finger of Death",
        "desc": "<p>You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. It takes 7d8 + 30 necrotic damage on a failed save, or half as much damage on a successful one.</p><p>A humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability.</p>",
        "page": "PHB 241",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 7,
        "school": "necromancy",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Fireball",
        "desc": "<p>A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.</p><p>The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
        "page": "PHB 241",
        "range": "150 feet",
        "components": "V, S, M",
        "material": "a tiny ball of bat guano and sulfur",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Fire Bolt",
        "desc": "<p>You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.</p><p>This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).</p>",
        "page": "PHB 242",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Fire Shield",
        "desc": "<p>Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early by using an action to dismiss it.</p><p>The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you resistance to cold damage, and the chill shield grants you resistance to fire damage.</p><p>In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame. The attacker takes 2d8 fire damage from a warm shield, or 2d8 cold damage from a cold shield.</p>",
        "page": "PHB 242",
        "range": "Self",
        "components": "V, S, M",
        "material": "a bit of phosphorus or a firefly",
        "ritual": false,
        "duration": "10 minutes",
        "concentration": false,
        "casting_time": "1 action",
        "level": 4,
        "school": "evocation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Fire Storm",
        "desc": "<p>A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a Dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one.</p><p>The fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell.</p>",
        "page": "PHB 242",
        "range": "150 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 7,
        "school": "evocation",
        "classes": [
            "clerics",
            "druids",
            "sorcerers"
        ]
    },
    {
        "name": "Flame Arrows",
        "desc": "<p>You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell's magic ends on a piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd.",
        "page": "EEPC 18, XGE 156",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "druids",
            "rangers",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Flame Blade",
        "desc": "<p>You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.</p><p>You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage.</p><p>The flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd.",
        "page": "PHB 242",
        "range": "Self",
        "components": "V, S, M",
        "material": "leaf of sumac",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 2,
        "school": "evocation",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Flame Strike",
        "desc": "<p>A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on a point within range must make a Dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th.",
        "page": "PHB 242",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "pinch of sulfur",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "evocation",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Flaming Sphere",
        "desc": "<p>A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.</p><p>As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn.</p><p>When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
        "page": "PHB 242",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a bit of tallow, a pinch of brimstone, and a dusting of powdered iron",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "conjuration",
        "classes": [
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Flesh to Stone",
        "desc": "<p>You attempt to turn one creature that you can see within range into stone. If the target's body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden. On a successful save, the creature isn't affected.</p><p>A creature restrained by this spell must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its saves three times, it is turned to stone and subjected to the petrified condition for the duration. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.</p><p>If the creature is physically broken while petrified, it suffers from similar deformities if it reverts to its original state.</p><p>If you maintain your concentration on this spell for the entire possible duration, the creature is turned to stone until the effect is removed.</p>",
        "page": "PHB 243",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a pinch of lime, water, and earth",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "transmutation",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Fly",
        "desc": "<p>You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
        "page": "PHB 243",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a wing feather from any bird",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Fog Cloud",
        "desc": "<p>You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.",
        "page": "PHB 243",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "conjuration",
        "classes": [
            "druids",
            "rangers",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Forbiddance",
        "desc": "<p>You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can't teleport into the area or use portals, such as those created by the gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the <i>plane shift</i> spell.</p><p>In addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following: celestials, elementals, fey, fiends, and undead. When a chosen creature enters the spell's area for the first time on a turn or starts its turn there, the creature takes 5d10 radiant or necrotic damage (your choice when you cast this spell).</p><p>When you cast this spell, you can designate a password. A creature that speaks the password as it enters the area takes no damage from the spell.</p><p>The spell's area can't overlap with the area of another <i>forbiddance</i> spell. If you cast <i>forbiddance</i> every day for 30 days in the same location, the spell lasts until it is dispelled, and the material components are consumed on the last casting.</p>",
        "page": "PHB 243",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000 gp",
        "ritual": true,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 6,
        "school": "abjuration",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Forcecage",
        "desc": "<p>An immobile, invisible, cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box, as you choose.</p><p>A prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart. </p><p>A prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area.</p><p>When you cast the spell, any creature that is completely inside the cage's area is trapped. Creatures only partially within the area, or those too large to fit inside the area, are pushed away from the center of the area until they are completely outside the area.</p><p>A creature inside the cage can't leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave the cage, it must first make a Charisma saving throw. On a success, the creature can use that magic to exit the cage. On a failure, the creature can't exit the cage and wastes the use of the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel.</p><p>This spell can't be dispelled by dispel magic.</p>",
        "page": "PHB 243",
        "range": "100 feet",
        "components": "V, S, M",
        "material": "ruby dust worth 1,500 gp",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 7,
        "school": "evocation",
        "classes": [
            "bards",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Foresight",
        "desc": "<p>You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can't be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration.</p><p>This spell immediately ends if you cast it again before its duration ends.</p>",
        "page": "PHB 244",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a hummingbird feather",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 9,
        "school": "divination",
        "classes": [
            "bards",
            "druids",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Freedom of Movement",
        "desc": "<p>You touch a willing creature. For the duration, the target's movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target's speed nor cause the target to be paralyzed or restrained.</p><p>The target can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it grappled. Finally, being underwater imposes no penalties on the target's movement or attacks.</p>",
        "page": "PHB 244",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a leather strap, bound around the arm or a similar appendage",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 4,
        "school": "abjuration",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Friends",
        "desc": "<p>For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you have used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it.</p>",
        "page": "PHB 244",
        "range": "Self",
        "components": "S, M",
        "material": "a small amount of makeup applied to the face as this spell is cast",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 0,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Frostbite",
        "desc": "<p>You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.</p><p>The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>",
        "page": "EEPC 18, XGE 156",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "evocation",
        "classes": [
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Gaseous Form",
        "desc": "<p>You transform a willing creature you touch, along with everything it's wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn't affected.</p><p>While in this form, the target's only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target can't fall and remains hovering in the air even when stunned or otherwise incapacitated.</p><p>While in the form of a misty cloud, the target can't talk or manipulate objects, and any objects it was carrying or holding can't be dropped, used, or otherwise interacted with. The target can't attack or cast spells.</p>",
        "page": "PHB 244",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a bit of gauze and a wisp of smoke",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Gate",
        "desc": "<p>You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration.</p><p>The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal.</p><p>Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains.</p><p>When you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn't work). If that creature is on a plane other than the one you are on, the portal opens in the named creature's immediate vicinity and draws the creature through it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the DM deems appropriate. It might leave, attack you, or help you.</p>",
        "page": "PHB 244",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a diamond worth at least 5,000 gp",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 9,
        "school": "conjuration",
        "classes": [
            "clerics",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Geas",
        "desc": "<p>You place a magical command on a creature that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide. If the creature can understand you, it must succeed on a Wisdom saving throw or become charmed by you for the duration. While the creature is charmed by you, it takes 5d10 psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that can't understand you is unaffected by the spell.</p><p>You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends.</p><p>You can end the spell early by using an action to dismiss it. A <i>remove curse</i>, <i>greater restoration</i>, or <i>wish</i> spell also ends it.</p>",
        "higher_level": "When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. When you cast this spell using a spell slot of 9th level, the spell lasts until it is ended by one of the spells mentioned above.",
        "page": "PHB 244",
        "range": "60 feet",
        "components": "V",
        "ritual": false,
        "duration": "30 days",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 5,
        "school": "enchantment",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "paladins",
            "wizards"
        ]
    },
    {
        "name": "Gentle Repose",
        "desc": "<p>You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead.</p><p>The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as <i>raise dead</i>.</p>",
        "page": "PHB 245",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a pinch of salt and one copper piece placed on each of the corpse's eyes, which must remain there for the duration",
        "ritual": true,
        "duration": "10 days",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "necromancy",
        "classes": [
            "clerics",
            "wizards"
        ]
    },
    {
        "name": "Giant Insect",
        "desc": "<p>You transform up to ten centipedes, three spiders, five wasps, or one scorpion within range into giant versions of their natural forms for the duration. A centipede becomes a giant centipede, a spider becomes a giant spider, a wasp becomes a giant wasp, and a scorpion becomes a giant scorpion.</p><p>Each creature obeys your verbal commands, and in combat, they act on your turn each round. The DM has the statistics for these creatures and resolves their actions and movement.</p><p>A creature remains in its giant size for the duration, until it drops to 0 hit points, or until you use an action to dismiss the effect on it.</p><p>The DM might allow you to choose different targets. For example, if you transform a bee, its giant version might have the same statistics as a giant wasp.</p>",
        "page": "PHB 245",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "transmutation",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Glibness",
        "desc": "<p>Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful.</p>",
        "page": "PHB 245",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 8,
        "school": "transmutation",
        "classes": [
            "bards",
            "warlocks"
        ]
    },
    {
        "name": "Globe of Invulnerability",
        "desc": "<p>An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration.</p><p>Any spell of 5th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such spells.</p>",
        "higher_level": "When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th.",
        "page": "PHB 245",
        "range": "Self",
        "components": "V, S, M",
        "material": "a glass or crystal bead that shatters when the spell ends",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "abjuration",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Glyph of Warding",
        "desc": "<p>When you cast this spell, you inscribe a glyph that potentially harms other creatures, either upon a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. The glyph can cover an area no larger than 10 feet in diameter. If the surface or object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.</p><p>The glyph is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found.</p><p>You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, the most common triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends.</p><p>You can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment. You can also set conditions for creatures that don't trigger the glyph, such as those who say a certain password.</p><p>When you inscribe the glyph, choose <i>explosive runes</i> or a <i>spell glyph</i>.</p><p><b>Explosive Runes.</b> When triggered, the glyph erupts with magical energy in a 20-foot-radius sphere centered on the glyph. The sphere spreads around corners. Each creature in the area must make a Dexterity saving throw. A creature takes 5d8 acid, cold, fire, lightning, or thunder damage on a failed saving throw (your choice when you create the glyph), or half as much damage on a successful one.</p><p><b>Spell Glyph.</b> You can store a prepared spell of 3rd level or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell is cast. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires concentration, it lasts until the end of its full duration.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the damage of an <i>explosive runes</i> glyph increases by 1d8 for each slot level above 3rd. If you create a <i>spell glyph,</i> you can store any spell of up to the same level as the slot you use for the <i>glyph of warding</i>.",
        "page": "PHB 245",
        "range": "Touch",
        "components": "V, S, M",
        "material": "incense and powdered diamond worth at least 200 gp, the spell consumes",
        "ritual": false,
        "duration": "Until dispelled",
        "concentration": false,
        "casting_time": "1 hour",
        "level": 3,
        "school": "abjuration",
        "classes": [
            "bards",
            "clerics",
            "wizards"
        ]
    },
    {
        "name": "Goodberry",
        "desc": "<p>Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for a day.</p><p>The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell.</p>",
        "page": "PHB 246",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a sprig of mistletoe",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "transmutation",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Grasping Vine",
        "desc": "<p>You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine. </p><p>Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns.</p>",
        "page": "PHB 246",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 4,
        "school": "conjuration",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Grease",
        "desc": "<p>Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration.</p><p>When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.</p>",
        "page": "PHB 246",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a bit of pork rind or butter",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "conjuration",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Greater Invisibility",
        "desc": "<p>You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person.</p>",
        "page": "PHB 246",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "illusion",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Greater Restoration",
        "desc": "<p>You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the target's exhaustion level by one, or end one of the following effects on the target:</p><ul><li>One effect that charmed or petrified the target</li><li>One curse, including the target's attunement to a cursed magic item</li><li>Any reduction to one of the target's ability scores</li><li>One effect reducing the target's hit point maximum</li>",
        "page": "PHB 246",
        "range": "Touch",
        "components": "V, S, M",
        "material": "diamond dust worth at least 100 gp, which the spell consumes",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "abjuration",
        "classes": [
            "bards",
            "clerics",
            "druids"
        ]
    },
    {
        "name": "Green-Flame Blade",
        "desc": "<p>As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and green fire leaps from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.</p><p>This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 fire damage to the target, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level and 17th level.</p>",
        "page": "SCAG 143",
        "range": "5 feet",
        "components": "V, M",
        "material": "a weapon",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Guardian of Faith",
        "desc": "<p>A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity.</p><p>Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a Dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage.</p>",
        "page": "PHB 246",
        "range": "30 feet",
        "components": "V",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 4,
        "school": "conjuration",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Guards and Wards",
        "desc": "<p>You create a ward that protects up to 2,500 square feet of floor space (an area 50 feet square, or one hundred 5-foot squares or twenty-five 10-foot squares). The warded area can be up to 20 feet tall, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell.</p><p>When you cast this spell, you can specify individuals that are unaffected by any or all of the effects that you choose. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.</p><p><i>Guards and wards</i> creates the following effects within the warded area.</p><p><b>Corridors.</b> Fog fills all the warded corridors, making them heavily obscured. In addition, at each intersection or branching passage offering a choice of direction, there is a 50 percent chance that a creature other than you will believe it is going in the opposite direction from the one it chooses.</p><p><b>Doors.</b> All doors in the warded area are magically locked, as if sealed by an <i>arcane lock</i> spell. In addition, you can cover up to ten doors with an illusion (equivalent to the illusory object function of the <i>minor illusion</i> spell) to make them appear as plain sections of wall. </p><p><b>Stairs.</b> Webs fill all stairs in the warded area from top to bottom, as the <i>web</i> spell. These strands regrow in 10 minutes if they are burned or torn away while guards and wards lasts.</p><p><b>Other Spell Effect.</b> You can place your choice of one of the following magical effects within the warded area of the stronghold.</p><ul><li>Place <i>dancing lights</i> in four corridors. You can designate a simple program that the lights repeat as long as <i>guards and wards</i> lasts.</li><li>Place <i>magic mouth</i> in two locations.</li><li>Place <i>stinking cloud</i> in two locations. The vapors appear in the places you designate; they return within 10 minutes if dispersed by wind while <i>guards and wards</i> lasts.</li><li>Place a constant <i>gust of wind</i> in one corridor or room.</li><li>Place a <i>suggestion</i> in one location. You select an area of up to 5 feet square, and any creature that enters or passes through the area receives the suggestion mentally.</li></ul><p>The whole warded area radiates magic. A <i>dispel magic</i> cast on a specific effect, if successful, removes only that effect.</p><p>You can create a permanently guarded and warded structure by casting this spell there every day for one year.</p>",
        "page": "PHB 248",
        "range": "Touch",
        "components": "V, S, M",
        "material": "burning incense, a small measure of brimstone and oil, a knotted string, a small amount of umber hulk blood, and a small silver rod worth at least 10 gp",
        "ritual": false,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 6,
        "school": "abjuration",
        "classes": [
            "bards",
            "wizards"
        ]
    },
    {
        "name": "Guardian of Nature",
        "desc": "<p>A nature spirit answers your call and transforms you into a powerful guardian. The transformation lasts until the spell ends. You choose one of the following forms to assume: Primal Beast or Great Tree.</p><p><b>Primal Beast.</b> Bestial fur covers your body, your facial features become feral, and you gain the following benefits:</p><ul><li>Your walking speed increases by 10 feet.</li><li>You gain darkvision with a range of 120 feet.</li><li>You make Strength-based attack rolls with advantage.</li><li>Your melee weapon attacks deal an extra 1d6 force damage on a hit.</li></ul><p><b>Great Tree.</b> Your skin appears barky, leaves sprout from your hair, and you gain the following benefits:</p><ul><li>You gain 10 temporary hit points.</li><li>You make Constitution saving throws with advantage.</li><li>You make Dexterity- and Wisdom-based attack rolls with advantage.</li><li>While you are on the ground, the ground within 15 feet of you is difficult terrain for your enemies.</li></ul>",
        "page": "XGE 157",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 4,
        "school": "transmutation",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Guidance",
        "desc": "<p>You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.</p>",
        "page": "PHB 248",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 0,
        "school": "divination",
        "classes": [
            "clerics",
            "druids"
        ]
    },
    {
        "name": "Guiding Hand",
        "desc": "<p>You create a Tiny incorporeal hand of shimmering light in an unoccupied space you can see within range. The hand exists for the duration, but it disappears if you teleport or you travel to a different plane of existence.</p><p>When the hand appears, you name one major landmark, such as a city, mountain, castle, or battlefield on the same plane of existence as you. Someone in history must have visited the site and mapped it. If the landmark appears on no map in existence, the spell fails. Otherwise, whenever you move toward the hand, it moves away from you at the same speed you moved, and it moves in the direction of the landmark, always remaining 5 feet away from you.</p><p>If you don't move toward the hand, it remains in place until you do and beckons for you to follow once every 1d4 minutes.</p>",
        "page": "UA:SS 3",
        "range": "5 feet",
        "components": "V, S",
        "ritual": true,
        "duration": "Up to 8 hours",
        "concentration": true,
        "casting_time": "1 minute",
        "level": 1,
        "school": "divination",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Guiding Bolt",
        "desc": "<p>A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
        "page": "PHB 248",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "1 round",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Gust",
        "desc": "<p>You seize the air and compel it to create one of the following effects at a point you can see within range:</p><ul><li>One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you.</li><li>You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage.</li><li>You create a harmless sensory effect using air, such as causing leaves to rustle, wind to slam shutters closed, or your clothing to ripple in a breeze.</li></ul>",
        "page": "EEPC 19, XGE 157",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "transmutation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Gust of Wind",
        "desc": "<p>A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line.</p><p>Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.</p><p>The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.</p><p>As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you.</p>",
        "page": "PHB 248",
        "range": "Self",
        "components": "V, S, M",
        "material": "a legume seed",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "evocation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Hail of Thorns",
        "desc": "<p>The next time you hit a creature with a ranged weapon attack before this spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effects of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one.</p>",
        "higher_level": "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10).",
        "page": "PHB 249",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "conjuration",
        "classes": [
            "rangers"
        ]
    },
    {
        "name": "Hallow",
        "desc": "<p>You touch a point and infuse an area around it with holy (or unholy) power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect a <i>hallow</i> spell. The affected area is subject to the following effects.</p><p>First, celestials, elementals, fey, fiends, and undead can't enter the area, nor can such creatures charm, frighten, or possess creatures within it. Any creature charmed, frightened, or possessed by such a creature is no longer charmed, frightened, or possessed upon entering the area. You can exclude one or more of those types of creatures from this effect.</p><p>Second, you can bind an extra effect to the area. Choose the effect from the following list, or choose an effect offered by the DM. Some of these effects apply to creatures in the area; you can designate whether the effect applies to all creatures, creatures that follow a specific deity or leader, or creatures of a specific sort, such as ores or trolls. When a creature that would be affected enters the spell's area for the first time on a turn or starts its turn there, it can make a Charisma saving throw. On a success, the creature ignores the extra effect until it leaves the area.</p><p><b>Courage.</b> Affected creatures can't be frightened while in the area.</p><p><b>Darkness.</b> Darkness fills the area. Normal light, as well as magical light created by spells of a lower level than the slot you used to cast this spell, can't illuminate the area.</p><p><b>Daylight.</b> Bright light fills the area. Magical darkness created by spells of a lower level than the slot you used to cast this spell can't extinguish the light.</p><p><b>Energy Protection.</b> Affected creatures in the area have resistance to one damage type of your choice, except for bludgeoning, piercing, or slashing.</p><p><b>Energy Vulnerability.</b> Affected creatures in the area have vulnerability to one damage type of your choice, except for bludgeoning, piercing, or slashing.</p><p><b>Everlasting Rest.</b> Dead bodies interred in the area can't be turned into undead.</p><p><b>Extradimensional Interference.</b> Affected creatures can't move or travel using teleportation or by extradimensional or interplanar means.</p><p><b>Fear.</b> Affected creatures are frightened while in the area.</p><p><b>Silence.</b> No sound can emanate from within the area, and no sound can reach into it.</p><p><b>Tongues.</b> Affected creatures can communicate with any other creature in the area, even if they don't share a common language.</p>",
        "page": "PHB 249",
        "range": "Touch",
        "components": "V, S, M",
        "material": "herbs, oils, and incense worth at least 1,000 gp, which the spell consumes",
        "ritual": false,
        "duration": "Until dispelled",
        "concentration": false,
        "casting_time": "24 hours",
        "level": 5,
        "school": "evocation",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Hallucinatory Terrain",
        "desc": "<p>You make natural terrain in a 150-foot cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren't changed in appearance.</p><p>The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to see through the illusion. If the difference isn't obvious by touch, a creature carefully examining the illusion can attempt an Intelligence (Investigation) check against your spell save DC to disbelieve it. A creature who discerns the illusion for what it is sees it as a vague image superimposed on the terrain.</p>",
        "page": "PHB 249",
        "range": "300 feet",
        "components": "V, S, M",
        "material": "a stone, a twig, and a bit of green plant",
        "ritual": false,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 4,
        "school": "illusion",
        "classes": [
            "bards",
            "druids",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Harm",
        "desc": "<p>You unleash a virulent disease on a creature that you can see within range. The target must make a Constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save. The damage can't reduce the target's hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creature's hit point maximum to return to normal before that time passes.</p>",
        "page": "PHB 249",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 6,
        "school": "necromancy",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Haste",
        "desc": "<p>Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.</p><p>When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it.</p>",
        "page": "PHB 250",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a shaving of licorice root",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Heal",
        "desc": "<p>Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. This spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on constructs or undead.</p>",
        "higher_level": "When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th.",
        "page": "PHB 250",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 6,
        "school": "evocation",
        "classes": [
            "clerics",
            "druids"
        ]
    },
    {
        "name": "Healing Elixir",
        "desc": "<p>You create a healing elixir in a simple vial that appears in your hand. The elixir retains its potency for the duration or until it's consumed, at which point the vial vanishes.</p><p>As an action, a creature can drink the elixir or administer it to another creature. The drinker regains 2d4 + 2 hit points.</p>",
        "page": "UA:SS 3",
        "range": "Self",
        "components": "V, S, M",
        "material": "alchemist's supplies",
        "ritual": false,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 1,
        "school": "conjuration",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Healing Word",
        "desc": "<p>A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.",
        "page": "PHB 250",
        "range": "60 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "bards",
            "clerics",
            "druids"
        ]
    },
    {
        "name": "Healing Spirit",
        "desc": "<p>You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice).</p><p>Until the spell ends, whenever you or a creature you can see moves into the spirits space for the first time on a turn or starts its turn there, you can cause the spirit to restore 1d6 hit points to that creature (no action required). The spirit can't heal constructs or undead.</p><p>As a bonus action on your turn, you can move the spirit up to 30 feet to a space you can see.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d6 for each slot level above 2nd.",
        "page": "XGE 157",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 2,
        "school": "conjuration",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Heat Metal",
        "desc": "<p>Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.</p><p>If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
        "page": "PHB 250",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a piece of iron and a flame",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "bards",
            "druids"
        ]
    },
    {
        "name": "Hellish Rebuke",
        "desc": "<p>You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.",
        "page": "PHB 250",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 reaction, which you take in response to being damaged by a creature within 60 feet of you that you can see",
        "level": 1,
        "school": "evocation",
        "classes": [
            "warlocks"
        ]
    },
    {
        "name": "Heroes' Feast",
        "desc": "<p>You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over. Up to twelve other creatures can partake of the feast.</p><p>A creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all Wisdom saving throws with advantage. Its hit point maximum also increases by 2d10, and it gains the same number of hit points. These benefits last for 24 hours.</p>",
        "page": "PHB 250",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a gem-encrusted bowl worth at least 1,000 gp, which the spell consumes",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 6,
        "school": "conjuration",
        "classes": [
            "clerics",
            "druids"
        ]
    },
    {
        "name": "Heroism",
        "desc": "<p>A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell.</p>",
        "page": "PHB 250",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "enchantment",
        "classes": [
            "bards",
            "paladins"
        ]
    },
    {
        "name": "Hex",
        "desc": "<p>You place a curse on a creature that you can see within range. Until the spell ends, you deals an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability.</p><p>If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.</p><p>A <i>remove curse</i> cast on the target ends this spell early.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.",
        "page": "PHB 251",
        "range": "90 feet",
        "components": "V, S, M",
        "material": "the petrified eye of a newt",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "enchantment",
        "classes": [
            "warlocks"
        ]
    },
    {
        "name": "Hold Monster",
        "desc": "<p>Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them.",
        "page": "PHB 251",
        "range": "90 feet",
        "components": "V, S, M",
        "material": "a small, straight piece of iron",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Hold Person",
        "desc": "<p>Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.",
        "page": "PHB 251",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a small, straight piece of iron",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "enchantment",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Holy Aura",
        "desc": "<p>Divine light washes out from you and coalesces in a soft radiance in a 30-foot radius around you. Creatures of your choice in that radius when you cast this spell shed dim light in a 5-foot radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends. In addition, when a fiend or an undead hits an affected creature with a melee attack, the aura flashes with brilliant light. The attacker must succeed on a Constitution saving throw or be blinded until the spell ends.</p>",
        "page": "PHB 251",
        "range": "Self",
        "components": "V, S, M",
        "material": "a tiny reliquary worth at least 1,000 gp containing a sacred relic, such as a scrap of cloth from a saint's robe or a piece of parchment from a religious text",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 8,
        "school": "abjuration",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Holy Weapon",
        "desc": "<p>You imbue a weapon you touch with holy power. Until the spell ends, the weapon emits bright light in a 30-foot radius and dim light for an additional 30 feet. In addition, weapon attacks made with it deal an extra 2d8 radiant damage on a hit. If the weapon isn't already a magic weapon, it becomes one for the duration.</p><p>As a bonus action on your turn, you can dismiss this spell and cause the weapon to emit a burst of radiance. Each creature of your choice that you can see within 30 feet of you must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, a creature takes half as much damage and isn't blinded. At the end of each of its turns, a blinded creature can make a Constitution saving throw, ending the effect on itself on a success.</p>",
        "page": "XGE 157",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 5,
        "school": "evocation",
        "classes": [
            "clerics",
            "paladins"
        ]
    },
    {
        "name": "Hunger of Hadar",
        "desc": "<p>You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point with range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded.</p><p>The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherworldly tentacles rub against it.</p>",
        "page": "PHB 251",
        "range": "150 feet",
        "components": "V, S, M",
        "material": "a pickled octopus tentacle",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "conjuration",
        "classes": [
            "warlocks"
        ]
    },
    {
        "name": "Hunter's Mark",
        "desc": "<p>You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.",
        "page": "PHB 251",
        "range": "90 feet",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "divination",
        "classes": [
            "rangers"
        ]
    },
    {
        "name": "Hypnotic Pattern",
        "desc": "<p>You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0.</p><p>The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.</p>",
        "page": "PHB 252",
        "range": "120 feet",
        "components": "S, M",
        "material": "a glowing stick of incense or a crystal vial filled with phosphorescent material",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "illusion",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Ice Knife",
        "desc": "<p>You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 cold damage.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st.",
        "page": "EEPC 19, XGE 157",
        "range": "60 feet",
        "components": "S, M",
        "material": "a drop of water or a piece of ice",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "conjuration",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Ice Storm",
        "desc": "<p>A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one.</p><p>Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.</p>",
        "higher_level": "When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th.",
        "page": "PHB 252",
        "range": "300 feet",
        "components": "V, S, M",
        "material": "a pinch of dust and a few drops of water",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 4,
        "school": "evocation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Identify",
        "desc": "<p>You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.</p><p>If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.</p>",
        "page": "PHB 252",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a pearl worth at least 100 gp and an owl feather",
        "ritual": true,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 1,
        "school": "divination",
        "classes": [
            "bards",
            "wizards"
        ]
    },
    {
        "name": "Illusory Dragon",
        "desc": "<p>By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell's duration and occupies its space, as if it were a creature.</p><p>When the illusion appears, any of your enemies that can see it must succeed on a Wisdom saving throw or become frightened of it for 1 minute. If a frightened creature ends its turn in a location where it doesn't have line of sight to the illusion, it can repeat the saving throw, ending the effect on itself on a success.</p><p>As a bonus action on your turn, you can move the illusion up to 60 feet. At any point during its movement, you can cause it to exhale a blast of energy in a 60-foot cone originating from its space. When you create the dragon, choose a damage type: acid, cold, fire, lightning, necrotic, or poison. Each creature in the cone must make an Intelligence saving throw, taking 7d6 damage of the chosen damage type on a failed save, or half as much damage on a successful one.</p><p>The illusion is tangible because of the shadow stuff used to create it, but attacks miss it automatically, it succeeds on all saving throws, and it is immune to all damage and conditions. A creature that uses an action to examine the dragon can determine that it is an illusion by succeeding on an Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through it and has advantage on saving throws against its breath.</p>",
        "page": "XGE 157",
        "range": "120 feet",
        "components": "S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 8,
        "school": "illusion",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Illusory Script",
        "desc": "<p>You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration.</p><p>To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know.</p><p>Should the spell be dispelled, the original script and the illusion both disappear.</p><p>A creature with truesight can read the hidden message.</p>",
        "page": "PHB 252",
        "range": "Touch",
        "components": "S, M",
        "material": "a lead-based ink worth at least 10 gp, which this spell consumes",
        "ritual": true,
        "duration": "10 days",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 1,
        "school": "illusion",
        "classes": [
            "bards",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Immolation",
        "desc": "<p>Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can't be extinguished by nonmagical means.</p><p>If damage from this spell kills a target, the target is turned to ash.</p>",
        "page": "EEPC 19, XGE 158",
        "range": "90 feet",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Imprisonment",
        "desc": "<p>You create a magical restraint to hold a creature that you can see within range. The target must succeed on a Wisdom saving throw or be bound by the spell; if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesn't need to breathe, eat, or drink, and it doesn't age. Divination spells can't locate or perceive the target.</p><p>When you cast the spell, you choose one of the following forms of imprisonment.</p><p><b>Burial.</b> The target is entombed far beneath the earth in a sphere of magical force that is just large enough to contain the target. Nothing can pass through the sphere, nor can any creature teleport or use planar travel to get into or out of it.</p><p>The special component for this version of the spell is a small mithral orb.</p><p><b>Chaining.</b> Heavy chains, firmly rooted in the ground, hold the target in place. The target is restrained until the spell ends, and it can't move or be moved by any means until then.</p><p>The special component for this version of the spell is a fine chain of precious metal.</p><p><b>Hedged Prison.</b> The spell transports the target into a tiny demiplane that is warded against teleportation and planar travel. The demiplane can be a labyrinth, a cage, a tower, or any similar confined structure or area of your choice.</p><p>The special component for this version of the spell is a miniature representation of the prison made from jade.</p><p><b>Minimus Containment.</b> The target shrinks to a height of 1 inch and is imprisoned inside a gemstone or similar object. Light can pass through the gemstone normally (allowing the target to see out and other creatures to see in), but nothing else can pass through, even by means of teleportation or planar travel. The gemstone can't be cut or broken while the spell remains in effect.</p><p>The special component for this version of the spell is a large, transparent gemstone, such as a corundum, diamond, or ruby.</p><p><b>Slumber.</b> The target falls asleep and can't be awoken.</p><p>The special component for this version of the spell consists of rare soporific herbs.</p><p><b>Ending the Spell.</b> During the casting of the spell, in any of its versions, you can specify a condition that will cause the spell to end and release the target. The condition can be as specific or as elaborate as you choose, but the DM must agree that the condition is reasonable and has a likelihood of coming to pass. The conditions can be based on a creature's name, identity, or deity but otherwise must be based on observable actions or qualities and not based on intangibles such as level, class, or hit points.</p><p>A <i>dispel magic</i> spell can end the spell only if it is cast as a 9th-level spell, targeting either the prison or the special component used to create it.</p><p>You can use a particular special component to create only one prison at a time. If you cast the spell again using the same component, the target of the first casting is immediately freed from its binding.</p>",
        "page": "PHB 252",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a vellum depiction or a carved statuette in the likeness of the target, and a special component that varies according to the version of the spell you choose, worth at least 500 gp per Hit Die of the target",
        "ritual": false,
        "duration": "Until dispelled",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 9,
        "school": "abjuration",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Incendiary Cloud",
        "desc": "<p>A swirling cloud of smoke shot through with white-hot embers appears in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.</p><p>When the cloud appears, each creature in it must make a Dexterity saving throw. A creature takes 10d8 fire damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.</p><p>The cloud moves 10 feet directly away from you in a direction that you choose at the start of each of your turns.</p>",
        "page": "PHB 253",
        "range": "150 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 8,
        "school": "conjuration",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Infernal Calling",
        "desc": "<p>Uttering a dark incantation, you summon a devil from the Nine Hells. You choose the devil's type, which must be one of challenge rating 6 or lower, such as a barbed devil or a bearded devil. The devil appears in an unoccupied space that you can see within range. The devil disappears when it drops to 0 hit points or when the spell ends.</p><p>The devil is unfriendly toward you and your companions. Roll initiative for the devil, which has its own turns. It is under the Dungeon Master's control and acts according to its nature on each of its turns, which might result in its attacking you if it thinks it can prevail, or trying to tempt you to undertake an evil act in exchange for limited service. The DM has the creature's statistics.</p><p>On each of your turns, you can try to issue a verbal command to the devil (no action required by you). It obeys the command if the likely outcome is in accordance with its desires, especially if the result would draw you toward evil. Otherwise, you must make a Charisma (Deception, Intimidation, or Persuasion) check contested by its Wisdom (Insight) check. You make the check with advantage if you say the devil's true name. If your check fails, the devil becomes immune to your verbal commands for the duration of the spell, though it can still carry out your commands if it chooses. If your check succeeds, the devil carries out your command—such as \\\"attack my enemies,\\\" \\\"explore the room ahead,\\\" or \\\"bear this message to the queen\\\"—until it completes the activity, at which point it returns to you to report having done so.</p><p>If your concentration ends before the spell reaches its full duration, the devil doesn‘t disappear if it has become immune to your verbal commands. Instead, it acts in whatever manner it chooses for 3d6 minutes, and then it disappears.</p><p>If you possess an individual devil's talisman, you can summon that devil if it is of the appropriate challenge rating plus 1, and it obeys all your commands, with no Charisma checks required.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th.",
        "page": "XGE 158",
        "range": "90 feet",
        "components": "V, S, M",
        "material": "a ruby worth at least 999 gp",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 minute",
        "level": 5,
        "school": "conjuration",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Infestation",
        "desc": "<p>You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.</p><p>The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>",
        "page": "XGE 158",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a living flea",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "conjuration",
        "classes": [
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Inflict Wounds",
        "desc": "<p>Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.",
        "page": "PHB 253",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "necromancy",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Insect Plague",
        "desc": "<p>Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain.</p><p>When the area appears, each creature in it must make a Constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th.",
        "page": "PHB 254",
        "range": "300 feet",
        "components": "V, S, M",
        "material": "a few grains of sugar, some kernels of grain, and a smear of fat",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "conjuration",
        "classes": [
            "clerics",
            "druids",
            "sorcerers"
        ]
    },
    {
        "name": "Investiture of Flame",
        "desc": "<p>Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits:</p><ul><li>You are immune to fire damage and have resistance to cold damage.</li><li>Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage.</li><li>You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saying throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one.</li></ul>",
        "page": "EEPC 19, XGE 159",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "transmutation",
        "classes": [
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Investiture of Ice",
        "desc": "<p>Until the spell ends, ice rimes your body, and you gain the following benefits:</p><ul><li>You are immune to cold damage and have resistance to fire damage.</li><li>You can move across difficult terrain created by ice or snow without spending extra movement.</li><li>The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you.</li><li>You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn.</li></ul>",
        "page": "EEPC 19, XGE 159",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "transmutation",
        "classes": [
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Investiture of Stone",
        "desc": "<p>Until the spell ends, bits of rock spread across your body, and you gain the following benefits:</p><ul><li>You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.</li><li>You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone.</li><li>You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn.</li></ul>",
        "page": "EEPC 19, XGE 159",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "transmutation",
        "classes": [
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Investiture of Wind",
        "desc": "<p>Until the spell ends, wind whirls around you, and you gain the following benefits:</p><ul><li>Ranged weapon attacks made against you have disadvantage on the attack roll.</li><li>You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it.</li><li>You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube.</li></ul>",
        "page": "EEPC 20, XGE 160",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "transmutation",
        "classes": [
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Invisibility",
        "desc": "<p>A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
        "page": "PHB 254",
        "range": "Touch",
        "components": "V, S, M",
        "material": "an eyelash encased in gum arabic",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "illusion",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Invulnerability",
        "desc": "<p>You are immune to all damage until the spell ends.</p>",
        "page": "XGE 160",
        "range": "Self",
        "components": "V, S, M",
        "material": "a small piece of adamantine worth at least 500 gp, which the spell consumes",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 9,
        "school": "abjuration",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Jump",
        "desc": "<p>You touch a creature. The creature's jump distance is tripled until the spell ends.</p>",
        "page": "PHB 254",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a grasshopper's hind leg",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "transmutation",
        "classes": [
            "druids",
            "rangers",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Knock",
        "desc": "<p>Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access.</p><p>A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked.</p><p>If you choose a target that is held shut with arcane lock, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally.</p><p>When you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object.</p>",
        "page": "PHB 254",
        "range": "60 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Legend Lore",
        "desc": "<p>Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isn't of legendary importance, you gain no information. The more information you already have about the thing, the more precise and detailed the information you receive is.</p><p>The information you learn is accurate but might be couched in figurative language. For example, if you have a mysterious magic axe on hand, the spell might yield this information: \\\"Woe to the evildoer whose hand touches the axe, for even the haft slices the hand of the evil ones. Only a true Child of Stone, lover and beloved of Moradin, may awaken the true powers of the axe, and only with the sacred word <i>Rudnogg</i> on the lips.\\\"</p>",
        "page": "PHB 254",
        "range": "Self",
        "components": "V, S, M",
        "material": "incense worth at least 250 gp, which the spell consumes, and four ivory strips worth at least 50 gp each",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 5,
        "school": "divination",
        "classes": [
            "bards",
            "clerics",
            "wizards"
        ]
    },
    {
        "name": "Leomund's Secret Chest",
        "desc": "<p>You hide a chest, and all its contents, on the Ethereal Plane. You must touch the chest and the miniature replica that serves as a material component for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet).</p><p>While the chest remains on the Ethereal Plane, you can use an action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 5 feet of you. You can send the chest back to the Ethereal Plane by using an action and touching both the chest and the replica.</p><p>After 60 days, there is a cumulative 5 percent chance per day that the spell's effect ends. This effect ends if you cast this spell again, if the smaller replica chest is destroyed, or if you choose to end the spell as an action. If the spell ends and the larger chest is on the Ethereal Plane, it is irretrievably lost.</p>",
        "page": "PHB 254",
        "range": "Touch",
        "components": "V, S, M",
        "material": "an exquisite chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth at least 5,000 gp, and a Tiny replica made from the same materials worth at least 50 gp",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 4,
        "school": "conjuration",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Leomund's Tiny Hut",
        "desc": "<p>A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.</p><p>Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can't extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.</p><p>Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside.</p>",
        "page": "PHB 255",
        "range": "Self",
        "components": "V, S, M",
        "material": "a small crystal bead",
        "ritual": true,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 3,
        "school": "evocation",
        "classes": [
            "bards",
            "wizards"
        ]
    },
    {
        "name": "Lesser Restoration",
        "desc": "<p>You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.</p>",
        "page": "PHB 255",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "abjuration",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "paladins",
            "rangers"
        ]
    },
    {
        "name": "Levitate",
        "desc": "<p>One creature or object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.</p><p>The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target's altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell's range.</p><p>When the spell ends, the target floats gently to the ground if it is still aloft.</p>",
        "page": "PHB 255",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Life Transference",
        "desc": "<p>You sacrifice some of your health to mend another creature's injuries. You take 4d8 necrotic damage, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
        "page": "XGE 160",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "necromancy",
        "classes": [
            "clerics",
            "wizards"
        ]
    },
    {
        "name": "Light",
        "desc": "<p>You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.</p><p>If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.</p>",
        "page": "PHB 255",
        "range": "Touch",
        "components": "V, M",
        "material": "a firefly or phosphorescent moss",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "evocation",
        "classes": [
            "bards",
            "clerics",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Lightning Arrow",
        "desc": "<p>The next time you make a ranged weapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon's normal damage.</p><p>Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one.</p><p>The piece of ammunition or weapon then returns to its normal form.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd.",
        "page": "PHB 255",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "rangers"
        ]
    },
    {
        "name": "Lightning Bolt",
        "desc": "<p>A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one.</p><p>The lightning ignites flammable objects in the area that aren't being worn or carried.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
        "page": "PHB 255",
        "range": "Self",
        "components": "V, S, M",
        "material": "a bit of fur and a rod of amber, crystal, or glass",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Lightning Lure",
        "desc": "<p>You create a lash of lightning energy that strikes at one creature of your choice that you can see within range. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you.</p><p>This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</p>",
        "page": "SCAG 143",
        "range": "15 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Locate Animals or Plants",
        "desc": "<p>Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present.</p>",
        "page": "PHB 256",
        "range": "Self",
        "components": "V, S, M",
        "material": "a bit of fur from a bloodhound",
        "ritual": true,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "divination",
        "classes": [
            "bards",
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Locate Creature",
        "desc": "<p>Describe or name a creature that is familiar to you. You sense the direction to the creature's location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement.</p><p>The spell can locate a specific creature known to you, or the nearest creature of a specific kind (such as a human or a unicorn), so long as you have seen such a creature up close—within 30 feet—at least once. If the creature you described or named is in a different form, such as being under the effects of a <i>polymorph</i> spell, this spell doesn't locate the creature.</p><p>This spell can't locate a creature if running water at least 10 feet wide blocks a direct path between you and the creature.</p>",
        "page": "PHB 256",
        "range": "Self",
        "components": "V, S, M",
        "material": "a bit of fur from a bloodhound",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "divination",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "paladins",
            "rangers",
            "wizards"
        ]
    },
    {
        "name": "Locate Object",
        "desc": "<p>Describe or name an object that is familiar to you. You sense the direction to the object's location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.</p><p>The spell can locate a specific object known to you, as long as you have seen it up close—within 30 feet—at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.</p><p>This spell can't locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object.</p>",
        "page": "PHB 256",
        "range": "Self",
        "components": "V, S, M",
        "material": "a forked twig",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "divination",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "paladins",
            "rangers",
            "wizards"
        ]
    },
    {
        "name": "Longstrider",
        "desc": "<p>You touch a creature. The target's speed increases by 10 feet until the spell ends.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each spell slot above 1st.",
        "page": "PHB 256",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a pinch of dirt",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "transmutation",
        "classes": [
            "bards",
            "druids",
            "rangers",
            "wizards"
        ]
    },
    {
        "name": "Maddening Darkness",
        "desc": "<p>Magical darkness spreads from a point you choose within range to fill a 60-foot-radius sphere until the spell ends. The darkness spreads around corners. A creature with darkvision can't see through this darkness. Nonmagical light, as well as light created by spells of 8th level or lower, can't illuminate the area.</p><p>Shrieks, gibbering, and mad laughter can be heard within the sphere. Whenever a creature starts its turn in the sphere, it must make a Wisdom saving throw, taking 8d8 psychic damage on a failed save, or half as much damage on a successful one.</p>",
        "page": "XGE 160",
        "range": "150 feet",
        "components": "V, M",
        "material": "a drop of pitch mixed with a drop of mercury",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 8,
        "school": "evocation",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Maelstrom",
        "desc": "<p>A swirling mass of 5-foot-deep water appears in a 30-foot radius centered on a point you can see within range. The point must be on the ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center.</p>",
        "page": "EEPC 20, XGE 160",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "paper or leaf in the shape of a funnel",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "evocation",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Mage Armor",
        "desc": "<p>You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.</p>",
        "page": "PHB 256",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a piece of cured leather",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "abjuration",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Mage Hand",
        "desc": "<p>A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.</p><p>You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.</p><p>The hand can't attack, activate magic items, or carry more than 10 pounds.</p>",
        "page": "PHB 256",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "conjuration",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Magic Circle",
        "desc": "<p>You create a 10-foot-radius, 20-foot-tall cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the cylinder intersects with the floor or other surface.</p><p>Choose one or more of the following types of creatures: celestials, elementals, fey, fiends, or undead. The circle affects a creature of the chosen type in the following ways:</p><ul><li>The creature can't willingly enter the cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw.</li><li>The creature has disadvantage on attack rolls against targets within the cylinder.</li><li>Targets within the cylinder can't be charmed, frightened, or possessed by the creature.</li></ul><p>When you cast this spell, you can elect to cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the cylinder and protecting targets outside it.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd.",
        "page": "PHB 256",
        "range": "10 feet",
        "components": "V, S, M",
        "material": "holy water or powdered silver and iron worth at least 100 gp, which the spell consumes",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 3,
        "school": "abjuration",
        "classes": [
            "clerics",
            "paladins",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Magic Jar",
        "desc": "<p>Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spell's material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container's space. You can't move or use reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the spell) or attempting to possess a humanoids body.</p><p>You can attempt to possess any humanoid within 100 feet of you that you can see (creatures warded by a <i>protection from evil and good</i> or <i>magic circle</i> spell can't be possessed). The target must make a Charisma saving throw. On a failure, your soul moves into the target's body, and the target's soul becomes trapped in the container. On a success, the target resists your efforts to possess it, and you can't attempt to possess it again for 24 hours.</p><p>Once you possess a creature's body, you control it. Your game statistics are replaced by the statistics of the creature, though you retain your alignment and your Intelligence, Wisdom, and Charisma scores. You retain the benefit of your own class features. If the target has any class levels, you can't use any of its class features.</p><p>Meanwhile, the possessed creature's soul can perceive from the container using its own senses, but it can't move or take actions at all.</p><p>While possessing a body, you can use your action to return from the host body to the container if it is within 100 feet of you, returning the host creature's soul to its body. If the host body dies while you're in it, the creature dies, and you must make a Charisma saving throw against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die.</p><p>If the container is destroyed or the spell ends, your soul immediately returns to your body. If your body is more than 100 feet away from you or if your body is dead when you attempt to return to it, you die. If another creature's soul is in the container when it is destroyed, the creature's soul returns to its body if the body is alive and within 100 feet. Otherwise, that creature dies.</p><p>When the spell ends, the container is destroyed.</p>",
        "page": "PHB 257",
        "range": "Self",
        "components": "V, S, M",
        "material": "a gem, crystal, reliquary, or some other ornamental container worth at least 500 gp",
        "ritual": false,
        "duration": "Until dispelled",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 6,
        "school": "necromancy",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Magic Missile",
        "desc": "<p>You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.",
        "page": "PHB 257",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Magic Mouth",
        "desc": "<p>You plant a message to an object in the range of the spell. The message is verbalized when the trigger conditions are met. Choose an object that you see, and that is not worn or carried by another creature. Then say the message, which should not exceed 25 words but listening can take up to 10 minutes. Finally, establish the circumstances that trigger the spell to deliver your message.</p><p>When these conditions are satisfied, a magical mouth appears on the object and it articulates the message imitating your voice, the same tone used during implantation of the message. If the selected object has a mouth or something that approaches such as the mouth of a statue, the magic mouth come alive at this point, giving the illusion that the words come from the mouth of the object.</p><p>When you cast this spell, you may decide that the spell ends when the message is delivered or it can persist and repeat the message whenever circumstances occur.</p><p>The triggering circumstance can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it.</p>",
        "page": "PHB 257",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a honeycomb and jade dust of at least 10 inches, the spell consumes",
        "ritual": true,
        "duration": "Until dispelled",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 2,
        "school": "illusion",
        "classes": [
            "bards",
            "wizards"
        ]
    },
    {
        "name": "Magic Stone",
        "desc": "<p>You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, a pebble has a range of 60 feet. If someone else attacks with a pebble, that attacker adds your spellcasting ability modifier, not the attackers, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Whether the attack hits or misses, the spell then ends on the stone.</p><p>If you cast this spell again, the spell ends on any pebbles still affected by your previous casting.</p>",
        "page": "EEPC 20, XGE 160",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 bonus action",
        "level": 0,
        "school": "transmutation",
        "classes": [
            "druids",
            "warlocks"
        ]
    },
    {
        "name": "Magic Weapon",
        "desc": "<p>You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3.",
        "page": "PHB 257",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "paladins",
            "wizards"
        ]
    },
    {
        "name": "Major Image",
        "desc": "<p>You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte's stench).</p><p>As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.</p><p>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration.",
        "page": "PHB 258",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a bit of fleece",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "illusion",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Mass Cure Wounds",
        "desc": "<p>A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th.",
        "page": "PHB 258",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "evocation",
        "classes": [
            "bards",
            "clerics",
            "druids"
        ]
    },
    {
        "name": "Mass Heal",
        "desc": "<p>A flood of healing energy flows from you into injured creatures around you. You restore up to 700 hit points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell are also cured of all diseases and any effect making them blinded or deafened. This spell has no effect on undead or constructs.</p>",
        "page": "PHB 258",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 9,
        "school": "evocation",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Mass Healing Word",
        "desc": "<p>As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd.",
        "page": "PHB 258",
        "range": "60 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 bonus action",
        "level": 3,
        "school": "evocation",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Mass Suggestion",
        "desc": "<p>You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell.</p><p>Each target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.</p><p>You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the first beggar they meet. If the condition isn't met before the spell ends, the activity isn't performed.</p><p>If you or any of your companions damage a creature affected by this spell, the spell ends for that creature.</p>",
        "higher_level": "When you cast this spell using a 7th-level spell slot, the duration is 10 days. When you use an 8th-level spell slot, the duration is 30 days. When you use a 9th-level spell slot, the duration is a year and a day.",
        "page": "PHB 258",
        "range": "60 feet",
        "components": "V, M",
        "material": "a snake's tongue and either a bit of honeycomb or a drop of sweet oil",
        "ritual": false,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 6,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Mass Polymorph",
        "desc": "<p>You transform up to ten creatures of your choice that you can see within range. An unwilling target must succeed on a Wisdom saving throw to resist the transformation. An unwilling shapechanger automatically succeeds on the save.</p><p>Each target assumes a beast form of your choice, and you can choose the same form or different ones for each target. The new form can be any beast you have seen whose challenge rating is equal to or less than the target's (or half the target's level, if the target doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast, but the target retains its hit points, alignment, and personality.</p><p>Each target gains a number of temporary hit points equal to the hit points of its new form. These temporary hit points can't be replaced by temporary hit points from another source. A target reverts to its normal form when it has no more temporary hit points or it dies. If the spell ends before then, the creature loses all its temporary hit points and reverts to its normal form.</p><p>The creature is limited in the actions it can perform by the nature of its new form. It can't speak, cast spells, or do anything else that requires hands or speech.</p><p>The target's gear melds into the new form. The target can't activate, use, wield, or otherwise benefit from any of its equipment.</p>",
        "page": "XGE 160",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a caterpillar cocoon",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 9,
        "school": "transmutation",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Maximilian's Earthen Grasp",
        "desc": "<p>You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell's duration.</p><p>As an action, you can cause the hand to crush the restrained target, which must make a Strength saving throw. The target takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one.</p><p>To break out, the restrained target can use its action to make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand.</p><p>As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either.</p>",
        "page": "EEPC 20, XGE 161",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a miniature hand sculpted from clay",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Maze",
        "desc": "<p>You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze.</p><p>The target can use its action to attempt to escape. When it does so, it makes a DC 20 Intelligence check. If it succeeds, it escapes, and the spell ends (a minotaur or goristro demon automatically succeeds).</p><p>When the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space.</p>",
        "page": "PHB 258",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 8,
        "school": "conjuration",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Meld into Stone",
        "desc": "<p>You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses.</p><p>While merged with the stone, you can't see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can't move.</p><p>Minor physical damage to the stone doesn't harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 bludgeoning damage to you. The stone's complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to where you first entered.</p>",
        "page": "PHB 259",
        "range": "Touch",
        "components": "V, S",
        "ritual": true,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "clerics",
            "druids"
        ]
    },
    {
        "name": "Melf's Acid Arrow",
        "desc": "<p>A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
        "page": "PHB 259",
        "range": "90 feet",
        "components": "V, S, M",
        "material": "powdered rhubarb leaf and an adder's stomach",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "evocation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Melf's Minute Meteors",
        "desc": "<p>You create six tiny meteors in your space. They float in the air and orbit you for the spell's duration. When you cast the spell—and as a bonus action on each of your turns thereafter—you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd.",
        "page": "EEPC 20, XGE 161",
        "range": "Self",
        "components": "V, S, M",
        "material": "niter, sulfur, and pine tar formed into a bead",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Mending",
        "desc": "<p>This spell repairs a single break or tear in an object you touch, such as a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no longer than 1 foot in any dimension, you mend it, leaving no trace of the former damage.</p><p>This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.</p>",
        "page": "PHB 259",
        "range": "Touch",
        "components": "V, S, M",
        "material": "two lodestones",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 0,
        "school": "transmutation",
        "classes": [
            "clerics",
            "bards",
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Mental Prison",
        "desc": "<p>You attempt to bind a creature within an illusory cell that only it perceives. One creature you can see within range must make an Intelligence saving throw. The target succeeds automatically if it is immune to being charmed. On a successful save, the target takes 5d10 psychic damage, and the spell ends. On a failed save, the target takes 5d10 psychic damage, and you make the area immediately around the target's space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, floating razors, or hideous maws filled with dripping teeth. Whatever form the illusion takes, the target can't see or hear anything beyond it and is restrained for the spell's duration. If the target is moved out of the illusion, makes a melee attack through it, or reaches any part of its body through it, the target takes 10d10 psychic damage, and the spell ends.</p>",
        "page": "XGE 161",
        "range": "60 feet",
        "components": "S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "illusion",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Message",
        "desc": "<p>You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.</p><p>You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.</p>",
        "page": "PHB 259",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a short piece of copper wire",
        "ritual": false,
        "duration": "1 round",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "transmutation",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Meteor Swarm",
        "desc": "<p>Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once.</p><p>The spell damages objects in the area and ignites flammable objects that aren't being worn or carried.</p>",
        "page": "PHB 259",
        "range": "1 mile",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 9,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Mighty Fortress",
        "desc": "<p>A fortress of stone erupts from a square area of ground of your choice that you can see within range. The area is 120 feet on each side, and it must not have any buildings or other structures on it. Any creatures in the area are harmlessly lifted up as the fortress rises.</p><p>The fortress has four turrets with square bases, each one 20 feet on a side and 30 feet tall, with one turret on each corner. The turrets are connected to each other by stone walls that are each 80 feet long, creating an enclosed area. Each wall is 1 foot thick and is composed of panels that are 10 feet wide and 20 feet tall. Each panel is contiguous with two other panels or one other panel and a turret. You can place up to four stone doors in the fortress's outer wall.</p><p>A small keep stands inside the enclosed area. The keep has a square base that is 50 feet on each side, and it has three floors with 10-foot-high ceilings. Each of the floors can be divided into as many rooms as you like, provided each room is at least 5 feet on each side. The floors of the keep are connected by stone staircases, its walls are 6 inches thick, and interior rooms can have stone doors or open archways as you choose. The keep is furnished and decorated however you like, and it contains sufficient food to serve a nine-course banquet for up to 100 people each day. Furnishings, food, and other objects created by this spell crumble to dust if removed from the fortress.</p><p>A staff of one hundred invisible servants obeys any command given to them by creatures you designate when you cast the spell. Each servant functions as if created by the <i>unseen servant</i> spell.</p><p>The walls, turrets, and keep are all made of stone that can be damaged. Each 10-foot-by-10-foot section of stone has AC 15 and 30 hit points per inch of thickness. It is immune to poison and psychic damage. Reducing a section of stone to 0 hit points destroys it and might cause connected sections to buckle and collapse at the DM's discretion. After 7 days or when you cast this spell somewhere else, the fortress harmlessly crumbles and sinks back into the ground, leaving any creatures that were inside it safely on the ground.</p><p>Casting this spell on the same spot once every 7 days for a year makes the fortress permanent.</p>",
        "page": "XGE 161",
        "range": "1 mile",
        "components": "V, S",
        "material": "a diamond worth at least 500 gp, which the spell consumes",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 8,
        "school": "conjuration",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Mind Blank",
        "desc": "<p>Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divination spells, and the charmed condition. The spell even foils <i>wish</i> spells and spells or effects of similar power used to affect the target's mind or to gain information about the target.</p>",
        "page": "PHB 259",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 8,
        "school": "abjuration",
        "classes": [
            "bards",
            "wizards"
        ]
    },
    {
        "name": "Mind Spike",
        "desc": "<p>You reach into the mind of one creature you can see within range. The target must make a Wisdom saving throw, taking 3d8 psychic damage on a failed save, or half as much damage on a successful one. On a failed save, you also always know the target's location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can't become hidden from you, and if it's invisible, it gains no benefit from that condition against you.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
        "page": "XGE 162",
        "range": "60 feet",
        "components": "S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "divination",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Minor Illusion",
        "desc": "<p>You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.</p><p>If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.</p><p>If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.</p><p>If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.</p>",
        "page": "PHB 260",
        "range": "30 feet",
        "components": "S, M",
        "material": "a bit of fleece",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "illusion",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Mirage Arcane",
        "desc": "<p>You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrain's general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.</p><p>Similarly, you can alter the appearance of structures, or add them where none are present. The spell doesn't disguise, conceal, or add creatures.</p><p>The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell's area disappears immediately.</p><p>Creatures with truesight can see through the illusion to the terrain's true form; however, all other elements of the illusion remain, so while the creature is aware of the illusion's presence, the creature can still physically interact with the illusion.</p>",
        "page": "PHB 260",
        "range": "Sight",
        "components": "V, S",
        "ritual": false,
        "duration": "10 days",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 7,
        "school": "illusion",
        "classes": [
            "bards",
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Mirror Image",
        "desc": "<p>Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real. You can use your action to dismiss the illusory duplicates.</p><p>Each time a creature targets you with an attack during the spell's duration, roll a d20 to determine whether the attack instead targets one of your duplicates.</p><p>If you have three duplicates, you must roll a 6 or higher to change the attack's target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher.</p><p>A duplicate's AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed.</p><p>A creature is unaffected by this spell if it can't see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with truesight.</p>",
        "page": "PHB 260",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "illusion",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Mislead",
        "desc": "<p>You become invisible at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends if you attack or cast a spell.</p><p>You can use your action to move your illusory double up to twice your speed and make it gesture, speak, and behave in whatever way you choose.</p><p>You can see through its eyes and hear through its ears as if you were located where it is. On each of your turns as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings.</p>",
        "page": "PHB 260",
        "range": "Self",
        "components": "S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "illusion",
        "classes": [
            "bards",
            "wizards"
        ]
    },
    {
        "name": "Misty Step",
        "desc": "<p>Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.</p>",
        "page": "PHB 260",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 bonus action",
        "level": 2,
        "school": "conjuration",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Modify Memory",
        "desc": "<p>You attempt to reshape another creature's memories. One creature that you can see must make a Wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none of the target's memories are modified.</p><p>While this charm lasts, you can affect the target's memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of some other event.</p><p>You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the spell ends.</p><p>A modified memory doesn't necessarily affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical modified memory, such as implanting a memory of how much the creature enjoyed dousing itself in acid, is dismissed, perhaps as a bad dream. The DM might deem a modified memory too nonsensical to affect a creature in a significant manner.</p><p>A <i>remove curse</i> or <i>greater restoration</i> spell cast on the target restores the creature's true memory.</p>",
        "higher_level": "If you cast this spell using a spell slot of 6th level or higher, you can alter the target's memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature's past (9th level).",
        "page": "PHB 261",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "enchantment",
        "classes": [
            "bards",
            "wizards"
        ]
    },
    {
        "name": "Mold Earth",
        "desc": "<p>You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:</p><ul><li>If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't involve enough force to cause damage.</li><li>You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.</li><li>If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour.</li></ul><p>If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.</p>",
        "page": "EEPC 21, XGE 162",
        "range": "30 feet",
        "components": "S",
        "ritual": false,
        "duration": "Instantaneous or 1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "transmutation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Moonbeam",
        "desc": "<p>A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.</p><p>When a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one.</p><p>A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light.</p><p>On each of your turns after you cast this spell, you can use an action to move the beam up to 60 feet in any direction.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1dlO for each slot level above 2nd.",
        "page": "PHB 261",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "several seeds of any moonseed plant and a piece of opalescent feldspar",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "evocation",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Mordenkainen's Faithful Hound",
        "desc": "<p>You conjure a phantom watchdog in an unoccupied space that you can see within range, where it remains for the duration, until you dismiss it as an action, or until you move more than 100 feet away from it.</p><p>The hound is invisible to all creatures except you and can't be harmed. When a Small or larger creature comes within 30 feet of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly. The hound sees invisible creatures and can see into the Ethereal Plane. It ignores illusions.</p><p>At the start of each of your turns, the hound attempts to bite one creature within 5 feet of it that is hostile to you. The hound's attack bonus is equal to your spellcasting ability modifier + your proficiency bonus. On a hit, it deals 4d8 piercing damage.</p>",
        "page": "PHB 261",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a tiny silver whistle, a piece of bone, and a thread",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 4,
        "school": "conjuration",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Mordenkainen's Magnificent Mansion",
        "desc": "<p>You conjure an extradimensional dwelling in range that lasts for the duration. You choose where its one entrance is located. The entrance shimmers faintly and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the portal remains open. You can open or close the portal if you are within 30 feet of it. While closed, the portal is invisible.</p><p>Beyond the portal is a magnificent foyer with numerous chambers beyond. The atmosphere is clean, fresh, and warm.</p><p>You can create any floor plan you like, but the space can't exceed 50 cubes, each cube being 10 feet on each side. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine course banquet for up to 100 people. A staff of 100 near-transparent servants attends all who enter. You decide the visual appearance of these servants and their attire. They are completely obedient to your orders. Each servant can perform any task a normal human servant could perform, but they can't attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can go anywhere in the mansion but can't leave it. Furnishings and other objects created by this spell dissipate into smoke if removed from the mansion. When the spell ends, any creatures inside the extradimensional space are expelled into the open spaces nearest to the entrance.</p>",
        "page": "PHB 261",
        "range": "300 feet",
        "components": "V, S, M",
        "material": "a miniature portal carved from ivory, a small piece of polished marble, and a tiny silver spoon, each item worth at least 5 gp",
        "ritual": false,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 7,
        "school": "conjuration",
        "classes": [
            "bards",
            "wizards"
        ]
    },
    {
        "name": "Mordenkainen's Private Sanctum",
        "desc": "<p>You make an area within range magically secure. The area is a cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration or until you use an action to dismiss it.</p><p>When you cast the spell, you decide what sort of security the spell provides, choosing any or all of the following properties:</p><ul><li>Sound can't pass through the barrier at the edge of the warded area.</li><li>The barrier of the warded area appears dark and foggy, preventing vision (including darkvision) through it.</li><li>Sensors created by divination spells can't appear inside the protected area or pass through the barrier at its perimeter.</li><li>Creatures in the area can't be targeted by divination spells.</li><li>Nothing can teleport into or out of the warded area.</li><li>Planar travel is blocked within the warded area.</li></ul><p>Casting this spell on the same spot every day for a year makes this effect permanent.</p>",
        "higher_level": "When you cast this spell using a spell slot of 5th level or higher, you can increase the size of the cube by 100 feet for each slot level beyond 4th. Thus you could protect a cube that can be up to 200 feet on one side by using a spell slot of 5th level.",
        "page": "PHB 262",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a thin sheet of lead, a piece of opaque glass, a wad of cotton or cloth, and powdered chrysolite",
        "ritual": false,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 4,
        "school": "abjuration",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Mordenkainen's Sword",
        "desc": "<p>You create a sword-shaped plane of force that hovers within range. It lasts for the duration.</p><p>When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit, the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one.</p>",
        "page": "PHB 262",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 7,
        "school": "evocation",
        "classes": [
            "bards",
            "wizards"
        ]
    },
    {
        "name": "Move Earth",
        "desc": "<p>Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square's elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete.</p><p>At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect.</p><p>Because the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement.</p><p>This spell can't manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse.</p><p>Similarly, this spell doesn't directly affect plant growth. The moved earth carries any plants along with it.</p>",
        "page": "PHB 263",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "an iron blade and a small bag containing a mixture of soils—clay, loam, and sand",
        "ritual": false,
        "duration": "Up to 2 hours",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "transmutation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Negative Energy Flood",
        "desc": "<p>You send ribbons of negative energy at one creature you can see within range. Unless the target is undead, it must make a Constitution saving throw, taking 5d12 necrotic damage on a failed save, or half as much damage on a successful one. A target killed by this damage rises up as a zombie at the start of your next turn. The zombie pursues whatever creature it can see that is closest to it. Statistics for the zombie are in the <i>Monster Manual</i>.</p><p>If you target an undead with this spell, the target doesn't make a saving throw. Instead, roll 5d12. The target gains half the total as temporary hit points.</p>",
        "page": "XGE 163",
        "range": "60 feet",
        "components": "V, M",
        "material": "a broken bone and a square of black silk",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "necromancy",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Nondetection",
        "desc": "<p>For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can't be targeted by any divination magic or perceived through magical scrying sensors.</p>",
        "page": "PHB 263",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "abjuration",
        "classes": [
            "bards",
            "rangers",
            "wizards"
        ]
    },
    {
        "name": "Nystul's Magic Aura",
        "desc": "<p>You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn't being carried or worn by another creature.</p><p>When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled.</p><p><b>False Aura.</b> You change the way the target appears to spells and magical effects, such as <i>detect magic</i>, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object's magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item.</p><p><b>Mask.</b> You change the way the target appears to spells and magical effects that detect creature types, such as a paladin's Divine Sense or the trigger of a <i>symbol</i> spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment.</p>",
        "page": "PHB 263",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a small square of silk",
        "ritual": false,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "illusion",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Otiluke's Freezing Sphere",
        "desc": "<p>A frigid globe of cold energy streaks from your fingertips to a point of your choice within range, where it explodes in a 60-foot-radius sphere. Each creature within the area must make a Constitution saving throw. On a failed save, a creature takes 10d6 cold damage. On a successful save, it takes half as much damage.</p><p>If the globe strikes a body of water or a liquid that is principally water (not including water-based creatures), it freezes the liquid to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice. A trapped creature can use an action to make a Strength check against your spell save DC to break free.</p><p>You can refrain from firing the globe after completing the spell, if you wish. A small globe about the size of a sling stone, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling's normal range). It shatters on impact, with the same effect as the normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn't already shattered, it explodes.</p>",
        "higher_level": "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d6 for each slot level above 6th.",
        "page": "PHB 263",
        "range": "300 feet",
        "components": "V, S, M",
        "material": "a small crystal sphere",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 6,
        "school": "evocation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Otiluke's Resilient Sphere",
        "desc": "<p>A sphere of shimmering force encloses a creature or object of Large size or smaller within range. An unwilling creature must make a Dexterity saving throw. On a failed save, the creature is enclosed for the duration.</p><p>Nothing—not physical objects, energy, or other spell effects—can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside can't be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it.</p><p>The sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can use its action to push against the sphere's walls and thus roll the sphere at up to half the creature's speed. Similarly, the globe can be picked up and moved by other creatures.</p><p>A <i>disintegrate</i> spell targeting the globe destroys it without harming anything inside it.</p>",
        "page": "PHB 264",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a hemispherical piece of clear crystal and a matching hemispherical piece of gum arabic",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "evocation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Otto's Irresistible Dance",
        "desc": "<p>Choose one creature that you can see within range. The target begins a comic dance in place: shuffling, tapping its feet, and capering for the duration. Creatures that can't be charmed are immune to this spell.</p><p>A dancing creature must use all its movement to dance without leaving its space and has disadvantage on Dexterity saving throws and attack rolls. While the target is affected by this spell, other creatures have advantage on attack rolls against it. As an action, a dancing creature makes a Wisdom saving throw to regain control of itself. On a successful save, the spell ends.</p>",
        "page": "PHB 264",
        "range": "30 feet",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "enchantment",
        "classes": [
            "bards",
            "wizards"
        ]
    },
    {
        "name": "Pass without Trace",
        "desc": "<p>A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.</p>",
        "page": "PHB 264",
        "range": "Self",
        "components": "V, S, M",
        "material": "ashes from a burned leaf of mistletoe and a sprig of spruce",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "abjuration",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Passwall",
        "desc": "<p>A passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as a wall, a ceiling, or a floor) within range, and lasts for the duration. You choose the opening's dimensions: up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it.</p><p>When the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell.</p>",
        "page": "PHB 264",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a pinch of sesame seeds",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "transmutation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Phantasmal Force",
        "desc": "<p>You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs.</p><p>The phantasm includes sound, temperature, and other stimuli, also evident only to the creature.</p><p>The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends.</p><p>While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall—it was pushed, it slipped, or a strong wind might have knocked it off.</p><p>An affected target is so convinced of the phantasm's reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm's area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion.</p>",
        "page": "PHB 264",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a bit of fleece",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "illusion",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Phantasmal Killer",
        "desc": "<p>You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must make a Wisdom saving throw. On a failed save, the target becomes frightened for the duration. At the end of each of the target's turns before the spell ends, the target must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends.</p>",
        "higher_level": "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th.",
        "page": "PHB 265",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "illusion",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Phantom Steed",
        "desc": "<p>A Large quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range. You decide the creature's appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed.</p><p>For the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a riding horse, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends if you use an action to dismiss it or if the steed takes any damage.</p>",
        "page": "PHB 265",
        "range": "30 feet",
        "components": "V, S",
        "ritual": true,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 3,
        "school": "illusion",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Planar Ally",
        "desc": "<p>You beseech an otherworldly entity for aid. The being must be known to you: a god, a primordial, a demon prince, or some other being of cosmic power. That entity sends a celestial, an elemental, or a fiend loyal to it to aid you, making the creature appear in an unoccupied space within range. If you know a specific creature's name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (DM's choice).</p><p>When the creature appears, it is under no compulsion to behave in any particular way. You can ask the creature to perform a service in exchange for payment, but it isn't obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services.</p><p>Payment can take a variety of forms. A celestial might require a sizable donation of gold or magic items to an allied temple, while a fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you.</p><p>As a rule of thumb, a task that can be measured in minutes requires a payment worth 100 gp per minute. A task measured in hours requires 1,000 gp per hour. And a task measured in days (up to 10 days) requires 10,000 gp per day. The DM can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creature's ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal.</p><p>After the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you, if appropriate to the task and if possible. If you are unable to agree on a price for the creature's service, the creature immediately returns to its home plane.</p><p>A creature enlisted to join your group counts as a member of it, receiving a full share of experience points awarded.</p>",
        "page": "PHB 265",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 6,
        "school": "conjuration",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Planar Binding",
        "desc": "<p>With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of an inverted <i>magic circle</i> in order to keep it trapped while this spell is cast.) At the completion of the casting, the target must make a Charisma saving throw. On a failed save, it is bound to serve you for the duration. If the creature was summoned or created by another spell, that spell's duration is extended to match the duration of this spell.</p><p>A bound creature must follow your instructions to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. The creature obeys the letter of your instructions, but if the creature is hostile to you, it strives to twist your words to achieve its own objectives. If the creature carries out your instructions completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane of existence, it returns to the place where you bound it and remains there until the spell ends.</p>",
        "higher_level": "When you cast this spell using a spell slot of a higher level, the duration increases to 10 days with a 6th-level slot, to 30 days with a 7th-level slot, to 180 days with an 8th-level slot, and to a year and a day with a 9th-level spell slot.",
        "page": "PHB 265",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a jewel worth at least 1,000 gp, which the spell consumes",
        "ritual": false,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "1 hour",
        "level": 5,
        "school": "abjuration",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Plane Shift",
        "desc": "<p>You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination. If you are trying to reach the City of Brass, for example, you might arrive in its Street of Steel, before its Gate of Ashes, or looking at the city from across the Sea of Fire, at the DM's discretion.</p><p>Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle.</p><p>You can use this spell to banish an unwilling creature to another plane. Choose a creature within your reach and make a melee spell attack against it. On a hit, the creature must make a Charisma saving throw. If the creature fails this save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence.</p>",
        "page": "PHB 266",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a forked, metal rod worth at least 250 gp, attuned to a particular plane of existence",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 7,
        "school": "conjuration",
        "classes": [
            "clerics",
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Plant Growth",
        "desc": "<p>This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits.</p><p>If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves.</p><p>You can exclude one or more areas of any size within the spell's area from being affected.</p><p>If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested.</p>",
        "page": "PHB 266",
        "range": "150 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "bards",
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Poison Spray",
        "desc": "<p>You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.</p><p>This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).</p>",
        "page": "PHB 266",
        "range": "10 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "conjuration",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Polymorph",
        "desc": "<p>This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. The spell has no effect on a shapechanger or a creature with 0 hit points.</p><p>The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target's (or the target's level, if it doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality.</p><p>The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious.</p><p>The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech.</p><p>The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment.</p>",
        "page": "PHB 266",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a caterpillar cocoon",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "transmutation",
        "classes": [
            "bards",
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Power Word Heal",
        "desc": "<p>A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs.</p>",
        "page": "PHB 266",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 9,
        "school": "evocation",
        "classes": [
            "bards"
        ]
    },
    {
        "name": "Power Word Kill",
        "desc": "<p>You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you choose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect.</p>",
        "page": "PHB 266",
        "range": "60 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 9,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Power Word Pain",
        "desc": "<p>You speak a word of power that causes waves of intense pain to assail one creature you can see within range. If the target has 100 hit points or fewer, it is subject to crippling pain. Otherwise, the spell has no effect on it. A target is also unaffected if it is immune to being charmed.</p><p>While the target is affected by crippling pain, any speed it has can be no higher than 10 feet. The target also has disadvantage on attack rolls, ability checks, and saving throws, other than Constitution saving throws. Finally, if the target tries to cast a spell, it must first succeed on a Constitution saving throw, or the casting fails and the spell is wasted.</p><p>A target suffering this pain can make a Constitution saving throw at the end of each of its turns. On a successful save, the pain ends.</p>",
        "page": "XGE 163",
        "range": "60 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 7,
        "school": "enchantment",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Power Word Stun",
        "desc": "<p>You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no effect.</p><p>The stunned target must make a Constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends.</p>",
        "page": "PHB 267",
        "range": "60 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 8,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Prayer of Healing",
        "desc": "<p>Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd.",
        "page": "PHB 267",
        "range": "30 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "10 minutes",
        "level": 2,
        "school": "evocation",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Prestidigitation",
        "desc": "<p>This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:</p><ul><li>You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.</li><li>You instantaneously light or snuff out a candle, a torch, or a small campfire.</li><li>You instantaneously clean or soil an object no larger than 1 cubic foot.</li><li>You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.</li><li>You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.</li><li>You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.</li></ul><p>If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.</p>",
        "page": "PHB 267",
        "range": "10 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "transmutation",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Primal Savagery",
        "desc": "<p>You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 acid damage. After you make the attack, your teeth or fingernails return to normal.</p><p>The spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).</p>",
        "page": "XGE 163",
        "range": "Self",
        "components": "S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "transmutation",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Primordial Ward",
        "desc": "<p>You have resistance to acid, cold, fire, lightning, and thunder damage for the spell's duration.</p><p>When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends.</p>",
        "page": "EEPC 21, XGE 163",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "abjuration",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Prismatic Spray",
        "desc": "<p>Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a Dexterity saving throw. For each target, roll a d8 to determine which color ray affects it.</p><p><b>1. Red.</b> The target takes 10d6 fire damage on a failed save, or half as much damage on a successful one.</p><p><b>2. Orange.</b> The target takes 10d6 acid damage on a failed save, or half as much damage on a successful one.</p><p><b>3. Yellow.</b> The target takes 10d6 lightning damage on a failed save, or half as much damage on a successful one.</p><p><b>4. Green.</b> The target takes 10d6 poison damage on a failed save, or half as much damage on a successful one.</p><p><b>5. Blue.</b> The target takes 10d6 cold damage on a failed save, or half as much damage on a successful one.</p><p><b>6. Indigo.</b> On a failed save, the target is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.</p><p><b>7. Violet.</b> On a failed save, the target is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the DM's choosing and is no longer blinded. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.)</p><p><b>8. Special.</b> The target is struck by two rays. Roll twice more, rerolling any 8.</p>",
        "page": "PHB 267",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 7,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Prismatic Wall",
        "desc": "<p>A shimmering, multicolored plane of light forms a vertical opaque wall—up to 90 feet long, 30 feet high, and 1 inch thick—centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted.</p><p>The wall sheds bright light out to a range of 100 feet and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or become blinded for 1 minute.</p><p>The wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all the wall's layers. As it passes or reaches through each layer, the creature must make a Dexterity saving throw or be affected by that layer's properties as described below.</p><p>The wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed, it remains so for the duration of the spell. An <i>antimagic field</i> has no effect on the wall, and <i>dispel magic</i> works only against the violet layer.</p><p><b>1. Red.</b> The creature takes 10d6 fire damage on a failed save, or half as much damage on a successful one. While this layer is in place, nonmagical ranged attacks can't pass through the wall. The layer can be destroyed by dealing at least 25 cold damage to it.</p><p><b>2. Orange.</b> The creature takes 10d6 acid damage on a failed save, or half as much damage on a successful one. While this layer is in place, magical ranged attacks can't pass through the wall. The layer is destroyed by a strong wind.</p><p><b>3. Yellow.</b> The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 60 force damage to it.</p><p><b>4. Green.</b> The creature takes 10d6 poison damage on a failed save, or half as much damage on a successful one. A <i>passwall</i> spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer.</p><p><b>5. Blue.</b> The creature takes 10d6 cold damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 25 fire damage to it.</p><p><b>6. Indigo.</b> On a failed save, the creature is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don't need to be consecutive; keep track of both until the creature collects three of a kind.</p><p>While this layer is in place, spells can't be cast through the wall. The layer is destroyed by bright light shed by a <i>daylight</i> spell or a similar spell of equal or higher level.</p><p><b>7. Violet.</b> On a failed save, the creature is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of the DM's choosing and is no longer blinded. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) This layer is destroyed by a <i>dispel magic</i> spell or a similar spell of equal or higher level that can end spells and magical effects.</p>",
        "page": "PHB 267",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "10 minutes",
        "concentration": false,
        "casting_time": "1 action",
        "level": 9,
        "school": "abjuration",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Produce Flame",
        "desc": "<p>A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.</p><p>You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage.</p><p>This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</p>",
        "page": "PHB 269",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "10 minutes",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "conjuration",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Programmed Illusion",
        "desc": "<p>You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific condition occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes.</p><p>When the condition you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes. After this time, the illusion can be activated again.</p><p>The triggering condition can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door, or you could set the illusion to trigger only when a creature says the correct word or phrase.</p><p>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.</p>",
        "page": "PHB 269",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a bit of fleece and jade dust worth at least 25 gp",
        "ritual": false,
        "duration": "Until dispelled",
        "concentration": false,
        "casting_time": "1 action",
        "level": 6,
        "school": "illusion",
        "classes": [
            "bards",
            "wizards"
        ]
    },
    {
        "name": "Project Image",
        "desc": "<p>You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you but is intangible. If the illusion takes any damage, it disappears, and the spell ends.</p><p>You can use your action to move this illusion up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly.</p><p>You can see through its eyes and hear through its ears as if you were in its space. On your turn as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings.</p><p>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.</p>",
        "page": "PHB 270",
        "range": "500 miles",
        "components": "V, S, M",
        "material": "a small replica of you made from materials worth at least 5 gp",
        "ritual": false,
        "duration": "Up to 24 hours",
        "concentration": true,
        "casting_time": "1 action",
        "level": 7,
        "school": "illusion",
        "classes": [
            "bards",
            "wizards"
        ]
    },
    {
        "name": "Protection from Energy",
        "desc": "<p>For the duration, the willing creature you touch has resistance to one damage type of your choice: acid, cold, fire, lightning, or thunder.</p>",
        "page": "PHB 270",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "abjuration",
        "classes": [
            "clerics",
            "druids",
            "rangers",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Protection from Evil and Good",
        "desc": "<p>Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.</p><p>The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.</p>",
        "page": "PHB 270",
        "range": "Touch",
        "components": "V, S, M",
        "material": "holy water or powdered silver and iron, which the spell consumes",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "abjuration",
        "classes": [
            "clerics",
            "paladins",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Protection from Poison",
        "desc": "<p>You touch a creature. If it is poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random.</p><p>For the duration, the target has advantage on saving throws against being poisoned, and it has resistance to poison damage.</p>",
        "page": "PHB 270",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "abjuration",
        "classes": [
            "clerics",
            "druids",
            "paladins",
            "rangers"
        ]
    },
    {
        "name": "Psychic Scream",
        "desc": "<p>You unleash the power of your mind to blast the intellect of up to ten creatures of your choice that you can see within range. Creatures that have an Intelligence score of 2 or lower are unaffected.</p><p>Each target must make an Intelligence saving throw. On a failed save, a target takes 14d6 psychic damage and is stunned. On a successful save, a target takes half as much damage and isn't stunned. If a target is killed by this damage, its head explodes, assuming it has one.</p><p>A stunned target can make an Intelligence saving throw at the end of each of its turns. On a successful save, the stunning effect ends.</p>",
        "page": "XGE 163",
        "range": "90 feet",
        "components": "S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 9,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Puppet",
        "desc": "<p>Your gesture forces one humanoid you can see within range to make a Constitution saving throw. On a failed save, the target must move up to its speed in a direction you choose. In addition, you can cause the target to drop whatever it is holding. This spell has no effect on a humanoid that is immune to being charmed.</p>",
        "page": "UA:SS 3",
        "range": "120 feet",
        "components": "S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "enchantment",
        "classes": [
            "bards",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Purify Food and Drink",
        "desc": "<p>All nonmagical food and drink within a 5-foot radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.</p>",
        "page": "PHB 270",
        "range": "10 feet",
        "components": "V, S",
        "ritual": true,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "transmutation",
        "classes": [
            "clerics",
            "druids",
            "paladins"
        ]
    },
    {
        "name": "Pyrotechnics",
        "desc": "<p>Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so.</p><p><b>Fireworks.</b> The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn.</p><p><b>Smoke.</b> Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it.</p>",
        "page": "EEPC 21, XGE 163",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Raise Dead",
        "desc": "<p>You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point.</p><p>This spell also neutralizes any poisons and cures nonmagical diseases that affected the creature at the time it died. This spell doesn't, however, remove magical diseases, curses, or similar effects; if these aren't first removed prior to casting the spell, they take effect when the creature returns to life. The spell can't return an undead creature to life.</p><p>This spell closes all mortal wounds, but it doesn't restore missing body parts. If the creature is lacking body parts or organs integral for its survival—its head, for instance—the spell automatically fails.</p><p>Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.</p>",
        "page": "PHB 270",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a diamond worth at least 500 gp, which the spell consumes",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 hour",
        "level": 5,
        "school": "necromancy",
        "classes": [
            "bards",
            "clerics",
            "paladins"
        ]
    },
    {
        "name": "Rary's Telepathic Bond",
        "desc": "<p>You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell.</p><p>Until the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can't extend to other planes of existence.</p>",
        "page": "PHB 270",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "pieces of eggshell from two different kinds of creatures",
        "ritual": true,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "divination",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Ray of Enfeeblement",
        "desc": "<p>A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends.</p><p>At the end of each of the target's turns, it can make a Constitution saving throw against the spell. On a success, the spell ends.</p>",
        "page": "PHB 271",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "necromancy",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Ray of Frost",
        "desc": "<p>A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.</p><p>The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</p>",
        "page": "PHB 271",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Ray of Sickness",
        "desc": "<p>A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
        "page": "PHB 271",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "necromancy",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Regenerate",
        "desc": "<p>You touch a creature and stimulate its natural healing ability. The target regains 4d8 + 15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute).</p><p>The target's severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit to the stump.</p>",
        "page": "PHB 271",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a prayer wheel and holy water",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 7,
        "school": "transmutation",
        "classes": [
            "bards",
            "clerics",
            "druids"
        ]
    },
    {
        "name": "Reincarnate",
        "desc": "<p>You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body. If the target's soul isn't free or willing to do so, the spell fails.</p><p>The magic fashions a new body for the creature to inhabit, which likely causes the creature's race to change. The DM rolls a d100 and consults the following table to determine what form the creature takes when restored to life, or the DM chooses a form.</p><table><tr><th>d100</th><th>Race</th></tr><tr><td>01-04</td><td>Dragonborn</td></tr><tr><td>05-13</td><td>Dwarf, hill</td></tr><tr><td>14-21</td><td>Dwarf, mountain</td></tr><tr><td>22-25</td><td>Elf, dark</td></tr><tr><td>26-34</td><td>Elf, high</td></tr><tr><td>35-42</td><td>Elf, wood</td></tr><tr><td>43-46</td><td>Gnome, forest</td></tr><tr><td>47-52</td><td>Gnome, rock</td></tr><tr><td>53-56</td><td>Half-elf</td></tr><tr><td>57-60</td><td>Half-orc</td></tr><tr><td>61-68</td><td>Halfling, lightfoot</td></tr><tr><td>69-76</td><td>Halfling, stout</td></tr><tr><td>77-96</td><td>Human</td></tr><tr><td>97-00</td><td>Tiefling</td></tr></table><p>The reincarnated creature recalls its former life and experiences. It retains the capabilities it had in its original form, except it exchanges its original race for the new one and changes its racial traits accordingly.</p>",
        "page": "PHB 271",
        "range": "Touch",
        "components": "V, S, M",
        "material": "rare oils and unguents worth at least 1,000 gp, which the spell consumes",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 hour",
        "level": 5,
        "school": "transmutation",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Remove Curse",
        "desc": "<p>At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner's attunement to the object so it can be removed or discarded.</p>",
        "page": "PHB 271",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "abjuration",
        "classes": [
            "clerics",
            "paladins",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Resistance",
        "desc": "<p>You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends.</p>",
        "page": "PHB 272",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a miniature cloak",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 0,
        "school": "abjuration",
        "classes": [
            "clerics",
            "druids"
        ]
    },
    {
        "name": "Resurrection",
        "desc": "<p>You touch a dead creature that has been dead for no more than a century, that didn't die of old age, and that isn't undead. If its soul is free and willing, the target returns to life with all its hit points.</p><p>This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesn't, however, remove magical diseases, curses, and the like; if such effects aren't removed prior to casting the spell, they afflict the target on its return to life.</p><p>This spell closes all mortal wounds and restores any missing body parts.</p><p>Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.</p><p>Casting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you finish a long rest, you can't cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws.</p>",
        "page": "PHB 272",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a diamond worth at least 1,000 gp, which the spell consumes",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 hour",
        "level": 7,
        "school": "necromancy",
        "classes": [
            "bards",
            "clerics"
        ]
    },
    {
        "name": "Reverse Gravity",
        "desc": "<p>This spell reverses gravity in a 50-foot-radius, 100-foot high cylinder centered on a point within range. All creatures and objects that aren't somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a Dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall.</p><p>If some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration.</p><p>At the end of the duration, affected objects and creatures fall back down.</p>",
        "page": "PHB 272",
        "range": "100 feet",
        "components": "V, S, M",
        "material": "a lodestone and iron filings",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 7,
        "school": "transmutation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Revivify",
        "desc": "<p>You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts.</p>",
        "page": "PHB 272",
        "range": "Touch",
        "components": "V, S, M",
        "material": "diamonds worth 300 gp, which the spell consumes",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "necromancy",
        "classes": [
            "clerics",
            "paladins"
        ]
    },
    {
        "name": "Rope Trick",
        "desc": "<p>You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends.</p><p>The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space.</p><p>Attacks and spells can't cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope.</p><p>Anything inside the extradimensional space drops out when the spell ends.</p>",
        "page": "PHB 272",
        "range": "Touch",
        "components": "V, S, M",
        "material": "powdered corn extract and a twisted loop of parchment",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Sacred Flame",
        "desc": "<p>Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.</p><p>The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</p>",
        "page": "PHB 272",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "evocation",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Sanctuary",
        "desc": "<p>You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a <i>fireball</i>.</p><p>If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends.</p>",
        "page": "PHB 272",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a small silver mirror",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "abjuration",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Scatter",
        "desc": "<p>The air quivers around up to five creatures of your choice that you can see within range. An unwilling creature must succeed on a Wisdom saving throw to resist this spell. You teleport each affected target to an unoccupied space that you can see within 120 feet of you. That space must be on the ground or on a floor.</p>",
        "page": "XGE 164",
        "range": "30 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 6,
        "school": "conjuration",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Scorching Ray",
        "desc": "<p>You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several.</p><p>Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd.",
        "page": "PHB 273",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Scrying",
        "desc": "<p>You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed.</p><table><tr><th>Knowledge</th><th>Save Modifier</th></tr><tr><td>Secondhand (you have heard of the target)</td><td>+5</td></tr><tr><td>Firsthand (you have met the target)</td><td>+0</td></tr><tr><td>Familiar (you know the target well)</td><td>-5</td></tr></table><table><tr><th>Connection</th><th>Save Modifier</th></tr><tr><td>Likeness or picture</td><td>-2</td></tr><tr><td>Possession or garment</td><td>-4</td></tr><tr><td>Body part, lock of hair, bit of nail, or the like</td><td>-10</td></tr></table><p>On a successful save, the target isn't affected, and you can't use this spell against it again for 24 hours.</p><p>On a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist.</p><p>Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn't move.</p>",
        "page": "PHB 273",
        "range": "Self",
        "components": "V, S, M",
        "material": "a focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "10 minutes",
        "level": 5,
        "school": "divination",
        "classes": [
            "bards",
            "clerics",
            "druids",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Searing Smite",
        "desc": "<p>The next time you hit a creature with a melee weapon attack during the spell's duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot level above 1st.",
        "page": "PHB 274",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "See Invisibility",
        "desc": "<p>For the duration of the spell, you see invisible creatures and objects as if they were visible, and you can see through Ethereal. The ethereal objects and creatures appear ghostly translucent.</p>",
        "page": "PHB 274",
        "range": "Self",
        "components": "V, S, M",
        "material": "a dash of talc and a small amount of silver powder",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "divination",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Seeming",
        "desc": "<p>This spell allows you to change the appearance of any number of creatures that you can see within range. You give each target you choose a new, illusory appearance. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell.</p><p>The spell disguises physical appearance as well as clothing, armor, weapons, and equipment. You can make each creature seem 1 foot shorter or taller and appear thin, fat, or in between. You can't change a target's body type, so you must choose a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The spell lasts for the duration, unless you use your action to dismiss it sooner.</p><p>The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature's outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel the creature's head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.</p><p>A creature can use its action to inspect a target and make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised.</p>",
        "page": "PHB 274",
        "range": "30 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "illusion",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Sending",
        "desc": "<p>You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message.</p><p>You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn't arrive.</p>",
        "page": "PHB 274",
        "range": "Unlimited",
        "components": "V, S, M",
        "material": "a short piece of fine copper wire",
        "ritual": false,
        "duration": "1 round",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "evocation",
        "classes": [
            "bards",
            "clerics",
            "wizards"
        ]
    },
    {
        "name": "Sense Emotion",
        "desc": "<p>You attune your senses to pick up the emotions of others for the duration. When you cast the spell, and as your action on each turn until the spell ends, you can focus your senses on one humanoid you can see within 30 feet of you. You instantly learn the target's prevailing emotion, whether it's love, anger, pain, fear, calm, or something else. If the target isn't actually humanoid or it is immune to being charmed, you sense that it is calm.</p>",
        "page": "UA:SS 4",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "divination",
        "classes": [
            "bards",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Sequester",
        "desc": "<p>By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and can't be targeted by divination spells or perceived through scrying sensors created by divination spells.</p><p>If the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn't grow older.</p><p>You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include \\\"after 1,000 years\\\" or \\\"when the tarrasque awakens.\\\" This spell also ends if the target takes any damage.</p>",
        "page": "PHB 274",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a powder composed of diamond, emerald, ruby, and sapphire dust worth at least 5,000 gp, which the spell consumes",
        "ritual": false,
        "duration": "Until dispelled",
        "concentration": false,
        "casting_time": "1 action",
        "level": 7,
        "school": "transmutation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Shadow Blade",
        "desc": "<p>You weave together threads of shadow to create a sword of solidified gloom in your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 psychic damage on a hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage.</p><p>If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand.</p>",
        "higher_level": "When you cast this spell using a 3rd- or 4th-level spell slot, the damage increases to 3d8. When you cast it using a 5th- or 6th-level spell slot, the damage increases to 4d8. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d8.",
        "page": "XGE 164",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 2,
        "school": "illusion",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Shadow of Moil",
        "desc": "<p>Flame-like shadows wreathe your body until the spell ends, causing you to become heavily obscured to others. The shadows turn dim light within 10 feet of you into darkness, and bright light in the same area to dim light.</p><p>Until the spell ends, you have resistance to radiant damage. In addition, whenever a creature within 10 feet of you hits you with an attack, the shadows lash out at that creature, dealing it 2d8 necrotic damage.</p>",
        "page": "XGE 164",
        "range": "Self",
        "components": "V, S, M",
        "material": "an undead eyeball encased in a gem worth at least 150 gp",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "necromancy",
        "classes": [
            "warlocks"
        ]
    },
    {
        "name": "Shape Water",
        "desc": "<p>You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:</p><ul><li>You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.</li><li>You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.</li><li>You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.</li><li>You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour.</li></ul><p>If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.</p>",
        "page": "EEPC 21, XGE 164",
        "range": "30 feet",
        "components": "S",
        "ritual": false,
        "duration": "Instantaneous or 1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "transmutation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Shapechange",
        "desc": "<p>You assume the form of a different creature for the duration. The new form can be of any creature with a challenge rating equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait.</p><p>Your game statistics are replaced by the statistics of the chosen creature, though you retain your alignment and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus listed in its statistics is higher than yours, use the creature's bonus in place of yours. You can't use any legendary actions or lair actions of the new form.</p><p>You assume the hit points and Hit Dice of the new form. When you revert to your normal form, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.</p><p>You retain the benefit of any features from your class, race, or other source and can use them, provided that your new form is physically capable of doing so. You can't use any special senses you have (for example, darkvision) unless your new form also has that sense. You can only speak if the creature can normally speak.</p><p>When you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The DM determines whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change shape or size to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state.</p><p>During this spell's duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more hit points than your current one, your hit points remain at their current value.</p>",
        "page": "PHB 274",
        "range": "Self",
        "components": "V, S, M",
        "material": "a jade circlet worth at least 1,500 gp, which you must place on your head before you cast the spell",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 9,
        "school": "transmutation",
        "classes": [
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Shatter",
        "desc": "<p>A strong resonant sound painfully intense sounds of a desired point in the range of the spell. Each creature has a sphere with a 10-foot-radius sphere centered on that point must make a Constitution saving throw or it suffers 3d8 thunder damage. If successful, the damage is halved. A creature made of inorganic materials such as stone, crystal or metal, makes its saving throw with a disadvantage.</p><p>A non-magical item that is not worn or carried also suffers damage if it is in the area of ​​the spell.</p>",
        "higher_level": "When you cast this spell using a 3 or higher level spell slot, the damage of the spell increases by 1d8 for each level of higher spell slot 2.",
        "page": "PHB 275",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a burst of mica",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "evocation",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Shield",
        "desc": "<p>An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from <i>magic missile</i>.</p>",
        "page": "PHB 275",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "1 round",
        "concentration": false,
        "casting_time": "1 reaction, which you take when you are hit by an attack or targeted by the <i>magic missile</i> spell",
        "level": 1,
        "school": "abjuration",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Shield of Faith",
        "desc": "<p>A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.</p>",
        "page": "PHB 275",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a small parchment with a bit of holy text written on it",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "abjuration",
        "classes": [
            "clerics",
            "paladins"
        ]
    },
    {
        "name": "Shillelagh",
        "desc": "<p>The wood of a club or a quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.</p>",
        "page": "PHB 275",
        "range": "Touch",
        "components": "V, S, M",
        "material": "mistletoe, a shamrock leaf, and a club or quarterstaff",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 bonus action",
        "level": 0,
        "school": "transmutation",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Shocking Grasp",
        "desc": "<p>Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.</p><p>The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</p>",
        "page": "PHB 275",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Sickening Radiance",
        "desc": "<p>Dim, greenish light spreads within a 30-foot-radius sphere centered on a point you choose within range. The light spreads around corners, and it lasts until the spell ends.</p><p>When a creature moves into the spell's area for the first time on a turn or starts its turn there, that creature must succeed on a Constitution saving throw or take 4d10 radiant damage, and it suffers one level of exhaustion and emits a dim, greenish light in a 5-foot radius. This light makes it impossible for the creature to benefit from being invisible. The light and any levels of exhaustion caused by this spell go away when the spell ends.</p>",
        "page": "XGE 164",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Silence",
        "desc": "<p>For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it.</p><p>Casting a spell that includes a verbal component is impossible there.</p>",
        "page": "PHB 275",
        "range": "120 feet",
        "components": "V, S",
        "ritual": true,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "illusion",
        "classes": [
            "bards",
            "clerics",
            "rangers"
        ]
    },
    {
        "name": "Silent Image",
        "desc": "<p>You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.</p><p>You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.</p><p>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.</p>",
        "page": "PHB 276",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a bit of fleece",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "illusion",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Simulacrum",
        "desc": "<p>You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature's hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates.</p><p>The simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots.</p><p>If the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gp per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly.</p><p>If you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed.</p>",
        "page": "PHB 276",
        "range": "Touch",
        "components": "V, S, M",
        "material": "snow or ice in quantities sufficient to made a life-size copy of the duplicated creature; some hair, fingernail clippings, or other piece of that creature's body placed inside the snow or ice; and powdered ruby worth 1,500 gp, sprinkled over the duplicate and consumed by the spell",
        "ritual": false,
        "duration": "Until dispelled",
        "concentration": false,
        "casting_time": "12 hours",
        "level": 7,
        "school": "illusion",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Skill Empowerment",
        "desc": "<p>Your magic deepens a creature's understanding of its own talent. You touch one willing creature and give it expertise in one skill of your choice; until the spell ends, the creature doubles its proficiency bonus for ability checks it makes that use the chosen skill.</p><p>You must choose a skill in which the target is proficient and that isn't already benefiting from an effect, such as Expertise, that doubles its proficiency bonus.</p>",
        "page": "XGE 165",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "transmutation",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Skywrite",
        "desc": "<p>You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell's duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early.</p>",
        "page": "EEPC 22, XGE 165",
        "range": "Sight",
        "components": "V, S",
        "ritual": true,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "bards",
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Sleep",
        "desc": "<p>This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).</p><p>Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.</p><p>Undead and creatures immune to being charmed aren't affected by this spell.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st.",
        "page": "PHB 276",
        "range": "90 feet",
        "components": "V, S, M",
        "material": "a pinch of fine sand, rose petals, or a cricket",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Sleet Storm",
        "desc": "<p>Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused.</p><p>The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, it falls prone.</p><p>If a creature is concentrating in the spell's area, the creature must make a successful Constitution saving throw against your spell save DC or lose concentration.</p>",
        "page": "PHB 276",
        "range": "150 feet",
        "components": "V, S, M",
        "material": "a pinch of dust and a few drops of water",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "conjuration",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Slow",
        "desc": "<p>You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration.</p><p>An affected target's speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn.</p><p>If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted.</p><p>A creature affected by this spell makes another Wisdom saving throw at the end of its turn. On a successful save, the effect ends for it.</p>",
        "page": "PHB 277",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a drop of molasses",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Snare",
        "desc": "<p>As you cast this spell, you use the rope to create a circle with a 5-foot radius on the ground or the floor. When you finish casting, the rope disappears and the circle becomes a magic trap.</p><p>This trap is nearly invisible, requiring a successful Intelligence (Investigation) check against your spell save DC to be discerned.</p><p>The trap triggers when a Small, Medium, or Large creature moves onto the ground or the floor in the spell's radius. That creature must succeed on a Dexterity saving throw or be magically hoisted into the air, leaving it hanging upside down 3 feet above the ground or the floor. The creature is restrained there until the spell ends.</p><p>A restrained creature can make a Dexterity saving throw at the end of each of its turns, ending the effect on itself on a success. Alternatively, the creature or someone else who can reach it can use an action to make an Intelligence (Arcana) check against your spell save DC.</p><p>On a success, the restrained effect ends. After the trap is triggered, the spell ends when no creature is restrained by it.</p>",
        "page": "XGE 165",
        "range": "Touch",
        "components": "S, M",
        "material": "25 feet of rope, which the spell consumes",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 1,
        "school": "abjuration",
        "classes": [
            "druids",
            "rangers",
            "wizards"
        ]
    },
    {
        "name": "Snilloc's Snowball Swarm",
        "desc": "<p>A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
        "page": "EEPC 22, XGE 165",
        "range": "90 feet",
        "components": "V, S, M",
        "material": "a piece of ice or a small white rock chip",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Soul Cage",
        "desc": "<p>This spell snatches the soul of a humanoid as it dies and traps it inside the tiny cage you use for the material component. A stolen soul remains inside the cage until the spell ends or until you destroy the cage, which ends the spell. While you have a soul inside the cage, you can exploit it in any of the ways described below. You can use a trapped soul up to six times. Once you exploit a soul for the sixth time, it is released, and the spell ends. While a soul is trapped, the dead humanoid it came from can't be revived.</p><p><b>Steal Life.</b> You can use a bonus action to drain vigor from the soul and regain 2d8 hit points.</p><p><b>Query Soul.</b> You ask the soul a question (no action required) and receive a brief telepathic answer, which you can understand regardless of the language used. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic.</p><p><b>Borrow Experience.</b> You can use a bonus action to bolster yourself with the soul's life experience, making your next attack roll, ability check, or saving throw with advantage. If you don't use this benefit before the start of your next turn, it is lost.</p><p><b>Eyes of the Dead.</b> You can use an action to name a place the humanoid saw in life, which creates an invisible sensor somewhere in that place if it is on the plane of existence you're currently on. The sensor remains for as long as you concentrate, up to 10 minutes (as if you were concentrating on a spell). You receive visual and auditory information from the sensor as if you were in its space using your senses.</p><p>A creature that can see the sensor (such as one using <i>see invisibility</i> or truesight) sees a translucent image of the tormented humanoid whose soul you caged.</p>",
        "page": "XGE 165",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a tiny silver cage worth 100 gp",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 reaction, which you take when a humanoid you can see within 60 feet of you dies",
        "level": 6,
        "school": "necromancy",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Spare the Dying",
        "desc": "<p>You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.</p>",
        "page": "PHB 277",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "necromancy",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Speak with Animals",
        "desc": "<p>You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their Intelligence, but at a minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion.</p>",
        "page": "PHB 277",
        "range": "Self",
        "components": "V, S",
        "ritual": true,
        "duration": "10 minutes",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "divination",
        "classes": [
            "bards",
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Speak with Dead",
        "desc": "<p>You grant the semblance of life and Intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days.</p><p>Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events.</p>",
        "page": "PHB 277",
        "range": "10 feet",
        "components": "V, S, M",
        "material": "burning incense",
        "ritual": false,
        "duration": "10 minutes",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "necromancy",
        "classes": [
            "bards",
            "clerics"
        ]
    },
    {
        "name": "Speak with Plants",
        "desc": "<p>You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances.</p><p>You can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into difficult terrain that lasts for the duration, causing vines and branches to hinder pursuers, for example.</p><p>Plants might be able to perform other tasks on your behalf, at the DM's discretion. The spell doesn't enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks.</p><p>If a plant creature is in the area, you can communicate with it as if you shared a common language, but you gain no magical ability to influence it.</p><p>This spell can cause the plants created by the entangle spell to release a restrained creature.</p>",
        "page": "PHB 277",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "10 minutes",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "bards",
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Spider Climb",
        "desc": "<p>Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed.</p>",
        "page": "PHB 277",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a drop of bitumen and a spider",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Spike Growth",
        "desc": "<p>The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.</p><p>The transformation of the ground is camouflaged to look natural. Any creature that can't see the area at the time the spell is cast must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it.</p>",
        "page": "PHB 277",
        "range": "150 feet",
        "components": "V, S, M",
        "material": "seven sharp thorns or seven small twigs, each sharpened to a point",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "transmutation",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Spirit Guardians",
        "desc": "<p>You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.</p><p>When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
        "page": "PHB 278",
        "range": "Self",
        "components": "V, S, M",
        "material": "a holy symbol",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "conjuration",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Spiritual Weapon",
        "desc": "<p>You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.</p><p>As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it.</p><p>The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell's effect resemble that weapon.</p>",
        "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above the 2nd.",
        "page": "PHB 278",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 bonus action",
        "level": 2,
        "school": "evocation",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Staggering Smite",
        "desc": "<p>The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can't take reactions, until the end of its next turn.</p>",
        "page": "PHB 278",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 4,
        "school": "evocation",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Steel Wind Strike",
        "desc": "<p>You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes 6d10 force damage.</p><p>You can then teleport to an unoccupied space you can see within 5 feet of one of the targets you hit or missed.</p>",
        "page": "XGE 166",
        "range": "30 feet",
        "components": "S, M",
        "material": "a melee weapon worth at least 1 sp",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "conjuration",
        "classes": [
            "rangers",
            "wizards"
        ]
    },
    {
        "name": "Stinking Cloud",
        "desc": "<p>You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration.</p><p>Each creature that is completely within the cloud at the start of its turn must make a Constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw.</p><p>A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round.</p>",
        "page": "PHB 278",
        "range": "90 feet",
        "components": "V, S, M",
        "material": "a rotten egg or several skunk cabbage leaves",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "conjuration",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Stone Shape",
        "desc": "<p>You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible.</p>",
        "page": "PHB 278",
        "range": "Touch",
        "components": "V, S, M",
        "material": "soft clay, to be crudely worked into the desired shape for the stone object",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 4,
        "school": "transmutation",
        "classes": [
            "clerics",
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Stoneskin",
        "desc": "<p>This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage.</p>",
        "page": "PHB 278",
        "range": "Touch",
        "components": "V, S, M",
        "material": "diamond dust worth 100 gp, which the spell consumes",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "abjuration",
        "classes": [
            "druids",
            "rangers",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Storm of Vengeance",
        "desc": "<p>A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes.</p><p>Each round you maintain concentration on this spell, the storm produces additional effects on your turn. </p><p><b>Round 2.</b> Acidic rain falls from the cloud. Each creature and object under the cloud takes 1d6 acid damage.</p><p><b>Round 3.</b> You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can't be struck by more than one bolt. A struck creature must make a Dexterity saving throw. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one.</p><p><b>Round 4.</b> Hailstones rain down from the cloud. Each creature under the cloud takes 2d6 bludgeoning damage.</p><p><b>Round 5-10.</b> Gusts and freezing rain assail the area under the cloud. The area becomes difficult terrain and is heavily obscured. Each creature there takes 1d6 cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area, whether mundane or magical.</p>",
        "page": "PHB 279",
        "range": "Sight",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 9,
        "school": "conjuration",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Storm Sphere",
        "desc": "<p>A 20-foot-radius sphere of whirling air springs into existence, centered on a point you choose within range. The sphere remains for the spell's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere's space is difficult terrain.</p><p>Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage.</p><p>Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen.</p>",
        "higher_level": "When you cast this spell using a spell slot of 5th level or higher, the damage increases for each of its effects by 1d6 for each slot level above 4th.",
        "page": "EEPC 22, XGE 166",
        "range": "150 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Sudden Awakening",
        "desc": "<p>Each sleeping creature you choose within range awakens, and then each prone creature within range can stand up without expending any movement.</p>",
        "page": "UA:SS 4",
        "range": "10 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "enchantment",
        "classes": [
            "bards",
            "rangers",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Suggestion",
        "desc": "<p>You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.</p><p>The target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.</p><p>You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn't met before the spell expires, the activity isn't performed.</p><p>If you or any of your companions damage the target, the spell ends.</p>",
        "page": "PHB 279",
        "range": "30 feet",
        "components": "V, M",
        "material": "a snake's tongue and either a bit of honeycomb or a drop of sweet oil",
        "ritual": false,
        "duration": "Up to 8 hours",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Summon Greater Demon",
        "desc": "<p>You utter foul words, summoning one demon from the chaos of the Abyss. You choose the demon's type, which must be one of challenge rating 5 or lower, such as a shadow demon or a barlgura. The demon appears in an unoccupied space you can see within range, and the demon disappears when it drops to 0 hit points or when the spell ends.</p><p>Roll initiative for the demon, which has its own turns. When you summon it and on each of your turns thereafter, you can issue a verbal command to it (requiring no action on your part), telling it what it must do on its next turn. If you issue no command, it spends its turn attacking any creature within reach that has attacked it.</p><p>At the end of each of the demons turns, it makes a Charisma saving throw. The demon has disadvantage on this saving throw if you say its true name. On a failed, save, the demon continues to obey you. On a successful save, your control of the demon ends for the rest of the duration, and the demon spends its turns pursuing and attacking the nearest non-demons to the best of its ability. If you stop concentrating on the spell before it reaches its full duration, an uncontrolled demon doesn't disappear for 1d6 rounds if it still has hit points.</p><p>As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demon can't cross the circle or harm it, and it can't target anyone within it. Using the material component in this manner consumes it when the spell ends.</p>",
        "higher_level": "When you cast this spell using a spell slot of 5th level or higher, the challenge rating increases by 1 for each slot level above 4th.",
        "page": "XGE 166",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a vial of blood from a humanoid killed within the past 24 hours",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "conjuration",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Summon Lesser Demons",
        "desc": "<p>You utter foul words, summoning demons from the chaos of the Abyss. Roll on the following table to determine what appears.</p><table><tr><th>d6</th><th>Demons Summoned</th></tr><tr><td>1-2</td><td>Two demons of challenge rating 1 or lower</td></tr><tr><td>3-4</td><td>Four demons of challenge rating 1/2 or lower</td></tr><tr><td>5-6</td><td>Eight demons of challenge rating 1/4 or lower</td></tr></table><p>The DM chooses the demons, such as manes or dretches, and you choose the unoccupied spaces you can see within range where they appear. A summoned demon disappears when it drops to 0 hit points or when the spell ends.</p><p>The demons are hostile to all creatures, including you. Roll initiative for the summoned demons as a group, which has its own turns. The demons pursue and attack the nearest non-demons to the best of their ability.</p><p>As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demons can't cross the circle or harm it, and they can‘t target anyone within it. Using the material component in this manner consumes it when the spell ends.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th or 7th level, you summon twice as many demons. If you cast it using a spell slot of 8th or 9th level, you summon three times as many demons.",
        "page": "XGE 167",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a vial of blood from a humanoid killed within the past 24 hours",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "conjuration",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Sunbeam",
        "desc": "<p>A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.</p><p>You can create a new line of radiance as your action on any turn until the spell ends.</p><p>For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light is sunlight.</p>",
        "page": "PHB 279",
        "range": "Self",
        "components": "V, S, M",
        "material": "a magnifying glass",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "evocation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Sunburst",
        "desc": "<p>Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.</p><p>A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.</p><p>This spell dispels any darkness in its area that was created by a spell.</p>",
        "page": "PHB 279",
        "range": "150 feet",
        "components": "V, S, M",
        "material": "fire and a piece of sunstone",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 8,
        "school": "evocation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Swift Quiver",
        "desc": "<p>You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it.</p><p>On each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of nonmagical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends.</p>",
        "page": "PHB 279",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a quiver containing at least one piece of ammunition",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 5,
        "school": "transmutation",
        "classes": [
            "rangers"
        ]
    },
    {
        "name": "Sword Burst",
        "desc": "<p>You create a momentary circle of spectral blades that sweep around you. Each creature within range, other than you, must succeed on a Dexterity saving throw or take 1d6 force damage.</p><p>This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>",
        "page": "SCAG 143",
        "range": "5 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "conjuration",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Symbol",
        "desc": "<p>When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.</p><p>The glyph is nearly invisible, requiring an Intelligence (Investigation) check against your spell save DC to find it.</p><p>You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most common triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph.</p><p>You can further refine the trigger so the spell is activated only under certain circumstances or according to a creature's physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that don't trigger the glyph, such as those who say a certain password.</p><p>When you inscribe the glyph, choose one of the options below for its effect. Once triggered, the glyph glows, filling a 60-foot-radius sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activates is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there. </p><p><b>Death.</b> Each target must make a Constitution saving throw, taking 10d10 necrotic damage on a failed save, or half as much damage on a successful save.</p><p><b>Discord.</b> Each target must make a Constitution saving throw. On a failed save, a target bickers and argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has disadvantage on attack rolls and ability checks.</p><p><b>Fear.</b> Each target must make a Wisdom saving throw and becomes frightened for 1 minute on a failed save. While frightened, the target drops whatever it is holding and must move at least 30 feet away from the glyph on each of its turns, if able.</p><p><b>Hopelessness.</b> Each target must make a Charisma saving throw. On a failed save, the target is overwhelmed with despair for 1 minute. During this time, it can't attack or target any creature with harmful abilities, spells, or other magical effects.</p><p><b>Insanity.</b> Each target must make an Intelligence saving throw. On a failed save, the target is driven insane for 1 minute. An insane creature can't take actions, can't understand what other creatures say, can't read, and speaks only in gibberish. The DM controls its movement, which is erratic.</p><p><b>Pain.</b> Each target must make a Constitution saving throw and becomes incapacitated with excruciating pain for 1 minute on a failed save.</p><p><b>Sleep.</b> Each target must make a Wisdom saving throw and falls unconscious for 10 minutes on a failed save. A creature awakens if it takes damage or if someone uses an action to shake or slap it awake.</p><p><b>Stunning.</b> Each target must make a Wisdom saving throw and becomes stunned for 1 minute on a failed save.</p>",
        "page": "PHB 280",
        "range": "Touch",
        "components": "V, S, M",
        "material": "mercury, phosphorus, and powdered diamond and opal with a total value of at least 1,000 gp, which the spell consumes",
        "ritual": false,
        "duration": "Until dispelled",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 7,
        "school": "abjuration",
        "classes": [
            "bards",
            "clerics",
            "wizards"
        ]
    },
    {
        "name": "Synaptic Static",
        "desc": "<p>You choose a point within range and cause psychic energy to explode there. Each creature in a 20-foot-radius sphere centered on that point must make an Intelligence saving throw. A creature with an Intelligence score of 2 or lower can't be affected by this spell. A target takes 8d6 psychic damage on a failed save, or half as much damage on a successful one.</p><p>After a failed save, a target has muddled thoughts for 1 minute. During that time, it rolls a d6 and subtracts the number rolled from all its attack rolls and ability checks, as well as its Constitution saving throws to maintain concentration. The target can make an Intelligence saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
        "page": "XGE 167",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "enchantment",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Tasha's Hideous Laughter",
        "desc": "<p>A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn't affected.</p><p>At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target had advantage on the saving throw if it's triggered by damage. On a success, the spell ends.</p>",
        "page": "PHB 280",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "tiny tarts and a feather that is waved in the air",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "enchantment",
        "classes": [
            "bards",
            "wizards"
        ]
    },
    {
        "name": "Telekinesis",
        "desc": "<p>You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell.</p><p><b>Creature.</b> You can try to move a Huge or smaller creature. Make an ability check with your spellcasting ability contested by the creature's Strength check. If you win the contest, you move the creature up to 30 feet in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is restrained in your telekinetic grip. A creature lifted upward is suspended in mid-air.</p><p>On subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest.</p><p><b>Object.</b> You can try to move an object that weighs up to 1,000 pounds. If the object isn't being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell.</p><p>If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature's Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction but not beyond the range of this spell.</p><p>You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial.</p>",
        "page": "PHB 280",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Telepathy",
        "desc": "<p>You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane.</p><p>Until the spell ends, you and the target can instantaneously share words, images, sounds, and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it.</p>",
        "page": "PHB 281",
        "range": "Unlimited",
        "components": "V, S, M",
        "material": "a pair of linked silver rings",
        "ritual": false,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 8,
        "school": "evocation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Teleport",
        "desc": "<p>This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it can't be held or carried by an unwilling creature.</p><p>The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls d100 and consults the table.</p><table><tr><th>Familiarity</th><th>Mishap</th><th>Similar Area</th><th>Off Target</th><th>On Target</th></tr><tr><td>Permanent circle</td><td>—</td><td>—</td><td>—</td><td>01-100</td></tr><tr><td>Associated object</td><td>—</td><td>—</td><td>—</td><td>01-100</td></tr><tr><td>Very familiar</td><td>01-05</td><td>06-13</td><td>14-24</td><td>25-100</td></tr><tr><td>Seen casually</td><td>01-33</td><td>34-43</td><td>44-53</td><td>54-100</td></tr><tr><td>Viewed once</td><td>01-43</td><td>44-53</td><td>54-73</td><td>74-100</td></tr><tr><td>Description</td><td>01-43</td><td>44-53</td><td>54-73</td><td>74-100</td></tr><tr><td>False destination</td><td>01-50</td><td>51-100</td><td>—</td><td>—</td></tr></table><p><b>Familiarity.</b> \\\"Permanent circle\\\" means a permanent teleportation circle whose sigil sequence you know. \\\"Associated object\\\" means that you possess an object taken from the desired destination within the last six months, such as a book from a wizard's library, bed linen from a royal suite, or a chunk of marble from a lich's secret tomb.</p><p>\\\"Very familiar\\\" is a place you have been very often, a place you have carefully studied, or a place you can see when you cast the spell. \\\"Seen casually\\\" is someplace you have seen more than once but with which you aren't very familiar. \\\"Viewed once\\\" is a place you have seen once, possibly using magic. \\\"Description\\\" is a place whose location and appearance you know through someone else's description, perhaps from a map.</p><p>\\\"False destination\\\" is a place that doesn't exist. Perhaps you tried to scry an enemy's sanctum but instead viewed an illusion, or you are attempting to teleport to a familiar location that no longer exists.</p><p><b>On Target.</b> You and your group (or the target object) appear where you want to.</p><p><b>Off Target.</b> You and your group (or the target object) appear a random distance away from the destination in a random direction. Distance off target is 1d10 × 1d10 percent of the distance that was to be traveled. For example, if you tried to travel 120 miles, landed off target, and rolled a 5 and 3 on the two d10s, then you would be off target by 15 percent, or 18 miles. The DM determines the direction off target randomly by rolling a d8 and designating 1 as north, 2 as northeast, 3 as east, and so on around the points of the compass. If you were teleporting to a coastal city and wound up 18 miles out at sea, you could be in trouble.</p><p><b>Similar Area.</b> You and your group (or the target object) wind up in a different area that's visually or thematically similar to the target area. If you are heading for your home laboratory, for example, you might wind up in another wizard's laboratory or in an alchemical supply shop that has many of the same tools and implements as your laboratory. Generally, you appear in the closest similar place, but since the spell has no range limit, you could conceivably wind up anywhere on the plane.</p><p><b>Mishap.</b> The spell's unpredictable magic results in a difficult journey. Each teleporting creature (or the target object) takes 3d10 force damage, and the DM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time).</p>",
        "page": "PHB 281",
        "range": "10 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 7,
        "school": "conjuration",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Teleportation Circle",
        "desc": "<p>As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied.</p><p>Many major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence—a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute.</p><p>You can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way.</p>",
        "page": "PHB 282",
        "range": "10 feet",
        "components": "V, M",
        "material": "rare chalks and inks infused with precious gems with 50 gp, which the spell consumes",
        "ritual": false,
        "duration": "1 round",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 5,
        "school": "conjuration",
        "classes": [
            "bards",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Temple of the Gods",
        "desc": "<p>You cause a temple to shimmer into existence on ground you can see within range. The temple must fit within an unoccupied cube of space, up to 120 feet on each side. The temple remains until the spell ends. It is dedicated to whatever god, pantheon, or philosophy is represented by the holy symbol used in the casting.</p><p>You make all decisions about the temples appearance. The interior is enclosed by a floor, walls, and a roof, with one door granting access to the interior and as many windows as you wish. Only you and any creatures you designate when you cast the spell can open or close the door.</p><p>The temple's interior is an open space with an idol or altar at one end. You decide whether the temple is illuminated and whether that illumination is bright light or dim light. The smell of burning incense fills the air within, and the temperature is mild.</p><p>The temple opposes types of creatures you choose when you cast this spell. Choose one or more of the following: celestials, elementals, fey, fiends, or undead. If a creature of the chosen type attempts to enter the temple, that creature must make a Charisma saving throw. On a failed save, it can't enter the temple for 24 hours. Even if the creature can enter the temple, the magic there hinders it; whenever it makes an attack roll, an ability check, or a saving throw inside the temple, it must roll a d4 and subtract the number rolled from the d20 roll.</p><p>In addition, the sensors created by divination spells can't appear inside the temple, and creatures within can't be targeted by divination spells.</p><p>Finally, whenever any creature in the temple regains hit points from a spell of 1st level or higher, the creature regains additional hit points equal to your Wisdom modifier (minimum 1 hit point).</p><p>The temple is made from opaque magical force that extends into the Ethereal Plane, thus blocking ethereal travel into the temples interior. Nothing can physically pass through the temple's exterior. It can't be dispelled by <i>dispel magic</i>, and <i>antimagic field</i> has no effect on it. A <i>disintegrate</i> spell destroys the temple instantly.</p><p>Casting this spell on the same spot every day for a year makes this effect permanent.</p>",
        "page": "XGE 167",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a holy symbol worth at least 5 gp",
        "ritual": false,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "1 hour",
        "level": 7,
        "school": "conjuration",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Tenser's Floating Disk",
        "desc": "<p>This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.</p><p>The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. If can move across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.</p><p>If you move more than 100 feet away from the disk (typically because it can't move around an obstacle to follow you), the spell ends.</p>",
        "page": "PHB 282",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a drop of mercury",
        "ritual": true,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "conjuration",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Tenser's Transformation",
        "desc": "<p>You endow yourself with endurance and martial prowess fueled by magic. Until the spell ends, you can't cast spells, and you gain the following benefits:</p><ul><li>You gain 50 temporary hit points. If any of these remain when the spell ends, they are lost.</li><li>You have advantage on attack rolls that you make with simple and martial weapons.</li><li>When you hit a target with a weapon attack, that target takes an extra 2d12 force damage.</li><li>You have proficiency with all armor, shields, simple weapons, and martial weapons.</li><li>You have proficiency in Strength and Constitution saving throws.</li><li>You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks.</li></ul><p>Immediately after the spell ends, you must succeed on a DC 15 Constitution saving throw or suffer one level of exhaustion.</p>",
        "page": "XGE 168",
        "range": "Self",
        "components": "V, S, M",
        "material": "a few hairs from a bull",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "transmutation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Thaumaturgy",
        "desc": "<p>You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range.</p><ul><li>Your voice booms up to three times as loud as normal for 1 minute.</li><li>You cause flames to flicker, brighten, dim, or change color for 1 minute.</li><li>You cause harmless tremors in the ground for 1 minute.</li><li>You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.</li><li>You instantaneously cause an unlocked door or window to fly open or slam shut.</li><li>You alter the appearance of your eyes for 1 minute.</li></ul><p>If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.</p>",
        "page": "PHB 282",
        "range": "30 feet",
        "components": "V",
        "ritual": false,
        "duration": "1 minute",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "transmutation",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Thorn Whip",
        "desc": "<p>You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.</p><p>This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>",
        "page": "PHB 282",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "the stem of a plant with thorns",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "transmutation",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Thunder Step",
        "desc": "<p>You teleport yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within 10 feet of the space you left must make a Constitution saving throw, taking 3d10 thunder damage on a failed save, or half as much damage on a successful one. The thunder can be heard from up to 300 feet away.</p><p>You can bring along objects as long as their weight doesn't exceed what you can carry. You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell, and there must be an unoccupied space within 5 feet of your destination space for the creature to appear in; otherwise, the creature is left behind.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd.",
        "page": "XGE 168",
        "range": "90 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "conjuration",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Thunderclap",
        "desc": "<p>You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must succeed on a Constitution saving throw or take 1d6 thunder damage.</p><p>The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>",
        "page": "EEPC 22, XGE 168",
        "range": "5 feet",
        "components": "S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "evocation",
        "classes": [
            "bards",
            "druids",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Thunderous Smite",
        "desc": "<p>The first time you hit with a melee weapon attack during this spell's duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone.</p>",
        "page": "PHB 282",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Thunderwave",
        "desc": "<p>A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.</p><p>In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
        "page": "PHB 282",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "bards",
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Tidal Wave",
        "desc": "<p>You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 4d8 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes.</p>",
        "page": "EEPC 22, XGE 168",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a drop of water",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "conjuration",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Time Stop",
        "desc": "<p>You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal.</p><p>This spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it.</p>",
        "page": "PHB 283",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 9,
        "school": "transmutation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Tiny Servant",
        "desc": "<p>You touch one Tiny, nonmagical object that isn't attached to another object or a surface and isn't being carried by another creature. The target animates and sprouts little arms and legs, becoming a creature under your control until the spell ends or the creature drops to 0 hit points. See the stat block for its statistics.</p><p>As a bonus action, you can mentally command the creature if it is within 120 feet of you. (If you control multiple creatures with this spell, you can command any or all of them at the same time, issuing the same command to each one.) You decide what action the creature will take and where it will move during its next turn, or you can issue a simple, general command, such as to fetch a key, stand watch, or stack some books. If you issue no commands, the servant does nothing other than defend itself against hostile creatures. Once given an order, the servant continues to follow that order until its task is complete.</p><p>When the creature drops to 0 hit points, it reverts to its original form, and any remaining damage carries over to that form.</p><table><tr><td colspan=\\\"6\\\"><b>Tiny Servant</b></td></tr><tr><td colspan=\\\"6\\\"><i>Tiny construct, unaligned</i></td></tr><tr><td colspan=\\\"6\\\"><b>Armor Class</b> 15 (natural armor)</td></tr><tr><td colspan=\\\"6\\\"><b>Hit Points</b> 10 (4d4)</td></tr><tr><td colspan=\\\"6\\\"><b>Speed</b> 30 ft., climb 30 ft.</td></tr><tr><td><b>STR</b></td><td><b>DEX</b></td><td><b>CON</b></td><td><b>INT</b></td><td><b>WIS</b></td><td><b>CHA</b></td></tr><tr><td>4 (–3)</td><td>16 (+3)</td><td>10 (+0)</td><td>2 (–4)</td><td>10 (+0)</td><td>1 (–5)</td></tr><tr><td colspan=\\\"6\\\"><b>Damage Immunities</b> poison, psychic</td></tr><tr><td colspan=\\\"6\\\"><b>Condition Immunities</b> blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned</td></tr><tr><td colspan=\\\"6\\\"><b>Senses</b> blindsight 60 ft. (blind beyond this radius), passive Perception 10</td></tr><tr><td colspan=\\\"6\\\"><b>Languages</b> —</td></tr><tr><td colspan=\\\"6\\\"><b>ACTIONS</b></td></tr><tr><td colspan=\\\"6\\\"><i><b>Slam.</b> Melee Weapon Attack:</i> +5 to hit, reach 5 ft., one target. <i>Hit:</i> 5 (1d4 + 3) bludgeoning damage.</td></tr></table><p></p>",
        "page": "XGE 168",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Toll the Dead",
        "desc": "<p>You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage.</p><p>The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12).</p>",
        "page": "XGE 169",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "necromancy",
        "classes": [
            "clerics",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Tongues",
        "desc": "<p>This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says.</p>",
        "page": "PHB 283",
        "range": "Touch",
        "components": "V, M",
        "material": "a small clay model of a ziggurat",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "divination",
        "classes": [
            "bards",
            "clerics",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Transmute Rock",
        "desc": "<p>You choose an area of stone or mud that you can see that fits within a 40-foot cube and is within range, and choose one of the following effects.</p><p><b>Transmute Rock to Mud.</b> Nonmagical rock of any sort in the area becomes an equal volume of thick, flowing mud that remains for the spell's duration.</p><p>The ground in the spell's area becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make the saving throw when it moves into the area for the first time on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud.</p><p>If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one.</p><p><b>Transmute Mud to Rock.</b> Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spell's duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a successful save, a creature is shunted safely to the surface in an unoccupied space. On a failed save, a creature becomes restrained by the rock. A restrained creature, or another creature within reach, can use an action to try to break the rock by succeeding on a DC 20 Strength check or by dealing damage to it. The rock has AC 15 and 25 hit points, and it is immune to poison and psychic damage.</p>",
        "page": "EEPC 22, XGE 169",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "clay and water",
        "ritual": false,
        "duration": "Until dispelled",
        "concentration": false,
        "casting_time": "1 action",
        "level": 5,
        "school": "transmutation",
        "classes": [
            "druids",
            "wizards"
        ]
    },
    {
        "name": "Transport via Plants",
        "desc": "<p>This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement.</p>",
        "page": "PHB 283",
        "range": "10 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "1 round",
        "concentration": false,
        "casting_time": "1 action",
        "level": 6,
        "school": "conjuration",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Tree Stride",
        "desc": "<p>You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered.</p><p>You can use this transportation ability once per round for the duration. You must end each turn outside a tree.</p>",
        "page": "PHB 283",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "conjuration",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "True Polymorph",
        "desc": "<p>Choose one creature or nonmagical object that you can see within range. You transform the creature into a different creature, the creature into an object, or the object into a creature (the object must be neither worn nor carried by another creature). The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation lasts until it is dispelled.</p><p>This spell has no effect on a shapechanger or a creature with 0 hit points. An unwilling creature can make a Wisdom saving throw, and if it succeeds, it isn't affected by this spell.</p><p><b>Creature into Creature.</b> If you turn a creature into another kind of creature, the new form can be any kind you choose whose challenge rating is equal to or less than the target's (or its level, if the target doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the new form. It retains its alignment and personality.</p><p>The target assumes the hit points of its new form, and when it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious.</p><p>The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech, unless its new form is capable of such actions.</p><p>The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment.</p><p><b>Object into Creature.</b> You can turn an object into any kind of creature, as long as the creature's size is no larger than the object's size and the creature's challenge rating is 9 or lower. The creature is friendly to you and your companions. It acts on each of your turns. You decide what action it takes and how it moves. The DM has the creature's statistics and resolves all of its actions and movement.</p><p>If the spell becomes permanent, you no longer control the creature. It might remain friendly to you, depending on how you have treated it.</p><p><b>Creature into Object.</b> If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form. The creature's statistics become those of the object, and the creature has no memory of time spent in this form, after the spell ends and it returns to its normal form.</p>",
        "page": "PHB 283",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a drop of mercury, a dollop of gum arabic, and a wisp of smoke",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 9,
        "school": "transmutation",
        "classes": [
            "bards",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "True Resurrection",
        "desc": "<p>You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature's soul is free and willing, the creature is restored to life with all its hit points.</p><p>This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs. If the creature was undead, it is restored to its non-undead form.</p><p>The spell can even provide a new body if the original no longer exists, in which case you must speak the creature's name. The creature then appears in an unoccupied space you choose within 10 feet of you.</p>",
        "page": "PHB 284",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a sprinkle of holy water and diamonds worth at least 25,000 gp, which the spell consumes",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 hour",
        "level": 9,
        "school": "necromancy",
        "classes": [
            "clerics",
            "druids"
        ]
    },
    {
        "name": "True Seeing",
        "desc": "<p>This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet.</p>",
        "page": "PHB 284",
        "range": "Touch",
        "components": "V, S, M",
        "material": "an ointment for the eyes that costs 25gp; is made from mushroom powder, saffron, and fat; and is consumed by the spell",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 6,
        "school": "divination",
        "classes": [
            "bards",
            "clerics",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "True Strike",
        "desc": "<p>You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended.</p>",
        "page": "PHB 284",
        "range": "30 feet",
        "components": "S",
        "ritual": false,
        "duration": "Up to 1 round",
        "concentration": true,
        "casting_time": "1 action",
        "level": 0,
        "school": "divination",
        "classes": [
            "bards",
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Tsunami",
        "desc": "<p>A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration.</p><p>When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6 d10 bludgeoning damage, or half as much damage on a successful save.</p><p>At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall's height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends.</p><p>A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it can't move. A creature that moves out of the area falls to the ground.</p>",
        "page": "PHB 284",
        "range": "Sight",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 6 rounds",
        "concentration": true,
        "casting_time": "1 minute",
        "level": 8,
        "school": "conjuration",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Unearthly Chorus",
        "desc": "<p>Music of a style you choose fills the air around you in a 30-foot radius. The music spreads around corners and can be heard from up to 100 feet away. The music moves with you, centered on you for the duration.</p><p>Until the spell ends, you make Charisma (Performance) checks with advantage. In addition, you can use a bonus action on each of your turns to beguile one creature you choose within 30 feet of you that can see you and hear the music. The creature must make a Charisma saving throw. If you or your companions are attacking it, the creature automatically succeeds on the saving throw. On a failure, the creature becomes friendly to you for as long as it can hear the music and for 1 hour thereafter. You make Charisma (Deception) checks and Charisma (Persuasion) checks against creatures made friendly by this spell with advantage.</p>",
        "page": "UA:SS 4",
        "range": "Self (30-foot radius)",
        "components": "V",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "illusion",
        "classes": [
            "bards"
        ]
    },
    {
        "name": "Unseen Servant",
        "desc": "<p>This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends.</p><p>Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wind. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.</p><p>If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.</p>",
        "page": "PHB 284",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a piece of string and a bit of wood",
        "ritual": true,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "conjuration",
        "classes": [
            "bards",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Vampiric Touch",
        "desc": "<p>The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action.</p>",
        "higher_level": "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
        "page": "PHB 285",
        "range": "Self",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "necromancy",
        "classes": [
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Vicious Mockery",
        "desc": "<p>You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.</p><p>This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).</p>",
        "page": "PHB 285",
        "range": "60 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "enchantment",
        "classes": [
            "bards"
        ]
    },
    {
        "name": "Virtue",
        "desc": "<p>You touch one creature, imbuing it with vitality. If the target has at least 1 hit point, it gains a number of temporary hit points equal to 1d4 + your spellcasting ability modifier. The temporary hit points are lost when the spell ends.</p>",
        "page": "UA:SS 5",
        "range": "Touch",
        "components": "V, S",
        "ritual": false,
        "duration": "1 round",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "abjuration",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Vitriolic Sphere",
        "desc": "<p>You point at a location within range, and a glowing, 1-foot-diameter ball of emerald acid streaks there and explodes in a 20-foot-radius sphere. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and another 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn.</p>",
        "higher_level": "When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th.",
        "page": "EEPC 23, XGE 170",
        "range": "150 feet",
        "components": "V, S, M",
        "material": "a drop of a giant slug bile",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 4,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Wall of Fire",
        "desc": "<p>You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.</p><p>When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save.</p><p>One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet o f that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side o f the wall deals no damage.</p><p>The other side of the wall deals no damage.</p>",
        "higher_level": "When you cast this spell using a level spell slot 5 or more, the damage of the spell increases by 1d8 for each level of higher spell slot to 4.",
        "page": "PHB 285",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a small piece of phosphorus",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "evocation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Wall of Force",
        "desc": "<p>An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice which side).</p><p>Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by <i>dispel magic</i>. A <i>disintegrate</i> spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall.</p>",
        "page": "PHB 285",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a pinch of powder made by crushing a clear gemstone",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "evocation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Wall of Ice",
        "desc": "<p>You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.</p><p>If the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save, the creature takes 10d6 cold damage, or half as much damage on a successful save.</p><p>The wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a Constitution saving throw. That creature takes 5d6 cold damage on a failed save, or half as much damage on a successful one.</p>",
        "higher_level": "When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by 2d6, and the damage from passing through the sheet of frigid air increases by 1d6, for each slot level above 6th.",
        "page": "PHB 285",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a small piece of quartz",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "evocation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Wall of Light",
        "desc": "<p>A shimmering wall of bright light appears at a point you choose within range. The wall appears in any orientation you choose: horizontally, vertically, or diagonally. It can be free floating, or it can rest on a solid surface. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick. The wall blocks line of sight, but creatures and objects can pass through it. It emits bright light out to 120 feet and dim light for an additional 120 feet.</p><p>When the wall appears, each creature in its area must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded. A blinded creature can make a Constitution saving throw at the end of each of its turns, ending the effect on itself on a success.</p><p>A creature that ends its turn in the wall's area takes 4d8 radiant damage.</p><p>Until the spell ends, you can use an action to launch a beam of radiance from the wall at one creature you can see within 60 feet of it. Make a ranged spell attack. On a hit, the target takes 4d8 radiant damage. Whether you hit or miss, reduce the length of the wall by 10 feet. If the walls length drops to 0 feet, the spell ends.</p>",
        "higher_level": "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.",
        "page": "XGE 170",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a hand mirror",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Wall of Sand",
        "desc": "<p>You create a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the walls space and must spend 3 feet of movement for every 1 foot it moves there.</p>",
        "page": "EEPC 23, XGE 170",
        "range": "90 feet",
        "components": "V, S, M",
        "material": "a handful of sand",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "evocation",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Wall of Stone",
        "desc": "<p>A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.</p><p>If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall.</p><p>The wall can have any shape you desire, though it can't occupy the same space as a creature or object. The wall doesn't need to be vertical or rest on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp.</p><p>If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on.</p><p>The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM's discretion.</p><p>If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends.</p>",
        "page": "PHB 287",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a small block of granite",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "evocation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Wall of Thorns",
        "desc": "<p>You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.</p><p>When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 7d8 piercing damage, or half as much damage on a successful save.</p><p>A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a Dexterity saving throw. It takes 7d8 slashing damage on a failed save, or half as much damage on a successful one.</p>",
        "higher_level": "When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th.",
        "page": "PHB 287",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a handful of thorns",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 6,
        "school": "conjuration",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Wall of Water",
        "desc": "<p>You create a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is difficult terrain.</p><p>Any ranged weapon attack that enters the walls space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot-square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the walls water doesn't fill it.</p>",
        "page": "EEPC 23, XGE 170",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a drop of water",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "evocation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Warding Bond",
        "desc": "<p>This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage.</p><p>The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet.</p><p>It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action.</p>",
        "page": "PHB 287",
        "range": "Touch",
        "components": "V, S, M",
        "material": "a pair of platinum rings worth at least 50 gp each, which you and the target must wear for the duration",
        "ritual": false,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "abjuration",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Warding Wind",
        "desc": "<p>A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell's duration. The wind has the following effects:</p><ul><li>It deafens you and other creatures in its area.</li><li>It extinguishes unprotected flames in its area that are torch-sized or smaller.</li><li>It hedges out vapor, gas, and fog that can be dispersed by strong wind.</li><li>The area is difficult terrain for creatures other than you.</li><li>The attack rolls of ranged weapon attacks have disadvantage if the attacks pass in or out of the wind.</li></ul>",
        "page": "EEPC 23, XGE 170",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 10 minutes",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "evocation",
        "classes": [
            "bards",
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Water Breathing",
        "desc": "<p>This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration.</p>",
        "page": "PHB 287",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a short reed or piece of straw",
        "ritual": true,
        "duration": "24 hours",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "druids",
            "rangers",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Water Walk",
        "desc": "<p>This spell grants the ability to move across any liquid surface—such as water, acid, mud, snow, quicksand, or lava—as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration.</p><p>If you target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round.</p>",
        "page": "PHB 287",
        "range": "30 feet",
        "components": "V, S, M",
        "ritual": true,
        "duration": "1 hour",
        "concentration": false,
        "casting_time": "1 action",
        "level": 3,
        "school": "transmutation",
        "classes": [
            "clerics",
            "druids",
            "rangers",
            "sorcerers"
        ]
    },
    {
        "name": "Watery Sphere",
        "desc": "<p>You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell's duration.</p><p>Any creature in the spheres space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature's choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success.</p><p>The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it.</p><p>As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw.</p><p>When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes.</p>",
        "page": "EEPC 23, XGE 170",
        "range": "90 feet",
        "components": "V, S, M",
        "material": "a droplet of water",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 4,
        "school": "conjuration",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Web",
        "desc": "<p>You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area.</p><p>If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.</p><p>Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free.</p><p>A creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained.</p><p>The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire.</p>",
        "page": "PHB 287",
        "range": "60 feet",
        "components": "V, S, M",
        "material": "a bit of spiderweb",
        "ritual": false,
        "duration": "Up to 1 hour",
        "concentration": true,
        "casting_time": "1 action",
        "level": 2,
        "school": "conjuration",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Weird",
        "desc": "<p>Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them. Each creature in a 30-foot-radius sphere centered on a point of your choice within range must make a Wisdom saving throw. On a failed save, a creature becomes frightened for the duration. The illusion calls on the creature's deepest fears, manifesting its worst nightmares as an implacable threat. At the end of each of the frightened creature's turns, it must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends for that creature.</p>",
        "page": "PHB 288",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 9,
        "school": "illusion",
        "classes": [
            "wizards"
        ]
    },
    {
        "name": "Whirlwind",
        "desc": "<p>A whirlwind howls down to a point that you can see on the ground within range. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone.</p><p>A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft.</p><p>A restrained creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 × 10 feet away from it in a random direction.</p>",
        "page": "EEPC 24, XGE 171",
        "range": "300 feet",
        "components": "V, M",
        "material": "a piece of straw",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 7,
        "school": "evocation",
        "classes": [
            "druids",
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Wild Cunning",
        "desc": "<p>You call out to the spirits of nature to aid you. When you cast this spell, choose one of the following effects:</p><ul><li>If there are any tracks on the ground within range, you know where they are, and you make Wisdom (Survival) checks to follow these tracks with advantage for 1 hour or until you cast this spell again.</li><li>If there is edible forage within range, you know it and where to find it.</li><li>If there is clean drinking water within range, you know it and where to find it.</li><li>If there is suitable shelter for you and your companions with range, you know it and where to find.</li><li>Send the spirits to bring back wood for a fire and to set up a campsite in the area using your supplies. The spirits build the fire in a circle of stones, put up tents, unroll bedrolls, and put out any rations and water for consumption.</li><li>Have the spirits instantly break down a campsite, which includes putting out a fire, taking down tents, packing up bags, and burying any rubbish.</li></ul>",
        "page": "UA:SS 5",
        "range": "120 feet",
        "components": "V, S",
        "ritual": true,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 1,
        "school": "transmutation",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Wind Walk",
        "desc": "<p>You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form. Reverting takes 1 minute, during which time a creature is incapacitated and can't move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation.</p><p>If a creature is in cloud form and flying when the effect ends, the creature descends 60 feet per round for 1 minute until it lands, which it does safely. If it can't land after 1 minute, the creature falls the remaining distance.</p>",
        "page": "PHB 288",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "fire and holy water",
        "ritual": false,
        "duration": "8 hours",
        "concentration": false,
        "casting_time": "1 minute",
        "level": 6,
        "school": "transmutation",
        "classes": [
            "druids"
        ]
    },
    {
        "name": "Wind Wall",
        "desc": "<p>A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.</p><p>When the wall appears, each creature within its area must make a Strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one.</p><p>The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can't pass through it.</p>",
        "page": "PHB 288",
        "range": "120 feet",
        "components": "V, S, M",
        "material": "a tiny fan and a feather of exotic origin",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 3,
        "school": "evocation",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Wish",
        "desc": "<p><i>Wish</i> is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires.</p><p>The basic use of this spell is to duplicate any other spell of 8th level or lower. You don't need to meet any requirements in that spell, including costly components. The spell simply takes effect.</p><p>Alternatively, you can create one of the following effects of your choice:</p><ul><li>You create one object of up to 25,000 gp in value that isn't a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space you can see on the ground.</li><li>You allow up to twenty creatures that you can see to regain all hit points, and you end all effects on them described in the <i>greater restoration</i> spell.</li><li>You grant up to ten creatures that you can see resistance to a damage type you choose.</li><li>You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. For instance, you could make yourself and all your companions immune to a lich's life drain attack.</li><li>You undo a single recent event by forcing a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a <i>wish</i> spell could undo an opponent's successful save, a foe's critical hit, or a friend's failed save. You can force the reroll to be made with advantage or disadvantage, and you can choose whether to use the reroll or the original roll.</li></ul><p>You might be able to achieve something beyond the scope of the above examples. State your wish to the DM as precisely as possible. The DM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the item's current owner.</p><p>The stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take 1d10 necrotic damage per level of that spell. This damage can't be reduced or prevented in any way. In addition, your Strength drops to 3, if it isn't 3 or lower already, for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast <i>wish</i> ever again if you suffer this stress.</p>",
        "page": "PHB 288",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 9,
        "school": "conjuration",
        "classes": [
            "sorcerers",
            "wizards"
        ]
    },
    {
        "name": "Witch Bolt",
        "desc": "<p>A  beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell's range or if it has total cover from you.</p>",
        "higher_level": "When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st.",
        "page": "PHB 289",
        "range": "30 feet",
        "components": "V, S, M",
        "material": "a twig from a tree that has been struck by lightning",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "sorcerers",
            "warlocks",
            "wizards"
        ]
    },
    {
        "name": "Word of Radiance",
        "desc": "<p>You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage.</p><p>The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>",
        "page": "XGE 171",
        "range": "5 feet",
        "components": "V, M",
        "material": "a holy symbol",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 0,
        "school": "evocation",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Word of Recall",
        "desc": "<p>You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect.</p><p>You must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isn't dedicated to your deity, the spell has no effect.</p>",
        "page": "PHB 289",
        "range": "5 feet",
        "components": "V",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 6,
        "school": "conjuration",
        "classes": [
            "clerics"
        ]
    },
    {
        "name": "Wrath of Nature",
        "desc": "<p>You call out to the spirits of nature to rouse them against your enemies. Choose a point you can see within range. The spirits cause trees, rocks, and grasses in a 60-foot cube centered on that point to become animated until the spell ends.</p><p><b>Grasses and Undergrowth.</b> Any area of ground in the cube that is covered by grass or undergrowth is difficult terrain for your enemies.</p><p><b>Trees.</b> At the start of each of your turns, each of your enemies within 10 feet of any tree in the cube must succeed on a Dexterity saving throw or take 4d6 slashing damage from whipping branches.</p><p><b>Roots and Vines.</b> At the end of each of your turns, one creature of your choice that is on the ground in the cube must succeed on a Strength saving throw or become restrained until the spell ends. A restrained creature can use an action to make a Strength (Athletics) check against your spell save DC, ending the effect on itself on a success.</p><p><b>Rocks.</b> As a bonus action on your turn, you can cause a loose rock in the cube to launch at a creature you can see in the cube. Make a ranged spell attack against the target. On a hit, the target takes 3d8 nonmagical bludgeoning damage, and it must succeed on a Strength saving throw or fall prone.</p>",
        "page": "XGE 171",
        "range": "120 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 action",
        "level": 5,
        "school": "evocation",
        "classes": [
            "druids",
            "rangers"
        ]
    },
    {
        "name": "Wrathful Smite",
        "desc": "<p>The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell.</p>",
        "page": "PHB 289",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "evocation",
        "classes": [
            "paladins"
        ]
    },
    {
        "name": "Zephyr Strike",
        "desc": "<p>You move like the wind. Until the spell ends, your movement doesn't provoke opportunity attacks.</p><p>Once before the spell ends, you can give yourself advantage on one weapon attack roll on your turn. That attack deals an extra 1d8 force damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn.</p>",
        "page": "XGE 171",
        "range": "Self",
        "components": "V",
        "ritual": false,
        "duration": "Up to 1 minute",
        "concentration": true,
        "casting_time": "1 bonus action",
        "level": 1,
        "school": "transmutation",
        "classes": [
            "rangers"
        ]
    },
    {
        "name": "Zone of Truth",
        "desc": "<p>You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell's area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw.</p><p>An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive in its answers as long as it remains within the boundaries of the truth.</p>",
        "page": "PHB 289",
        "range": "60 feet",
        "components": "V, S",
        "ritual": false,
        "duration": "10 minutes",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "school": "enchantment",
        "classes": [
            "bards",
            "clerics",
            "paladins"
        ]
    }
]`;

const spells = JSON.parse(spellsJSON);
export default spells;