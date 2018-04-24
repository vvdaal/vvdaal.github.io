---
layout: post
title: "Windows global system environment variables"
date: 2012-12-08 10:00
categories: Windows stuff
---
“Windows Global System Environment Variables”? You might know them better as “Words with percents wrapped around them that do magic”.

Most applications use them to find where to store their settings and to find things such as the exact location of your Windows installation.

By default Windows creates some global system environment variables to remember some useful things such as:

 - Where is Windows installed at?
 - Where is your temp folder located?

You can also create your own global system environment variable.
For more on the creating bit check the article “How to Use Global System Environment Variables in Windows“ on How-To Geek

These variables can be accessed by applications but also by the Windows Explorer.

I’ve listed some combination of global system environment variables and what they do below, these are some I use often.
These can be entered in the run box of windows (Windows key + R) to immediately jump to the corresponding location in the explorer.

    %windir% – Shows the Windows folder.
    %windir%\system32\drivers\etc – Immediately gets you to the location of the “hosts” file.
    %userprofile% – Shows your user folder.
    %localappdata% – Shows the local appdata folder.
    C:\users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup - Shows the programs that will run for you at login.
    C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup – Shows the programs that will run for every user at login.

These variables should work with Windows 7 and up.

[windows7tips.com](http://windows7tips.com) also has a nice overview of the global system environment variables available in the article “[Environment Variables in Windows Vista, Windows 7, and Windows 8](http://windows7tips.com/environment-variables-windows-vista-7.html)“
