## Opdracht: Blockchain

### Theorie Overview
Blockchain: 
(https://www.youtube.com/watch?v=SSo_EIwHSd4)
- hash
- nonce
- block
- transactions

Functional Programming: 
(https://www.youtube.com/watch?v=8z_bUIl_uPo, https://www.youtube.com/watch?v=fsVL_xrYO0w)
- higher order functions, functions as first class citizens
- immutable data
- function composition
- recursion
- pure functions

Unit tests:
(https://www.youtube.com/watch?v=u6QfIXgjwGQ, https://www.youtube.com/watch?v=Jv2uxzhPFl4)



Technology: Javascript, Jest

### Todo
- [x] theorie uitzoeken (incl videos)
  - [x] lesbrief lezen
  - [x] videos kijken
  - [x] samenvatting
  - [x] andere documenten lezen en samenvatten (hash algoritme)
- [o] mod10 hashing algoritme maken
  - [x] documentatie stappen (unit tests)
  - [x] project code opzetten
  - [x] unit tests maken
  - [o] code maken
  - [o] tests pass
- [ ] coin minen
  - [ ] unit tests maken
  - [ ] code maken
  - [ ] tests pass
  - [ ] uitvoeren (block aan de chain adden)


### Learning material
https://dev.to/damcosset/trying-to-understand-blockchain-by-making-one-ce4
https://app.pluralsight.com/library/courses/javascript-functional-programming-fundamentals/
https://medium.com/dailyjs/functional-js-with-es6-recursive-patterns-b7d0813ef9e3
http://nakamotoinstitute.org/bitcoin/
https://codeburst.io/functional-programming-in-javascript-e57e7e28c0e5


### Theorie

#### Blockchain
Blockchain is a decentralized and tamper-resistant digital ledger technology. It consists of a chain of blocks, each containing a list of transactions and a reference to the previous block through cryptographic hashes. The data structure ensures transparency, security, and immutability. Participants in the network validate transactions through consensus mechanisms, such as proof-of-work or proof-of-stake. Once a block is added to the chain, altering any previous block becomes computationally infeasible, enhancing the integrity of the entire ledger. Blockchain finds applications in cryptocurrencies, smart contracts, and various industries seeking transparent and secure record-keeping.


##### Hash
In blockchain, a hash is a cryptographic function that takes input data and produces a fixed-size string of characters, which is a unique representation of the input. Hashes are used to ensure data integrity and security within blocks. Each block in a blockchain contains a hash of the previous block, creating a chain of blocks linked together by these hash values. The hash function should be deterministic, meaning the same input will always produce the same output, and it should be computationally infeasible to reverse the process or find two different inputs that produce the same hash.

```json
{
  "Hash": {
    "inputData": "exampleInputData",
    "hashOutput": "5a2b9c8d4e1f3g6h7i0j",
    "algorithm": "sha256"
  }
}
```

##### Nonce
A nonce, short for "number only used once," is a unique number assigned to a block in the blockchain. Miners in a blockchain network modify the nonce value when attempting to solve a cryptographic puzzle, adjusting it until they find a hash that meets certain criteria, typically having a specific number of leading zeros. This process, known as proof-of-work, helps secure the network by making it computationally expensive and time-consuming for malicious actors to alter the content of a block.

```json
"Nonce": {
    "blockNumber": 123456,
    "currentNonce": 789012,
    "targetHashCriteria": "000000abcd1234ef56789",
    "proofOfWorkAttempts": 123456789
  }
```

##### Block
In a blockchain, a block is a unit of data that contains a list of transactions, a timestamp, and a reference to the previous block's hash. Blocks are linked together in a chronological chain, forming the blockchain. The structure of a block ensures data integrity and security through cryptographic hashing and the inclusion of the previous block's hash, creating a tamper-resistant and transparent ledger.

```json
"Block": {
    "blockNumber": 123456,
    "timestamp": "2024-02-05T12:34:56Z",
    "transactions": [
      {
        "sender": "0xABCDEF1234567890",
        "receiver": "0x1234567890ABCDEF",
        "amount": 10.5,
        "signature": "abc123xyz456"
      },
      // Additional transactions...
    ],
    "previousBlockHash": "5a2b9c8d4e1f3g6h7i0j",
    "blockHash": "000000abcd1234ef56789"
  }
```

##### Transactions
Transactions in a blockchain represent the transfer of assets or information from one participant to another within the network. These transactions are grouped together in blocks and are recorded in a distributed and decentralized ledger. Each transaction typically includes information such as the sender's and receiver's addresses, the amount of the transfer, and a digital signature to verify authenticity. The inclusion of transactions in blocks is crucial for maintaining a consistent and secure state across the blockchain network.

```json
{
  "Transactions": [
    {
      "sender": "0xABCDEF1234567890",
      "receiver": "0x1234567890ABCDEF",
      "amount": 10.5,
      "signature": "abc123xyz456"
    },
    {
      "sender": "0x9876543210FEDCBA",
      "receiver": "0xFEDCBA0987654321",
      "amount": 5.0,
      "signature": "xyz456abc123"
    }
    // Additional transactions...
  ]
}
```

#### Functional Programming
Functional Programming is a programming paradigm that emphasizes the use of functions as first-class entities, allowing them to be assigned to variables, passed as arguments, and returned as results. It promotes immutability, discouraging the modification of data after creation, and encourages the creation of new data structures. Function composition enables the construction of complex functionalities through the combination of simpler functions, while recursion is favored over iterative loops for problem-solving. Pure functions, with no side effects and consistent output for the same input, enhance code predictability and testability. Overall, Functional Programming provides a declarative and concise approach, focusing on what needs to be achieved rather than the specific steps to achieve it.


##### Higher-Order Functions, Functions as First-Class Citizens
In functional programming, functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned as values from functions. Higher-order functions are functions that either take one or more functions as arguments or return a function as a result. This paradigm allows for a more modular and flexible coding style, promoting the creation of reusable and composable code components.

```js
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const operate = (operation, a, b) => operation(a, b);

const result1 = operate(add, 5, 3); // Result: 8
const result2 = operate(multiply, 4, 2); // Result: 8
```

##### Immutable Data
Immutable data refers to data structures that, once created, cannot be modified or changed. In functional programming, immutability is a fundamental concept, emphasizing the creation of new data structures instead of modifying existing ones. This approach enhances predictability, concurrency, and reasoning about program behavior, as it eliminates the risk of unintended side effects.

```js
const originalArray = [1, 2, 3, 4, 5];
const newArray = [...originalArray, 6]; // Creating a new array with immutability

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [1, 2, 3, 4, 5, 6]
```

##### Function Composition
Function composition is a technique in functional programming where multiple functions are combined to create a new function. This involves taking the output of one function and using it as the input for another, creating a chain of functions. Function composition promotes code reuse, readability, and the construction of complex functionality from simpler, well-defined components.

```js
const square = (x) => x * x;
const double = (x) => x * 2;

const squareAndDouble = (x) => double(square(x));

const result = squareAndDouble(3); // Result: 18
```

##### Recursion
Recursion is a programming technique where a function calls itself to solve a smaller instance of a problem. In functional programming, recursion is favored over iterative loops, and it aligns with the concept of immutability. Recursive functions break down a problem into smaller, more manageable subproblems, providing an elegant and concise solution to certain types of programming challenges.

```js
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const resultFactorial = factorial(5); // Result: 120
```

##### Pure Functions
Pure functions are functions in functional programming that have two key characteristics: they always produce the same output for the same input, and they have no side effects. A pure function's behavior is solely determined by its input parameters, making it predictable and easy to reason about. The absence of side effects ensures that a pure function does not modify external state or variables, contributing to code clarity, testability, and maintainability.

```js
const addPure = (a, b) => a + b; // Pure function with no side effects

let total = 0;

const impureAdd = (a) => {
  total += a; // Impure function with side effect
};

console.log(addPure(2, 3)); // Result: 5
console.log(total); // Result: 0 (no side effect)

impureAdd(5);
console.log(total); // Result: 5 (side effect)
```


#### Unit Tests
Unit tests are a fundamental aspect of software development that involve testing individual units or components of a program in isolation. These tests focus on verifying that each unit of code, typically a function or method, behaves as intended.

##### Test Fixture 
A test fixture is the preparation and setup necessary to execute a unit test. It includes initializing objects, setting up dependencies, and configuring the environment to create a controlled context for the test. A well-designed test fixture ensures that the unit test is isolated and repeatable, providing consistent results.

```js
describe('Test Fixture', () => {
  let testData;

  beforeEach(() => {
    // Set up the test fixture, initialize objects, etc.
    testData = [1, 2, 3, 4, 5];
  });

  test('Example test with a fixture', () => {
    expect(testData.length).toBe(5);
  });
});
```

##### Test Case
A test case is a specific scenario or condition that a unit test evaluates to determine whether the code being tested functions correctly. Test cases encompass a range of inputs, including boundary cases and edge cases, to ensure comprehensive coverage. Each test case typically includes the expected outcome or behavior, allowing developers to identify deviations from the expected behavior during testing.

```js
describe('Test Case', () => {
  test('Addition function', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('Email validation', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('invalid-email')).toBe(false);
  });
});
```


##### Assertion
An assertion is a statement within a unit test that checks whether a specific condition holds true. Assertions are used to validate the actual output or behavior of the code against the expected outcome defined in the test case. When an assertion fails, it indicates a discrepancy between the expected and actual results, helping developers identify and address issues in the code.

```js
describe('Assertion', () => {
  test('Multiplication function', () => {
    const result = multiply(4, 5);
    expect(result).toBe(20);
  });

  test('Total calculation', () => {
    const total = calculateTotal(10, 5);
    expect(total).toBe(15);
  });
});
```


##### Mocking 
Mocking is a technique used in unit testing to simulate the behavior of external dependencies or collaborators. By creating mock objects or functions, developers can isolate the unit under test from its dependencies, ensuring that the test focuses solely on the unit's logic. Mocking is particularly useful for testing units in isolation and for scenarios where interacting with actual external components is impractical or undesirable.

```js
describe('Mocking', () => {
  test('Fetch data from database', async () => {
    // Mocking fetchData function
    const mockData = [{ id: 1, name: 'Item 1' }];
    fetchData.mockResolvedValue(mockData);

    const database = new Database();
    const result = await database.getData();

    expect(result).toEqual(mockData);
  });
});
```


##### Test Runner
A test runner is a tool or framework responsible for executing a suite of unit tests. It automates the process of running multiple tests, collecting and reporting results, and providing feedback to developers. Test runners enhance the efficiency of the testing process by streamlining the execution and analysis of unit tests, facilitating continuous integration and delivery practices in software development.


```js
describe('Test Runner', () => {
  // Jest handles the test runner functionality automatically
  // No specific code needed for this example
});
```

### Code
#### Init project

```bash
npm init vite
npm install
npm install jest
npm install @types/jest --save-dev
```

#### Filestructure
```
index.html
main.js
style.css
test
    stack.test.js
package.json
```

#### Package.json
Add to scripts
```json
"test": "jest --watchAll --Verbose"     
```

#### jsconfig.json
```json
{
    "typeAcquisition": {
        "include": [
            "jest"
        ]
    }
}
```



#### MOD10 hashing algorithm

##### Stappen

1. Tekst omzetten naar ascii waardes (getallen blijven getallen)
2. Alle getallen worden gesplitst en los in een array
3. Array word opgesplitst in blokken van 10 getallen
4. Als de eerste reeks korter dan 10 lang is, word hij aangevuld met (0, 1, 2, 3 etc) tot er 10 getallen zijn. 
   1. Ga daarna naar stap 7
5. het eerste blok word bij het tweede blok opgeteld (Herhaal stap totdat er 10 getallen overblijven)
   1. Als het tweede blok korter dan tien lang is vul aan zoals bij stap 4
   2. Elk getal uit beide blokken worden bijelkaar opgeteld
   3. Van de uitkomst word modulus 10 genomen: (7 + 8) % 10 = 5
   4. Hieruit heb je een reeks van 10 getallen die de eerste array word

6. Voer over deze reeks van 10 getallen het SHA256 algoritme uit
  



##### Uitkomst voorwaarde (unit test)

Input voorbeeld: `"text"`

###### Stap 1
input: `"test"`
output: `[116,101,120,116]`

input: `9`
output: `9`

###### Stap 2
Input: `[116,101,120,116]`
output: `[1,1,6,1,0,1,1,2,0,1,1,6]`

Voorwaardes: Enkele getallen

###### Stap 3
Input: `[1,1,6,1,0,1,1,2,0,1,1,6]`
Output: `[[1,1,6,1,0,1,1,2,0,1],[1,6]]`

Voorwaardes: Enkele getallen in de arrays

###### Stap 4
Input: `[1]`
Output: `[1,0,1,2,3,4,5,6,7,8]`

Voorwaardes: Enkele getallen in de arrays, 10 getallen

###### Stap 5 iteratie 1
Input: `[[1,1,6,1,0,1,1,2,0,1],[1,6]]`
Output: `[[2,7,6,2,2,4,5,7,6,8]]`
Voorwaardes: Enkele getallen in de arrays, 10 getallen per subarray

**Stap 5.1**
Input: `[[1,1,6,1,0,1,1,2,0,1],[1,6]]`
Output: `[[1,1,6,1,0,1,1,2,0,1],[1,6,0,1,2,3,4,5,6,7]]`

Voorwaardes: Enkele getallen in de arrays, 10 getallen per subarray

**Stap 5.2**
Input: `[[1,1,6,1,0,1,1,2,0,1],[1,6,0,1,2,3,4,5,6,7]]`
Output: `[[2,7,6,2,2,4,5,7,6,8]]`

Voorwaardes: 10 getallen per subarray

**Stap 5.3**
Input: `[[2,17,26,32,42,54,665,777,8886,9998]]`
Output: `[[2,7,6,2,2,4,5,7,6,8]]`

Voorwaardes: Enkele getallen in de arrays, 10 getallen per subarray

###### Stap 5 eind
Input: `[[1,1,6,1,0,1,1,2,0,1],[1,6]]`
Output: `[2,7,6,2,2,4,5,7,6,8]`

Voorwaardes: 1 Array, Enkele getallen in de arrays, 10 getallen

###### Stap 6 
Input: `[[2,7,6,2,2,4,5,7,6,8]]`
Output: `d0b3cb0cc9100ef243a1023b2a129d15c28489e387d3f8b687a7299afb4b5079`
Voorwaardes: String