// (function () {

"use strict";
describe("Feature test", function() {
  var bankAccount;

  beforeEach(function() {
    bankAccount = new BankAccount();
  });

  it("returns the initial balance", function() {
    expect(bankAccount.initialBalance).toEqual(0);
  });

  it("returns transactions as an empty array", function() {
    expect(bankAccount.transactions).toEqual([]);
  });

  it("can make a deposit", function() {
    bankAccount.deposit(500);
    expect(bankAccount.currentBalance).toEqual(500);
  });

  it("can make a deposit", function() {
    bankAccount.deposit(500);
    expect(bankAccount.transactions).toContain("27/2/2018 || 500 ||  || 500");
  });

  it("can make a withdrawal", function() {
    bankAccount.deposit(500);
    bankAccount.withdrawal(200);
    expect(bankAccount.currentBalance).toEqual(300);
  });

  it("can make a deposit", function() {
    bankAccount.deposit(500);
    bankAccount.withdrawal(200);
    expect(bankAccount.transactions).toContain("27/2/2018 ||  || 200 || 300");
  });

  it("can make a deposit", function() {
    bankAccount.deposit(500);
    bankAccount.withdrawal(200);
    expect(bankAccount.printAccountStatment()).toEqual(
      "27/2/2018 || 500 ||  || 500 n 27/2/2018 ||  || 200 || 300"
    );
  });

  //  it('shows the date', function(){
  //   expect(bankAccount.formatDate).toEqual("27/1/2018");
  // });
});
// }());
