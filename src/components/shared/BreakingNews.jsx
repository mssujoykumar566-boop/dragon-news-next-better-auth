import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        id: "1",
        title: "Breaking News: Mejor Event Unfolds in the city",
    },
    {
        id: "2",
        title: "Breaking News: New Policy Announced by the Government",
    },
    {
        id: "3",
        title: "Breaking News: Sports Team wins Championship",
    },
]

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-500 py-4 container mx-auto px-2'>
            <button className='btn bg-red-500 text-white'>Letest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    news.map(n => <span className='text-white' key={n.id}>{n.title}</span>) 
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;