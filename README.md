[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Recurrence relation:

T(n) = { 1 if n <= 2
       { 3T(n/3)+C if n > 2

Solution:

T(n) = 3T(n/3) + C
T(n/3) = 3T(n/3^2) + C
Substituting:
T(n) = 3[3T (n/3^2) + C] + C
Expand: 3^2T(n/3^2) + 3C
Eventually that pattern becomes:
3^iT(n/3^i) + n * C
To get to the base case, we can substitute log_3(n) for i and solve.
Eventually getting to $\Theta$(n) linear time.

The $\Theta$ time complexity of this algorithm is n. The time complexity of the algorithm grows linearly because although it divides the problem by 3 each time, it just divides the problem into separate smaller sums, and must linearly add all of those sums as the recursion moves up the call stack, thus resulting in a linear time complexity. 
