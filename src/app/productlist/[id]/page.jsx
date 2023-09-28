import singleproduct from '@/app/Lib/Singleproduct'
import React from 'react'
import Image from 'next/image'
import Link from "next/link"

export default  async function ProductDetail({ params }) {
    console.log("params" , params)
    let data = await singleproduct(params.id)
    console.log(data)
    return (


    <div>


<div className="mt-4 text-center">
{/* <Link href="/" className="bg-blue-400 ml-3 rounded-md p-3 hover:bg-blue-400"> Home </Link>
<Link href="/productlist" className="bg-blue-400 ml-3 rounded-md p-3 hover:bg-blue-400"> Product </Link> */}
<Link href="/User Product Detail" className="bg-blue-400 ml-3 rounded-md p-3 hover:bg-blue-400  "> User Product Detail </Link>
</div>
<h1 className='p-10 mb-5 font-size-12 text-3xl font-bold underline '><b><u><i>User Product Detail</i></u></b></h1>






      <div className=" mx-60 my-3  bg-blue-400 mt-4 w-64 rounded-md p-19">
    <Image src={data.thumbnail}  width={800}  height={700} />
    <h3><b>Name:</b>  {data.title}</h3>
    <h2><b>Price:</b>  {data.price}</h2>
    <h2><b>Detail:</b>  {data.description}</h2>

   <button className='bg-blue rounded-md p-4'> <b><u><i> Buy now</i> </u></b> </button>
   
   
  
   
  </div>
  </div>

    
  )
}
