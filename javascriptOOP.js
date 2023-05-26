//ES5

//constructor
function Book(title, author, year){
    this.title =title;
    this.author =author;
    this.year=year;

}

//getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};
//getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

//Revise / Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

const book1 = new Book("BOOk1", "John Doe", "2013");




//magazine constructor
function Magazine(title, author, year, month){
    Book.call(this, title,author,year);
    this.month = month;
}

//inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine Object
 const mag1 = new Magazine('Mag1', "Musunza", "2003", "March");
 

 //ES6 classes

 class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    };
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
    static topBookStore() {
        return 'Daniel & Festo';
    }
 }
 const book2 = new Book("BOOK2", "Festo", "2020");
