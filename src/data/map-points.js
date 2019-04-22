const mapPointsObj = [{ // here is orange
  id: 1,
  size: 1,
  top: 8.9,
  left: 11.7,
  name: 'Montmorency'
}, {
  id: 2,
  size: 1,
  top: 8.9,
  left: 20.4,
  name: 'De La Concorde'
}, {
  id: 3,
  size: 1,
  top: 8.9,
  left: 29.3,
  name: 'Cartier'
}, {
  id: 4,
  size: 1,
  top: 15.3,
  left: 35.1,
  name: 'Henri-Bourassa'
}, {
  id: 5,
  size: 1,
  top: 18.5,
  left: 37.9,
  name: 'Sauve'
}, {
  id: 6,
  size: 1,
  top: 21.8,
  left: 40.8,
  name: 'Cremazie'
}, {
  id: 7,
  size: 1,
  top: 25.0,
  left: 43.8,
  name: 'Jarry'
}, {
  id: 8,
  size: 2,
  top: 27.85,
  left: 46.35,
  name: 'Jean-Talon'
}, {
  id: 9,
  size: 1,
  top: 31.5,
  left: 49.5,
  name: 'Beaubien'
}, {
  id: 10,
  size: 1,
  top: 34.5,
  left: 52.3,
  name: 'Rosemont'
}, {
  id: 11,
  size: 1,
  top: 37.4,
  left: 54.9,
  name: 'Laurier'
}, {
  id: 12,
  size: 1,
  top: 40.53,
  left: 57.57,
  name: 'Mont-Royal'
}, {
  id: 13,
  size: 1,
  top: 43.5,
  left: 60.25,
  name: 'Sherbrooke'
}, {
  id: 14,
  size: 2,
  top: 47.47,
  left: 63.75,
  name: 'Berri-Uqam'
}, {
  id: 15,
  size: 1,
  top: 54.4,
  left: 64.2,
  name: 'Champ-De-Mars'
}, {
  id: 16,
  size: 1,
  top: 57.6,
  left: 61.3,
  name: 'Place-D`armes'
}, {
  id: 17,
  size: 1,
  top: 60.8,
  left: 58.3,
  name: 'Square-Victoria-Oaci'
}, {
  id: 18,
  size: 1,
  top: 64.1,
  left: 55.5,
  name: 'Bonaventure'
}, {
  id: 19,
  size: 1,
  top: 67.4,
  left: 52.6,
  name: 'Lucien-l`allier'
}, {
  id: 20,
  size: 1,
  top: 70.7,
  left: 49.6,
  name: 'Georges-Vanier'
}, {
  id: 21,
  size: 2,
  top: 73.55,
  left: 46.27,
  name: 'Lioner-Groulx'
}, {
  id: 22,
  size: 1,
  top: 74.0,
  left: 40.8,
  name: 'Place-Saint-Henri'
}, {
  id: 23,
  size: 1,
  top: 70.7,
  left: 37.9,
  name: 'Vendume'
}, {
  id: 24,
  size: 1,
  top: 67.5,
  left: 35.0,
  name: 'Villa-Maria'
}, {
  id: 25,
  size: 2,
  top: 63.67,
  left: 31.75,
  name: 'Showdon'
}, {
  id: 26,
  size: 1,
  top: 61.0,
  left: 29.2,
  name: 'Cote-Sainte-Catherine'
}, {
  id: 27,
  size: 1,
  top: 57.6,
  left: 26.3,
  name: 'Plamodon'
}, {
  id: 28,
  size: 1,
  top: 54.4,
  left: 23.25,
  name: 'Namur'
}, {
  id: 29,
  size: 1,
  top: 51.1,
  left: 20.4,
  name: 'De La Savane'
}, {
  id: 30,
  size: 1,
  top: 48.0,
  left: 17.55,
  name: 'Du College'
}, {
  id: 31,
  size: 1,
  top: 44.65,
  left: 14.7,
  name: 'Core-Vertu'
}, { // here is blue
  id: 32,
  size: 1,
  top: 18.5,
  left: 55.5,
  name: 'Saint-Michel'
}, {
  id: 33,
  size: 1,
  top: 21.8,
  left: 52.5,
  name: 'D`Iberville'
}, {
  id: 34,
  size: 1,
  top: 25.0,
  left: 49.6,
  name: 'Fabre'
}, {
  id: 35,
  size: 1,
  top: 31.5,
  left: 43.8,
  name: 'De Castelnau'
}, {
  id: 36,
  size: 1,
  top: 35.0,
  left: 40.9,
  name: 'Parc'
}, {
  id: 37,
  size: 1,
  top: 41.4,
  left: 40.9,
  name: 'Acadie'
}, {
  id: 38,
  size: 1,
  top: 47.9,
  left: 40.9,
  name: 'Outremont'
}, {
  id: 39,
  size: 1,
  top: 54.3,
  left: 40.8,
  name: 'Edouard-Montpetit'
}, {
  id: 40,
  size: 1,
  top: 57.6,
  left: 38.0,
  name: 'Universitete-De-Montreal'
}, {
  id: 41,
  size: 1,
  top: 60.9,
  left: 35.1,
  name: 'Cote-Des-Neiges'
}, { // here is green
  id: 42,
  size: 1,
  top: 8.8,
  left: 87.5,
  name: 'Honore-Beaugrand'
}, {
  id: 43,
  size: 1,
  top: 12,
  left: 84.7,
  name: 'Radisson'
}, {
  id: 44,
  size: 1,
  top: 15.3,
  left: 81.7,
  name: 'Langelier'
}, {
  id: 45,
  size: 1,
  top: 18.5,
  left: 78.7,
  name: 'Cadillac'
}, {
  id: 46,
  size: 1,
  top: 21.9,
  left: 75.9,
  name: 'Assomption'
}, {
  id: 47,
  size: 1,
  top: 25.2,
  left: 78.6,
  name: 'Viau'
}, {
  id: 48,
  size: 1,
  top: 28.4,
  left: 75.9,
  name: 'Pie-Ix'
}, {
  id: 49,
  size: 1,
  top: 31.6,
  left: 73.0,
  name: 'Joliette'
}, {
  id: 50,
  size: 1,
  top: 34.9,
  left: 70.0,
  name: 'Prefontaine'
}, {
  id: 51,
  size: 1,
  top: 38.3,
  left: 72.9,
  name: 'Frontenac'
}, {
  id: 52,
  size: 1,
  top: 40.8,
  left: 70.5,
  name: 'Papineau'
}, {
  id: 53,
  size: 1,
  top: 43.7,
  left: 68.0,
  name: 'Beaudry'
}, {
  id: 54,
  size: 1,
  top: 51.1,
  left: 61.3,
  name: 'Saint-Laurent'
}, {
  id: 55,
  size: 1,
  top: 54.4,
  left: 58.4,
  name: 'Place-Des-Arts'
}, {
  id: 56,
  size: 1,
  top: 57.6,
  left: 55.5,
  name: 'McGill'
}, {
  id: 57,
  size: 1,
  top: 60.9,
  left: 52.5,
  name: 'Peel'
}, {
  id: 58,
  size: 1,
  top: 64.1,
  left: 49.6,
  name: 'Guy-Concordia'
}, {
  id: 59,
  size: 1,
  top: 67.4,
  left: 46.8,
  name: 'Atwater'
}, {
  id: 60,
  size: 1,
  top: 77.4,
  left: 49.6,
  name: 'Charlevoix'
}, {
  id: 61,
  size: 1,
  top: 80.5,
  left: 52.4,
  name: 'Lasalle'
}, {
  id: 62,
  size: 1,
  top: 83.8,
  left: 49.6,
  name: 'De L`eglise'
}, {
  id: 63,
  size: 1,
  top: 86.8,
  left: 46.8,
  name: 'Verdun'
}, {
  id: 64,
  size: 1,
  top: 84.0,
  left: 43.6,
  name: 'Jolicoeur'
}, {
  id: 65,
  size: 1,
  top: 86.9,
  left: 40.9,
  name: 'Monk'
}, {
  id: 66,
  size: 1,
  top: 90.15,
  left: 38.0,
  name: 'Angrignon'
}, { // here is yellow
  id: 67,
  size: 1,
  top: 49.0,
  left: 74.4,
  name: 'Jean-drapeau'
}, {
  id: 68,
  size: 1,
  top: 50.0,
  left: 81.3,
  name: 'Longueuil'
}]

const mapPoints = mapPointsObj.map((mapPoint) => {
  const mapPointNew = { ...mapPoint }
  if (mapPointNew.size === 2) {
    mapPointNew.boxShadow = '0 0 12px 4px #fff,0 0 10px 3px #f0f,0 0 20px 8px #0ff'
  }
  return mapPointNew
})

const pointSizes = [{
  height: 1,
  width: 1
}, {
  height: 1.2,
  width: 1.2
}, {
  height: 2,
  width: 2
}]

export { mapPoints, pointSizes }