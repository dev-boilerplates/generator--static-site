#static-generator
Static Content Generator for `scanlabprojects.co.uk`

**Develop**

Starts a webserver and sends to `/public`

    npm start

Create a new instance of the `config.json` from `projects-db.js`

	npm run create:json

**Build**
    
Deploy build from `/dist`
    
    npm run build


**Sync to AWS**

Using the AWS CLI

	aws sync s3://scanlabprojects.co.uk ~/current/working/directory/for/website || .


---


#### Notes. 
The `.html` extensions are removed in the production build because of the nature of serving from `s3`.


`/views/static-projects/` are when pages need to override the automated work layout and follow their own unique convention. They are deployed via **build:projects** to `/dist/projects`


===


### Todo
* ~~add page specific scripts, without transpiling ... see `js/views/index.js`~~
* ~~Create `config.json` from ES6 JS Module~~
* ~~Run through build process, as currently broken~~