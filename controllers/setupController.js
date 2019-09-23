var Todos =  require('../models/todoModel');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res){

        // seed database
        var starterTodos = [
            {
                username: 'student1',
                todo: 'Sleep',
                isDone: false,
                hasAttachment: false,
            },
            {
                username: 'student2',
                todo: 'Shower',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'student3',
                todo: 'Eat',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    });
}