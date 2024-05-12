export const allIngredientsList1 = [
    { icon: "🍚", label: "Sugar",image:<img className="w-60 h-56 " src="/images/sugar.jpg"/> },
    { icon: "🥤", label: "Cold Drink",image:<img className="w-60 h-56 " src="/images/coca-cola.webp"/> },
    { icon: "🍟", label: "Arhar Dal",image:<img className="w-60 h-56 " src="/images/arhar.jpg"/> }
  ];
  export const allIngredientsList2 = [
    { icon: "🌰", label: "Chole",image:<img className="w-60 h-56 " src="/images/kabuli.jpg"/> },
    { icon: "🍚", label: "Rice",image:<img className="w-60 h-56 " src="/images/rice.jpg"/> },
    { icon: "🍫", label: "Dairy Milk",image:<img className="w-60 h-56 " src="/images/dairymilk.jpg"/> }
  ];
  export const allIngredientsList3 = [
    { icon: "🧀", label: "Cheese",image:<img className="w-60 h-56 " src="/images/cheese.jpg"/> },
    { icon: "🍚", label: "Atta",image:<img className="w-60 h-56 " src="/images/atta.jpg"/> },
    { icon: "🍪", label: "Biscuits",image:<img className="w-60 h-56 " src="/images/biscuit.jpg"/> }
  ];
  
  const [sugar, cold_drink, arhar] = allIngredientsList1;
  export const initialTabs1 = [sugar, cold_drink, arhar];

  const [chana, rice, dairy] = allIngredientsList2;
  export const initialTabs2 = [chana, rice, dairy];

  const [cheese, atta, biscuit] = allIngredientsList3;
  export const initialTabs3 = [cheese, atta, biscuit];
  
  export function getNextIngredient(ingredients) {
    const existing = new Set(ingredients);
    return allIngredientsList1.find((ingredient) => !existing.has(ingredient));
  }
  