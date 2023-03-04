// función que calcula la distancia en km entre dos coordenadas de latitud y longitud
export const calcularDistancia = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // radio de la tierra en km
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // distancia en km
  return d.toFixed(1);
};

// función auxiliar que convierte grados a radianes
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
