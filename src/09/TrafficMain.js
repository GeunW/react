import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function TrafficMain() {
    const [tdata, setTdata] = useState();
    const [c1, setC1] = useState(); //대분류
    const [selC1, setSelC1] = useState(); //선택 대분류
    const [c2, setC2] = useState(); //중분류
    const [selC2, setSelC2] = useState(); //선택 중분류

    const [detail, setDetail] = useState(); //상세정보
    const [info, setInfo] = useState(); //상세정보


    const getDataFetch = (url) => { //fetch문법 : 비동기 방식

        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.data))//tdata에 저장
            .catch(err => console.log(err))

    };

    useEffect(() => {
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
        url = `${url}page=1&perPage=20&`
        url = `${url}serviceKey=${process.env.REACT_APP_MV_APIKEY}`
        // console.log(url)
        getDataFetch(url)
    }, []);

    useEffect(() => {
        if (!tdata) return;

        let tm = tdata.map(item => item['사고유형_대분류']);
        tm = new Set(tm);
        tm = [...tm];

        setC1(tm);
        // console.log("tdata = ",tm);
    }, [tdata]);

    useEffect(() => {
        if (!tdata) return;

        //console.log("selC1=", selC1)
        let tm = tdata.filter(item => item.사고유형_대분류 === selC1)
            .map(item => item.사고유형_중분류);
        setC2(tm);

        setInfo('');
    }, [selC1]);

    // useEffect(() => {
    //     if (!tdata) return;

    //     let tm = tdata.map(item => item['사고유형_중분류']);
    //     tm = new Set(tm);
    //     tm = [...tm];

    //     setC2(tm);
    //     // console.log("tdata = ",tm);
    // }, [tdata]);

    // useEffect(() => {
    //     // console.log("selC2=", selC2)
    //     if (!tdata) return;
    //     //detail, setDetail
    //     //console.log("selC1=", selC1)
    //     let tm = tdata.filter(item => item.사고유형_중분류 === selC2)
    //                 .map(item => item.);
    //     setDetail(tm);
    // }, [selC2]);

    useEffect(() => {
        if (!tdata) return;
        let tm = tdata.filter(item => item.사고유형_대분류 === selC1 &&
            item.사고유형_중분류 === selC2);
        setDetail(tm[0]);
    }, [selC2]);

    useEffect(() => {
        if (!tdata) return;
        console.log("detail => ", detail)
        const keyArr = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];
        let tm = keyArr.map(k =>
            <div className=" flex justify-center items-center border m-5" key={k}>
                <div className="w-full h-full bg-slate-200 text-center p-2 border">
                    {k} :
                </div>
                <div className="flex text-center p-2">
                    {parseInt(detail[k]).toLocaleString()}
                </div>
            </div>
        );
        setInfo(tm);
    }, [detail]);

    return (
        <div className="w-full h-full flex flex-col justify-start items-center mt-5">
            {c1 && <TrafficNav title="대분류"
                category={c1}
                sel={selC1}
                setSel={setSelC1}
            />}
            {c2 && <TrafficNav title="중분류"
                category={c2}
                sel={selC2}
                setSel={setSelC2}
            />}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 ">{info}</div>

        </div>
    )
}
