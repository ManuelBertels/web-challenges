console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const data = await fetch(url);

  const dataobj = await data.json();

  console.log(dataobj);

  for (let i = 0; i <= dataobj.results.length; i++)
    console.log(dataobj.results[i]);
}

fetchData();
