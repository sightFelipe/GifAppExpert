export const getGifs = async (category) => {
  try {
    const apiKey = "W7ZvDmmIbFoSZgUEhOxZs1tzcJlNcYpA";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(category)}&limit=5`;

    const response = await fetch(url);
    
    // Si la respuesta es 429 (Too Many Requests), esperamos y reintentamos
    if (response.status === 429) {
      console.warn("Límite de solicitudes excedido. Reintentando en 5 segundos...");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return getGifs(category); // Reintenta la solicitud
    }

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const { data } = await response.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium?.url || "",
    }));

    return gifs;
  } catch (error) {
    console.error("Error al obtener los GIFs:", error);
    return []; // Retorna un array vacío en caso de error
  }
};
