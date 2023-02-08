module.exports = {


    minimum : function(value1, value2){
        if (value1 < value2) {
            return value1;
        } else if (value2 < value1) {
            return value2;
        } return 'equals'
    }
}