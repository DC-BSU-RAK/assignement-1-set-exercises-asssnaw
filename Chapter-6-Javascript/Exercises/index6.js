function Calculation(){
    // Retrieve the value from the "Amount" input field and convert it to a floating-point number
    Amount=parseFloat(form.Amount.value);

    // Retrieve the value from the "Litre" input field and convert it to a floating-point number
    Litre=parseFloat(form.Litre.value);

    // Multiply the amount per litre by the number of litres to get the total cost
    Total=Amount*Litre;

    // Display the total cost in the "Total" input field of the form
    form.Total.value=Total;
}
