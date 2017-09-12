var nums = [12,22,5,18];
var first = nums[0] ;  // not nums['0']
var second = nums[1];
console.log(second);  //  22
var stuff = [ 12,
             'web',
             {a : 1, b : 2},
             null
            ];
console.log(stuff[1]) ;  // 'web'
console.log(stuff[2].b); //  2

// Manipulating arrays
nums.push(10);
console.log(nums) ;
var element = nums.pop();  // 10
console.log(nums) ;
element = nums.shift();  //
console.log(nums);
nums.unshift(3) ;
console.log(nums);
