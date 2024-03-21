export default function TailBall({n}) {
  const bColor =[
    'bg-red-300',
    'bg-orange-300',
    'bg-lime-300',
    'bg-blue-300',
    'bg-purple-300'
  ]

  const ballColor = `w-16 h-16 flex justify-center items-center rounded-full ${bColor[parseInt(n/10)]} font-bold`;

  return (
    <div className={ballColor}>
      {n}
    </div>
  )
}
