const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

function camisaCounter(list) {
  const position = list.includes("Camiseta");

  for (const element of list) { console.log(products.includes("Camiseta")); 
  }
  if (position === -1) {
    console.log(true)
  } 
}
  camisaCounter(products)