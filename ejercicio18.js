const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

const result = []
for (let index = 0; index < placesToTravel.length; index++) {
    const place = placesToTravel[index];
        if (place.id !==11 && place.id !== 40) {result.push(place)}
}
console.log(result)