# Systems of Equations

## Learning Goals

By the end of this lesson, you should be able to:

* Understand what a system of equations is.
* Identify solutions to systems of equations.
* Solve systems by graphing.
* Solve systems by substitution.
* Solve systems by elimination.
* Interpret the intersection of two lines.
* Identify systems with no solution or infinitely many solutions.
* Apply systems of equations to real-world problems.

---

# 1. What Is a System of Equations?

A **system of equations** is a set of two or more equations that must be solved at the same time.

For example:

$$
\begin{cases}
y=2x+1\\
y=-x+7
\end{cases}
$$

The solution is the point that makes **both equations true**.

---

# 2. What Is the Solution?

Consider:

$$
\begin{cases}
y=x+2\\
y=-x+6
\end{cases}
$$

The solution is:

$$
\boxed{(2,4)}
$$

Let's check.

First equation:

$$
y=x+2
$$

Substitute $x=2$:

$$
y=2+2=4
$$

Second equation:

$$
y=-x+6
$$

Substitute $x=2$:

$$
y=-2+6=4
$$

Therefore, $(2,4)$ satisfies both equations.

---

# 3. Solving Systems by Graphing

Consider:

$$
\begin{cases}
y=2x+1\\
y=-x+7
\end{cases}
$$

Graph both lines.

The solution is the point where the two lines intersect.

To find the intersection algebraically, set the equations equal to each other:

$$
2x+1=-x+7
$$

Add $x$ to both sides:

$$
3x+1=7
$$

Subtract 1:

$$
3x=6
$$

Divide by 3:

$$
x=2
$$

Substitute $x=2$ into:

$$
y=2x+1
$$

$$
y=2(2)+1
$$

$$
y=5
$$

Therefore, the solution is:

$$
\boxed{(2,5)}
$$

---

# 4. Solving Systems by Substitution

Consider:

$$
\begin{cases}
y=2x+1\\
x+y=7
\end{cases}
$$

Since the first equation already gives us:

$$
y=2x+1
$$

substitute this expression for $y$ into the second equation:

$$
x+(2x+1)=7
$$

Simplify:

$$
3x+1=7
$$

Subtract 1:

$$
3x=6
$$

Divide by 3:

$$
x=2
$$

Now substitute $x=2$ into:

$$
y=2x+1
$$

$$
y=2(2)+1
$$

$$
y=5
$$

The solution is:

$$
\boxed{(2,5)}
$$

---

# 5. Solving Systems by Elimination

Consider:

$$
\begin{cases}
2x+y=7\\
3x-y=8
\end{cases}
$$

Add the two equations:

$$
(2x+y)+(3x-y)=7+8
$$

The $y$ terms cancel:

$$
5x=15
$$

Divide by 5:

$$
x=3
$$

Substitute $x=3$ into:

$$
2x+y=7
$$

$$
2(3)+y=7
$$

$$
6+y=7
$$

Therefore:

$$
y=1
$$

The solution is:

$$
\boxed{(3,1)}
$$

---

# 6. Elimination When Coefficients Do Not Match

Consider:

$$
\begin{cases}
2x+3y=12\\
x+y=5
\end{cases}
$$

We want to eliminate one variable.

Multiply the second equation by $-2$:

$$
-2(x+y)=-2(5)
$$

This gives:

$$
-2x-2y=-10
$$

Now the system is:

$$
\begin{cases}
2x+3y=12\\
-2x-2y=-10
\end{cases}
$$

Add the equations:

$$
(2x+3y)+(-2x-2y)=12+(-10)
$$

The $x$ terms cancel:

$$
y=2
$$

Substitute $y=2$ into:

$$
x+y=5
$$

$$
x+2=5
$$

Therefore:

$$
x=3
$$

The solution is:

$$
\boxed{(3,2)}
$$

---

# 7. Three Types of Solutions

A system of equations can have:

## One Solution

The lines intersect at exactly one point.

$$
\boxed{\text{One solution}}
$$

Example:

$$
\begin{cases}
y=2x+1\\
y=-x+7
\end{cases}
$$

The lines intersect at one point.

---

## No Solution

The lines are parallel.

Parallel lines have:

* The same slope.
* Different $y$-intercepts.

Example:

$$
\begin{cases}
y=2x+3\\
y=2x-5
\end{cases}
$$

Both lines have slope:

$$
m=2
$$

but different $y$-intercepts.

Therefore:

$$
\boxed{\text{No solution}}
$$

---

## Infinitely Many Solutions

The equations represent the same line.

Consider:

$$
\begin{cases}
y=2x+3\\
2y=4x+6
\end{cases}
$$

Divide the second equation by 2:

$$
y=2x+3
$$

Both equations are identical.

Therefore:

$$
\boxed{\text{Infinitely many solutions}}
$$

---

# 8. Systems of Equations and Graphs

The solution to a system is the intersection of the graphs.

### One Solution

The lines intersect once.

$$
\boxed{\text{One intersection point}}
$$

### No Solution

The lines are parallel.

$$
\boxed{\text{No intersection}}
$$

### Infinitely Many Solutions

The lines overlap completely.

$$
\boxed{\text{The same line}}
$$

---

# 9. Systems of Equations in Word Problems

A movie theater sells adult and child tickets.

* An adult ticket costs $10.
* A child ticket costs $6.
* A total of 20 tickets are sold.
* The total revenue is $164.

Let:

$$
a=\text{number of adult tickets}
$$

$$
c=\text{number of child tickets}
$$

---

## Step 1: Write the First Equation

The total number of tickets is 20:

$$
\boxed{a+c=20}
$$

---

## Step 2: Write the Second Equation

The total revenue is $164:

$$
\boxed{10a+6c=164}
$$

The system is:

$$
\begin{cases}
a+c=20\\
10a+6c=164
\end{cases}
$$

---

## Step 3: Solve

From the first equation:

$$
c=20-a
$$

Substitute into the second equation:

$$
10a+6(20-a)=164
$$

Distribute:

$$
10a+120-6a=164
$$

Combine like terms:

$$
4a+120=164
$$

Subtract 120:

$$
4a=44
$$

Divide by 4:

$$
a=11
$$

Now find $c$:

$$
c=20-11
$$

$$
c=9
$$

Therefore:

$$
\boxed{11\text{ adult tickets and }9\text{ child tickets}}
$$

---

# 10. How to Choose a Method

## Use Graphing When:

* You need to see the solution visually.
* The equations are already in slope-intercept form.
* The intersection is easy to identify.

---

## Use Substitution When:

One variable is already isolated.

Example:

$$
y=3x+2
$$

Substitution is usually convenient because you can replace $y$ directly.

---

## Use Elimination When:

The coefficients of one variable are opposites or can easily be made opposites.

Example:

$$
2x+y=8
$$

$$
3x-y=7
$$

The $y$ terms cancel when the equations are added.

---

# 11. Checking a Solution

Suppose the solution is:

$$
(3,1)
$$

and the system is:

$$
\begin{cases}
2x+y=7\\
3x-y=8
\end{cases}
$$

Check the first equation:

$$
2(3)+1=7
$$

$$
6+1=7
$$

Correct.

Check the second equation:

$$
3(3)-1=8
$$

$$
9-1=8
$$

Correct.

Therefore:

$$
\boxed{(3,1)}
$$

is the correct solution.

---

# 12. Common Mistakes

## Mistake 1: Solving Only One Equation

A solution must satisfy:

$$
\boxed{\text{Both equations}}
$$

---

## Mistake 2: Sign Errors

Be careful when adding or subtracting negative terms.

For example:

$$
y+(-y)=0
$$

but:

$$
y+y=2y
$$

---

## Mistake 3: Forgetting to Substitute Back

After finding one variable, substitute it into one of the original equations to find the other variable.

---

## Mistake 4: Not Checking the Answer

Always substitute the ordered pair into both original equations.

---

# 13. A Reliable Strategy

When solving a system:

1. Write both equations clearly.
2. Choose a method:

   * Graphing
   * Substitution
   * Elimination
3. Solve for one variable.
4. Substitute to find the other variable.
5. Write the solution as an ordered pair.
6. Check the solution in both original equations.

---

# GED Test Tip

The GED may ask you to:

* Solve a system by substitution.
* Solve a system by elimination.
* Find the intersection of two lines.
* Interpret a graph.
* Determine whether a system has one, zero, or infinitely many solutions.
* Translate a word problem into a system of equations.
* Compare two systems or two linear relationships.

Remember:

$$
\boxed{\text{The solution to a system is the point that makes every equation true.}}
$$

---

# Summary

A system of equations contains two or more equations that must be solved together.

The three main methods are:

1. **Graphing**
2. **Substitution**
3. **Elimination**

The solution is usually written as an ordered pair:

$$
\boxed{(x,y)}
$$

The three possible outcomes are:

$$
\boxed{\text{One solution}}
$$

$$
\boxed{\text{No solution}}
$$

$$
\boxed{\text{Infinitely many solutions}}
$$

The key idea is:

$$
\boxed{\text{A system's solution satisfies all equations in the system.}}
$$
