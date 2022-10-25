class User:		# here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    # adding the deposit method
    def make_deposit(self, amount):	# takes an argument that is the amount of the deposit
        self.account_balance += amount	# the specific user's account increases by the amount of the value received
        return self
    def make_withdrawal(self,amount):
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        print(f'User: {self.name},Balance:${self.account_balance}')
        return self

    def transfer_money(self,other_user,amount):
        self.account_balance -=amount
        other_user.account_balance += amount
        self.display_user_balance()
        other_user.display_user_balance()
        return self

# Create 3 instances of the User class

heni=User('heni','h.heni@hotmail.com')

# print(heni.name)
iheb=User('iheb','iheb@hotmail.com')


ahmed=User('ahmed','ahmed@hotmail.com')

# First user make 3 deposits and 1 withdrawal and then display their balance


heni.make_deposit(50).make_deposit(200).make_deposit(10).make_withdrawal(60).display_user_balance()
# heni.make_deposit(200)
# heni.make_deposit(10)
# heni.make_withdrawal(60)
# heni.display_user_balance()

iheb.make_deposit(30).make_deposit(500).make_withdrawal(200).make_withdrawal(30).display_user_balance()
# iheb.make_deposit(500)
# iheb.make_withdrawal(200)
# iheb.make_withdrawal(30)
# iheb.display_user_balance()

ahmed.make_deposit(600).make_withdrawal(30).make_withdrawal(400).make_withdrawal(100).display_user_balance()
# ahmed.make_withdrawal(30)
# ahmed.make_withdrawal(400)
# ahmed.make_withdrawal(100)
# ahmed.display_user_balance()

heni.transfer_money(ahmed,600)
