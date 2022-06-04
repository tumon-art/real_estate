import Link from 'next/link';
import Image from 'next/image';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => {

  return (
   <Link href={`/property/${externalID}`} passHref>
       <div className=' ring-4 ring-blue-900  overflow-hidden'>

           <div className=' leading-[0]'>
           <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt='img' />
           </div>

           <div className=' bg-blue-900 px-2 py-1'>
               <div>
                   <div className='flex items-center gap-2'>
                       <div className=' text-white'>
                           {isVerified && <GoVerified />}
                       </div>
                       <p className=' text-white font-bold'>
                           AED {price}{rentFrequency && `/${rentFrequency}`}
                       </p>
                   </div>
               </div>
           </div>

       </div>
   </Link>

  )
}

export default Property