// (function () {
   'use strict';
   function BankAccount(){
     this.initialBalance = 0;
     this.currentBalance = this.initialBalance;
   }

   BankAccount.prototype.deposit = function(money){
      this.currentBalance += money;
    };

   // BankAccount.prototype.printAccountStatment = function(money){
   //
   //  };



// }());
