from math import floor

# Number of YES/NO questions
iterations = 7


def game():
    print(f'I reckon I can guess your age in {iterations} YES/NO questions.')
    minGuess = 1
    maxGuess = 2**iterations
    for i in range(iterations):
        mean = floor((minGuess + maxGuess) / 2)
        isGreater = prompt(i + 1, mean)
        if isGreater:
            minGuess = mean + 1
        else:
            maxGuess = mean
        if minGuess == maxGuess:
            break
    print(f'\nYou are {minGuess} years old!')


def prompt(i, mean):
    print(f'\n({i}/{iterations}) Are you older than {mean}? (y/n)')
    answer = input()[0]
    valid = answer in ['y', 'n']
    return answer == 'y' if valid else prompt()


if __name__ == '__main__':
    game()
