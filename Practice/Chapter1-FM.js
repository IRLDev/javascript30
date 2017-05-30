const TAX_RATE = 0.20;
const phone_price = 100.00;

var bank_account = 0;
var phone_number = 0;

const extras_price = 15.00;
var extras_number = 0;
var taxReturn = 0;

function calculateTax(phone,extra){
    var extraTax, phoneTax, overallTax = 0;
    phoneTax = phone * (phone_price * TAX_RATE);
    extraTax = extra * (extras_price * TAX_RATE);
    return overallTax = phoneTax + extraTax;
}

function formatAmount(amount){
    return "€" + amount.toFixed(2);
}
bank_account = prompt("How much is in your bank account?");
bank_account = Number(bank_account);

if(phone_price<bank_account||extras_price<bank_account){

    while (phone_price<bank_account){
        bank_account = bank_account - phone_price;
        phone_number++;
    }
        if(phone_number>0){
            console.log("I have purchased " + phone_number + " Phone(s)");
        }else{
            console.log("I didn't buy any phones");
        }

    while (extras_price<bank_account){
        bank_account = bank_account - extras_price;
        extras_number++;
    }
        if(extras_number>0){
            console.log("I have purchased "+ extras_number + " extras");
        } else{
            console.log("I didn't buy any extras");
        }

        if(phone_number>0){
            console.log("For " + phone_number +" phone, I paid " + formatAmount(phone_number*phone_price));
        }

        if(phone_number>0){
            console.log("For " + extras_number +" extras, I paid the " + formatAmount(extras_number*extras_price));
        }

        taxReturn = calculateTax(phone_number,extras_number);
        console.log("For these devices I paid " + formatAmount(taxReturn) +" in tax");
}else{
    alert("We are unable to do business with you, Goodbye");
}
