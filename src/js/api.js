fetch(`https://places.cit.api.here.com/places/v1/discover/explore?app_id=wmLh9WIylelp0l6KdZF9&app_code=vXvdui0ls0FvJ0DrA7PY5g&at=-33.43727,-70.65056&pretty
`)
.then(response => response.json())
.then(explorer => {
  console.log(explorer);
})
