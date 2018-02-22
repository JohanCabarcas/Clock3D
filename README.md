# Clock3D
Two faces 3D analog clock
Front side:GMT+1:00 
Back side: GMT-5:00

In order to run the application with all textures added changing browser flags is needed. Please follow the steps below depending on you browser.
***************************
1.Change browser flags
***************************
*Content loaded from external files
If you load models or textures from external files, due to browsers' same origin policy security restrictions, loading from a file system will fail with a security exception. 
There are two ways to solve this:
Change security for local files in a browser (this allows you to access your page as 
file:///yourFile.html
Run files from a local web server (this allows you to access your page as 
http://localhost/yourFile.html
If you use option 1, be aware that you may open yourself to some vulnerabilities if using the same browser for a regular web surfing. You may want to create a separate browser profile / shortcut used just for local development to be safe. Let's go over each option in turn. 
Change local files security policy

--Safari
Enable the develop menu using the preferences panel, under Advanced -> "Show develop menu in menu bar". 
Then from the safari "Develop" menu, select "Disable local file restrictions", it is also worth noting safari has some odd behaviour with caches, so it is advisable to use the "Disable caches" option in the same menu; if you are editing & debugging using safari. 

--Chrome
Close all running Chrome instances first. The important word here is 'all'.
On Windows, you may check for Chrome instances using the Windows Task Manager. Alternatively, if you see a Chrome icon in the system tray, then you may open its context menu and click 'Exit'. This should close all Chrome instances. 
Then start the Chrome executable with a command line flag:
chrome --allow-file-access-from-files
On Windows, probably the easiest is probably to create a special shortcut icon which has added the flag given above (right-click on shortcut -> properties -> target). 
On Mac OSX, you can do this with
open /Applications/Google\ Chrome.app --args --allow-file-access-from-files

--Firefox
In the address bar, type 
about:config
Find the 
security.fileuri.strict_origin_policy
parameter 
Set it to false 

source: https://threejs.org/docs/#Manual/Getting_Started/How_to_run_things_locally

2. Clone or Download file (upper right green button)

3.Execute 3DClock.html
* Yellow hour indicator shows 12 h
* Using scrolling wheel  Zoom in/out the scene
* Using left-click and move right/left allows to navigate to the clock's sides
