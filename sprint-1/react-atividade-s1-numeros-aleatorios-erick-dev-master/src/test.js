function aleato (arr){
    let newArr = [arr[ Math.floor(Math.random() * arr.length)]]
    while(newArr.length <= 2){
        let numAle = arr[ Math.floor(Math.random() * arr.length)]
        if(!newArr.some((a) => a === numAle)){
            newArr = [...newArr,numAle]
            
        }
    }
    return newArr
}
