### *How to customize your steam profile with MMD [Part 3]*
#### Sunday, July 9, 2017

<h3 align="center">PART 3 : Animate it!</h3>

Don't worry in this part and next i will using windows as example. 
after getting some image from part 2 now we will generate some 
animation using MMD.. yaay

1. Fire up your MMD application
<p align="center">
	<img src="./posts/2017-07-09-how-to-customize-your-steam-profile-with-mmd-part-3/1.png" height="250px" alt="img1">
</p> 
2. Set screen size to 506*506px in `view(V) > Screen Size(O)`
<p align="center">
	<img src="./posts/2017-07-09-how-to-customize-your-steam-profile-with-mmd-part-3/2.png" height="250px" alt="img2">
	<br>
	<img src="./posts/2017-07-09-how-to-customize-your-steam-profile-with-mmd-part-3/3.png" height="150px" alt="img3">
</p> 
3. Set your image from part 1 as MMD background in `Background(B) > load background picture file(R)`
<p align="center">
	<img src="./posts/2017-07-09-how-to-customize-your-steam-profile-with-mmd-part-3/4.png" height="250px" alt="img4">
</p> 
4. Load your model by pressing load button then choose your model `*.pmx` or `*.pmd` file
<p align="center">
	<img src="./posts/2017-07-09-how-to-customize-your-steam-profile-with-mmd-part-3/5.png" height="250px" alt="img5">
</p> 
5. Load motion data in `file(F) > load motion data(M)`
<p align="center">
	<img src="./posts/2017-07-09-how-to-customize-your-steam-profile-with-mmd-part-3/6.png" height="250px" alt="img6">
</p> 
6. If you're seeing weird line in the bottom, and red green blue color, you can remove it by pressing `View(V) > display coordinate axis(G)`
<p align="center">
	<img src="./posts/2017-07-09-how-to-customize-your-steam-profile-with-mmd-part-3/7.png" height="250px" alt="img7">
</p> 
7. Finding maximum frame of your motion data. you can do this by pressing this button. in this case `1085`
> try to remember it, you'll need it in next step
<p align="center">
	<img src="./posts/2017-07-09-how-to-customize-your-steam-profile-with-mmd-part-3/8.png" height="250px" alt="img8">
</p> 
8. If you're happy enough with the result then render to AVI. you can do this by pressing `file(F) > Render to AVI file(V)` and save it anywhere you like
<p align="center">
	<img src="./posts/2017-07-09-how-to-customize-your-steam-profile-with-mmd-part-3/9.png" height="250px" alt="img9">
</p>
then it'll show something like this.
<p align="center">
	<img src="./posts/2017-07-09-how-to-customize-your-steam-profile-with-mmd-part-3/10.png" height="250px" alt="img10">
</p>
9. Because i want to choose frame 0 ~ maximum frame the motion has then i'll set recording to `0` and `1085`
> check step 5 then press ok and the render process will begin

> CAUTION : file output will going up to 1GB so make sure you have enough space!
<p align="center">
	<img src="./posts/2017-07-09-how-to-customize-your-steam-profile-with-mmd-part-3/11.png" height="250px" alt="img11">
	<img src="./posts/2017-07-09-how-to-customize-your-steam-profile-with-mmd-part-3/12.png" height="250px" alt="img12">
</p> 

10. After rendering and you find your file output is more than 30 second then you have 3 choice.

> First : cut your video below 30 second using your lovely video editor

> Second : changing variable in step 8 so the video output will less than 30 second (mine has 27 second)

> Third : search for another motion file or even create yourself


MMD model used here is KizunaAI http://kizunaai.com/
NEXT : PART 4 : Make em GIF
