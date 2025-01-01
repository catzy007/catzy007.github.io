#### 3 Axis CNC Machine
_Friday, August 18, 2017_

Before you proceed to next part you'll it's good to understand some basics 
of CNC machine. according to 
[Wikipedia](https://en.wikipedia.org/wiki/Numerical_control), Computer numerical 
control (CNC) is the automation of machine tools by means of computers executing 
pre-programmed sequences of machine control commands. This is in contrast 
to machines that are manually controlled by hand wheels or levers, or 
mechanically automated by cams alone.

##### **Part 1 - Components and tools**
The CNC machine i made has 3 axis. X, Y and Z. each axis is powered by 
stepper motor that runs at 5V and controlled by arduino uno. here some 
part i used.

1. 3x mini stepper motor <https://www.banggood.com/Drive-Stepper-Motor-Screw-With-Nut-Slider-Small-Stage-2-Phase-4-Wire-p-956344.html>
2. 1x arduino uno + CNC shield <https://www.banggood.com/CNC-Shield-UNO-R3-Board-4xA4988-Driver-Kit-With-Heatsink-For-Arduino-Engraver-3D-Printer-p-1082323.html> or you can purchase them separately
3. 1x power supply. because CNC shield only works at 12V-36V and we had stepper motor that run at 4-6V, we need too power this without burning the stepper motor. My recommendation use 12V 500mA power supply. It'll give enough power to machine 
4. Some cable
5. Frame. in my machine i used some PLA sheet, cut it using cutter and bend it using heat

##### **Part 2 - Design**
In this part, i'm gonna using Computer Graphics (CG) because i'm too lazy 
to take a picture.

![img_lg](./posts/2017-08-18-3-axis-cnc-machine/1.jpg)

::br

1. **Axis** There are 3 axis in my machine. The X, Y, and Z all axis 
has it's own function the X axis is left and right, the Y axis is 
forward and backward, and the Z axis is up and down. Axis configuration 
can you see below. BTW "ALL OF MY AXIS ARE ACTUALLY INVERTED" so yeah 

![img_lg](./posts/2017-08-18-3-axis-cnc-machine/2.jpg)

::br

2. **Mounting** For mounting X axis to Back plate, i'm using this weird 
looking shape. To make it, first cut PLA sheet to ± 20 cm. Then Apply 
some heat and bend it into shape.

![img_lg](./posts/2017-08-18-3-axis-cnc-machine/3.jpg)

::br

3. **Spacer** For axis X and Z i'm adding some custom made spacer to 
prevent Z axis collide with X axis.

![img_lg](./posts/2017-08-18-3-axis-cnc-machine/4.jpg)

::br

4. **More Spacer** For Y axis and Bottom base, i'm add some spacer with 
some improvement... i'm using PC motherboard spacer + screws. so Y axis 
can move more freely

![img_lg](./posts/2017-08-18-3-axis-cnc-machine/5.jpg)

::br

5. **Controller** for Controller (Arduino and CNC Shield) you can mount 
it anywhere as long as your cable length can reach it.

#### **Part 3 - Software**
I'm assuming you already figuring how to connect your arduino to your 
computer or you can read this <https://www.arduino.cc/en/Guide/HomePage>. 
For software, I'm using "Grbl v0.8c Atmega328p 16mhz 9600baud" you can 
download it here <https://github.com/grbl/grbl>

For Flashing `".HEX"` file to your arduino, I'm using `XLoader` which you 
can download it here <http://russemotto.com/xloader/>

![img_sm](./posts/2017-08-18-3-axis-cnc-machine/6.jpg)

::br

And for the fun part. For controlling CNC machine, i'm using "GRBL 
Controller" which you can download it here <https://github.com/zapmaker/GrblHoming/releases>

![img_lg](./posts/2017-08-18-3-axis-cnc-machine/7.jpg) 

::br

##### **Part 4 - Conclusion**
Making your own CNC machine isn't hard as you think. i'ts fun actually 
to make something that very hard to make few years ago. and you can 
learn some basics of electronic and computer from making this.

##### **Some Usefull Stuff**
Some Calibration Code, Apps, Driver (PERSONAL USE ONLY! ALL FILES 
BELONG TO IT'S CREATOR) <https://www.mediafire.com/file/nmask9skn7j341u/CNC.zip>

##### **SOME BONUS PICTURE**

![img_lg](./posts/2017-08-18-3-axis-cnc-machine/9.jpg)
![img_lg](./posts/2017-08-18-3-axis-cnc-machine/10.jpg)
![img_lg](./posts/2017-08-18-3-axis-cnc-machine/11.jpg)
![img_lg](./posts/2017-08-18-3-axis-cnc-machine/12.jpg)
![img_lg](./posts/2017-08-18-3-axis-cnc-machine/8.jpg)
![img_lg](./posts/2017-08-18-3-axis-cnc-machine/12.jpg)

::br

as you can see, i'm manually draw something i want to cnc then 
calculate that based on i'ts axis.
