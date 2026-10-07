<!D
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f4f7fb;
            color: #1f2937;
        }

        header {
            background: #111827;
            color: white;
            padding: 40px 20px;
            text-align: center;
        }

        header h1 {
            font-size: 35px;
            margin-bottom: 10px;
        }

        header p {
            color: #d1d5db;
        }

        .container {
            width: 90%;
            max-width: 1100px;
            margin: 40px auto;
        }

        .intro {
            background: white;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 30px;
            box-shadow: 0 4px 12px #ddd;
        }

        .intro h2 {
            margin-bottom: 10px;
        }

        .questions {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .card {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 12px #ddd;
            transition: 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .number {
            display: inline-block;
            background: #2563eb;
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            margin-bottom: 15px;
        }

        .card h3 {
            margin-bottom: 12px;
            color: #1d4ed8;
        }

        .card p {
            color: #4b5563;
            margin-bottom: 15px;
        }

        textarea {
            width: 100%;
            height: 180px;
            padding: 15px;
            border: 2px solid #d1d5db;
            border-radius: 8px;
            resize: vertical;
            font-family: Consolas, monospace;
            font-size: 14px;
        }

        textarea:focus {
            outline: none;
            border-color: #2563eb;
        }

        button {
            margin-top: 10px;
            padding: 10px 18px;
            border: none;
            border-radius: 6px;
            background: #2563eb;
            color: white;
            cursor: pointer;
            font-weight: bold;
        }

        button:hover {
            background: #1d4ed8;
        }

        footer {
            background: #111827;
            color: white;
            text-align: center;
            padding: 25px;
            margin-top: 50px;
        }

        @media (max-width: 700px) {
            .questions {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>

<body>

<header>
    <h1>💻 JavaScript Logical Coding Practice</h1>
    <p>10 Important Interview Questions</p>
</header>


<div class="container">

    <div class="intro">
        <h2>🧠 Practice Yourself</h2>

        <p>
            Read each question and write your own JavaScript code.
            Don't look at the answer. Try to solve it yourself!
        </p>
    </div>


    <div class="questions">


        <!-- Question 1 -->

        <div class="card">

            <span class="number">Question 01</span>

            <h3>Reverse a String</h3>

            <p>
                Write a JavaScript program to reverse a given string.
            </p>

            <textarea placeholder="Write your code here..."></textarea>

            <button onclick="alert('Keep practicing!')">
                Check
            </button>

        </div>


        <!-- Question 2 -->

        <div class="card">

            <span class="number">Question 02</span>

            <h3>Check Palindrome</h3>

            <p>
                Write a JavaScript program to check whether a string
                is a palindrome or not.
            </p>

            <textarea placeholder="Write your code here..."></textarea>

            <button onclick="alert('Keep practicing!')">
                Check
            </button>

        </div>


        <!-- Question 3 -->

        <div class="card">

            <span class="number">Question 03</span>

            <h3>Find the Largest Number</h3>

            <p>
                Given an array of numbers, find the largest number
                using JavaScript.
            </p>

            <textarea placeholder="Write your code here..."></textarea>

            <button onclick="alert('Keep practicing!')">
                Check
            </button>

        </div>


        <!-- Question 4 -->

        <div class="card">

            <span class="number">Question 04</span>

            <h3>Count Vowels in a String</h3>

            <p>
                Write a JavaScript program to count the number of
                vowels in a given string.
            </p>

            <textarea placeholder="Write your code here..."></textarea>

            <button onclick="alert('Keep practicing!')">
                Check
            </button>

        </div>


        <!-- Question 5 -->

        <div class="card">

            <span class="number">Question 05</span>

            <h3>Find the Sum of Array Elements</h3>

            <p>
                Given an array of numbers, calculate the sum of
                all array elements.
            </p>

            <textarea placeholder="Write your code here..."></textarea>

            <button onclick="alert('Keep practicing!')">
                Check
            </button>

        </div>


        <!-- Question 6 -->

        <div class="card">

            <span class="number">Question 06</span>

            <h3>Find Even Numbers in an Array</h3>

            <p>
                Given an array of numbers, display only the even numbers.
            </p>

            <textarea placeholder="Write your code here..."></textarea>

            <button onclick="alert('Keep practicing!')">
                Check
            </button>

        </div>


        <!-- Question 7 -->

        <div class="card">

            <span class="number">Question 07</span>

            <h3>Remove Duplicate Elements</h3>

            <p>
                Given an array, remove duplicate elements and display
                only unique values.
            </p>

            <textarea placeholder="Write your code here..."></textarea>

            <button onclick="alert('Keep practicing!')">
                Check
            </button>

        </div>


        <!-- Question 8 -->

        <div class="card">

            <span class="number">Question 08</span>

            <h3>Find the Second Largest Number</h3>

            <p>
                Given an array of numbers, find the second largest number.
            </p>

            <textarea placeholder="Write your code here..."></textarea>

            <button onclick="alert('Keep practicing!')">
                Check
            </button>

        </div>


        <!-- Question 9 -->

        <div class="card">

            <span class="number">Question 09</span>

            <h3>Count Character Frequency</h3>

            <p>
                Write a JavaScript program to count how many times
                each character appears in a string.
            </p>

            <textarea placeholder="Write your code here..."></textarea>

            <button onclick="alert('Keep practicing!')">
                Check
            </button>

        </div>


        <!-- Question 10 -->

        <div class="card">

            <span class="number">Question 10</span>

            <h3>Find the Missing Number</h3>

            <p>
                Given an array containing numbers from 1 to N with
                one number missing, find the missing number.
            </p>

            <textarea placeholder="Write your code here..."></textarea>

            <button onclick="alert('Keep practicing!')">
                Check
            </button>

        </div>

    </div>

</div>


<footer>

    <p>🚀 JavaScript Interview Preparation</p>

    <p>Practice • Code • Improve • Get Ready for Interview