const DBURL ='mongodb://notesuser:password123@ds139989.mlab.com:39989/notes_pro';
const PORT =3000;
const HOST ='127.0.0.1';
let DBCONFIG = {useNewUrlParser: true}
module.exports ={
    DBURL:DBURL,
    PORT:PORT,
    HOST:HOST,
    DBCONFIG:DBCONFIG
}