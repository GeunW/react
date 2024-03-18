export default function MyDiv3({d1,d2,d3}) {
  
    return (
    <div className="w-4/5 h-2/3
    flex justify-start items-center
    bg-red-700 text-amber-300">
        <p className="w-4/5 flex justify-center
        font-bold text-2xl
        my-5">
            {`${d1} > ${d2} > ${d3}`}
        </p>
      
</div>
  )
}


