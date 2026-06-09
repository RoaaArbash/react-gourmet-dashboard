/*
function DessertsList(props) {
  // 1. تصفية الحلويات (أقل من 500 سعرة) وترتيبها تصاعدياً
  const lowCaloriesDesserts = props.data
    .filter(dessert => dessert.calories < 500) 
    .sort((a, b) => a.calories - b.calories);  

  // 2. تحويل المصفوفة الناتجة لعناصر li
  const listItems = lowCaloriesDesserts.map(dessert => {
  return (
    <li key={dessert.id}>   
      {dessert.name} - {dessert.calories} cal
    </li>                
  );
});
  // 3. عرض القائمة
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default DessertsList;
*/
//filter and sort in react//
function D1(props){
const lower=props.data
.filter( dessertsData =>dessertsData.calories < 500)
.sort((a,b)=>a.calories - b.calories)

const list =lower.map(dessertsData => {
  return(
    <li key={dessertsData.id}
>
  {dessertsData.name} - {dessertsData.calories} cal 
</li>  );
});
return(
<div>
  <ul>
    {list}
  </ul>
</div>
);

}
export default D1;

8








