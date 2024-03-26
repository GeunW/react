import TailInput from "../UI/TailInput";
import TailButton from "../UI/TailButton";
import { useRef, useEffect, useState } from "react";

export default function RefInput({ type, inputRef, ph }) {
  const inputRef = useRef();
  const [bts, setBts] = useState([]);
  const [tags, setTags] = useState([]);

  const handleAdd = () => {
    if (inputRef.current.value === '') {
      alert('값을 입력하세요.');
      inputRef.current.focus();
    };
    console.log(inputRef.current.value);
    setBts([...bts, inputRef.current.value]);

  };

  const handleRemove = () => {

  };

  useEffect(() => {
    inputRef.current.value = '';
    inputRef.current.focus();

    let tm = bts.map((item, idx) =>
      <TailButton caption={item}
        key={`bt${idx}`}
        color="orange"
      />
    );

    setTags(tm);

  }, [bts]);

  return (
    <div className="w-11/12 flex flex-col 
    justify-center items-center">
      <div className="w-1/2 flex justify-center items-center m-2 ">
        <TailInput
          type="text"
          inputRef={inputRef}
          ph="값 입력"
          isRequired={true} />
{/*       
        <input type="text"
          ref={inputRef}

          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-10"
          placeholder="값 입력">

        </input> */}
      </div>
      <div className="w-1/2 flex justify-center items-center m-2">
        <div className="m-4">
          <TailButton caption="등록"
            color="blue"
            handleClick={handleAdd}
          />
        </div>
        <div className="m-4">
          <TailButton caption="취소"
            color="blue"
            handleClick={handleRemove}
          />

        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex border p-5 m-5 bg-slate-100">
          {tags}
        </div>
      </div>
    </div>
  )
}
