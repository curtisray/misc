//object for the possible properties of the person
var data = {
    posChildren: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '69.420'],
    posSpouse: ["Sydney", "Allissa", "Felicity", "Maria", 'John', 'Curtis', 'Henry', 'Steve'],
    posJob: ["a Plumber", "an Electrician", "a Banker", "an Accountant", "an Underwear Model"],
    posResidence: ["Paris", "Berlin", "San Francisco", "Alameda", "New York", "Los Angeles", "Padang", "Shanghai"],
    
    numChildren: function() {
        return Math.floor(Math.random() * this.posChildren.length)
    },

    numSpouse: function() {
        return Math.floor(Math.random() * this.posSpouse.length)
    },

    numJob: function() {
        return Math.floor(Math.random() * this.posJob.length)
    },

    numResidence: function() { 
        return Math.floor(Math.random() * this.posResidence.length)
    },
}

//object for the person in the fortune, contains the various properties of the person
var person = {
    children: data.posChildren[data.numChildren()],
    spouse: data.posSpouse[data.numSpouse()],
    job: data.posJob[data.numJob()],
    residence: data.posResidence[data.numResidence()],
}

console.log(person.children + '\n' + person.spouse + '\n' + person.job + '\n' + person.residence);

alert('You will be a ' + person.job + ', living in ' + person.residence + ' with ' + person.children + ' kids and a spouse named ' + person.spouse + '.');