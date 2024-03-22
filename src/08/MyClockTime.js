import { useState, useEffect } from "react";

function MyClockTime() {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [tm, setTm] = useState(0);

  //useEffect( 콜백함수 ) 컴포넌트 생성시 최초 1번 실행
  useEffect(() => { //바뀔때마다
    const t = setInterval(() => {
      setCurrentTime(new Date);
    }, 1000)

    console.log("[] => ", currentTime);

    return () => {
      clearInterval(t);
    };
  }, []);

  //tm변수 바뀔 때마다 실행
  // useEffect(()=>{
  //   console.log("[tm] => ",currentTime,tm);
  // },[tm])

  //랜더링이 일어날 때마다 실행
  // useEffect(()=>{
  //   console.log("[]없는 경우 => ",currentTime,tm);
  // });


  return (
    <h1 className="text-xl font-bold">
      {currentTime && `현재 시각 : ${currentTime.toLocaleTimeString()}`}
    </h1>
  )
}

export default MyClockTime;
