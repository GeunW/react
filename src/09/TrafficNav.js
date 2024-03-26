import TailButton from '../UI/TailButton';

export default function TrafficNav({ title, category, sel, setSel }) {
    const handleBtClick = (item) => {
        setSel(item);
    };

    const bts = category.map(item => 
        <TailButton caption={item}
                    color = {item===sel?"red":"blue"}
                    handleClick={()=>handleBtClick(item)}
                    key={item} />
        );

    return (
 
        <div className=' flex w-full justify-between items-center m-2'>
            <div className=' text-xl font-bold ml-5'>
                교통사고 {title} : 
            </div>
            <div className='flex gap-5 mr-5'>
                {bts}
            </div>

        </div>
 
 
    )
}
