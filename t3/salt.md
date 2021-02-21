chef	-	Ruby	-	Recipie	- chef-apply

chef-workstation	-> Used for creating recipie and cookbook(.rb)[push]
chef-server		-> Used to store workstation recipe[github]
chef-client		-> Use the recipe[pull]
---------------------------------------------------------------------
SaltStack	-	Works real-time
Salt Master(Server)	: Sends commands and configuration to minion
Salt Minion(Client)	: They recive commands and works as a slave daemons
Grain(Data)		: System Variable, information like os, memory
Execution module	: Command Line on master, runs on minions
Pillars			: User-defined Variables, Username, Password, Port No
Formula			: Configure System like Install Software, Setup Service
Runner			: Runs on server and collect minion data mostly background
Returner		: Returns data from minion.Response to runner or db
Reactor			: Trigger on certain action on minion.
SaltCloud		: Online Connection of Master-Minion
SaltSSH			: Runs Salt command on SSH Server of Linux
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
SaltStack
----------
Automate MultiComupter Configuration.
One Point configuration
|||||||||||| Working |||||||||||||||||||||||||||||||||||||||||||||||||
salt - All Master Related Work is done using Salt
salt-key - All Security/ Password related work is done by key
salt-minion-configuration - is configuration file for each minion
