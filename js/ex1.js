[
  {
    "name": "The Starry Night",
    "year": "1889",
    "artist": "Vincent Van Gogh"
  },
  {
    "name": "The Scream",
    "year": "1893",
    "artist": "Edvard Munch"
  },
  {
    "name": "Guernica",
    "year": "1937",
    "artist": "Pablo Picasso"
  }
]

fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
  .then(response => response.json()) // Access and return response's JSON content
  .then(paintings => {
    const paintingsElement = document.getElementById("paintings");
    paintings.forEach(painting => {
      const paintingElement = document.createElement("tr");
      paintingElement.innerHTML = `<td>
        ${painting.name}
        </td>
        <td>
        ${painting.year}
        </td>
        <td>
        ${painting.artist}
        </td>`;
      paintingsElement.appendChild(paintingElement);
    });
  })