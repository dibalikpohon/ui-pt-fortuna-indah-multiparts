const product = (name, imageSrc) => (
  {
    name,
    imageSrc
  }
);

let productData = {
  "1": [
    product("Aki", "../assets/aki.jpg")
    , product("Air aki", "../assets/air-aki.png")
    , product("Filter Udara", "../assets/filter-udara.jpg")
    , product("Filter Oli", "../assets/filter-oli.jpg")
    , product("O Ring", "../assets/o-ring.webp")
    , product("Seal", "../assets/seal.webp")
    , product("Gasket", "../assets/gasket.jpg")
    , product("Piston", "../assets/piston.jpg")
    , product("Air radiator", "../assets/air-radiator.jpg")
    , product("Karet tambal tubeless", "../assets/karet-tambel.jpg")
    , product("Oli", "../assets/oli.jpg")
  ],
  "2": [
    product("Gerinda", "../assets/gerinda.jpg")
    , product("Bor", "../assets/bor.jpg")
    , product("Ragum", "../assets/ragum.jpg")
    , product("Kunci Momen", "../assets/kunci-momen.jpg")
    , product("Kunci Roda", "../assets/kunci-roda.webp")
  ]
}


productData = {
  ...productData,
  "0": Object.values(productData).flat(),
}
