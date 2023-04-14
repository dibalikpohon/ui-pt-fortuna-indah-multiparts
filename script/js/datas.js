const product = (name, imageSrc) => (
  {
    name,
    imageSrc
  }
);

let productData = {
  "1": [
    product("Aki", "../assets/aki-1.png")
    , product("Air aki", "../assets/air-aki-1.png")
    , product("Filter Udara", "../assets/filter-udara.png")
    , product("Filter Oli", "../assets/filter-oli.png")
    , product("O Ring", "../assets/o-ring.png")
    , product("Seal", "../assets/seal.png")
    , product("Gasket", "../assets/gasket.png")
    , product("Piston", "../assets/piston.png")
    , product("Air radiator", "../assets/air-radiator.png")
    , product("Karet tambal tubeless", "../assets/karet-tambel.png")
    , product("Oli", "../assets/oli.png")
  ],
  "2": [
    product("Gerinda", "../assets/gerinda.png")
    , product("Bor", "../assets/bor.png")
    , product("Ragum", "../assets/ragum.png")
    , product("Kunci Momen", "../assets/kunci-momen.png")
    , product("Kunci Roda", "../assets/kunci-roda.png")
  ]
}


productData = {
  ...productData,
  "0": Object.values(productData).flat(),
}
