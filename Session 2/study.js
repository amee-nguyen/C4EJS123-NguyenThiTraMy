// STUDY

/*
1. let vs var vs const.

        1. What are var and const in JavaScript?
        - var : the keyword that tells JavaScript you're declaring a variable.
        - const: that the identifier can't be reassigned.

        2. What are the differences between let and var?
        
        *let:                               
        - is block scoped.
        - can be updated but not re-declared                     
        - the let keyword is not initialized                     
                                                                             
        *var:
        - declarations are globally scoped or function/locally scoped.
        - can be re-declared and updated
        - are hoisted to the top of its scope and initialized with a value of undefined.

        3. What are the differences between let and const?
        - let can be updated but not re-declared
        - const cannot be updated or re-declared
        - let can be re-assigned, but variables declared with const can’t be.

        4. What to use in what cases?

        *let: used when we allow to update the value of the variable but does not allow us to re-declared the variable.
        - example:

        let greeting = "say Hi";
        console.log(greeting); //"say Hi"

        greeting = "say Hello instead";
        console.log(greeting); //"say Hello instead"

        *var: used when a variable is declared outside a function.
        - example:

        var greeting = "hey hi";
        var times = 4;

        if (times > 3) {
            var greeting = "say Hello instead"; 
        }

        console.log(greeting); //"say Hello instead"

        *const: used when we want the value of a variable declared to remain the same within its scope.
        - example:

        


                                                        





*/