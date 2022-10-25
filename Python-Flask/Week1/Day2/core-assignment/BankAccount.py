class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        # your code here! (remember, instance attributes go here)
        self.int_rate= int_rate
        self.balance=balance
        return self
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        self.balance+=amount
        return self
        # your code here
    def withdraw(self, amount):
        if self.balance>=amount:
            self.balance-=amount
        else:
            print("Insufficient funds: Charging a $5 fee" )
            self.balance-=5
        return self
        # your code here
    def display_account_info(self):
        print(f'Balance: ${self.balance}')
        return self
        # your code here
    def yield_interest(self):
        # your code here
        if self.balance>0:
            self.balance+=(self.balance*self.int_rate)
        return self
    
heni_acc=BankAccount(0.05,60)
asma_acc=BankAccount(0.03,300)
heni_acc.deposit(100).deposit(20).deposit(40).withdraw(150).yield_interest().display_account_info()
asma_acc.deposit(200).deposit(30).withdraw(150).withdraw(150).withdraw(150).withdraw(150).yield_interest().display_account_info()