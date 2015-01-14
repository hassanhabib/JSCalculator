/* 
 * This file contains all the necessary functions needed 
 * to execute the arithmatic functions in the caluclator.
 */

/* This is a public member for general calculations */
var total = 0;

/*
 * This function will handle the addition operation.
 */
function Summation(num){
    return total + num;
}

/*
 * This function will handle the subtraction operation.
 */
function Subtract(num){
    return total - num;
}

/*
 * This function will handle the division operation
 */
function Division(num){
    return total/num;
}

/*
 * Ths function will handle the multiplication operation
 */
function Multiplication(num){
    return total * num;
}

/*
 * This function will clear the total in order
 * for a new operation to start.
 */
function Clear()
{
    total = 0;
}

/*
 * This function will display the inserted number to the Calculator Screen
 */
function ShowOnScreen(num)
{
    document.getElementById("CalcScreen").innerHTML = num;
}
