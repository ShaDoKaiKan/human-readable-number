module.exports = function toReadable (number) {
    let str = number.toString();
    
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    if(number < 10) {
        return units[number];
    } 
    if(number >= 10 && number < 20) {
        return teens[number-10];
    }   
    if(number >= 20 && number < 100) {
        if (str[1] === '0') {
            return dozens[str[0]];
        } else {
            return dozens[str[0]] + ' ' + units[str[1]];
        }
    }
    if (number >= 100 && number < 1000) {
        if (str[2] === '0' && str[1] === '0') {
            return units[str[0]] + ' hundred';
        }
        if (str[2] === '0' && str[1] === '1') {
            return units[str[0]] + ' hundred ' + teens[0];
        }
        if (str[2] === '0' && str[1] !== '0') {
            return units[str[0]] + ' hundred ' + dozens[str[1]];
        }
        if (str[2] !== '0' && str[1] === '0') {
            return units[str[0]] + ' hundred ' + units[str[2]];
        }
        if (str[2] !== '0' && str[1] === '1') {
            return units[str[0]] + ' hundred ' + teens[number-(number-str[2])];
        }
        if (str[2] !== '0' && str[1] !== '0') {
            return units[str[0]] + ' hundred ' + dozens[str[1]] + ' ' + units[str[2]];
        }
        
    } 
    
    
}
