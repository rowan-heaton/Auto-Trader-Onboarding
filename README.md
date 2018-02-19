# Auto-Trader-Onboarding
An onboarding process for the Auto Trader portal tool.

### Downloading the project from Git

+ Create a folder on your machine to clone the application into
+ enter the folder and from your terminal window type:
  - git clone https://github.com/rowan-heaton/Auto-Trader-Onboarding/
+ once it's finished type
  - git status (this will tell you what branch you are on)

### Branching

+ If you want to work on a branch of the code, enter this
  - git branch my-branch-name (this can be whatever you want to call it)
  - git status (shows that although you've created the branch you will still be on master)
  - git checkout my-branch-name
  - git status now shows you are in your new branch

### Making your changes

+ Edit your local files as necessary
> see section below (making your changes)

### Committing and pushing

+ git add . (adds all your changed files to the staging area to become part of your next commit)
+ git commit -m "A BRIEF description of the changes you are committing"
+ If you are happy that you want to push your changes to the branch enter
  - git push -u origin my-branch-name

### Merging your branch into master

+ once you're ready to merge your branch changes into master enter
  - git checkout master
  - git merge my-branch-name
+ your changes will be merged into master and you're done with your branch so you can delete it with
  - git branch -d my-branch-name

___

## Making your changes

With the repository checked out on your machine and branches set up (if you are using them, you don't have to), you are ready to get the page running. Follow these steps:

+ Navigate to the folder where you are storing your app
+ in the terminal window enter
  - npm install (wait for the files to be installed)
+ open the 'package.json' file and look at the 'scripts' section. You will notice one with the title build. We need to run this to bundle the javascript and css that the page will use. In your terminal window enter
  - npm run build (followed by enter)
+ webpack will run (against it's config file - webpack.config.js) and create the bundles your app needs
+ once it's finished you can open the 'index.html' file located in the 'dist' folder to view your web page.
+ after any changes to the sass or javascript files you should re-run 'npm run build' to generate new bundles

+ alternatively, if you don't want to keep running the 'npm run build' command you can run
  - npm run watch
  - this does the same thing except it watches for changes in your sass and js files and automatically rebuilds your bundles, then all you have to do is refresh your browser.

___

## Useful links

| Name                  | URL                                              |
| --------------------- | ------------------------------------------------ |
| Node JS               | https://nodejs.org/en/                           |
| NPM - package manager | https://www.npmjs.com/                           |
| Webpack               | https://webpack.js.org/concepts/                 |
| Shepherd              | http://github.hubspot.com/shepherd/docs/welcome/ |
| Git Help              | https://git-scm.com/docs                         |

___

## Shepherd Steps

Step 1.
+ Add 'index.html' and 'assets' folder into dist folder.

Step 2.
+ Paste <link rel="stylesheet" href="bundle.css"> into the head tags of the html code
+ Paste <Script src="bundle.js"></Script> at the end of the body tags on the same page

Step 3.
+ open 'index.js' in src folder
+ change the shepherd tour steps to match mockup designs
+ ??'s need to be replaced with actual step numbers

Step 4.
+ open 'index.html' in dist folder
+ insert 'step-?' into the html element class tags
  - these are the classes that the shepherd.js uses to locate which html element it needs to attach to 




