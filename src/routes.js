const {addNoteHandler,getAllNotesHanlder,getNoteByIdHanlder,editNoteByIdHanlder,deleteNoteByIdHandler} = require('./handler.js');

const routes = [
    {
        method:'POST',
        path:'/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHanlder,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler:getNoteByIdHanlder,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler:editNoteByIdHanlder,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    }
];

module.exports = routes;