const TAX_RATE = 0.08;
var phone_price = 50.02;
var bank_account = 120.00;
var phone_number = 0;
var accessory_price = 15.00;
var accessory_number = 0;

function calculateFinalPurchaseAmount(amt) {
    // calculate the new amount with the tax
    amt = amt + (amt * TAX_RATE);

    // return the new amount
    return amt;
}


while (phone_price<bank_account){
    bank_account = bank_account - phone_price;
    phone_number++;
    console.log("I have purchased phone " + phone_number);

}

while (accessory_price<bank_account){

    bank_account = bank_account - accessory_price;
    accessory_number++;
    console.log("I have purchased accessory "+ accessory_number);
}