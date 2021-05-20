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
        else if (smartcell.includes(three_char)) {
            return (`${words} is smartcell number`)
        }
        else {
            return (`${words} is not registered`)
        }
    }
    else {
        return (`${words}  does not have 10 digit`)

    }

}

module.exports(identify_telecommunication)

