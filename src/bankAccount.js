// (function () {
   'use strict';
   function BankAccount(){
     this.initialBalance = 0;
     this.currentBalance = this.initialBalance;
     this.transactions = [];
   }

   BankAccount.prototype.deposit = function(depositedAmount){
      this.currentBalance += depositedAmount;
      this.transactions.push(this.formatDate(new Date()) + " || " + depositedAmount + " ||  || " + this.currentBalance);
    };

   BankAccount.prototype.withdrawal = function(withdrawalAmount){
      this.currentBalance -= withdrawalAmount;
      this.transactions.push(this.formatDate(new Date()) + " ||  || " + withdrawalAmount + " || " + this.currentBalance);
    };

   BankAccount.prototype.formatDate = function(date){
     var day = date.getDate();
     var month = date.getMonth()+1;
     var year = date.getFullYear();
     return day + '/' + month + '/' + year;
    };

    // console.log(this.formatDate(new Date()));

   BankAccount.prototype.printAccountStatment = function(){
     for (var i = this.transactions.length-1; i >= 0; i--) {
       return this.transactions[i];
     }
    };


// }());
