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
1.  Create One Folder in desktop/ program files or any where.
2.  Open this folder and clone our project to this folder by using git bash here, and type git clone 'our project url'.
3.  Go to visual studio code ,upload created folder into visual studio code by using open folder.
4.  In Visual Studio Code Click on Terminal and take command Prompt here.
5.  Run  ‘npm init ‘command generates package.json
      We can provide Package name,author here.click on yes, run the command dir,it shows the directory.
      Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of your project to ensure cypress is     installed in the correct directory.
5.  Install cypress by using: npm install --save-dev cypress@9.6.0.(to install cypress 9.6.0 version).
6.  We want to open the cypress test runner and we use the command:npx cypress open.
      
# Project Description:

Cypress was originally designed to run end-to-end (E2E) tests on anything that runs in a browser. A typical E2E test visits the application in a browser and performs actions via the UI just like a real user would.
Under integration folder 3 scripts are available:
1. login functionality of Swaglabs application,
2. Validate social links
3. Ordering lowest and highest price items.

# Steps to run script:
1. To run these scripts,run command npx cypress open.
2. Test runner opens and choose test scripts to be executed.


