// 1.первая задача
const obj1 = {
    name: "Муаттар",
    age: 16,
    info: {
        city: "Samarkand",
        student: true
    }
};

const obj2 = {
    country: "Uzbekistan",
    profession: "Student"
};

// 2. 
const merged = { ...obj1, ...obj2 };

// 3. 
const keys = Object.keys(merged);

// 4. 
const znachenie = Object.values(merged);

// 5. 
const obyedineno = [...keys, ...znachenie];

// 6. 
let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
};


obyedineno.forEach(item => {
    const type = typeof item;
    
    if (types.hasOwnProperty(type)) {
        types[type].push(item);
    }
});

console.log("Объединённый объект:", merged);
console.log("Ключи:", keys);
console.log("Значения:", znachenie);  
console.log("Всё вместе:", obyedineno);
console.log("По типам:", types);
