// import gdata from './GalleryData.json';
// import GalleryCard from './GalleryCard';
import { useRef, useState, useEffect } from "react";
import TailButton from "../UI/TailButton";
import TailInput from "../UI/TailInput";
import GalleryCard from "./GalleryCard";


export default function GalleryMain() {
    // const imgUrl = gdata.galWebImageUrl;
    // const title = gdata.galTitle;
    // const ptitle = gdata.galPhotographyLocation;
    // let ktag = gdata.galSearchKeyword;
    const keyword = useRef();
    const [tdata, setTdata] = useState();
    const [tags, setTags] = useState();

    useEffect(() => {
        if (!tdata) return;

        let tm = tdata.map((item) =>
            <GalleryCard
                imgUrl={item.galWebImageUrl.replace('http://', 'https://')}
                title={item.galTitle}
                ptitle={item.galPhotographyLocation}
                ktag={item.galSearchKeyword}
                key={item.galContentId}
            />
        );

        setTags(tm);

    }, [tdata])

    const handleFetch = () => {
        if (keyword.current.value == '') {
            alert('키워드를 입력하세요');
            keyword.current.focus();
        } else {
            getData(encodeURI(keyword.current.value));
        }


    }
    const getData = (w) => {
        console.log(w)
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url + `serviceKey=${process.env.REACT_APP_MY_APIKEY}`
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
        url = url + `&keyword=${w}&_type=json`

        console.log(url)

        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.response.body.items.item))
            .catch(err => console.log(err))
    }

    const handleClear = () => {
        setTdata('');
        setTags('');
        keyword.current.value = '';
        keyword.current.focus();
    }

    return (
        <div className="w-11/12 flex flex-col h-full justify-start items-start ">
            <div className="w-11/12 flex h-full justify-start items-start ">
                <div className=" grid grid-cols-1 md:grid-col-3 gap-4">
                    <TailInput type="text"
                        inputRef={keyword}
                        ph="키워드 입력"
                    />

                </div>
                <div className="px-3 w-4/12">
                    <TailButton
                        caption="조회"
                        handleClick={handleFetch}
                        color="blue" />
                </div>
                <div className="px-3 w-4/12">
                    <TailButton
                        caption="취소"
                        handleClick={handleClear}
                        color="blue" />
                </div>
            </div>
            <div className="w-full grid grid-cols-1 gap-4 md:grid-col-3 ">
                {tags}
            </div>
        </div>

    )
}
