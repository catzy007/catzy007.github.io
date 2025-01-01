### **Random Ping**
#### Thursday, June 1, 2017

Ping is a computer network administration software utility used to test the reachability of a 
host on an Internet Protocol (IP) network. according to 
<https://en.wikipedia.org/wiki/Ping_(networking_utility)>

this time i'll share enhanced ping script that uses microsoft windows ping as the core. 
tested in Windows 7 and 8 maybe 10 will work well

#### Q : what it can do?
> A : it can do ping in random time and random buffer size plus showing real time percentage of success rate and fail rate

#### Q : you mean random time and random buffer size?
> A : random time for example after doing 1st ping, it will wait in range 1-9 second based on your luck. then it'll send another ping. same thing happen to buffer size

#### Q : are this script are dangerous to my computer, it'll download virus and another thing?
> A : no, it just simple ping

#### Q : you sure?
> A : if you afraid just forget this post

#### Q : how to use this script?
> A : just copy italic text below, put it on notepad, save as .bat file, launch and ready to go

#### Q : i know nothing about networking. how i know Url or IP Destination?
> A : just press enter if you don't know anything about that

#### Q : can i modify this script based on my own
> A : yes, this script uses MIT license https://opensource.org/licenses/MIT so you can do whatever you want to this script

#### Q : am i getting any benefit of something else by using this script?
> A : uhhhhh..... actually nope... hehe. but you can understand some basic of computer here

Oh and you can get executable file and another thing in link at the bottom of post

```batch
@echo off
color 0b
title RANDOM-PING: Sent=0%% Loss=0%%
set host=8.8.8.8
del /F /Q cout1.inf
del /F /Q cout2.inf
del /F /Q countf.inf
del /F /Q counts.inf
cls
set /p host="Enter Url or IP Destination : "
IF NOT DEFINED host set host=8.8.8.8
IF "%host%"==" " set host=8.8.8.8
if %host%==1 set host=www.msn.com
if %host%==2 set host=www.facebook.com
if %host%==3 set host=www.youtube.com
if %host%==4 set host=www.yahoo.com
if %host%==5 set host=www.blogspot.com
if %host%==6 set host=www.twitter.com
if %host%==7 set host=www.apple.com
if %host%==8 set host=www.microsoft.com
if %host%==9 set host=www.cnn.com
if %host%==0 set host=www.google.com
set time=%random:~0,1%
set pcksiz=%random:~0,1%
echo Sending %pcksiz% bytes to %host%
ping %host% -n 1 -l %pcksiz% | find "bytes="
IF ERRORLEVEL 1 goto FAIL1
echo succ >cout1.inf
goto TIME1
:FAIL1
echo fail >cout1.inf
echo Ping transmit failed, Please check your connection
:TIME1
type cout1.inf | find /C "fail" >countf.inf
type cout1.inf | find /C "succ" >counts.inf
for /f %%i in ('type cout1.inf ^| find /C "fail"')do set FAILRATE=%%i
for /f %%i in ('type cout1.inf ^| find /C "succ"')do set SUCCRATE=%%i
if %FAILRATE%==1 set FAILRATE=100
if %SUCCRATE%==1 set SUCCRATE=100
title RANDOM-PING: Sent=%SUCCRATE%%% Loss=%FAILRATE%%%
echo Waiting for %time% seconds, before next ping
timeout /t %time% /nobreak >nul
:LOOP2100
set time=%random:~0,1%
set pcksiz=%random:~0,1%
echo Sending %pcksiz% bytes to %host%
ping %host% -n 1 -l %pcksiz% | find "bytes="
IF ERRORLEVEL 1 goto FAIL2
echo succ >>cout1.inf
goto TIME2
:FAIL2
echo fail >>cout1.inf
echo Ping transmit failed, Please check your connection
:TIME2
type cout1.inf | find /C "fail" >countf.inf
type cout1.inf | find /C "succ" >counts.inf
for /f %%i in ('type cout1.inf ^| find /C "fail"')do set FAILRATE=%%i
for /f %%i in ('type cout1.inf ^| find /C "succ"')do set SUCCRATE=%%i
set /a TOTAL=%FAILRATE%+%SUCCRATE%
set /a SUCCLT100=(%SUCCRATE%*100)/%TOTAL%
set /a FAILLT100=100-%SUCCLT100%
if %TOTAL%==100 goto LOOP100nC1
title RANDOM-PING: Sent=%SUCCLT100%%% Loss=%FAILLT100%%%
echo Waiting for %time% seconds, before next ping
timeout /t %time% /nobreak >nul
goto LOOP2100
:LOOP100nC1
set time=%random:~0,1%
set pcksiz=%random:~0,1%
echo Sending %pcksiz% bytes to %host%
ping %host% -n 1 -l %pcksiz% | find "bytes="
IF ERRORLEVEL 1 goto FAIL3
echo succ >>cout1.inf
goto TIME3
:FAIL3
echo fail >>cout1.inf
echo Ping transmit failed, Please check your connection
:TIME3
echo HEADER FILE>cout2.inf
for /f "skip=1 delims=*" %%a in (cout1.inf) do (
echo %%a >>cout2.inf
)
del /F /Q cout1.inf >nul
type cout2.inf | find /C "fail" >countf.inf
type cout2.inf | find /C "succ" >counts.inf
for /f %%i in ('type cout2.inf ^| find /C "fail"')do set FAILRATE=%%i
for /f %%i in ('type cout2.inf ^| find /C "succ"')do set SUCCRATE=%%i
title RANDOM-PING: Sent=%SUCCRATE%%% Loss=%FAILRATE%%%
echo Waiting for %time% seconds, before next ping
timeout /t %time% /nobreak >nul
set time=%random:~0,1%
set pcksiz=%random:~0,1%
echo Sending %pcksiz% bytes to %host%
ping %host% -n 1 -l %pcksiz% | find "bytes="
IF ERRORLEVEL 1 goto FAIL4
echo succ >>cout2.inf
goto TIME4
:FAIL4
echo fail >>cout2.inf
echo Ping transmit failed, Please check your connection
:TIME4
for /f "skip=2 delims=*" %%a in (cout2.inf) do (
echo %%a >>cout1.inf
)
del /F /Q cout2.inf >nul
type cout1.inf | find /C "fail" >countf.inf
type cout1.inf | find /C "succ" >counts.inf
for /f %%i in ('type cout1.inf ^| find /C "fail"')do set FAILRATE=%%i
for /f %%i in ('type cout1.inf ^| find /C "succ"')do set SUCCRATE=%%i
title RANDOM-PING: Sent=%SUCCRATE%%% Loss=%FAILRATE%%%
echo Waiting for %time% seconds, before next ping
timeout /t %time% /nobreak >nul
goto LOOP100nC1
```
<https://www.mediafire.com/folder/5tgb5rpny1s27/UMBRELLA-RANDOM_PING>
