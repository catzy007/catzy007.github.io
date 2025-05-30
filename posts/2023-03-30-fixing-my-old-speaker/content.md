#### Fixing my old speaker
_Thursday, March 30, 2023_

For quite some time I wanted something fun, I need something musical, I need to 
fix my old speaker. Which I get from my family member a long time ago, I don't 
even remember what brand it was. The design for me was enticing it also had blue 
ambient lighting which later I replace with RGB lighting which finally I took 
away. The sound quality is not bad but not that good either, and it has a high 
pitch noise when no sound is being played which bother me so much. Funnily 
enough, I asked several people about this high pitch noise and some can hear it 
while some could not, and it is the reason why I wanted to replace the internal 
with something more modern.

The first thing I did was to disassemble the unit and find the 
[impedance rating](https://www.hifireport.com/speaker-impedance/) 
of each driver. For the tweeter driver, the impedance is written clearly as 4 
ohms. Unfortunately the same can't be said about subwoofer driver, it is 
completely stuck inside the wooden frame, so the only way is to measure it. 
I grab my multimeter, set it as resistance mode and probe the connector. The 
measurement came up around 8 ohms which according to several sources, the 
measured impedance should be 15% lower than the actual impedance and the 
impedance rating should be around 10 ohms.

![img](./posts/2023-03-30-fixing-my-old-speaker/01.jpg)

Next thing I did is to find a suitable amplifier for my set-up. If the impedance 
rating of my drivers is lower than the amplifier expect, it could blow itself to 
death. If it is too high, the amplifier may not be able to drive it. In the end 
I choose Wuzhi Audio ZK-LT21 which is 2.1 channel D class audio amplifier. It 
also supports Bluetooth, USB and regular AUX. The only drawback is that this 
amplifier is rated for 4 to 8 ohms driver and my heavy subwoofer driver is 10 
ohms I guess I just max the subwoofer volume and adjust everything else in EQ.

![img](./posts/2023-03-30-fixing-my-old-speaker/02.jpg)

Compared to the original internals, it is like a night and day. Not only in the 
size footprint, the sound quality is also improved. The sound stage is wider 
and sharper and the note is separated quite nicely. Yes it is not the best 
ever but at 10 USD shipped, it is good enough for me.

![img](./posts/2023-03-30-fixing-my-old-speaker/03.jpg)

The last thing I did is to dismantle the original internals, wire everything up, 
do a final test before closing the panel then do a test and adjust the EQ. As for 
test track, I use a variety of songs like Crab Rave, God Knows, Bury the Light, 
11:11, When the wind blows, Marine rushia magnet, River flows in you nightcore, 
Black Parade, Nevereverland, Golden Time and many others. Each track meant as a 
way to measure how the system perform compared to a known set of tracks. For 
example if God Knows played in improperly configured stereo set-up, the electric 
guitar part is going to be missing altogether. 

![img](./posts/2023-03-30-fixing-my-old-speaker/04.jpg)

As for my set-up, everything is passed with flying colours except Golden Time. It 
has a short burst bass and apparently my power supply I pull from random internet 
router somewhere could not handle it, well I guess new power supply next time.


#### [Update 6/6/23]

After using this speaker for a while, there is a few 
things that could improve your listening experience.

First is changing your resample method to `soxr-vhq` 
while yes it may cost you more CPU usage, in my Skylake 
I7 it costs me whopping 1% of CPU usage. Other than 
that, I set sample format to 32-Bit float at 48 kHz. 
If you're using PulseAudio in Linux, you can set it by 
doing.
```
$ nano /etc/pulse/daemon.conf
```

Then at the bottom of the file, add the following
```
resample-method = soxr-vhq
default-sample-format = float32le
default-sample-rate = 48000
```

Then exit and save by `Ctrl + X, Y, Enter` and 
apply your configuration and restart if necessary.
```
$ pulseaudio -k
```

Also don't worry too much about bit depth and sample 
rate, unless you're recording or editing a track it is 
fine for playback purpose. You can get more info in this 
[YouTube video](https://www.youtube.com/watch?v=cD7YFUYLpDc&feature=youtu.be).

![img_lg](./posts/2023-03-30-fixing-my-old-speaker/05.png)

Next if you want to improve your playback quality 
using Bluetooth, you can change the audio codec to 
SBC-XQ. There are few Bluetooth audio codec available 
such as LDAC which is proprietary Sony audio codec that 
can handle bit rates up to 990 kbps as for contexts, 
CD Audio bit rates is about 1411 kbps, AAC which is 
usually used for Apple devices and can handle bit rates 
up to 320 kbps, aptX HD which is CSR/Qualcomm proprietary 
audio codec offering improved version of regular aptX 
with bit rates up to 576 kbps while regular aptX bit rates 
up to 384 kbps, and there is SBC which officially can handle 
bit rates up to 345 kbps, but modern Bluetooth audio receiver 
can handle up to 730 kbps this is refered by the community as 
[SBC-XQ](https://lineageos.org/engineering/Bluetooth-SBC-XQ/) 
wich according to 
[soundexpert.org](http://soundexpert.org/articles/-/blogs/audio-quality-of-sbc-xq-bluetooth-audio-codec)
SBC-XQ at 551 kbps is comparable to aptX HD at 529 kbps.

The drawback for this approach is SBC-XQ may be more 
susceptible to an interference from other device that 
operate in same frequency as Bluetooth which is ranging 
from Wi-Fi devices, Microwave oven and other home 
electronic device such as baby monitor.

If you're using PulseAudio in Linux, you can enable SBC-XQ 
simply by installing PulseAudio Volume Control 
`pavucontrol`, go to `Configuration` tab and simply 
change the codec.

![img_lg](./posts/2023-03-30-fixing-my-old-speaker/06.png)

As for other device because this is not an official 
specification, you need a find a "Hacky" ways to get 
it. In android, you need to root your devices and manually 
install the module. As for Windows and Apple devices it 
is yet to be seen.

Using Bluetooth is great for portability, for everything 
else I recommend using cable. USB cable to be exact 
apparently amplifier that I have can act as a sound card 
by simply plugging one end of the USB cable to amplifier 
and the other end to my PC. This way I can use it to play 
music at 16-Bit at 48 kHz with no interference at all.

![img](./posts/2023-03-30-fixing-my-old-speaker/07.png)