import { useState } from "react"; //상태변수

export default function MyList({ title, imgUrl, content }) {
    //지역변수
    let cnt = 0;

    //state변수 [변수,set구역]
    const [stCnt, setStCnt] = useState(0);

    const handleLike = (t) =>{
        
        cnt += 1;
        console.log(`cnt = ${cnt}`);
        setStCnt(stCnt + 1);
    }
    
    return (
        <div className="flex border rounded hover:bg-gray-100">
            <div className="w-1/3">
                <img className='border' src={imgUrl} alt="" />
            </div>
            <div className=" w-2/3 px-5">
                <h1 className="font-bold ">{title}</h1>
                <p className="h-1/2">
                    {content}
                </p>
                <p className="flex justify-end items-end h-1/4 font-bold">
                    <span className="text-xl" onClick={() => {handleLike(title)}}>
                        🧡
                    </span>
                    
                    <span className="mx-2">좋아요</span><span className="count">{stCnt}</span></p>

            </div>
        </div>

        // <div className="flex flex-col w-1/2">
        //     <div className="flex">
        //         <img src="./img/html.png" alt="html"/>
        //         <div className="">
        //         <h1 className="font-bold">HTML</h1>
        //         HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용
        //         </div>
        //     </div>
        //     <div className="flex justify-end items-center">💖좋아요0</div>
        // </div>
    )
}
