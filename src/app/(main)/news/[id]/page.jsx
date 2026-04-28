import { getnewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

export const generateMetadata = async({params}) =>{
  const {id} = await params;
  // console.log(params,'params')
   const news = await getnewsDetailsById(id);
  //  console.log(news,'news')
     return {
    title: news.title,
    description: news.details,
  }
}

const NewsDetailsPage = async({params}) => {
    const {id} = await params;
    // console.log(id,'params')
    const news = await getnewsDetailsById(id);
    // console.log(news,'news');
    return (
        <div className='max-w-5xl mx-auto my-8'>
           <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        {/* Author info */}
        <div className="flex justify-between items-center bg-slate-200 p-3">
          <div className="flex gap-1 items-center">
            <Image
              className="rounded-full"
              src={news.author?.img}
              alt={news.author?.name}
              width={40}
              height={40}
            />
            <div>
              <h2 className="font-semibold">{news.author?.name}</h2>
              <p className="text-xs">{news.author?.published_date}</p>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <CiShare2 className="text-xl" />
            <CiBookmark className="text-xl" />
          </div>
        </div>

        <h2 className="card-title">{news.title}</h2>
      <figure>
        <Image
          className="w-full"
          src={news.image_url}
          alt={news.title}
          width={300}
          height={300}
        />
      </figure>
      <p className=""> {news.details} </p>
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2 ">
            <h2 className="flex items-center gap-2 ">
               <IoIosStar className="text-lg text-yellow-500" /> {news.rating.number}
            </h2>
            <h2 className="flex items-center gap-2 ">
                <FaEye  className="text-lg" />{news.total_view}
            </h2>

        </div>

        <Link href={`/category/${news.category_id}`}>
         <button className="btn bg-purple-500 text-white
         ">Se other news for this category <BsArrowRight/> </button>
        </Link>
      </div>
      </div>
    </div>
        </div>
    );
};

export default NewsDetailsPage;