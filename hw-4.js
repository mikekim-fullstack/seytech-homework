const customersData = [
    { id: 23, name: "Zhibek", bonus: 50, status: "silver", purchases: ["pants", "boots"] },
    { id: 56, name: "Timur", bonus: 25, status: "silver", purchases: ["t-shirt", "blouse"] },
    { id: 8, name: "Veysel", bonus: 0, status: "new", purchases: ["shirt", "slippers"] },
    { id: 46, name: "Chynara", bonus: 0, status: "new", purchases: ["shirt", "sweater"] },
    { id: 9, name: "Natalia", bonus: 60, status: "silver", purchases: ["snickers", "jeans"] },
    { id: 33, name: "Kiyazbek", bonus: 70, status: "premium", purchases: ["pullover", "shirt"] },
    { id: 12, name: "Denis", bonus: 100, status: "premium", purchases: ["shirt", "boots"] },
    { id: 4, name: "Gulzhat", bonus: 100, status: "premium", purchases: ["hat", "socks"] }
]

//Task1. Reward customers with status premium with 10 bonus points. Do not mutate original data. 
//Task2. Everyday the store chooses a lucky customer by name and rewards that customer with 15 bonus points
//rewardLuckyCustomer (customersData, "Zhibek")
//Task3. find customers with points above 50 and upgrade status to premium gold
//Task4. Give 5 extra points to people with odd IDs
//Task5. Give extra points if customer has bought a shirt
//Task6. Calculate total bonuses

///Task4. Give 5 extra points to people with odd IDs
const result = customersData.map((items) => {
    if ((items.id) % 2 == 1) {
        const newItems = {}
        Object.keys(items).map((key) => {

            if (key == 'bonus') {
                // console.log('status key: ', key)
                newItems[key] = items.bonus + 5
            }
            else {
                // console.log('other key: ', key)
                newItems[key] = items[key]
            }
        })
        return newItems
    }
    return items

})

console.log('Task4:result-', result, 'Original-Data', customersData)
