const expect = require('expect');
const request = require('supertest');

const {app} = require('../server.js');
const {Todo} = require('../models/todo');




var dummytodos = [
    {text: '1 test todo'}, {text: '2 test todo'}
];

beforeEach( (done) => {
    Todo.deleteMany({}).then( ()=> {
        
        return Todo.insertMany(dummytodos);

    }).then( () => {done()});
});

describe('POST /todos', function() {
    this.timeout(50000)
    it('should create a new todo', (done) => {

        var text = "Test string";

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=> {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err) {
                    return done(err);
                }
                Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done()
                }).catch((e) => done(e))


            })
    });

    it('should not create todo with invalid data', (done)=>{

        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end( (err, res) => {
                if (err) {return done(err)};
                
                Todo.find().then( (todos)=> {
                    expect(todos.length).toBe(2);
                    done()
                }).catch((e) => done(e))
            
            })


    })


});

describe('GET /todos', ()=> {
    it('should get all the todos', (done) => {

        request(app)
            .get('/todos')
            .expect(200)
            .expect((res)=>{
                expect(res.body.todos.length).toBe()
            })
            .end(done)
    });



})