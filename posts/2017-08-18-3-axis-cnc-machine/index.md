### **3 Axis CNC Machine**
#### Friday, August 18, 2017

Before you proceed to next part you'll it's good to understand some basics 
of CNC machine. according to [Wikipedia](https://en.wikipedia.org/wiki/Numerical_control), 
Computer numerical control (CNC) 
is the automation of machine tools by means of computers executing 
pre-programmed sequences of machine control commands. This is in contrast 
to machines that are manually controlled by hand wheels or levers, or 
mechanically automated by cams alone.

> In short, CNC machine is mechanical machine that controlled by computer.

<br>
#### **Part 1 - Components and tools**
The CNC machine i made has 3 axis. X, Y and Z. each axis is powered by 
stepper motor that runs at 5V and controlled by arduino uno. here some 
part i used.

1. 3x mini stepper motor <https://www.banggood.com/Drive-Stepper-Motor-Screw-With-Nut-Slider-Small-Stage-2-Phase-4-Wire-p-956344.html>
2. 1x arduino uno + CNC shield <https://www.banggood.com/CNC-Shield-UNO-R3-Board-4xA4988-Driver-Kit-With-Heatsink-For-Arduino-Engraver-3D-Printer-p-1082323.html> or you can purchase them separately
3. 1x power supply. because CNC shield only works at 12V-36V and we had stepper motor that run at 4-6V, we need too power this without burning the stepper motor. My recommendation use 12V 500mA power supply. It'll give enough power to machine 
4. Some cable
5. Frame. in my machine i used some PLA sheet, cut it using cutter and bend it using heat

<br>
#### **Part 2 - Design**
In this part, i'm gonna using Computer Graphics (CG) because i'm too lazy 
to take a picture (~'-')~
<p align="center">
	<img src="./posts/2017-08-18-3-axis-cnc-machine/1.jpg" height="250px" alt="img1">
</p> 

1. **Axis** There are 3 axis in my machine. The X, Y, and Z all axis 
has it's own function the X axis is left and right, the Y axis is 
forward and backward, and the Z axis is up and down. Axis configuration 
can you see below. BTW "ALL OF MY AXIS ARE ACTUALLY INVERTED" so yeah 
<p align="center">
	<img src="./posts/2017-08-18-3-axis-cnc-machine/2.jpg" height="250px" alt="img2">
</p> 

2. **Mounting** For mounting X axis to Back plate, i'm using this weird 
looking shape. To make it, first cut PLA sheet to ± 20 cm. Then Apply 
some heat and bend it into shape.
<p align="center">
	<img src="./posts/2017-08-18-3-axis-cnc-machine/3.jpg" height="250px" alt="img3">
</p> 

3. **Spacer** For axis X and Z i'm adding some custom made spacer to 
prevent Z axis collide with X axis.
<p align="center">
	<img src="./posts/2017-08-18-3-axis-cnc-machine/4.jpg" height="250px" alt="img4">
</p> 

4. **More Spacer** For Y axis and Bottom base, i'm add some spacer with 
some improvement... i'm using PC motherboard spacer + screws. so Y axis 
can move more freely
<p align="center">
	<img src="./posts/2017-08-18-3-axis-cnc-machine/5.jpg" height="250px" alt="img5">
</p> 

5. **Controller** for Controller (Arduino and CNC Shield) you can mount 
it anywhere as long as your cable length can reach it.

<br>
#### **Part 3 - Software**
I'm assuming you already figuring how to connect your arduino to your 
computer or you can read this <https://www.arduino.cc/en/Guide/HomePage>. 
For software, I'm using "Grbl v0.8c Atmega328p 16mhz 9600baud" you can 
download it here <https://github.com/grbl/grbl>

For Flashing `".HEX"` file to your arduino, I'm using `XLoader` which you 
can download it here <http://russemotto.com/xloader/>
<p align="center">
	<img src="./posts/2017-08-18-3-axis-cnc-machine/6.jpg" height="250px" alt="img6">
</p> 

And for the fun part. For controlling CNC machine, i'm using "GRBL 
Controller" which you can download it here <https://github.com/zapmaker/GrblHoming/releases>
<p align="center">
	<img src="./posts/2017-08-18-3-axis-cnc-machine/7.jpg" height="250px" alt="img7">
</p> 

<br>
#### **Part 4 - Conclusion**
Making your own CNC machine isn't hard as you think. i'ts fun actually 
to make something that very hard to make few years ago. and you can 
learn some basics of electronic and computer from making this.

<br>
#### **Some Usefull Stuff**
Some Calibration Code, Apps, Driver (PERSONAL USE ONLY! ALL FILES 
BELONG TO IT'S CREATOR) <https://www.mediafire.com/file/nmask9skn7j341u/CNC.zip>

<br>
#### **SOME BONUS PICTURE**
<p align="center">
	<img src="./posts/2017-08-18-3-axis-cnc-machine/8.jpg" height="250px" alt="img8">
	<img src="./posts/2017-08-18-3-axis-cnc-machine/9.jpg" height="250px" alt="img9">
	<img src="./posts/2017-08-18-3-axis-cnc-machine/10.jpg" height="250px" alt="img10">
	<img src="./posts/2017-08-18-3-axis-cnc-machine/11.jpg" height="250px" alt="img11">
	<img src="./posts/2017-08-18-3-axis-cnc-machine/12.jpg" height="250px" alt="img12">
	<img src="./posts/2017-08-18-3-axis-cnc-machine/13.jpg" height="250px" alt="img13">
</p> 

as you can see, i'm actually drawing something i want to cnc then 
calculate that based on i'ts axis... so yeah great (~'-')~
