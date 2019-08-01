### **Analysis of Exambro Client**
#### Wednesday, May 31, 2017

Exambro Client is program that used in Indonesia as online exam program.

this article is simple analysis of Exambro Cilent V16.1030 REL based on amateur perspective.

In client folder we got file like this
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/1.jpg" height="250px" alt="img1">
</p> 

Let me show some details

<br>
#### 1. Chrome Installer 32 and 64 Bit
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/2.jpg" height="300px" alt="img2">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/3.jpg" height="300px" alt="img3">
</p> 

<br>
#### 2. eb000.dat
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/4.jpg" height="300px" alt="img4">
</p> 

<br>
#### 3. eb001.dat
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/5.jpg" height="300px" alt="img5">
</p> 

<br>
#### 4. ExamBrowser.exe
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/6.jpg" height="200px" alt="img6">
</p> 

This have 4 function
* Close
To close this program
* Settings
Need password. but we can get the password
* Help
It said Version 16.1030 REL blah blah blah
* RUN
To begin Exam

Another Details
* Properties
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/7.jpg" height="300px" alt="img7">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/8.jpg" height="300px" alt="img8">
</p> 
* Version Info
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/9.jpg" height="300px" alt="img9">
</p> 
* Manifest
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/10.jpg" height="300px" alt="img10">
</p> 
* File Header
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/11.jpg" height="300px" alt="img11">
</p> 

<br>
#### 5. ExamBrowser.exe.Config 
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/12.jpg" height="300px" alt="img12">
</p> 
let me explain
* `Blue` is Exambro password to unlock settings
* `Orange` is Exambro browser argument
* `Red` is Exambro Hotkey
* `Green` is Exambro local ip server
Your Settings may be different. depend on your system

<br>
#### 6. ExamBrowser.vshost.exe.Config
Basically this is default settings of ExamBrowser.exe.Config
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/13.jpg" height="250px" alt="img13">
</p> 

<br>
#### 7. ExamBrowser.XmlSerializers.dll
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/14.jpg" height="250px" alt="img14">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/15.jpg" height="250px" alt="img15">
</p> 

<br>
#### 8. Gma.UserActivityMonitor.dll
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/16.jpg" height="250px" alt="img16">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/17.jpg" height="250px" alt="img17">
</p> 
let me take the text
```
    VALUE "Comments", "This class library contains components which monitor all mouse and keyboard activities globally (also outside of the application) and provides appropriate events." 
    VALUE "CompanyName", "George Mamaladze" 
    VALUE "FileDescription", "Gma.UserActivity" 
    VALUE "FileVersion", "1.0.0.0" 
    VALUE "InternalName", "Gma.UserActivityMonitor.dll" 
    VALUE "LegalCopyright", "Free to use, copy, modify and redistribute" 
    VALUE "OriginalFilename", "Gma.UserActivityMonitor.dll" 
    VALUE "ProductName", "Gma.UserActivity" 
    VALUE "ProductVersion", "1.0.0.0" 
    VALUE "Assembly Version", "1.0.0.0"
```
> This class library contains components which monitor all mouse and keyboard activities globally (also outside of the application) and provides appropriate events.

Creator : <https://www.codeproject.com/Articles/7294/Processing-Global-Mouse-and-Keyboard-Hooks-in-C>

<br>
#### 9. log.txt
<p align="center">
	<img src="./posts/2017-05-31-analysis-of-exambro-client/18.jpg" height="250px" alt="img18">
</p> 

That's some simple analysis of Exambro Client more analysis 
<a href="./posts/2017-05-31-analysis-of-exambro-client/AnalisisExambroClient.pdf">pdf file in Indonesia languange</a>
and some files you can view from <https://www.mediafire.com/folder/2vg5qjbj41vif/Exambro_Client>
