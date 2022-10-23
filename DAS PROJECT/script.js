
// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function printPairs(arr, n, sum)
{

    let count = 0;

    for (let i = 0; i < n; i++)

        for (let j = i + 1; j < n; j++)

            if (arr[i] + arr[j] == sum)

                 console.log("(" + arr[i] + ", "

                    + arr[j] + ")" + "<br>");
                }
                let arr = [ 1, 5, 7, -1, 5 ];
                let n = arr.length;
                let sum = 6;
                printPairs(arr, n, sum);

// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [...numbers].reverse();

console.log(reversedNumbers);

// Q3. Write a program to check if two strings are a rotation of each other?

function isRotation(a, b)
{
	var n = a.length;
	var m = b.length;
	if (n != m)
		return false;

	var lps = Array.from({length: n}, (_, i) => 0);

	var len = 0;
	var i = 1;
	lps[0] = 0;
	while (i < n) {
		if (a.charAt(i) == b.charAt(len)) {
			lps[i] = ++len;
			++i;
		}
		else {
			if (len == 0) {
				lps[i] = 0;
				++i;
			}
			else {
				len = lps[len - 1];
			}
		}
	}

	i = 0;

	for (k = lps[n - 1]; k < m; ++k) {
		if (b.charAt(k) != a.charAt(i++))
			return false;
	}
	return true;
}
var s1 = "ABACD";
var s2 = "CDABA";
console.log(isRotation(s1, s2) ? "1" : "0");


// Q4. Write a program to print the first non-repeated character from a string?
 
  
 const NO_OF_CHARS = 256
  
 function firstNonRepeating(str)
 {
     let arr = new Array(NO_OF_CHARS)
     for(let i=0;i<NO_OF_CHARS;i++){
         arr[i] = [0,0];
     }
     for (let i=0;i<str.length;i++) {
    arr[str.charCodeAt(i)][0]++;
    arr[str.charCodeAt(i)][1]= i;
     }
     let res = Number.MAX_VALUE;
    for (let i = 0; i < NO_OF_CHARS; i++)

    if (arr[i][0] == 1)
        res = Math.min(res, arr[i][1]);

return res;
}

let str = "geeksforgeeks";
let index = firstNonRepeating(str);
if (index == Number.MAX_VALUE)
console.log("Either all characters are repeating or string is empty");
else
console.log("First non-repeating character is ",str[index] );
 
// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, from_rod, to_rod, aux_rod)
{
		if (n == 0)
		{
			return;
		}
		towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
		console.log("Move disk " + n + " from rod " + from_rod +
		" to rod " + to_rod+"<br/>");
		towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
	}

	var N = 3;
	
	towerOfHanoi(N, 'A', 'C', 'B');


// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

	
	function isOperator(x)
	{

		switch (x) {
		case '+':
		case '-':
		case '/':
		case '*':
			return true;
		}
		return false;
	}

	function postToPre(post_exp)
	{
		let s = [];

		let length = post_exp.length;

		for (let i = 0; i < length; i++) {

			if (isOperator(post_exp[i])) {
				let op1 = s[s.length - 1];
				s.pop();
				let op2 = s[s.length - 1];
				s.pop();
				let temp = post_exp[i] + op2 + op1;
				s.push(temp);
			}
			else {
				s.push(post_exp[i] + "");
			}
		}
		let ans = "";
		while (s.length > 0)
			ans += s.pop();
		return ans;
	}
	let post_exp = "ABC/-AK/L-*";
	console.log("Prefix : " + postToPre(post_exp));
	
// Q7. Write a program to convert prefix expression to infix expression.

    function isOperator(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            case '%':
                return true;
        }
        return false;
    }
    function convert(str)
    {
        let stack = [];
        let l = str.length;
        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
            if (isOperator(c))
            {
                let op1 = stack[stack.length - 1];
                stack.pop()
                let op2 = stack[stack.length - 1];
                stack.pop()
                let temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }
            else
            {
                stack.push(c + "");
            }
        }
        return stack[stack.length - 1];
    } 
    let exp = "*-A/BC-/AKL";
  console.log("Infix : " + convert(exp));

// Q8. Write a program to check if all the brackets are closed in a given code snippet.

function brackets(expression) {
	let leftArr = [];
	let rightArr = [];
	for (let i = 0; i < expression.length; i++) {
	  if (
		expression[i] === "(" ||
		expression[i] === "[" ||
		expression[i] === "{"
	  ) {
		leftArr.push(expression[i]);
	  }
  
	  if (expression[i] === ")") {
		rightArr.push("(");
	  } else if (expression[i] === "}") {
		rightArr.push("{");
	  } else if (expression[i] === "]") {
		rightArr.push("[");
	  }
	}
  
	rightArr.reverse();
  
	if (leftArr.length < rightArr.length || leftArr.length > rightArr.length) {
	  return false;
	}
  
	for (let k = 0; k < leftArr.length; k++) {
	  if (leftArr[k] != rightArr[k]) {
		return false;
	  }
	}
  
	return true;
  }
  
  console.log(brackets("(3+{1-1)}"));
  console.log(brackets("{[(3+1)+2]+}"));
  console.log(brackets("[1+1]+(2*2)-{3/3}"));
  console.log(brackets("(({[(((1)-2)+3)-3]/3}-3)"));
  

// Q9. Write a program to reverse a stack.

let st = [];
function insert_at_bottom(x)
{
	if(st.length==0)
		st.push(x);
	else
	{
			let a = st.pop();
			insert_at_bottom(x);
			st.push(a);
	}
}
function reverse()
{
	if(st.length > 0)
		{
			let x = st.pop();
			reverse();
			insert_at_bottom(x);
		}
}

st.push('1');
st.push('2');
st.push('3');
st.push('4');

console.log("Original Stack<br>");

console.log(st.join(" ")+"<br>");

reverse();

console.log("Reversed Stack<br>");

console.log(st.join(" "));

 //Q10. Write a program to find the smallest number using a stack.

const arr1 = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
const min = Math.min(...arr1);
console.log(min);