//start kilometerToMeter function..

function kilometerToMeter(kilometer) {
  if (kilometer > 0) {
    var meter = kilometer * 1000; // 1 kilometer = 1000 meter..
    return meter;
  } else {
    return "kilometer is not availale on negative";
  }
}
var motherGaveMeKilometer = kilometerToMeter(-0.45);
console.log(motherGaveMeKilometer);

//end kilometerToMeter function..


//start budgetCalculator function..

function budgetCalculator(watch, mobile, laptop) {
  var budget1 = watch * 50; // perWatchPrice = 50;
  var budget2 = mobile * 100; // perMobilePrice = 100;
  var budget3 = laptop * 500; // perLaptopPrice = 500;
  var totalBudget = budget1 + budget2 + budget3;
  return totalBudget;
}

//end budgetCalculator function..


//start hotelCost function..

function hotelCost(day) {
  if (day > 0) {
    var money = 0;
    if (day <= 10) {
      money = day * 100; // per day holtel cost of first 1-10 days = 100tk..
    } else if (day <= 20) {
      var firstTenDay = 10 * 100;
      var remaining = day - 10;
      var secondTenDay = remaining * 80; // per day holtel cost of second 11-20 days = 80tk..
      money = firstTenDay + secondTenDay;
    } else {
      var firstTenDay = 10 * 100;
      var secondTenDay = 10 * 80;
      var remaining = day - 20;
      var anotherDay = remaining * 50; // per day holtel cost of after 20 days = 50tk..
      money = firstTenDay + secondTenDay + anotherDay;
    }
    return money;
  } else {
    return "day is not availale on negative";
  }
}
var totalCost = hotelCost(-0.45);
console.log(totalCost);

//end hotelCost function..


//start megaFriend function..

function megaFriend(name) {
  var biggestName = "";
  var biggerFriend;

  for (var i = 0; i < name.length; i++) {
    if (name[i].length > biggestName) {
      var biggestName = name[i].length;
      biggerFriend = name[i];
    }
  }
  return biggerFriend;
}

//end megaFriend function..