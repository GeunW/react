import TailBall from "../UI/TailBall";
import TailButton from "../UI/TailButton";
import { useState } from "react"; //상태변수

export default function Lotto() {
  //변수명, 구역

  const [tm, setBallTags] = useState();

  const hadleLottoClick = () => {

    let nums = [];

    while (nums.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1;
      if (!nums.includes(n)) nums.push(n);
    }
//    console.log(nums);
    nums.splice(6, 0, '+');

    const tm = nums.map((item, idx) =>
      idx === 6 ? <span className="flex items-center text-2xl font-bold mx-2" key={`ball${item}`}>{item}</span> :
      <TailBall n={item} key={`ball${item}`} />
    )
    setBallTags(tm);
  };





  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex gap-5" >
        {tm}
      </div>

      <TailButton caption='로또번호생성1' handleClick={hadleLottoClick} color='red' />

    </div>
  )
}
