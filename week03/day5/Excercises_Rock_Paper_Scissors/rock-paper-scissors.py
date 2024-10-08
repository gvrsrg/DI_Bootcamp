# rock-paper-scissors.py : create 3 functions
# get_user_menu_choice() - this should display a simple menu, get the user’s choice (with data validation), and return the choice. No looping should occur here.
# The possibles choices are : Play a new game or Show scores or Quit

# print_results(results) – this should print the results of the games played. It should have a single parameter named results; which will be a dictionary of the results of the games played. It should display these results in a user-friendly way, and thank the user for playing.


# Note: results should be in this form: {win: 2,loss: 4,draw: 3}. Bear in mind that this dictionary will need to be created and populated in some other part of our code, and passed in to the print_results function at the right time.

# main() - the main function. It should take care of 3 things:
# Displaying the menu repeatedly, until the user types in the value to exit the program: ‘x’ or ‘q’, whatever you decide. (Make use of the get_user_menu_choice function)

# When the user chooses to play a game:
# Create a new Game object (see below), and call its play() function, receiving the result of the game that is returned.
# Remember the results of every game that is played.

# When the user chooses to exit the program, call the print_results function in order to display a summary of all the games played.
from game import Game

import random
def get_user_menu_choice():
    print("""
GAME MENU:
Choose your option:
    (g) -> Play a new game.
    (s) -> Show scores.
    (x) -> Exit the game.
""")
    user_input = input("Select one of the above options: ")
    if user_input.lower() not in ['g', 's', 'x']:
        user_input = 'invalid'
    return user_input

def print_game_result(result):
    print(result[2])

def print_score(game):
    print(game.results)

def main():
    game = Game()
    stats =[]
    action = get_user_menu_choice()

    while action != 'x' and action != 'q':
        if action == 'g':
            result = game.play()
            stats.append(result)
            print_game_result(result)
        elif action == 's':
            print_score(game)
            
        action = get_user_menu_choice()

if __name__ == "__main__":
    main()
