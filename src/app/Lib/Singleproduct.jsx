


   export default async function singleproduct(id){
    let res= await fetch(`https://dummyjson.com/products/${id}`)
    
        return res.json();
    }
    
    