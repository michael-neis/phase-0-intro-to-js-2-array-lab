const cats = ["Milo", "Otis", "Garfield"]



function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.splice(2)
}

function destructivelyRemoveFirstCat(){
    cats.splice(0,1)
}

function appendCat(name){
   const copyCat = [...cats, `${name}`]
   return copyCat
}

function prependCat(name){
    const newCat = [`${name}`, ...cats]
    return newCat
}

function removeLastCat(){
    const lessCat = [...cats.slice(0,2)]
    return lessCat
}

function removeFirstCat(){
    const firCat = [...cats.slice(1)]
    return firCat
}
