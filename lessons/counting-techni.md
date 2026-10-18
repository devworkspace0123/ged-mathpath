# GED Math Lesson: Counting Techniques

## Goal

Learn how to count the number of possible outcomes, arrangements, and combinations without listing every possibility.

Counting techniques are useful for GED problems involving:

* choices
* arrangements
* schedules
* passwords
* outfits
* menus
* groups
* combinations

---

# 1. The Fundamental Counting Principle

The **Fundamental Counting Principle** is used when a process has multiple steps.

If:

* the first step can happen in $a$ ways, and
* the second step can happen in $b$ ways,

then the total number of possible outcomes is:

$$
a \times b
$$

For more steps:

$$
a \times b \times c
$$

---

## Example

A restaurant offers:

* 3 choices of main dish
* 4 choices of side dish

How many different meals are possible?

$$
3 \times 4 = 12
$$

Therefore:

$$
\boxed{12\text{ different meals}}
$$

---

# 2. Counting Choices

When choices are made one after another, multiply the number of choices.

### Example

A student has:

* 4 shirts
* 3 pairs of pants
* 2 pairs of shoes

How many different outfits can the student make?

$$
4 \times 3 \times 2 = 24
$$

Therefore:

$$
\boxed{24\text{ outfits}}
$$

---

# 3. The Addition Rule

Sometimes you choose **one option from different categories**.

When the choices cannot happen at the same time, add.

### Example

A student can choose:

* 5 different science courses, or
* 3 different history courses.

How many different courses can the student choose?

$$
5 + 3 = 8
$$

Therefore:

$$
\boxed{8\text{ choices}}
$$

---

## Important Difference

### Use multiplication when:

You make **one choice from each category**.

$$
\text{Shirt} \times \text{Pants} \times \text{Shoes}
$$

### Use addition when:

You choose **one option from separate groups**.

$$
\text{Science choices} + \text{History choices}
$$

---

# 4. Counting Arrangements

When the **order matters**, the number of choices decreases after each selection.

### Example

Four students are standing in a line.

How many different arrangements are possible?

For the:

* first position: 4 choices
* second position: 3 choices
* third position: 2 choices
* fourth position: 1 choice

Multiply:

$$
4 \times 3 \times 2 \times 1 = 24
$$

Therefore:

$$
\boxed{24\text{ arrangements}}
$$

---

# 5. Factorials

A factorial is a shortcut for multiplying consecutive positive integers.

The symbol $n!$ means:

$$
n! = n \times (n-1) \times (n-2) \times \cdots \times 1
$$

### Examples

$$
3! = 3 \times 2 \times 1 = 6
$$

$$
4! = 4 \times 3 \times 2 \times 1 = 24
$$

$$
5! = 5 \times 4 \times 3 \times 2 \times 1 = 120
$$

Therefore:

$$
\boxed{5! = 120}
$$

---

## Important Fact

$$
0! = 1
$$

This is a mathematical rule used in counting formulas.

---

# 6. Permutations: When Order Matters

A **permutation** is an arrangement in which the order matters.

For example:

$$
ABC
$$

and:

$$
BAC
$$

are different arrangements.

---

## Formula

The number of ways to arrange $r$ objects chosen from $n$ objects is:

$$
{}_nP_r = \frac{n!}{(n-r)!}
$$

---

## Example

A club has 5 members. In how many ways can it choose a president and a vice president?

Order matters because:

* Alice as president and Bob as vice president
* Bob as president and Alice as vice president

are different arrangements.

Use:

$$
{}_5P_2 = \frac{5!}{(5-2)!}
$$

$$
= \frac{5!}{3!}
$$

$$
= 5 \times 4
$$

$$
= 20
$$

Therefore:

$$
\boxed{20\text{ ways}}
$$

---

# 7. Combinations: When Order Does Not Matter

A **combination** is a selection in which the order does not matter.

For example, choosing:

$$
\{A,B,C\}
$$

is the same group as:

$$
\{C,A,B\}
$$

The order does not change the group.

---

## Formula

The number of ways to choose $r$ objects from $n$ objects is:

$$
{}_nC_r = \frac{n!}{r!(n-r)!}
$$

---

## Example

A teacher has 5 students and wants to choose 2 students for a project.

Since the order does not matter:

$$
{}_5C_2 = \frac{5!}{2!(5-2)!}
$$

$$
= \frac{5!}{2!3!}
$$

Cancel:

$$
= \frac{5 \times 4}{2 \times 1}
$$

$$
= 10
$$

Therefore:

$$
\boxed{10\text{ groups}}
$$

---

# 8. Permutations vs. Combinations

This is one of the most important differences.

## Permutation

**Order matters.**

Example:

Choosing a:

* president
* vice president

The positions are different.

$$
\boxed{\text{Permutation}}
$$

---

## Combination

**Order does not matter.**

Example:

Choosing 2 students to form a team.

The group:

$$
\{A,B\}
$$

is the same as:

$$
\{B,A\}
$$

$$
\boxed{\text{Combination}}
$$

---

# 9. A Simple GED Strategy

Ask yourself:

### Question 1:

Are there multiple steps?

If yes, multiply the number of choices for each step.

$$
\boxed{\text{Multiply}}
$$

---

### Question 2:

Are you choosing between separate alternatives?

If yes, add the number of choices.

$$
\boxed{\text{Add}}
$$

---

### Question 3:

Does the order matter?

If yes, use a permutation or arrange the objects directly.

$$
\boxed{\text{Order matters}}
$$

---

### Question 4:

Does the order not matter?

If yes, use a combination.

$$
\boxed{\text{Order does not matter}}
$$

---

# 10. Real-World Example: Passwords

A password has:

* 2 choices for the first character
* 5 choices for the second character
* 4 choices for the third character

How many passwords are possible?

Use the Fundamental Counting Principle:

$$
2 \times 5 \times 4 = 40
$$

Therefore:

$$
\boxed{40\text{ possible passwords}}
$$

---

# 11. Real-World Example: Meal Choices

A restaurant offers:

* 4 appetizers
* 6 main dishes
* 3 desserts

How many different three-course meals are possible?

$$
4 \times 6 \times 3 = 72
$$

Therefore:

$$
\boxed{72\text{ different meals}}
$$

---

# 12. Real-World Example: Choosing a Committee

A school has 8 students. A committee of 3 students must be chosen.

Because the order does not matter, use a combination:

$$
{}_8C_3 = \frac{8!}{3!(8-3)!}
$$

$$
= \frac{8!}{3!5!}
$$

Simplify:

$$
= \frac{8 \times 7 \times 6}{3 \times 2 \times 1}
$$

$$
= 56
$$

Therefore:

$$
\boxed{56\text{ possible committees}}
$$

---

# 13. Counting with Restrictions

Sometimes a problem includes a condition.

### Example

A student has 5 shirts and 4 pairs of pants. One particular shirt can only be worn with 2 of the pairs of pants.

How many outfits can be made?

For the special shirt:

$$
1 \times 2 = 2
$$

For the other 4 shirts:

$$
4 \times 4 = 16
$$

Add the possibilities:

$$
2 + 16 = 18
$$

Therefore:

$$
\boxed{18\text{ outfits}}
$$

---

# Common Mistakes

### Mistake 1: Adding when you should multiply

If you choose:

* 3 shirts, and
* 4 pairs of pants,

the number of outfits is:

$$
3 \times 4 = 12
$$

not:

$$
3 + 4 = 7
$$

---

### Mistake 2: Multiplying when you should add

If you can choose:

* 5 science classes, or
* 3 history classes,

the number of choices is:

$$
5 + 3 = 8
$$

not:

$$
5 \times 3 = 15
$$

---

### Mistake 3: Ignoring whether order matters

Choosing:

$$
A,B
$$

for a team is the same as:

$$
B,A
$$

So this is a **combination**.

But assigning:

* president = A
* vice president = B

is different from:

* president = B
* vice president = A

So this is a **permutation**.

---

### Mistake 4: Counting the Same Group More Than Once

When order does not matter, do not count:

$$
\{A,B\}
$$

and:

$$
\{B,A\}
$$

as two different groups.

They are the same group.

---

# GED Tips

* Use multiplication for multiple steps.
* Use addition for separate alternatives.
* If order matters, think **permutation**.
* If order does not matter, think **combination**.
* $n!$ means multiplying all positive integers from $n$ down to $1$.
* For small problems, listing possibilities or using the Fundamental Counting Principle may be faster than using a formula.
* Always ask: **Am I arranging objects or simply selecting a group?**

---

# Memory Trick

## Multiply:

**“This AND this.”**

Example:

$$
\text{Shirt AND pants}
$$

$$
\boxed{\text{Multiply}}
$$

---

## Add:

**“This OR that.”**

Example:

$$
\text{Science OR history}
$$

$$
\boxed{\text{Add}}
$$

---

## Permutation:

**Position matters.**

$$
\boxed{\text{Arrange}}
$$

---

## Combination:

**Group matters, order does not.**

$$
\boxed{\text{Choose}}
$$

The main idea is:

$$
\boxed{
\begin{array}{c}
\text{AND} \rightarrow \text{Multiply}\\
\text{OR} \rightarrow \text{Add}\\
\text{Order matters} \rightarrow \text{Permutation}\\
\text{Order does not matter} \rightarrow \text{Combination}
\end{array}
}
$$
