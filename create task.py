import turtle as trtl
import random as rand

#  variable initialization
trtl.color('black')
style = ('Arial', 48, 'italic')
wn = trtl.Screen()
background_color = input("what color do you want the background to be: ")

wn.bgcolor(background_color)
possible_combos = ["1 1 1 8", "1 1 1 11", "1 1 1 12", "1 1 1 13", "1 1 2 6", "1 1 2 7", "1 1 2 8", "1 1 2 9", "1 1 2 10", "1 1 2 11", "1 1 2 12", "1 1 2 13", "1 1 3 4", "1 1 3 5", "1 1 3 7", "1 1 3 8", "1 1 3 9", "1 1 3 10", "1 1 3 11, 1 1 3 12", "1 1 3 13", "1 1 4 4", "1 1 4 5", "1 1 4 6", "1 1 4 7", "1 1 4 8", "1 1 4 9", "1 1 4 10", "1 1 4 12", "1 1 5 5", "1 1 5 6", "1 1 5 7", "1 1 5 8", "1 1 6 6", "1 1 6 8", "1 1 6 9", "1 1 6 12", "1 1 7 10", "1 1 8 8", "1 1 9 13", "1 1 10 12", "1 1 10 13", "1 1 11 11", "1 1 11 12", "1 1 11 13", "1 1 12 12", "1 1 13 13", "1 2 2 4", "1 2 2 5", "1 2 2 6", "1 2 2 7", "1 2 2 8", "1 2 2 9", "1 2 2 10", "1 2 2 11", "1 2 2 12", "1 2 2 13", "1 2 3 3", "1 2 3 4", "1 2 3 5", "1 2 3 6", "1 2 3 7", "1 2 3 8", "1 2 3 9", "1 2 3 10", "1 2 3 11", "1 2 3 12", "1 2 3 13", "1 2 4 4", "1 2 4 5", "1 2 4 6", "1 2 4 7", "1 2 4 8", "1 2 4 9", "1 2 4 10", "1 2 4 11", "1 2 4 12", "1 2 4 13", "1 2 5 5", "1 2 5 6", "1 2 5 7", "1 2 5 8", "1 2 5 9", "1 2 5 10", "1 2 5 12", "1 2 5 13", "1 2 6 6", "1 2 6 7", "1 2 6 8", "1 2 6 9", "1 2 6 10", "1 2 6 11", "1 2 6 12", "1 2 6 13", "1 2 7 7", "1 2 7 8", "1 2 7 9", "1 2 7 10", "1 2 7 11", "1 2 7 12", "1 2 8 8", "1 2 8 9", "1 2 8 10", "1 2 8 13", "1 2 9 11", "1 2 9 12", "1 2 9 13", "1 2 10 11", "1 2 10 12", "1 2 10 13", "1 2 11 11", "1 2 11 12", "1 2 11 13", "1 2 12 12", "1 2 12 13", "1 2 13 13", "1 3 3 3", "1 3 3 4", "1 3 3 5", "1 3 3 6", "1 3 3 7", "1 3 3 8"]
trtl.penup()
trtl.goto(-250,75)
trtl.pendown()
trtl.pencolor("white")


#  this draws the 2 in 24
trtl.fillcolor("black")
trtl.begin_fill()
#  this draws the top arch in the 2
trtl.setheading(90)
for i in range(180):
  trtl.forward(2)
  trtl.right(1)
#  this draws the right side of the middle part of the number 2
trtl.right(45)
trtl.forward(250)
#  this draws the of the base of 2
trtl.setheading(0)
trtl.forward(180)
trtl.right(90)
trtl.forward(50)
trtl.right(90)
trtl.forward(230)
trtl.right(90)
trtl.forward(50)
#  this draws the right side of the middle of the 2
trtl.right(45)
trtl.forward(250)
trtl.setheading(90)
#  this draws the bottom part of the arch of the 2
for i in range(180):
  trtl.forward(1)
  trtl.left(1)
trtl.right(90)
trtl.forward(65)
trtl.end_fill()

trtl.penup()
trtl.goto(100,200)
trtl.pendown()
#  this segnemt draws the number 4
trtl.fillcolor("black")
trtl.begin_fill()
#  this part draws the poking out side on the right
trtl.setheading(270)
trtl.forward(100)
trtl.left(90)
trtl.forward(75)
trtl.right(90)
trtl.forward(20)
trtl.right(90)
trtl.forward(75)
trtl.left(90)
#  this draws the base of the 4
trtl.forward(230)
trtl.right(90)
trtl.forward(20)
trtl.right(90)
trtl.forward(230)
#  this draws the leftmost part of the number 4
trtl.left(90)
trtl.forward(75)
trtl.right(115)
trtl.forward(135)
trtl.setheading(0)
trtl.forward(40)
trtl.end_fill()


trtl.penup()
trtl.goto(80,100)
trtl.setheading(180)
trtl.pendown()
#  this draws the gap inside of the number 4
trtl.fillcolor(background_color)
trtl.begin_fill()
trtl.forward(50)
trtl.right(115)
trtl.forward(75)
trtl.setheading(0)
trtl.forward(20)
trtl.right(90)
trtl.forward(60)
trtl.end_fill()


#  informing the user of the games purpose
trtl.penup()
trtl.pensize(5)
trtl.goto(-200,-175)
trtl.pencolor("black")
print("This game is called make 24 where you use 4 numbers as well as 4 operations, multiplicaion, division, addition, and subtraction, to get a soloution of 24, Good Luck")
trtl.write("This game is called make 24 where you use 4 numbers as well as 4 operations, multiplicaion, division, addition, and subtraction, to get a soloution of 24, Good Luck")

def pick_number_choices():
  print(rand.choice(possible_combos))

#  http://www.gottfriedville.net/games/24/  this is the website that the possible combos were sourced from.
#  events
pick_number_choices()
print("how can you make this equal 24?")
trtl.penup()
trtl.goto(-125,250)
trtl.pensize(5)
trtl.pencolor("black")
trtl.write("how can you make these numbers equal 24?")
user_answer = input()
score = 0
final_answer = int(24)

#  trouble shooting answer detection
#  use * instead of x for multplication
#  pemdas is needed

user_final_answer = eval(user_answer)

def check_user_answer():
  global user_final_answer, final_answer, score
  if user_final_answer == final_answer:
    print("congratulations, you were correct")
    score = score + 1
    print ("you score is: ", score)
    pick_number_choices()
    user_answer = input()
  elif user_final_answer != final_answer: 
    print("sorry, your answer was incorrect, you score is: ", score)
    pick_number_choices()
    user_answer = input()
    
#  events
while 1 == 1:
  check_user_answer()
  user_answer = ""
wn.mainloop()