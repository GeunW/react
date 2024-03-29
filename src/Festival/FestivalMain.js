import { useRef, useState, useEffect } from "react";
import FestivalCard from "./FestivalCard";


export default function GalleryMain() {

    const [tdata, setTdata] = useState();
    const [guname, setGuname] = useState();
    const [opTags, setOpTags] = useState();
    const [cardTags, setCardTags] = useState();
    //
    const selRef = useRef();

    //실제fetch
    const getData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.getFestivalKr.item))
            .catch(err => console.log(err))
    }

    //부산 축제 데이터 fetch
    useEffect(() => {

        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`
        url = url + `serviceKey=${process.env.REACT_APP_MY_APIKEY}`
        url = url + `&pageNo=1&numOfRows=40&resultType=json`
        //console.log(url)
        getData(url)

    }, []);

    useEffect(() => {
        if (!tdata) return;

        console.log("tdata=", tdata);

        let tm = tdata.map(item => item.GUGUN_NM)
        console.log("tm =", tm)
        tm = new Set(tm)
        tm = [...tm].sort()

        setGuname(tm);

    }, [tdata]);

    useEffect(() => {
        if (!guname) return;

        let op = guname.map(item =>
            <option value={item} key={item}>{item}</option>
        );

        setOpTags(op);
    }, [guname]);

    //select선택
    const handleSelGu = () => {

        let tm = tdata.filter(item =>
            item.GUGUN_NM === selRef.current.value)
            .map(item => 
                <FestivalCard
                    key={item.UC_SEQ}
                    imgUrl = {item.MAIN_IMG_THUMB}
                    title = {item.TITLE}
                    ptitle = {item.SUBTITLE}
                    ktag = {item.TRFC_INFO}
                />
                );
        console.log(setCardTags(tm));

    }

    
    return (
        <div>
            <form className="max-w-sm mx-auto">
                <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">부산지역 축제 선택</label>
                <select onChange={handleSelGu} ref={selRef}
                    id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue >=== 구 선택 ===</option>
                    {opTags}
                </select >
            </form>
            <div className="w-full grid grid-cols-1 gap-4 md:grid-col-3 ">
                {cardTags}
            </div>
        </div>
    )
}
