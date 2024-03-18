import MyList from "./MyList";
import listData from "./MyListData.json";

console.log(listData)
const myItems = listData.map(item =>
        <MyList title={item.title} imgUrl={item.imgUrl} content={item.content} key={item.title}/>
);

export default function MyListMain() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {myItems}
    </div>
  )
}
