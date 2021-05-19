let ntc = ['984', '985', '986']
let cdma = ['974', '975']
let ncell = ['980', '981', '982']
let smartcell = ['961', '962', '988']
let utl = ['972']

const identify_telecommunication = (number) => {
    let l = number.toString().length
    let words = number.toString()
    let three_char = words.substring(0, 3)

    if (l == 10) {
        if (ntc.includes(three_char)) {
            return (`${words} is ntc number`)
        }
        else if (cdma.includes(three_char)) {
            return (`${words} is cdma number`)
        }
        else if (ncell.includes(three_char)) {
            return (`${words} is ncell number`)
        }
        else if (ncell.includes(three_char)) {
            return (`${words} is ncell number`)
        }
        else {
            return (`${words} is not registered`)

        }

    }
    else {
        console.log("enter 10 digit number")

    }

}

module.exports(identify_telecommunication)


// if (['banana', 'lemon', 'mango', 'pineapple'].indexOf(fruit) >= 0) {
//     handleYellowFruit();
// }