import fdata from './fooddata.json';
import FoodCard from './FoodCard';
import TailButton from '../UI/TailButton';
import { useState } from 'react';


export default function FoodMain() {
    const [cards, setCards] = useState([]);

    let c1 = fdata.map(item => item['운영주체 분류']);
    c1 = new Set(c1); //중복제거
    c1 = [...c1]; //전개
    console.log(c1);

    const c1Bts = c1.map(item =>
        <TailButton caption={item} color="blue"
            key={item}
            handleClick={() => handleList(item)} />
    );



    const handleList = (citem) => {

        const tm = fdata.filter(item => item["운영주체 분류"] === citem)
            .map(item =>
                <FoodCard fobj={item} key={item['사업자명']} />);

        setCards(tm);
    };





    return (
        <div className='w-full h-full flex flex-col justify-start items-center gap-5'>
            <div className='w-full flex justify-center  items-center bg-blue-200 gap-5'>
                {c1Bts}
            </div>
            <div className='w-10/12 grid grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-4'>
                {cards}
            </div>
        </div>
    )
}
