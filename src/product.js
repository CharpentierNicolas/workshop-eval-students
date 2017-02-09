var chalk = require('chalk');

function Product(name, price) {
  this.name = name;
  this.price = price;

  this.toString = function(currency, rateCurrency) {
    var currency = currency || '$';
    var rateCurrency = rateCurrency || 1;
    return chalk.yellow(this.name) + ' cost ' + chalk.red(this.price * rateCurrency) + currency;
  }
}


/*function Book(name, price, isbn) {
 Product.apply(this, [name, price]);
 this.isbn = isbn;
}*/

class Book extends Product {
  constructor(name, price, isbn, minDuration, maxDuration) {
      super(name, price)
      this.isbn = isbn;
      this.minDuration = minDuration;
      this.maxDuration = maxDuration;
  }
}

Book.prototype.getDuration = function(minDuration, maxDuration) {
  var minDuration = minDuration || 'minutes';
  var maxDuration = maxDuration || 'minutes';

}

Book.prototype = Object.create(Product.prototype, {
  constructor: {value: Book}
});

/*function DVD(name, price, moovie) {
 Product.apply(this, [name, price]);
 this.moovie = moovie;
}*/

class DVD extends Product{
  constructor(name, price, moovie, runningTime) {
      super(name, price)
      this.moovie = moovie;
      this.runningTime = runningTime;
  }
}

DVD.prototype.getDuration = function(runningTime) {
  var runningTime = runningTime || 'minutes';
  return runningTime;

}

DVD.prototype = Object.create(Product.prototype, {
  constructor: {value: DVD}
});



/*function VideoGame(name, price, platform) {
 Product.apply(this, [name, price]);
 this.platform = platform;
}*/

class VideoGame extends Product{
  constructor(name, price, platform, minDuration, maxDuration) {
      super(name, price)
      this.platform = platform;
      this.minDuration = minDuration;
      this.maxDuration = maxDuration;
  }
}

VideoGame.prototype.getDuration = function(minDuration, maxDuration) {
  var minDuration = minDuration || 'minutes';
  var maxDuration = maxDuration || 'minutes';

}

VideoGame.prototype = Object.create(Product.prototype, {
  constructor: {value: VideoGame}
});


module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame: VideoGame
};