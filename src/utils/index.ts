export const test = (str: string): string => {
    let leftCount = 0
    let rightCount = 0
    let leftIndex = 0
    let temStr = ''
    let res = ''
    let num = 1
    for(let i = 0; i<str.length; i++) {
        if(str[i] === '[') {
            if(leftCount === 0) {
                leftIndex = i
            }
            leftCount++
        }
        if(str[i] === ']') {
            rightCount++
        }
        if(leftCount === rightCount) {
            if(leftCount === 0) {
                if(!isNaN(Number(str[i])) && str[i+1] === '[') {
                    num = Number(str[i])
                }else {
                    res += str[i]
                }
            }else {
                temStr = str.slice(leftIndex + 1, i)
                leftIndex = 0
                res += test(temStr).repeat(num)
                leftCount = 0
                rightCount = 0
            }
        }
    }
    return res
}