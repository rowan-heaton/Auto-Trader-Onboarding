Pre-requisite Software Needed:
- NPM & Node.JS (installed as one from https://www.npmjs.com/get-npm)

Step 1.
-Add 'index.html' and 'assets' folder to dist folder.

Step 2.
-Paste <link rel="stylesheet" href="bundle.css"> into the head tags of the html code
-Paste <Script src="bundle.js"></Script> at the end of the body tags on the same page

Step 3.
-open 'index.js' in src folder
-change the shepherd tour steps to match mockup designs
-??'s need to be replaced with actual step numbers

Step 4.
-open 'index.html' in dist folder
-insert 'step-?' into the html element class tags*
-*if multiple elements needed, create a new div tag with them inside

Step 5.
-open the control panel
-Navigate to the folder where you are storing your app
- enter 'npm install' (wait for the files to be installed)
- enter 'npm run build'
- webpack will run (against it's config file - webpack.config.js) and create the bundles your app needs
- once it's finished you can open the 'index.html' file located in the 'dist' folder to view your web page.
- after any changes to the sass or javascript files you should re-run 'npm run build' to generate new bundles
