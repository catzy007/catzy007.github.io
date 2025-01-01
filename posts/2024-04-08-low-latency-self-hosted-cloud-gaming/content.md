#### Low Latency Self-hosted Cloud Gaming
_Monday, April 8, 2024_

There are times when I want to play video games while 
away from main PC, or I need to perform a task that 
even my i7 laptop can't do. There are few solutions, 
first get a Thunderbolt eGPU dock this is probably 
going to solve all the problem above but eGPU dock is 
generally quite costly and bulky. The other solution is 
to use a Remote Desktop software and connect to a more 
capable computer instead.

The problem is remote desktop such as RDP or VNC is 
usually slow even with fast internet connection. 
Fortunately NVIDIA had the solution, introducing 
[NVIDIA GameStream](https://www.nvidia.com/en-us/support/gamestream/) 
originally released to stream and play games from local 
PC to android-tv based device called NVIDIA Shield. After 
about 10 years of service at late of 2022, NVIDIA 
discontinue GameStream in favor of fully cloud based 
GeForce NOW. Fortunately GameStream legacy continues 
in form of Open Source implementation such as Sunshine 
and Moonlight.

[Sunshine](https://app.lizardbyte.dev/Sunshine/) 
is an implementation of cloud gaming server which support 
video hardware encoder such as NVENC, VCE and QSV offering 
low latency video stream. Sunshine also support gamepad 
emulation allowing passthrough of gamepad from client 
device to host device.

[Moonlight](https://moonlight-stream.org/) 
originally developed as an open-source client for NVIDIA 
Gamestream. Moonlight support streaming up to 4K HDR and 
up to 120 FPS. Moonlight also support multiple platform 
such as Android, iOS, Windows, MacOS, Linux, ChromeOS, you 
name it.

Installation is surprisingly straightforward, 
just download and install Sunshine in host device, 
configure encoder to match the system hardware. 
Then download and install Moonlight in client device. 
Then pair Moonlight with Sunshine by entering the 
generated PIN.

Above is fine for local network set-up. To turn this into 
a proper cloud gaming setup, a VPS with OpenVPN or similar 
is required. The idea is to connect both Host and Client 
to VPN which allow them to communicate over the public 
network.

![img_lg](./posts/2024-04-08-low-latency-self-hosted-cloud-gaming/01.jpg)