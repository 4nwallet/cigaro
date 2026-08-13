// ======================================
// محصولات آقای سیگارو
// فقط این قسمت را در آینده ویرایش کن
// ======================================

const productGroups = [

{
brand:"Winston",

products:[

{
name:"Winston Light",
image:"images/products/winston-light.jpg",
show:true
},

{
name:"Winston Ultra",
image:"images/products/winston-ultra.jpg",
show:true
},

{
name:"Winston Eagle",
image:"images/products/winston-eagle.jpg",
show:true
},

{
name:"Winston XStyle Ultra",
image:"images/products/winston-xstyle-ultra.jpg",
show:true
},

{
name:"Winston Slim Ultra",
image:"images/products/winston-slim-ultra.jpg",
show:true
},

{
name:"Winston Slim Light",
image:"images/products/winston-slim-light.jpg",
show:true
},

{
name:"Winston XS Light",
image:"images/products/winston-xs-light.jpg",
show:true
},

{
name:"Winston XS Ultra",
image:"images/products/winston-xs-ultra.jpg",
show:true
}
  

]

},


{
brand:"Napoli",

products:[

{
name:"Napoli",
image:"images/products/napoli.jpg",
show:true
}

]

},

{
brand:"Forman",

products:[

{
name:"Forman White",
image:"images/products/forman-white.jpg",
show:true
}

]

},

  

{
brand:"Marlboro",

products:[

{
name:"Marlboro Gold Touch",
image:"images/products/marlboro-gold-touch.jpg",
show:true
},

  {
name:"Marlboro Flavor Code",
image:"images/products/marlboro-flavor-code.jpg",
show:true
}

]

},


{
brand:"Kent",

products:[

{
name:"Kent Mix",
image:"images/products/kent-mix.jpg",
show:true
},

{
name:"Kent Plus",
image:"images/products/kent-plus.jpg",
show:true
},

{
name:"Kent Power 8 Silver",
image:"images/products/kent-power-8-silver.jpg",
show:true
},

{
name:"Kent Double Power",
image:"images/products/kent-double-power.jpg",
show:true
},

{
name:"Kent Blue",
image:"images/products/kent-blue.jpg",
show:true
},

{
name:"Kent 4",
image:"images/products/kent-4.jpg",
show:true
}

]

},


{
brand:"Camel",

products:[

{
name:"Camel White",
image:"images/products/camel-white.jpg",
show:true
},

{
name:"Camel Blue",
image:"images/products/camel-blue.jpg",
show:true
},

{
name:"Camel Silver",
image:"images/products/camel-silver.jpg",
show:true
},

{
name:"Camel Black",
image:"images/products/camel-black.jpg",
show:true
}

]

},


{
brand:"Cavallo",

products:[

{
name:"Cavallo Green",
image:"images/products/cavallo-green.jpg",
show:true
},

{
name:"Cavallo Blue",
image:"images/products/cavallo-blue.jpg",
show:true
},

{
name:"Cavallo Mango",
image:"images/products/cavallo-mango.jpg",
show:true
},

{
name:"Cavallo Blueberry",
image:"images/products/cavallo-blueberry.jpg",
show:true
},

{
name:"Cavallo Watermelon",
image:"images/products/cavallo-watermelon.jpg",
show:true
}

]

}

];



// ======================================
// نمایش محصولات
// ======================================


const container =
document.getElementById("products-container");


function createCard(product){

if(!product.show){

return "";

}


return `

<div class="product-card">


<img

src="${product.image}"

class="product-image"

alt="${product.name}">


<div class="product-body">


<div class="product-name">

${product.name}

</div>


</div>


</div>

`;

}



let html="";


productGroups.forEach(group=>{


const visibleProducts =

group.products.filter(p=>p.show);



if(visibleProducts.length===0){

return;

}



html+=`

<div class="brand-section">


<div class="brand-title">

${group.brand}

</div>


<div class="products-grid ${visibleProducts.length === 1 ? "single-product" : ""}">

`;



visibleProducts.forEach(product=>{

html+=createCard(product);

});


html+=`

</div>

</div>

`;

});


container.innerHTML=html;
