// import React, { useState } from "react";
// import { removeItem, closestItem } from "./yourUtilityFunctions"; // Replace with the actual path to your utility functions

// export default function MyComponent() {
//   const [items, setItems] = useState(["item1", "item2", "item3"]);

//   const handleRemoveItem = (itemToRemove) => {
//     const updatedItems = removeItem([...items], itemToRemove);
//     setItems(updatedItems);
//   };

//   const handleGetClosestItem = (item) => {
//     const closest = closestItem(items, item);
//     console.log(`The closest item to ${item} is ${closest}`);
//   };

//   return (
//     <div className="tab-bar">
//       <ul>
//         {items.map((item) => (
//           <li key={item}>
//             {item}
//             <button onClick={() => handleRemoveItem(item)}>Remove</button>
//             <button onClick={() => handleGetClosestItem(item)}>Find Closest</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
