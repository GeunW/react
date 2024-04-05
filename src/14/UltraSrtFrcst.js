import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import TailSelect from "../UI/TailSelect";
import getcode from "./getcode.json";


export default function UltraSrtFrcst() {
  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;
  const gubun = '초단기예보';
  const itemRef = useRef();
  //fetch데이터 저장
  const [tdata, setTdata] = useState([]);
  //화면 표시되는 
  const [tags, setTags] = useState([]);
  //selec박스 선택값
  const [selitem, setSelitem] = useState();
  const [selitemName, setSelitemName] = useState();

  //select박스옵션
  const ops = getcode.filter(item => item["예보구분"] === gubun)
    .map(item => `${item["항목명"]} (${item["항목값"]})`);

  //  console.log(dt, area, x, y)

  //데이터 가져오기
  useEffect(() => {

    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`
    url = url + `serviceKey=${process.env.REACT_APP_MY_APIKEY}`
    url = url + `&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}&base_time=0930&nx=${x}&ny=${y}`
    console.log(url);

    getData(url);

  }, []);

  //fetch함수
  const getData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    setTdata(data.response.body.items.item)

  }


  //selec박스 항목 선택
  const handleItem = () => {
    console.log(itemRef.current.value);
    if (itemRef.current.value === '') {
      alert('항목을 선택하세요')
      itemRef.current.focus();
      setTags([])
      return;
    };

    
    setSelitemName(itemRef.current.value.split('(')[0]);
    setSelitem(itemRef.current.value.split(' (')[1].replace(')', ''));

  };
  
  //item 출력
  useEffect(() => {
    console.log(selitem)
    console.log(tdata);
    let tm = tdata.filter(item => item["category"] === selitem)
      .map(item =>
        <tr key={item.fcstDate + item.fcstTime} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {selitemName}
          </td>
          <td className="px-6 py-4">
            {`${item.fcstDate.substr(0, 4)}-${item.fcstDate.substr(4, 2)}-${item.fcstDate.substr(6, 2)}`}

          </td>
          <td className="px-6 py-4">
            {`${item.fcstTime.substr(0, 2)}:${item.fcstTime.substr(2, 2)}`}
          </td>
          <td className="px-6 py-4">
            {item.fcstValue}
          </td>
        </tr>
      );

    setTags(tm);
  }, [selitemName,selitem]); // dt, x, y가 변경될 때마다 useEffect가 호출되도록 설정합니다.


// useEffect(()=>{
//   console.log(selitem)
// },[selitemName,selitem])





  return (
    <div>
      <div className="w-11/12 justify-start 
                    grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
        <div className="text-lg font-bold p-4">
          {`${area} ${gubun} (${dt.substring(0, 4)}-${dt.substring(4, 6)}-${dt.substring(6, 8)})일자`}
        </div>
        <div className="p-4">
          <TailSelect ops={ops}
            opDefault="---항목선택---"
            selRef={itemRef}
            handleSelGu={handleItem} />
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                항목명
              </th>
              <th scope="col" className="px-6 py-3">
                예측일자
              </th>
              <th scope="col" className="px-6 py-3">
                예측시간
              </th>
              <th scope="col" className="px-6 py-3">
                예측값
              </th>
            </tr>
          </thead>
          <tbody>
            {tags}
          </tbody>
        </table>
      </div>
    </div>
  )
}
