#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
const pincode = 5522;
let pincodeAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please Enter your Pincode",
        type: "number",
    },
]);
if (pincodeAnswer.pin === pincode) {
    console.log("Authentication Successful");
    let services = await inquirer.prompt([
        {
            name: "options",
            message: "What would you like to do with your account?",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Balance Inquiry", "Transfer"],
        },
    ]);
    if (services.options === "Withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "amountanswer",
                message: "Kindly enter your desired amount",
                type: "number",
            },
        ]);
        if (amount.amountanswer <= balance) {
            let newbalance = balance - amount.amountanswer;
            console.log(`CONGRATULATIONS! Your remaining balance is ${newbalance}`);
        }
        else {
            console.log("Your remaining balance in insufficient");
        }
    }
    else if (services.options === "Fast Cash") {
        let fcash = await inquirer.prompt([
            {
                name: "amount",
                message: "Select your amount",
                type: "list",
                choices: ["1000", "5000", "10000", "20000"],
            },
        ]);
        if (fcash.amount <= balance) {
            let newbal2 = balance - fcash.amount;
            console.log(`SUCCESSFUL! The remaining balance is: ${newbal2}`);
        }
        else {
            console.log("You have insufficient amount");
        }
    }
    if (services.options === "Balance Inquiry")
        console.log(balance);
    if (services.options === "Transfer") {
        let selection = await inquirer.prompt([
            {
                name: "bankselection",
                message: "Please select the desired bank",
                type: "list",
                choices: ["BAHL", "HBL", "NBP"],
            },
        ]);
        if (selection.bankselection === "BAHL") {
            let accountdetails = await inquirer.prompt([
                {
                    name: "otherbank1",
                    message: "Kindly enter BAHL Account Number",
                    type: "number",
                },
                {
                    name: "amountToTransfer",
                    message: "Kindly amount to transfer",
                    type: "number",
                },
            ]);
            if (accountdetails.amountToTransfer <= balance) {
                let newbal3 = balance - accountdetails.amountToTransfer;
                console.log(`SUCCESSFUL! The new balance is: ${newbal3}`);
            }
            else {
                console.log("You have insufficient balance");
            }
        }
        if (selection.bankselection === "HBL") {
            let accountdetails2 = await inquirer.prompt([
                {
                    name: "otherbank2",
                    message: "Kindly enter HBL account Number",
                    type: "number",
                },
                {
                    name: "amountToTransfer2",
                    message: "Kindly enter amount to transfer",
                    type: "number",
                },
            ]);
            if (accountdetails2.amountToTransfer2 <= balance) {
                let newbal4 = balance - accountdetails2.amountToTransfer2;
                console.log(`SUCCESSFUL! Your new balance is: ${newbal4}`);
            }
            else {
                console.log("You have insufficient balance");
            }
        }
        if (selection.bankselection === "NBP") {
            let accountdetails3 = await inquirer.prompt([
                {
                    name: "otherbank3",
                    message: "Kindly enter your NBP account Number",
                    type: "number",
                },
                {
                    name: "amountToTransfer3",
                    message: "Kindly enter amount to transfer",
                    type: "number",
                },
            ]);
            if (accountdetails3.amountToTransfer3 <= balance) {
                let newbal5 = balance - accountdetails3.amountToTransfer3;
                console.log(`SUCCESSFUL! Your new balance is: ${newbal5}`);
            }
            else {
                console.log("You have insufficient balance");
            }
        }
    }
    let cont = await inquirer.prompt([
        {
            name: "continue",
            message: "Would you like to carry another transaction?",
            type: "list",
            choices: ["YES", "NO"],
        },
    ]);
    if (cont.continue === "YES") {
        // let i = services;
        // for (i=0;i++;);
        console.log("Still working on it");
    }
    else {
        console.log("Thank you for using our Services");
    }
}
else {
    console.log("Your Pincode is incorrect");
}
