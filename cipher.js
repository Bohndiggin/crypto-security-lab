let phrase = 'I love cryptography!'

let alphabet = 'abcdefghijklmnopqrstuvwxyz! ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let alphaArr = alphabet.split('')

function fibEncrypt(str) {
    str.toLowerCase()
    let diff = [0, 1]
    for (let i = 0; i < str.length; i++) {
        diff.push(diff[i] + diff[i+1])      
    }
    let encrypted = ''
    for (let i = 0; i < str.length; i++) {
        encrypted += alphabet[(alphaArr.indexOf(str[i]) + diff[i]) % (alphabet.length + 1)]
    }
    return encrypted
}

function fibDecrypt(str) {
    let decrypted = ''
    let diff = [0, 1]
    for (let i = 0; i < str.length; i++) {
        diff.push(diff[i] + diff[i+1])      
    }
    for (let i = 0; i < str.length; i++) {
        let index = Math.abs(alphaArr.indexOf(str[i]) - (diff[i] % (alphabet.length + 1)))  % (alphabet.length + 1) //PROBLEM LINE
        console.log(index)
        decrypted += alphabet[index]
    }
    return decrypted
}
console.log(fibEncrypt(phrase))
let encrypted = fibEncrypt(phrase)
console.log(fibDecrypt(encrypted))





//UGH the plan is fibbonaci encodeing and decoding. I can't wrap my mind around it.
