module.exports = function main(inputs) {
    // write your code here...
    var price;
    var d = inputs.distance;
    var time = inputs.parkTime;
    if(d <= 2)
    	price = 6 + time * 0.25;
    else if (d < 8) {
    	price = 6 + (d - 2) * 0.8 + time * 0.25;
    }else{
    	price = 6 + 6 * 0.8 + (d - 8) * 1.2 + time * 0.25;
    }
    return Math.round(price);
};