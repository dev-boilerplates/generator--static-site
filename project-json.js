var fs = require('fs'),
    dir = process.argv[2],
    db = require('./projects-db.js')

var path = `${__dirname}/${dir}/config.json`

fs.writeFile(path, JSON.stringify(db), 'utf8', (err) => {
    if(err) console.log(err)
    else console.log('new json database has been created.')
})
