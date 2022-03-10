### **Random-Ping Linux**
#### Wednesday, November 1, 2017

Almost same with this 
<a onclick="location.href='#2017-06-01-random-ping';refreshed()">Random Ping</a>
but it's run on linux.

copy paste on your lovely linux text editor, save as `randomping.sh` then run 
`chmodx +x randomping.sh` and you're good to go

```
#!/bin/bash

#set count to 100
count=100

#begin loop
while [ 1+1=2 ]
do

#getting random number for each variable
rand1=$(($RANDOM%10))
rand2=$(($RANDOM%10))
rand3=$(($RANDOM%10))

#changing time to 1 if getting 0
if (($rand2==0))
then
    rand2=1
fi

#changing packet size to 1 if getting 0
if (($rand3==0))
then
    rand3=1
fi


#begin case ip
case "$rand1" in
    0)
        ip=8.8.8.8
        ;;
    1)
        ip=www.wikipedia.org
        ;;
    2)
        ip=www.facebook.com
        ;;
    3)
        ip=www.youtube.com
        ;;
    4)
        ip=www.yahoo.com
        ;;
    5)
        ip=www.blogspot.com
        ;;
    6)
        ip=www.twitter.com
        ;;
    7)
        ip=www.apple.com
        ;;
    8)
        ip=www.microsoft.com
        ;;
    9)
        ip=www.google.com
        ;;
    *)
esac

#begin case packetsize
case "$rand3" in
    1)
        ps=9
        ;;
    2)
        ps=10
        ;;
    3)
        ps=11
        ;;
    4)
        ps=12
        ;;
    5)
        ps=13
        ;;
    6)
        ps=14
        ;;
    7)
        ps=15
        ;;
    8)
        ps=16
        ;;
    9)
        ps=17
        ;;
    *)
esac



#begin ping request
echo Sending $ps bytes to $ip
ping=$(ping -s$rand3 -c1 $ip | sed '2q;d')
if [[ $ping == *"bytes"* ]]; then
    echo $ping
    count=$((count+1))
else
    echo Ping transmit failed. Please check your connection.
    count=$((count-1))
fi

#begin count
if [ $count -gt 100 ]
then
    count=100
    echo Sent=$count% Loss=$((100-count))%
else
    if [ $count -lt 0 ]
    then
    count=0
    echo Sent=$count% Loss=$((100-count))%
    else
    echo Sent=$count% Loss=$((100-count))%
    fi
fi

#changing seconds to second if time equal to 1
if (($rand2==1))
then
    echo Waiting for $rand2 second, before next ping
else
    echo Waiting for $rand2 seconds, before next ping
fi

sleep $rand2
done
```
