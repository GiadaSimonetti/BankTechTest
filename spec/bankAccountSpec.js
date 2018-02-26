// (function () {
   'use strict';
   describe('Feature test', function(){
     var bankAccount;

    beforeEach(function(){
      bankAccount= new BankAccount();
   });

   it('returns the initial balance', function(){
    expect(bankAccount.initialBalance).toEqual(0);
  });

   it('can make a deposit', function(){
    bankAccount.deposit(500)
    expect(bankAccount.currentBalance).toEqual(500);
  });

   it('can make a withdrawal', function(){
    bankAccount.deposit(500)
    bankAccount.withdrawal(200)
    expect(bankAccount.currentBalance).toEqual(300);
  });


 });
// }());
