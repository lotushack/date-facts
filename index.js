const moment = require('moment');
const chalk = require('chalk');

var fullDate = moment();

var dayYear = moment().format('DDD');

var secDay = (moment().format('H')*3600) + (moment().format('m')*60) + (moment().format('s')*1);


var daySav = moment().isDST();
  if (daySav === true) {
    return ('is')
  }else{
    return ('is not')
  }

var leapYear = moment().isLeapYear();
  if (leapYear === true) {
    return('is')
  }else{
    return ('is not')
  }


console.log("It is " + chalk.blue(fullDate) + ".");
console.log("It is the " + chalk.purple(dayYear) + " of the year.");
console.log("It is" + chalk.green(secDay) + " seconds into the day.");
console.log("It " + chalk.yellow(daySave) + " during Daylight Savings Time.");
console.log("It" + chalk.red(leapYear) + " a leap year.");
