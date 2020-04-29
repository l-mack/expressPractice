// controllers allow us to seperate handler logic from the root handler logic

// have a method called index that we are exporting as our handler
    // contains a call call res.render -> renders an html page from a template
        // the first argument is the name of the template file (index.pug)
            // goes to look at the views directory, find index.pug file, 
        // the secound argument is a json object key value pair of title and value=Express  

// this function simply renders an html page, responds with an html page to the requesting browser
exports.index = function(req, res, next) {
    res.render('index', { title: 'Express' });
}