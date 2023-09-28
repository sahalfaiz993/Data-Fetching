
// import Image from 'next/image'
import Link from "next/link"
import React from 'react';



async function productlist(){
let data = await fetch("https://dummyjson.com/products")
    data=await data.json();
    return data.products
}





export default async function List(){
    let products = await productlist();
    console.log(products);
    return(
       <>




<div className="mt-4 text-center">
{/* <Link href="/" className="bg-blue-400 ml-3 rounded-md p-3 hover:bg-blue-400"> Home </Link>
<Link href="/productlist" className="bg-blue-400 ml-3 rounded-md p-3 hover:bg-blue-400"> Product </Link>
<Link href="/User Product Detail" className="bg-blue-400 ml-3 rounded-md p-3 hover:bg-blue-400"> User Product Detail </Link> */}
</div>
<br />
<br />
         <center><h1 className='bg-black-200 rounded-md text-3xl font-bold underline;'>Product List</h1></center>
         
         
{
  products.map((item)=>(
  
<div className=" mx-60 my-3  bg-blue-400 mt-4 w-64 rounded-md">
    {/* <Image src={item.thumbnail}  width={200}  height={100} /> */}
    <Link href={`/productlist/${item.id}`}><button> <b> <u><i>View details</i></u> </b> </button></Link>
    <h3> {item.title}</h3>
   
   
  
   
  </div>

  )
  )
}


       </>
    )
}