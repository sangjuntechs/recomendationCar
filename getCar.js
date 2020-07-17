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
  "Audi A4",
  "4,940~5,990만원",
  "https://post-phinf.pstatic.net/MjAxOTA1MjJfNzgg/MDAxNTU4NTM0MTA1MDU3.nodb1LQVJ8NZQmBxh5v7s3OjduOd1XtZExvQwRo9S-Mg._Ek52MifdhyGvuhefBkWvyDHOJsoixRO3Lt4sZ0N9P0g.JPEG/Audi-A4-2020-1600-02.jpg?type=w1200"
);

const bmw3series = new bmw(
  "bmw 3 series",
  "5,020~8,150만원",
  "https://m.atcdn.co.uk/ect/media/89209a96c3d445ecaae01e95ba2dddf6.jpg"
);

const benzcclass = new benz(
  "benz c class",
  "5,000~6,000만원",
  "https://lh3.googleusercontent.com/proxy/4HBQ-qHaTkkxR2RbXY9wH2basQljH-jyV6VYUBY7G9-Ekll8oIF4_-KTBrZ4uu7fjSPOF0TGbCXwYFR1Ok6GKAOlh7a8yEu407hpeVH7aH7P0OSmI1IpehfJaq-JhiIz9SC1qDngTEHzqmcivSTTKT8_zmgy5M-PDtko-A"
);

const genesisg70 = new hyundai(
  "genesis G70",
  "3,848~5,620만원",
  "https://www.genesis.com/content/dam/genesis/ca/images_m/renew/g70/highlights/genesis-g70-highlights-summary-design-v02.jpg"
);

const jaguarxe = new Cars(
  "Jaguar",
  "jaguar XE",
  "5,850~7,630만원",
  "https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/whichcar/2017/05/31/5908/Jaguar-XE-S-2016-drive-MAIN.jpg"
);

const morning = new kia(
  "morning",
  "1,175~1,480만원",
  "https://t1.daumcdn.net/cfile/tistory/99311E335A261F1E2D"
);

const accent = new hyundai(
  "Accent",
  "1,138~1,913만원",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-hyundai-accent-1557849839.jpg?crop=0.766xw:0.937xh;0.234xw,0.0628xh&resize=640:*"
);

const spark = new Cars(
  "Chevrolet",
  "spark",
  "977~1,493만원",
  "https://cdnimage.ebn.co.kr/news/201606/news_1465795650_835472_main1.jpg"
);

const ray = new kia(
  "ray",
  "1,260~1,570만원",
  "https://i.ytimg.com/vi/tvkeIsBN4w0/maxresdefault.jpg"
);

const avante = new hyundai(
  "AVANTE",
  "1,570~2,453만원",
  "https://www.autoherald.co.kr/news/photo/202003/37465_63359_4818.jpg"
);

const k3 = new kia(
  "K3",
  "1,757~2,140만원",
  "https://www.motorgraph.com/news/photo/201802/14143_64825_229.jpg"
);

const cruze = new Cars(
  "Chevrolet",
  "CRUZE",
  "1,660~2,512만원",
  "https://img.danawa.com/cp_images/service/97/3556132/151951890544348105888.jpg"
);

const soul = new kia(
  "SOUL",
  "1,958~2,351만원",
  "https://news.hmgjournal.com/images_n/contents/kia-soul-popular-usa1.jpg"
);

const sm3 = new Cars(
  "SAMSUNG",
  "SM3",
  "1,444~1,763만원",
  "https://image.chosun.com/sitedata/image/201709/03/2017090300255_0.jpg"
);

const kona = new hyundai(
  "KONA",
  "1,914~2,624만원",
  "https://whipdt.files.wordpress.com/2019/06/hyundai-kona-hybrid.jpg"
);

const sonata = new hyundai(
  "SONATA",
  "2,386~3,367만원",
  "https://www.siminsori.com/news/photo/201903/208321_58173_25.jpg"
);

const k5 = new kia(
  "K5",
  "2,351~3,141만원",
  "https://post-phinf.pstatic.net/MjAxOTExMjFfMjgx/MDAxNTc0MzAwODQ1MDcx.FoVxMF3VeXQysEg-6poP-QvNK0chfd34AmJxRzhLqQgg.yzbhCGVF3mWrP5hSds8JwUelmm8PtYTCnR0eWYF4X7kg.JPEG/2020-kia-k5-kdm-spec_%282%29.jpg?type=w1200"
);

const zeta = new Cars(
  "Volkswagen",
  "ZETA",
  "3,160~3,650만원",
  "https://www.autodaily.co.kr/news/photo/202005/419144_53861_4722.jpg"
);

const malibu = new Cars(
  "Chevrolet",
  "Malibu",
  "2,364~3,279만원",
  "https://m.chevrolet.co.kr/httpobject/images/new_carinfo/new_malibu/highlight_img02_1.jpg"
);

const sm6 = new Cars(
  'SAMSUNG',
  'SM6',
  '2,401~3,422만원',
  'https://image.chosun.com/sitedata/image/202007/14/2020071404418_0.jpg'
)

const civic = new Cars(
  "HONDA",
  "CIVIC",
  "3,340만원",
  "https://post-phinf.pstatic.net/MjAxODA5MjVfMTA2/MDAxNTM3ODcwNjA0ODA5.PXeUAMPqfhfS35YXDGarjApwPvyf9NJDDe6ple5ne_Ug.Xr-rT3Gg_anYioQO1ZVT5uEIIUacVBjeSOdZTyt4Ozwg.JPEG/%ED%98%BC%EB%8B%A4_%EC%8B%9C%EB%B9%85_%283%29.jpg?type=w1200"
);

const grandeur = new hyundai(
  'grandeur',
  '3,172~4,349만원',
  'https://www.hyundai.com/static/images/model/grandeur/01_H_01.png'
)

const k7 = new kia(
  'K7',
  '2,949~3,799만원',
  'https://post-phinf.pstatic.net/MjAxOTEyMDJfMTYw/MDAxNTc1MjUxNTU4MzA3.80VKYJhwJI_uIMKD0cakx1L0-ATeLXmMLB1HvcBcNS0g.yw7k3Y9XulJ_5upRgw5Ddm9Lbo78k_p1DrTdA_XH8qQg.PNG/K7_2.png?type=w1200'
)

const impala = new Cars(
  'Chevrolet',
  'IMPALA',
  '3,350~4,361만원',
  'https://www.chevrolet.co.kr/httpobject/images/new_carinfo/impala_video_img.jpg'
)

const accord = new Cars(
  'HONDA',
  'ACCROD',
  '3,610~4,147만원',
  'https://www.autodaily.co.kr/news/photo/201807/403311_29135_2551.jpg'
)

const benzaclass = new benz(
  'Benz A class',
  '3,770만원',
  'https://img.danawa.com/cp_images/service/33/3927868/6999591.jpg'
)

const ramborgini = new Cars(
  'Lamborghini',
  'Lamborghini Aventadore',
  '68,736만원',
  'https://lh3.googleusercontent.com/proxy/jRxtqkK0AuCwu8GkmKqLXYEOO8b5xmAE9x6xGEqoLfXizykwjzPEWZciMCVxDFCduHN37Hw2Kgo5hzxXc56cnOX7nxda7zHCqmJ7rzmhm7pqaeWG_TPirLzZ_PvEV18lR3sFiwTExs2V3VbyvaczyIFnj19Cd85y4jDd2MiewdCuBhz2Ri8VrkUZvB9FtNaUCYyj-cYMwbzdjRRqT5oq1UAwQ5D6yYA0fh6p1scp0kz29Sk3_tWbFKEwszqkANY1QpngVQgP9LIhFwOZx9gH9yjZ7VtrCxn6'
)


const upper2200 = [
  morning,
  accent,
  spark,
  ray,
  morning,
  accent,
  spark,
  ray,
  morning,
  accent,
];
const upper2600 = [avante, k3, cruze, soul, sm3, kona, avante, k3, cruze, soul];

const upper3200 = [
  sonata,
  malibu,
  zeta,
  civic,
  k5,
  sm6,
  sonata,
  malibu,
  sm6,
  zeta,
];

const upper3800 = [grandeur, k7, impala, accord, benzaclass ,grandeur, k7, impala, accord, benzaclass];

const upper4200 = [
  bmw3series,
  benzcclass,
  audia4,
  genesisg70,
  jaguarxe,
  bmw3series,
  benzcclass,
  audia4,
  genesisg70,
  jaguarxe,
];

const btn2 = document.getElementById('btn');

function getCars() {
  const modelname = document.querySelector(".model_name");
  const price = document.querySelector(".price");
  const brand = document.querySelector(".brand");
  const image = document.getElementById("image");
  const tip = document.querySelector(".tip");
  const errtip = document.querySelector(".errtip");
  let random = Math.floor(Math.random() * 10);

  let salary = document.getElementById("salary").value;
  if (salary < 2200) {
    brand.innerText = "";
    modelname.innerText = "살 수 있는 차가 없습니다.";
    price.innerText = "열심히 돈 벌어서 차 삽시다!";
    image.src = "https://lh3.googleusercontent.com/proxy/J3uA6UO5qvcGNrBobFw_Mt3cwT4S2apIalu7JVjcGyUM5Ib_9GeBTcFpxG4tQVVqjY6f0x6ZCs8buySMBrG1eOdvS7xntIpNGjD8eEPHbb6NUNK5-k4d2SGFciE";
    tip.innerText = "";
    errtip.innerText = "";
  }

  if (salary < 2600 && salary >= 2200) {
    brand.innerText = `${upper2200[random].brand}`;
    modelname.innerText = `${upper2200[random].modelName}`;
    price.innerText = `${upper2200[random].price}`;
    image.src = `${upper2200[random].image}`;
    tip.innerText = "경차를 구매할 수 있을 것 같아요!";
    errtip.innerText = "";
  }
  if (salary >= 2600 && salary < 3200) {
    brand.innerText = `${upper2600[random].brand}`;
    modelname.innerText = `${upper2600[random].modelName}`;
    price.innerText = `${upper2600[random].price}`;
    image.src = `${upper2600[random].image}`;
    tip.innerText = "이런 차는 어때요? 충분히 탈 수 있어요!";
    errtip.innerText = "";
  }
  if ( salary >= 3200 && salary < 3800) {
    brand.innerText = `${upper3200[random].brand}`;
    modelname.innerText = `${upper3200[random].modelName}`;
    price.innerText = `${upper3200[random].price}`;
    image.src = `${upper3200[random].image}`;
    tip.innerText = "멋진 차를 몰아봐요!";
    errtip.innerText = '';
  }
  if(salary >= 3800 && salary < 4200) {
    brand.innerText = `${upper3800[random].brand}`;
    modelname.innerText = `${upper3800[random].modelName}`;
    price.innerText = `${upper3800[random].price}`;
    image.src = `${upper3800[random].image}`;
    tip.innerText = "오오! 큰 차들을 몰 수 있을 것 같아요";
    errtip.innerText = '';
  }
  if (salary >= 4200 && salary < 5000) {
    brand.innerText = `${upper4200[random].brand}`;
    modelname.innerText = `${upper4200[random].modelName}`;
    price.innerText = `${upper4200[random].price}`;
    image.src = `${upper4200[random].image}`;
    tip.innerText = "";
    errtip.innerText = "구매할 수 있지만 유지하기 힘들 것 같아요.. 5000만원 이상되면 사는 걸 추천해요!";
  }
  if (salary >= 5000) {
    brand.innerText = `${upper4200[random].brand}`;
    modelname.innerText = `${upper4200[random].modelName}`;
    price.innerText = `${upper4200[random].price}`;
    image.src = `${upper4200[random].image}`;
    tip.innerText = "준중형 고급 세단을 탈 수 있어요!";
    errtip.innerText = "";
  }
  if(salary < 55000 && salary > 33000) {
    brand.innerText = `${ramborgini.brand}`;
    modelname.innerText = `${ramborgini.modelName}`;
    price.innerText = `${ramborgini.price}`;
    image.src = `${ramborgini.image}`;
    tip.innerText = "그냥 아무거나 타시고 즐기세요!";
    errtip.innerText = "";
  }
}

btn2.addEventListener("click", getCars());
