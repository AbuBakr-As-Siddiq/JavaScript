function maxPrice(obj){
    let finish = obj[0];
    for (let i=1;i<obj.length;i++){
        if (finish.price < obj[i].price){
            finish = obj[i];
        }
    }
    return finish.name
  }
  console.log(maxPrice([
    {name:'AbuBakr', price:1350},
    {name:'Abdukarim', price:900},
    {name:'Umidbek', price:1100},
  ]));