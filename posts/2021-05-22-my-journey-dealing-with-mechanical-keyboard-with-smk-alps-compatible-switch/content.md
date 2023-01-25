#### My Journey Dealing With Mechanical Keyboard With SMK Alps Compatible Switch
_Saturday, May 22, 2021_

Recently i just bored and just scouring the internet marketplace and see interesting 
ads selling random keyboard for 2USD and one keyboard catch my eyes. It's Mitac 
mechanical keyboard which is rebranded [Chicony KB-5181](https://deskthority.net/wiki/Chicony_KB-5181). 
It's old keyboard, from PCB marking said 1990, with [SMK](https://deskthority.net/wiki/SMK_second_generation) 
[Alps Compatible switch](https://deskthority.net/wiki/SMK_Alps_mount).

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/1.jpg" alt="img">
            <span>It's the top left one</span>
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then i contact the seller and pick it up. At home i disassemble the keyboard and check this out.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/2.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/3.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

I just sand the rust off and prepare a vinegar solution and just put the frame and leave it sit 
for few hours and comeback later.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/4.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

In the meantime, i just pull out all the switch (basically desolder all of them) then pull out 
the PCB itself and try to clean it up.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/5.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

The way i clean it was to clean the rust with baking soda and water, then i spray the board with 
brake cleaner, or maybe contact cleaner will be the best, last with alcohol wipe.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/6.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then somehow, some diode legs just snap off and i replace that, then some traces just broke and i 
had to use patch wire, and i just need to test it.

Because this keyboard uses 9 PIN DIN Connectors, i need to get an adapter or just solder random 
PS/2 cable to the board. Then i look around <https://www.reddit.com/r/MechanicalKeyboards/wiki/ps2_adapters>.

The board itself had a marking `G, V, D, C` and the PS/2 cable color is `Yellow, Red, White, Green`.
So what i do is solder it according to this.

```

| Name        | PS/2 Cable  | Marking | 
| ----------- | ----------- | ------- | 
| Ground      | Yellow      | G       | 
| VCC         | Red         | V       | 
| Data        | White       | D       | 
| Clock       | Green       | C       | 

```

Then plug it into my PC and nothing. It doesn't work at all, not even the LED indicator work. Then i try to 
swap around the cable, play around with the board XT/AT switch and still nothing. And then i touch the Controller 
and it is so hot to the touch, which mean that the controller itself is probably dead.

Then i come back to the frame then neutralize the acid with baking soda and rinse it off. Next, i let it dry, 
sand it off and then put some primer on it.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/7.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Then i paint it black and put it back together again, so yeah.

<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/8.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>

Maybe some day i could replace the controller with [Teensey](https://deskthority.net/viewtopic.php?f=7&t=6050&start=) or 
something like that. 

#### Bonus - How to reassemble SMK Alps Switch
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/0.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/1.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/2.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/3.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/4.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/5.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/6.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/7.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/8.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/9.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/10.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/11.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/12.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>
<div class="row">
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		<div class="img-thumbnail">
			<img class="img-fluid" src="./posts/2021-05-22-my-journey-dealing-with-mechanical-keyboard-with-smk-alps-compatible-switch/img/13.jpg" alt="img">
		</div>
	</div>
	<div class="col-sm-3"></div>
</div>