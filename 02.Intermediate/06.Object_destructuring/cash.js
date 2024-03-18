// Currency                Unit	        Amount
// -----------------------------------------------
// Penny	                $0.01           (PENNY)
// Nickel	                $0.05           (NICKEL)
// Dime	                    $0.1            (DIME)
// Quarter	                $0.25           (QUARTER)
// Dollar	                $1              (ONE)
// Five Dollars	            $5              (FIVE)
// Ten Dollars	            $10             (TEN)
// Twenty Dollars	        $20             (TWENTY)
// One-hundred Dollars	    $100            (ONE HUNDRED)


// Design a cash register drawer function checkCashRegister() 
// that accepts purchase price as the first argument (price), 
// payment as the second argument (cash), and cash-in-drawer (cid) 
// as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object 
// with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} 
// if cash-in-drawer is less than the change due, or 
// if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} 
// with cash-in-drawer as the value for the key change 
// if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with 
// the change due in coins and bills, 
// sorted in highest to lowest order, as the value of the change key.


const CASH_VALUE = {

    PENNY : 0.01,
    NICKEL : 0.05,
    DIME : 0.1,
    QUARTER : 0.25,
    DOLLAR : 1,
    FIVE_DOLLAR : 5,
    TEN_DOLLAR : 10,
    TWENTY_DOLLAR : 20,
    ONE_HUNDRED_COLLAR : 100

};

function totalCID(cid){

    let total = 0.0;

    for( let value of cid ){
        // console.log( `Value = ${value[1]} and Total = ${total}` );
        total = (parseFloat(total) + parseFloat(value[1])).toFixed(2);
    }

    return parseFloat(total);
}

function checkCashRegister(price, cash, cid) {

    
    const total_CID = (totalCID(cid)).toFixed(2);
    let change_toGive = (parseFloat(cash - price)).toFixed(2);

    console.log(`change to give : ${change_toGive}`);
    console.log(`total cid : ${total_CID}`);

    const roundToTwoDecimalPlaces = (num) => Math.round(num * 100) / 100;


    if (parseFloat(change_toGive) > parseFloat(total_CID)) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }


    if ( change_toGive === total_CID ) {
        return { status: "CLOSED", change: cid };
    }


    let tempArray = [];
    let CASH_KEYS = Object.keys(CASH_VALUE);
    for( let i = CASH_KEYS.length-1 ; i>=0 ; i-- ){

        let CASH_NAME = CASH_KEYS[i];
        let CASH_AMOUNT = parseFloat(CASH_VALUE[CASH_NAME]);
        let [ cid_name, cid_amount ] = cid[i];

        // console.log(CASH_NAME + " - " + CASH_AMOUNT);
        // console.log(cid_name + " - " + cid_amount);

        let count = 0;
        while( change_toGive >= CASH_AMOUNT && cid_amount > 0 ){

            // console.log( "cid_amount - " + cid_amount );
            // console.log( "change_toGive - " + change_toGive )
            cid_amount = (cid_amount - CASH_AMOUNT).toFixed(2);
            change_toGive = (change_toGive - CASH_AMOUNT).toFixed(2);
            // console.log( "after cid_amount - " + cid_amount );
            // console.log( "after change_toGive - " + change_toGive )
            
            count++;
        }

        if(count > 0){
            tempArray.push([cid_name, count * CASH_AMOUNT]);
        }
        // console.log(tempArray);
        // console.log(change_toGive);
    }
    if (change_toGive > 0) {
        // console.log(`8989898989`);
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    // Otherwise, return the change provided
    // tempArray.reverse();
    return { status: "OPEN", change: tempArray };

}

const result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(result)