//script testing the javscipt 'method'

//variable for a person
var person = {
    //various properties of the 'person' variable
    firstname: 'Joe',
    lastname: 'Bama',
    age: 69, 
    profession: 'President',
    
    /*
    - the method is included within the variable, similar to a property
    - the name of the function is specified in the name of the property, but you can still name the function something else; ex... 

    fullname: function name() {}

    - normally to call properties of a variable you would use the name of the variable, then a period, and then the property; ex...
    
    console.log(person.firstname);
        Joe
    
    - since we are writing inside of the variable we can use 'this', in place of the name of the variable; ex...

    var person = {
        firstname: 'Joe',
        console.log(this.firstname);
    }
        Joe

    */
    
    fullname: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

console.log(person.fullname());
//expected output = Joe Bama