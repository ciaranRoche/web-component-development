var obj1 = {
    increment : 2,
    ary : [1,2,3,4],
    bumpItArrow : function() {
        var result = this.ary.map( element => {
            return element + this.increment;
        });
        return result ;
    }
};

console.log(obj1.bumpItArrow() ) ;