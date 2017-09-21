# Pew-Pew-WUB-WUB

## High Concept

It's like Audiosurf with guns!  A side-scrolling shoot-em-up with rythym-based power-ups that'll keep you on the edge of your seat.

## Genre

As mentioned above, this game aims to be a shoot-em-up/rythym game hybrid

## Platform

Hopefully I'll be able to code this project so that it'll work on both desktop and mobile, aka universal

## Story

### Theme
  * I've always wanted to play out the action-adventure stories I made up in my head as a kid when listening to rock music
  and the key concept there was having the real adrenaline-pumping moments happen on-beat, with trailing action going on in
  between the beats.
### Mood
  * Generally the mood of this game will be excitement, with a little bit a fear sprinkled in the really intense moments when
  the player struggles to keep up with his opponents, who are also taking advantage of the rythym-based power-ups.
### Narrative
  * Pew-Pew-WUB-WUB progresses in a linear fassion, with the player defeating waves of enemies along with a boss enemy that
  comes along at the peak chorus in each song played.
### Premise
  * There's not too much of a plot in this game, similar to Audiosurf and most shoot-em-ups.  You're on the left side of the
  screen, there's enemies flying at and shooting you from the right side of the screen, and the background is going to be
  a trippy music visualizer a-la Windows Media Player; the motivation mostly comes from the adrenaline rush the music should
  give the player while they're blasting badies.
  
## Asthetics

### Graphics
  * Either abstract or cartoonish (maybe the enemies will be music notes?)  As mentioned above, I hope I can get some kind
  of music visualizer to run in the background in real-time with the track being played.
### Sound
  * The key to this game.  Music will be either preset tunes with timestamps that the game will use to know when power-ups
  should do critical damage, or if I'm feeling really ambitious I'd like to let players put in their own music that a script
  could read the waveform of and auto-generate timestamps on the fly.  Sound effects for the player-character & enemies
  would probably be retro, but honestly it'll come down to what clashes with the music least.

## Gameplay

### Mechanics
  * There's pretty much only going to be two forms of fire: Primary, which will have a static rate of fire/damage amount and
  unlimited ammo, and Secondary/Special, which will be given to the player via pick-ups and can deal serious bonus damage if
  shot in time with the music.  If there's time I may also put in a speed-boost or time-slow power-up to accompany the special
  ammo.
### Control
  * WASD will control the player-character's movement, and left and right click on the mouse will control the primary/secondary
  fire accordingly.
### Onboarding
  * The intro will have a tutorial level that teaches the player how to move around, shoot, and use power-ups properly.
### Advanced Player Learning
  * The strategy for this game comes in when you're facing late-game bosses that are spewing out perfectly timed, one hit
  knockout power shots.  The player must learn how to dodge the incoming attacks while still picking away at the enemy's health
  and picking up power-ups to deal even more damage.  They must also perfectly time their special ammo shots in time with the
  music so as not to waste them.

## Screenshots

![Windows Media Player Visualizer][ss1]
Windows Media Player Visualizer, hopefully can get something like this working in js for a sweet active background
![Audiosurf][ss2]
Audiosurf, the game I'm drawing a lot of inspiration from for the rythym component of this game
![Screengrab from the eXceed series of Japanese shoot-em-ups.][ss3]
Screengrab from the eXceed series of Japanese shoot-em-ups.  This cramped screen is indicitive of the intense action I wish to invoke in Pew-Pew-WUB-WUB

[ss1]: http://www.plasmavis.com/acidwax/ReadMe_files/image001.jpg
[ss2]: https://static.giantbomb.com/uploads/original/0/4262/191218-images.jpg
[ss3]: http://indiegames.com/2012/08/02/120802_exceed.jpg

## Other

If the scope of my original game concept is too large I'd be down to make a simple schmup with nice, abstract visuals.  That  
being said, I'd like to look into libraries that could handle reading songs and generating timestamps to use in the game.

## About the Author

My name is Nicholas Mercadante, and At the time of writing, I am a 2nd year Game Design and Development at the Rochester Institute of Technology. I'm proficient in C# and HTML/CSS, and like to mess around in level editors such as Unreal or Unity.
