# Project
Swaglabs

# Pre-requisites:

1.   Install Node js.\
      Git client installed. To verify if git client is installed properly, open Command Prompt on Windows, or Terminal on Mac, then execute this command git --version
3.   Install git.\
     NodeJS installed. To verify if nodejs is installed properly, open Command Prompt on Windows, or Terminal on Mac, then execute this command node --version
     
3.   VisualStudio Code.\
     Download visual studio code editor,click on windows,download visual studio code editor  and run that one,\
     it will start installation and accept the agreement and   install it.


# Installation Process:
1.  Create One Folder in desktop/ program files or any where.\
2.  Open this folder and clone our project to this folder by using git bash here, and type git clone 'our project url'.\
3.  Go to visual studio code ,upload created folder into visual studio code by using open folder.\
4.  In Visual Studio Code Click on Terminal and take command Prompt here.\
5.  Run  ‘npm init ‘command generates package.json
      We can provide Package name,author here.click on yes, run the command dir,it shows the directory.\
5.  Install cypress by using: npm install --save-dev cypress@9.6.0.(In this we install cypress 9.6.0 version).\
6.  We want to open the cypress test runner and we use the command:npx cypress open.\
      
# Project Description:
In our project main folder is Integration Folder, in this scripts are existed.
Under Support Folder command.js is there,in this reusability functionalities are existed.
In integration folder 3 scripts are there, 1st is login functionality of Swaglabs application,2nd one is Validate social links,3rd one is Ordering lowest and highest price items.
# Steps to run script:
1. For run these scripts we run command npx cypress open
2. In that select each individual test script and scripts are executed


