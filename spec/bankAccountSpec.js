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


 });
// }());
