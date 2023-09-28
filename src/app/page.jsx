


import styles from "./page.modules.css";
import Link from "next/link";
import Image from 'next/image';
import Card from "./Component/Card";
import Slide from "./Component/Slide";
import profile from '../../public/baby.svg';
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
export default function Home(){
    return( 
       <main>
        {/* buttons */}
<div   id="h1" className="mt-4 text-center">
{/* <Link href="/" className="bg-blue-400 mb-3 rounded-md p-3 hover:bg-blue-400"> Home </Link> */}
{/* <Link href="/productlist" className="bg-blue-400 mt-7 rounded-md p-3 hover:bg-blue-400"> Product </Link> */}
</div>
<br />
<b>
</b>
    {/* buttons */}
<Slide/>

<div className='cent'>
<Image src={profile}height={200}
width={600}
>
    </Image>
    <div  className="para">
        <h1>sahal faiz school coachidg</h1>
        </div>
    
    </div>
<Card/>
    

       </main>
    )
}