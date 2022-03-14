function aleatorio (arr){
    let newArr = []
    while(newArr.length <= 2){
        let numAle = arr[ Math.floor(Math.random() * arr.length)]
        if(!newArr.some((a) => a.house === numAle.house) && numAle.house !== "" && numAle.actor !== ""){
            newArr = [...newArr,numAle]
        }
    }
    return newArr
}

export {aleatorio}