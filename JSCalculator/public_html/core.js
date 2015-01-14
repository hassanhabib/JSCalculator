/* 
 * This file contains all the necessary functions needed 
 * to execute the arithmatic functions in the caluclator.
 */

/* This is a public member for general calculations */
var total = 0;
var displayVal = "";
var operationFlag = "";

/*
 * This function will handle the addition operation.
 */
function Summation(){
    StoreValue();
    operationFlag = "Sum";
}

/*
 * This function will handle the subtraction operation.
 */
function Subtract(){
    StoreValue();
    operationFlag = "Sub";
}

/*
 * This function will handle the division operation
 */
function Division(){
    StoreValue();
    operationFlag = "Div";
}

/*
 * Ths function will handle the multiplication operation
 */
function Multiplication(){
    StoreValue();
    operationFlag = "Mult";
}

/*
 * This function will clear the total in order
 * for a new operation to start.
 */
function Clear()
{
    total = 0;
    displayVal = "";
    document.getElementById("CalcScreen").innerHTML = displayVal;
}

/*
 * This function will empty the input data in the displayVal 
 * variable and put it in the total variable
 */
function StoreValue()
{
    total += Number(displayVal);
    displayVal = "";
}

/*
 * This function will display the inserted number to the Calculator Screen
 */
function ShowOnScreen(num)
{
    if(displayVal.length < 23)displayVal += num;
    document.getElementById("CalcScreen").innerHTML = displayVal;
}

/*
 * This function will display the end result when the equal sign 
 * is clicked depending on the kind of operation needed.
 */
function DisplayResult()
{
    switch(operationFlag)
    {
        case "Sum":
            total+= Number(displayVal) ;
            break;
        case "Div":
            total /= Number(displayVal);
            break;
        case "Mult":
            total *= Number(displayVal);
            break;
        case "Sub":
            total -= Number(displayVal);
            break;
        default:
            break;
    }
    document.getElementById("CalcScreen").innerHTML = (Number(total));
}
