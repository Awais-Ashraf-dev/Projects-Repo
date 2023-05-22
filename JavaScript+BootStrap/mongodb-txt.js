// --------------------------------------------------
// PART 1 - create movies database and insert following records.

use movies

db.comedy.insert({name: 'Ted', year: 2012, tagline: 'Ted is coming',
    cast: ['Mark Walhlberg', 'Mila Kunis', 'Seth MacFarlane'],
    technical: {runningTime: 106, language: 'English', prizes: 13, nominations: 27},
    sequel: 'Ted 2',
    merits: {budget: 50, boxOffice: 535},
    comments:[{by:'Steve', text:'Loved the movie'}, {by:'Dave', text:'Really funny!'}]})

db.comedy.insertOne({name: 'We\'re the Millers', year: 2013, tagline: 'If anyone asks',
    cast: ['Jennifer Aniston', 'Luis GuzmÃ¡n', 'Ed Helms', 'Kathryn Hahn'],
    technical: {runningTime: 110, language: 'English'},   
    merits: {budget: 37, boxOffice: 270},
    comments:[{by:'Taylor', text:'First class movie!'}, {by:'Rob', text:'I like it'}]})


db.comedy.insertMany([{name: 'The Hangover', year: 2009, tagline: 'Some guys just can\'t handle Vegas',
    cast: ['Bradley Cooper', 'Ed Helms', 'Zach Galifianakis'],
    technical: {runningTime: 100, language: 'English'},
    sequel: 'The Hangover Part II',    
    merits: {budget: 35, boxOffice: 467.5},
    comments:[{by:'Alex', text:'Dude, it rocked'},   {by:'Steve', text:'The best movie ever!'}]},  
    
    {name: "The Hangover Part II", year: 2011, tagline:'Bangkok has them now',
    cast: ['Bradley Cooper', 'Ed Helms', 'Zach Galifianakis'],
    technical: {runningTime: 102, language: 'English'},
    sequel: 'The Hangover Part III',    
    merits: {budget: 80, boxOffice: 581},
    comments:[{by:'Anne', text:'Liked the first part better'}, {by:'Robin', text:'Over the top'}]}])

// run following queries on above database.

/* Find all movies of which the runningTime is longer than 105 minutes */
/* Find all movies of which the language is English */
/* Find all movies with runningTime between 100 and 110 */
/* Find all comedies with a budget of 50, 60, 70 or 80 */
/* Find all comedies that have a runningTime other than 100 or 105 */
/* Find all comedies with the name Ted or The Hangover from the year 2012 */
db.comedy.find({year:{$eq:2012},$or : [{name: {$eq:'Ted'}}, {name: {$eq:'The Hangover'}}]})
/* Find all comedies with a boxOffice over 500 from the year 2010 or 2011 */
{"merits.boxOffice":{$gt:500},$or : [{year: {$eq:2010}}, {year: {$eq:2011}}]}
/* Find all movies that have comments by Rob or Alex */
{$or : [{"comments.by": {$eq:'Rob'}}, {"comments.by": {$eq:'Alex'}}]}
/* Find all movies with 4 actors */
{cast:{$size:4}}
/* Find all comedies that were not released in 2012 */
{year:{$ne:2012}}
/* Find all comedies that were released in 2011 or later with Ed Helms as part of the cast */
{ $or: [ { year: { $eq: 2012 } }, { year: { $gt: 2012 } }, { cast: { $in: ["El Helms"] } }]}

// -----------------------------------------------------
// PART - 2
use exercises

db.irons.drop()

db.irons.insert({ model: 'GC4516/20', price: 49, brand: 'Philips', type: 'Steam iron', description: { color: 'blue/white', waterreservoir: 0.300 }, extras: ['anti-calc system', 'cord storage space', 'drop stop', 'spray function'], technically: { power: 2400, weight: 1.7, steampressure: 45 }, measures: { width: 16, height: 30, depth: 36, cordlength: 200 }, reviews: { plus: ['good quality', 'longevous'], minus: ['cord does not roll up properly', 'cord too short'] } })

db.irons.insert({ model: 'FV3930', price: 35, brand: 'Tefal', type: 'Steam iron', description: { color: 'purple/white', waterreservoir: 0.300 }, extras: ['anti-calc system', 'drop stop', 'spray function'], technically: { power: 2300, weight: 1.6, steampressure: 40 }, measures: { width: 34, height: 18, depth: 15, cordlength: 200 }, reviews: { plus: ['good quality', 'advantageous purchase', 'is very easy to iron'], minus: ['water tank quickly empty', 'cord too short'] } })

db.irons.insert({ model: 'FV3730', price: 30, brand: 'Tefal', type: 'Steam iron', description: { color: 'darkblue/white', waterreservoir: 0.300 }, extras: ['anti-calc system', 'cord storage space', 'drop stop', 'spray function'], technically: { power: 2000, weight: 1.7, steampressure: 30 }, measures: { width: 17, height: 15, depth: 32, cordlength: 250 }, reviews: { plus: ['good quality', 'advantageous purchase', 'fits perfectly'], minus: ['expensive', 'heavy'] } })

db.irons.insert({ model: 'GC1433/40', price: 23, brand: 'Philips', type: 'Steam iron', description: { color: 'red/white', waterreservoir: 0.220 }, extras: ['anti-calc system', 'cord storage space', 'drop stop', 'spray function'], technically: { power: 2000, weight: 1.1, steampressure: 25 }, measures: { width: 29, height: 15, depth: 13, cordlength: 195 }, reviews: { plus: ['good quality'], minus: ['fragile', 'average quality', 'not easy to use'] } })

db.irons.find()



// generate queries for following: 

// 1) Give all irons of the brand Philips or Tefal that cost 30 euros or less, that are red, have a power of 2000 or
// more and have a cord storage space and spray function.

// 2) Give the model, price and brand of the most expensive iron that is not red, weighing less than 2 kilos, that
// has at least 2 plus points, a maximum height of 20 centimeters and that does not have cord storage space as
// extra


// 3) Loop through the irons. Increase the price of all irons with 10%.

// 4) During the sales, each brand gives a specific discount.
// The discounts are given as an object literal
// var discounts = {'Calor': 1, 'Tefal': 5, 'Philips': 3}
// Update all the prices of the irons.
// Note: to traverse the object literal of discounts, you can use the following code
// `for (var key in discounts) { â€¦ }`