// Define a customer object with name and balance properties
const customer = {
    name: "Harshit",
    balance: 1000, // Initial balance
};

// Function to deposit money into the account
function deposit(amount) {
    if (amount > 0) {
        this.balance += amount;
        return `Deposited Rs. ${amount}. New balance: Rs. ${this.balance}`;
    } else {
        return "Invalid deposit amount. Please enter a positive amount.";
    }
}

// Function to withdraw money from the account
function withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return `Withdrawn Rs. ${amount}. New balance: Rs. ${this.balance}`;
    } else if (amount > this.balance) {
        return "Insufficient balance for withdrawal.";
    } else {
        return "Invalid withdrawal amount. Please enter a positive amount.";
    }
}

// Add deposit and withdraw methods to the customer object
customer.deposit = deposit;
customer.withdraw = withdraw;

// Example usage:
console.log(customer.deposit(500)); // Deposit Rs. 500. New balance: Rs. 1500
console.log(customer.withdraw(200)); // Withdrawn Rs. 200. New balance: Rs. 1300
console.log(customer.withdraw(1600)); // Insufficient balance for withdrawal.
console.log(customer.deposit(-100)); // Invalid deposit amount. Please enter a positive amount.
