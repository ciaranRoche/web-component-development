var increment = 10;

var otherObj = {
    increment: 100
};

var theObject = {
    increment : 2,
    ary : [1,2,3,4],
    // increment points to global var increment
    bumpIt1 : function() {
        var result = [] ;
        this.ary.forEach(function(element,index) {
            result[index] = element + increment;
        } );
        return result ;
    },
    // this.increment points to global var increment
    bumpIt2 : function() {
        var result = [] ;
        this.ary.forEach(function(element,index) {
            result[index] = element + this.increment;
        } );
        return result ;
    },
    // this.increment is binded to point at the increment in the object
    bumpIt3 : function() {
        var result = [] ;
        this.ary.forEach(function(element,index) {
            result[index] = element + this.increment;
        }.bind(this) );
        return result ;
    },
    // by assigning the alias, that.increment points to the increment in the object
    bumpIt4 : function() {
        var that = this ;   // Alias
        var result = [] ;
        this.ary.forEach(function(element,index) {
            result[index] = element + that.increment;
        } );
        return result ;
    },   
    //by binding otherObj this.increment points to the increment in otherObj
    bumpIt5 : function() {
        var result = [] ;
        this.ary.forEach(function(element,index) {
            result[index] = element + this.increment;
        }.bind(otherObj) );
        return result ;
    },   
    //      
    bumpIt6 : function() {
        var result = this.ary.map(function(element) {
            return element + this.increment;
        }.bind(this) );
        console.log(this.ary);
        return result ;
    },
    callIt : function(callback) {
        callback.bind(this)() ;

    }           
};

console.log(theObject.bumpIt6()) ;

var funct = function() {
    console.log (this.increment) ;
};

//theObject.callIt(funct ) ;