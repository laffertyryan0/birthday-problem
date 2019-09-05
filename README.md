#Birthday Problem
A simulation of the birthday problem using javascript.

The birthday problem is the following question:
In a group of k people, what are the chances that at least
two members of the group were born on the same day?

We assume that each person's birthday is a discrete uniform random variable taking values 1,2,...,365. Furthermore, we are assuming all of these random variables are independent.

This program actually runs a simulation and determines the probability experimentally. However, there is a simple formula which can be derived using basic probability theory.

If k is the number of people in the group, and nPk is the number of k-permutations of an n element set, then the probability that at least two members will share a birthday is given by:

P = 1 - (365 P k) / 365^k
