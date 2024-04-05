
export default function button({ caption, handleClick, color }) {
  
  const colorObj = {
    'blue': 'bg-blue-600',
    'red': 'bg-red-600',
    'orange': 'bg-orange-600',
    'green': 'bg-green-600',
    'lime': 'bg-lime-600'

  }

  const hoverObj = {
    'blue': 'hover:bg-blue-900',
    'red': 'hover:bg-red-900',
    'orange': 'hover:bg-orange-900',
    'green': 'hover:bg-green-900',
    'lime': 'hover:bg-lime-900'

  }
  const bColor = `px-4 py-2 m-2 rounded-md
                  w-full
                  ${colorObj[color]}
                  ${hoverObj[color]} text-white`;

                  
  return (

    <div>
      <button className={bColor}
        onClick={handleClick} >
        {caption}
      </button>
    </div>
  )
}
