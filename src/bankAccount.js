// (function () {
   'use strict';
   function BankAccount(){
     this.initialBalance = 0;
     this.currentBalance = this.initialBalance;
   }

   BankAccount.prototype.deposit = function(depositedAmount){
      this.currentBalance += depositedAmount;
    };

   BankAccount.prototype.withdrawal = function(withdrawalAmount){
      this.currentBalance -= withdrawalAmount;
    };

   // BankAccount.prototype.printAccountStatment = function(money){
   //
   //  };



// }());
