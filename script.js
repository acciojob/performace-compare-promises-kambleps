// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
const fetchData = (url) => {
	return fetch(url)
	.then(response => response.json());
	.catch(error => console.log(error));
}

const promiseall = () => {
	const startTime = performance.now();
    Promise.all(apiUrls.map(fetchData))
	.then(data => {
		const endTime = performance.now()
		const timeTaken =(endTime - startTime).toFixed(2)
		document.getElementById('output-all').innerHTML = timeTaken;
	});
}

const promiseany = () => {
	lconststartTime = performance.now();
	Promise.any(apiUrls.map(fetchData))
	.then(data => {
		const endTime = performance.now();
		const timeTaken = (endTime - startTime).toFixed(2)
		document.getElementById('output-any').innerHTML = timeTaken;
	});
}

promiseall();
promiseany();
