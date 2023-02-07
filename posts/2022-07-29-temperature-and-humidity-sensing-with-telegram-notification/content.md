#### Temperature and Humidity Sensing With Telegram Notification
_Friday, July 29, 2022_

Out of curiosity i want to log my room temperature and have it sent to me 
using telegram bot. I already have a Raspberry PI 3B up and running 24/7 
in my room and i just need a temperature sensor. I also want to run this 
as a Docker Container so i can manage it easily.

The sensor i ended up using is 
[DHT11 temperature & humidity sensors](https://learn.adafruit.com/dht)
that i found in my `Tech Drawer`. I think i used it in Arduino project 
a long time ago. Because this is not brand new fresh sensor, the humidity 
value is off by a lot. I mean it shows up as 13-15% Humidity while i live 
in warmer climate, i certainly did not live in a dessert. The temperature 
output is okay, the output value is off by 2°C which is within sensor 
accuracy. The other thing that sucks from this sensor is that it requires 
a precise timing to read and most of the time it will spit out errors. 
If you want to recreate this project, i strongly recommend other DHT 
sensors especially if you need precise humidity sensing.

First thing i did is to solder a 
[10K Resistor](https://www.adafruit.com/product/2784) from DHT11 Data pin 
to VCC. Next i cut 3 wire from old IDE cable laying around and solder it 
to a header. The arrangement is

<table class="table">
    <thead>
        <tr>
            <th>DHT11</th>
            <th>RPI GPIO</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>VCC</td>
            <td>PIN2 5V</td>
        </tr>
        <tr>
            <td>GND</td>
            <td>PIN6 GND</td>
        </tr>
        <tr>
            <td>DATA</td>
            <td>PIN12 GPIO18</td>
        </tr>
    </tbody>
</table>

Once that's complete, Plug them in and power it up. i assuming you already 
[set your RaspberryPI](https://projects.raspberrypi.org/en/projects/raspberry-pi-getting-started) 

Then open terminal and type
```
sudo apt update
sudo apt install docker.io docker-compose
```

Next time to write a software for it. First, create a new directory called `DHT-Sensor`.

Then create a new file called `dht.py`

After that open the file with text editor and fill the file with
```
import time
import board
import adafruit_dht
import requests

# Initial the dht device, with data pin connected to:
dhtDevice = adafruit_dht.DHT11(board.D18, use_pulseio=False)
TempCalibration = 0 #default for DHT11 is -2 or 2 in Celcius
HumdCalibration = 0 #default for DHT11 is -5 or 5 in Percent
TimeDelay = 10.0 #time interval for each sampling in Second
SampleTry = 300 #total amount of sample required
#TimeDelay * SampleTry / 60 = Time in minutes
SampleCount = 0
SampleSum = [0,0]

def getSample(TempCalibration, TimeDelay):
    Sensordata = [0,0]
    try:
        Sensordata[0] = (dhtDevice.temperature + TempCalibration)
        Sensordata[1] = (dhtDevice.humidity + HumdCalibration)
        return Sensordata
    except RuntimeError as error:
        # print(error.args[0])
        time.sleep(2.0) #if device throws error, wait for device to ready
    except Exception as error:
        dhtDevice.exit()
        raise error

def AverageSample(SampleSum, SampleCount):
    AvgTemp = SampleSum[0] / SampleCount
    AvgHumd = SampleSum[1] / SampleCount
    SampleCount = 0
    SampleSum[0] = 0
    SampleSum[1] = 0
    return (AvgTemp, AvgHumd, SampleSum, SampleCount)

def TelebotSendtext(bot_message):
   bot_token = '<YOUR TELEGRAM BOT TOKEN>'
   bot_chatID = '<YOUR BOT CHAT ID>'
   send_text = 'https://api.telegram.org/bot' + bot_token + '/sendMessage?chat_id=' + bot_chatID + '&parse_mode=Markdown&text=' + bot_message
   response = requests.get(send_text)
   return response.json()

BotMessage = TelebotSendtext("System up and running!")
print(BotMessage)

while True:
    for i in range(SampleTry):
        value = getSample(TempCalibration, TimeDelay)
        if value is not None:
            SampleCount += 1
            SampleSum[0] += value[0]
            SampleSum[1] += value[1]
            #print("Temp: {:.1f} C    Humidity: {}%".format(value[0], value[1]))
        time.sleep(TimeDelay)
    AvgTemp, AvgHumd, SampleSum, SampleCount = AverageSample(SampleSum, SampleCount)
    BotMessage = TelebotSendtext("Your room temperature is {0:0.1f}C with {1:0.1f}% humidity".format(AvgTemp, AvgHumd))
    print(BotMessage)
```

Next open Telegram and open [BotFather](https://t.me/botfather) 
If you don't have telegram account, create one. In botfather, 
type and send `/start`, then `/newbot`. Follow the step by step guide 
then you'll get a `TELEGRAM BOT TOKEN`.

Then find your newly created bot then type and send `/start`. Next 
open `https://api.telegram.org/bot<TELEGRAM BOT TOKEN>/getUpdates`. Change 
`<TELEGRAM BOT TOKEN>` with your newly obtained TOKEN.

Look for `"chat":{"id":-<YOUR BOT CHAT ID>,` and save the CHAT ID.

Back to our newly created script, go to `line 38` and `39` and replace the 
`<YOUR TELEGRAM BOT TOKEN>` and `<YOUR BOT CHAT ID>` with your newly obtained 
BOT TOKEN and CHAT ID.

Next we need to write a docker build recipe. To do that create new file 
called `Dockerfile`

Then open it with text editor and fill it with 
```
FROM alpine:latest
RUN apk add --update --no-cache build-base libgpiod python3 python3-dev && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools wheel
RUN pip3 install RPi.GPIO adafruit-circuitpython-dht requests
COPY "dht.py" /dht/dht.py
CMD ["python3", "/dht/dht.py"]
```

Next let's bake it. To do that open terminal and type
```
sudo docker build -t dhtsensor .
```

It may take a while to get the package and bake the code. 
If nothing goes wrong, you can run it with 
```
sudo docker run -d --restart unless-stopped --name dht-telebot --device /dev/gpiomem dhtsensor
```

And you should get something like this
<div class="row">
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<div class="img-thumbnail">
			<img class="img-fluid" loading="lazy" src="./posts/2022-07-29-temperature-and-humidity-sensing-with-telegram-notification/01.png" alt="img">
		</div>
	</div>
	<div class="col-sm-2"></div>
</div>

If you're using other DHT based sensors, open `dht.py` and edit `line 7` to 
match your sensor.