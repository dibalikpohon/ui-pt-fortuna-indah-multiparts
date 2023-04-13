const product = (name, imageSrc) => (
  {
    name,
    imageSrc
  }
);

let productData = {
  "1": [
    product("Aki", "../assets/example.jpg")
    , product("Air aki", "../assets/example1.jpg")
    , product("Filter Udara", "../assets/example2.jpg")
    , product("Filter Oli", "../assets/example.jpg")
    , product("O Ring", "../assets/example1.jpg")
    , product("Seal", "../assets/example2.jpg")
    , product("Gasket", "../assets/example.jpg")
    , product("Piston", "../assets/example1.jpg")
    , product("Air radiator", "../assets/example2.jpg")
    , product("Karet tambal tubeless", "../assets/example.jpg")
    , product("Oli", "../assets/example2.jpg")
  ],
  "2": [
    product("Gerinda", "../assets/example1.jpg")
    , product("Bor", "../assets/example2.jpg")
    , product("Ragum", "../assets/example.jpg")
    , product("Kunci Momen", "../assets/example1.jpg")
    , product("Kunci Roda", "../assets/example2.jpg")
  ]
}


productData = {
  ...productData,
  "0": Object.values(productData).flat(),
}
