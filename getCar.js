
class Cars {
  constructor(brand, modelName, price, image) {
    this.brand = brand;
    this.modelName = modelName;
    this.price = price;
    this.image = image;
  }
}

class bmw extends Cars {
  constructor(modelName, price, image) {
    super("BMW", modelName, price, image);
  }
}

class benz extends Cars {
  constructor(modelName, price, image) {
    super("Mercedes Benz", modelName, price, image);
  }
}

class audi extends Cars {
  constructor(modelName, price, image) {
    super("Audi", modelName, price, image);
  }
}

class hyundai extends Cars {
  constructor(modelName, price, image) {
    super("Hyundai", modelName, price, image);
  }
}

class kia extends Cars {
  constructor(modelName, price, image) {
    super("Kia", modelName, price, image);
  }
}

const audia4 = new audi(
  'Audi A4',
  '4,940~5,990만원',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2UCiDJTOdk3jt-tC1M5huUEPVNYiTunJD9w&usqp=CAU'

)

const bmw3series = new bmw(
  "bmw 3 series",
  "5,020~8,150만원",
  "https://m.atcdn.co.uk/ect/media/89209a96c3d445ecaae01e95ba2dddf6.jpg"
);

const benzcclass = new benz(
  "benz c class",
  "5,000~6,000만원",
  "https://lh3.googleusercontent.com/proxy/4HBQ-qHaTkkxR2RbXY9wH2basQljH-jyV6VYUBY7G9-Ekll8oIF4_-KTBrZ4uu7fjSPOF0TGbCXwYFR1Ok6GKAOlh7a8yEu407hpeVH7aH7P0OSmI1IpehfJaq-JhiIz9SC1qDngTEHzqmcivSTTKT8_zmgy5M-PDtko-A"
)




const upper4200 = [bmw3series, benzcclass, audia4];

const btn2 = document.getElementById('btn');

function getCars() {
  
  const modelname = document.querySelector(".model_name");
  const price = document.querySelector('.price')
  const brand = document.querySelector('.brand')
  const image = document.getElementById('image')
  let random = Math.floor(Math.random() * 3);
 

  let salary = document.getElementById("salary").value;
  if (salary > 4200) {
    brand.innerText = `${upper4200[random].brand}`
    modelname.innerText = `${upper4200[random].modelName}`;
    price.innerText = `${upper4200[random].price}`
    image.src =`${upper4200[random].image}`
  }
  if (salary < 1000 || null) {
      brand.innerText = ''
      modelname.innerText = '살 수 있는 차가 없습니다.'
      price.innerText = ''
      image.src = 'https://lh3.googleusercontent.com/proxy/J3uA6UO5qvcGNrBobFw_Mt3cwT4S2apIalu7JVjcGyUM5Ib_9GeBTcFpxG4tQVVqjY6f0x6ZCs8buySMBrG1eOdvS7xntIpNGjD8eEPHbb6NUNK5-k4d2SGFciE'
  }
  
  
}

btn2.addEventListener('click', getCars());

