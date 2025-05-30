+++
date = '2025-05-29T04:30:16+05:30'
draft = false
title = 'Matrices and Determinant'
description = ''
type = 'topic'
image = ''
sort = '1'
math = 'true'
+++


- **<u>Definition of Matrices</u>:**
{ class = mainlist, id = definition_of_matrices}

Let's start linear algebra by first discussing *matrices*. Matices, in the most basic form , can be said "*as a \(2\) dimensional array of numbers*". Those numbers in general belong to the set of complex numbers, \(\mathbb{C}\). But, in most cases we would be using the real numbers only. They are generally denoted by uppercase letters and the numbers (elements) by lowecase.

Having said that, let's see some examples of matrices:

<div class="mathbox">
    $$
    \begin{bmatrix}
        1 & 2 & 3 \\
        7 & 8 & 5
    \end{bmatrix}_{2\times 3}
    ,
    \begin{bmatrix}
        1 & 2 \\
        7 & 8 \\
        87 & 98
    \end{bmatrix}_{3\times 2}
    ,
    \begin{bmatrix}
        i \\ 2-3i \\ 5 \\
    \end{bmatrix}_{3\times 1}
    ,
    \begin{bmatrix}
        1 & 0 & 0 & 0 \\
        67 & \pi & 2 & 4\\
        19 & 8 & \pi & 2\\
        7 & 6 & 5 & e\\
    \end{bmatrix}_{4\times 4}
    ,
    \begin{bmatrix}
        1 & 0 \\
        0 & 1 
    \end{bmatrix}_{2\times 2}
    $$
</div>

so on and so forth. Here, \(i\) is the imaginary unit \((i = \sqrt{-1})\), \(e\) is Euler's number. In this same spirit, we can have matrix as big as we want.







- **<u>Order of a Matrix</u>:**
{class = c1ul, id = matrix_order}

Using the above given example, we define the **rows** of a matrix to be its *horizontal arrays of numbers* and **columns** as the *vertical arrays of numbers*. In this way, we get two special numbers for a matrix, *"number of rows"* and *"number of columns"*.

We define the **order** of a matrix to be \(m\times n\) (read as \(m\) by \(n\)), if it has \(m\) rows and \(n\) columns. The respective orders are represented in bottom right of each of the matrix above. Order plays the central role in the arithmetic of matrices as we will see shortly. Let's take an example matrix: 

$$
    A = \begin{bmatrix}
        a & b & c & d\\
        e & f & g & h
    \end{bmatrix}
$$

Clearly, its order is \(2\times 4\), as, it has two *rows* (horizontal arrays): 

<div class="mathbox">
$$
    \begin{bmatrix}
        a & b & c & d
    \end{bmatrix}, \;
    \begin{bmatrix}
        e & f & g & h
    \end{bmatrix}
$$
</div>

and four *columns* (vertical arrays):

<div class="mathbox">
$$
    \begin{bmatrix}
        a\\ e \\
    \end{bmatrix}, \;
    \begin{bmatrix}
        b\\ f \\
    \end{bmatrix}, \;
    \begin{bmatrix}
        c\\ g \\
    \end{bmatrix}, \;
    \begin{bmatrix}
        d\\ h \\
    \end{bmatrix}.
$$
</div>





- **<u>Notation</u>:**
{ class = c1ul, id = notation}

As siad above, matrices are, in general, denoted by capilaized letters, such as \(A, B, C \dots,\) and its elements by the corresponding lowercase letters. The elements which lies at the intersection of the first row and first column would be denoted by \(a_{11}\). Similarly, \(a_{32}\) lies at the intersection of \(3\text{rd}\) row and \(2\text{nd}\) column. This is shown below:

<div class="mathbox">
$$
    A =\begin{bmatrix}
        a_{11} & \rule[.5ex]{10ex}{0.5pt} \\
        \rule[-1ex]{0.5pt}{10ex} \\
    \end{bmatrix}
    \quad
    A = \begin{bmatrix}
        \rule[.5ex]{2ex}{0.5pt} & \rule[-1ex]{0.5pt}{2ex} & \rule[.5ex]{2ex}{0.5pt} & \rule[.5ex]{2ex}{0.5pt}  \\
        \rule[.5ex]{2ex}{0.5pt} & \rule[-1ex]{0.5pt}{2ex} & \rule[.5ex]{2ex}{0.5pt} & \rule[.5ex]{2ex}{0.5pt}  \\
        \rule[.5ex]{2ex}{0.5pt} & a_{32} & \rule[.5ex]{2ex}{0.5pt} & \rule[.5ex]{2ex}{0.5pt}  \\
        \rule[.5ex]{2ex}{0.5pt} & \rule[-1ex]{0.5pt}{2ex} & \rule[.5ex]{2ex}{0.5pt} & \rule[.5ex]{2ex}{0.5pt}  \\
    \end{bmatrix}_{4\times 4}
$$
</div>

In general, for an element lying at the intersection of \(r\)-th row and \(c\)-th column would be \(a_{rc}\). Then, a \(m\times n\) matrix, \(A\) would be written as:

<div class="mathbox">
$$
    A = \begin{bmatrix}
        a_{11} & a_{12} & a_{13} & \dots & a_{1n} \\
        a_{11} & a_{12} & a_{13} & \dots & a_{2n} \\
        a_{11} & a_{12} & a_{13} & \dots & a_{3n} \\
        \vdots & \vdots & \vdots & \ddots & \vdots \\
        a_{m1} & a_{m2} & a_{m3} & \dots & a_{mn} \\
    \end{bmatrix}_{m\times n}
$$
</div>

But, as can be seen this can become very large for higher order matrices. So, we intoduce another compact notation. For the above matrix \(A\), we can write:

$$
    A = 
        \begin{bmatrix}
        a_{ij}
        \end{bmatrix}_{m\times n}
$$
Here, \(i\) is the row variable, and \(j\) is the column variable. \(i\) goes from \(1\) to \(m\) while \(j\) goes from \(1\) to \(n\).

<br/>





- **<u>Matrix Arithmetic</u>:**
{ class = mainlist, id = matrix_arithmetic}

As with numbers, we can perform several arithmetic operations on matrix with slighly different rules. It is worth mentioning that **not** all operations which can be performed on numbers can be performed (or rather, *not defined*) on matrices and vice versa. Follows the discussion of the basic operations on matrices and their rules.




- **<u>Addition of Matrices</u>:**
{ class = c1ul, id = matrix_addition}

Consider two matrices \(A\) and \(B\). For addition of these to be possible, their ***order must be same***, say \(m\times n\). Then, the resulting matrix is of the same order and having elements as sum of the corresponding elements of original matrices. To say, the element \(r_{ij}\) of the resultant matrix \(R\) is:

$$
    r_{ij} = a_{ij} + b_{ij}\;,
$$

where, \(a_{ij}\) and \(b_{ij}\) are the elements of matrices \(a\) and \(B\) respectively. Consider the following example: 


<div class="mathbox">
$$
    A = \begin{bmatrix}
        2 & 5 \\
        8 & 10 \\
        5 & 6 \\
    \end{bmatrix} \qquad
    B = \begin{bmatrix}
        i & 3 \\
        1 & 0 \\
        4 & 16 \\
    \end{bmatrix}
$$
</div>


Then, 

<div class="mathbox">
$$  
    \begin{align}
        R &= A + B
        = \begin{bmatrix}
            2 & 5 \\
            8 & 10 \\
            5 & 6 \\
        \end{bmatrix}
        + \begin{bmatrix}
            i & 3 \\
            1 & 0 \\
            4 & 16 \\
        \end{bmatrix} \\[4px]
        \implies R & = 
        \begin{bmatrix}
            2+i & 8 \\
            9 & 10 \\
            9 & 22 \\
        \end{bmatrix}
    \end{align}.
$$
</div>

This is as simple as that. Hence, we can write:

<div class="mathbox">
$$ 
    R = A + B  = 
    \begin{bmatrix}
        a_{ij}
    \end{bmatrix}_{m\times n} + 
    \begin{bmatrix}
        b_{ij}
    \end{bmatrix}_{m\times n}
    \implies
    \boxed{ R = \begin{bmatrix}
        a_{ij} + b_{ij}
    \end{bmatrix}_{m\times n}}
$$
</div>
