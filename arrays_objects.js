var sports = ['football', 'tennis', 'rugby']

var numberOfElements = sports.length
// console.log('first sport:', sports[0])


// this -1 shows the last item in the array
sports.push('curling')
// console.log(sports[sports.length - 1])

// pop removes last item from the array, with pop you can assign it to a variable and it will contain what you popped e.g lastElement = sports.pop()
sports.pop()


//this replaces index 0 with golf
sports[0] = 'golf'


// this one inserts a new entry into position 0
sports.unshift('football')


// this removes the thing from index 0, can also assign this to a variable like with pop e.g sport = sports.shift()
sports.shift()


// first argument is position in array, second argument is delete count, 0 means dont delete, and then you can choose to insert something
sports.splice(1, 0, 'snooker')


// in for loops we use parenthesis and then var for the variable and we use "of" instead of "in"
for (var sport of sports){
    var upperCaseSport = sport.toUpperCase()
    console.log(upperCaseSport)
}


// the \ here is so we can use the apostrophe 
var movie = {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    language: 'Spanish'
}

// this is how we access these things from the dictionary
console.log("movie:", movie)
console.log("movie title:", movie.title)

// add in a new key called cast
movie.cast = ['James Stewart', 'Donna Read']

//change the language value to english
movie.language = 'English'

// remove the key of year
delete movie.year

// insert a key called ratings which has an object inside with key:value pairs
movie.ratings = {
    critic: 94,
    audience: 95
}

// access the audience rating and display it after a string
console.log("Audience Rating:", movie.ratings.audience)

// access the first cast member
console.log("First cast member:", movie.cast[0])

// shows us all the keys in movie as an array
var keys = Object.keys(movie)
console.log(keys)

// displays the keys in our movie variable
// for of is used for arrays
for (var key of movie){
    console.log(key)
}

// will show the values of the keys in movie
console.log(Object.values(movie))
