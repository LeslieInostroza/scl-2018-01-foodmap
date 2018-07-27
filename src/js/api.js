const containerTitle = document.getElementById('title');
const containerDireccion = document.getElementById('direccion');
const containerHorario = document.getElementById('horario');

inputGroupSelect02.addEventListener('change', () => {
  const ubication = `https://places.cit.api.here.com/places/v1/discover/search?app_id=wmLh9WIylelp0l6KdZF9&app_code=vXvdui0ls0FvJ0DrA7PY5g&at=${HEREHQcoordinates.lat},${HEREHQcoordinates.lng}&q=${inputGroupSelect02.value}&pretty`
  fetch(ubication)
  .then(response => response.json())
  .then(explorer => {
    console.log(explorer);
    renderInfo(explorer);
  });
});

const renderInfo = (explorer) => {
  containerTitle.innerHTML += `${JSON.stringify(explorer.results.items[0].title)}
  ${JSON.stringify(explorer.results.items[0].vicinity)}`;
}