async function fetchData() {
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    const {categories} = await res.json();
    console.log(categories);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
