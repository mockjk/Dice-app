export default function getDiceNumber(dice_number: number, amount: number){
    interface Result {
        numbers: number[];
        sum: number;
    }

    const numbers : number[] = [...new Array(amount)]
    for(let i = 0; i < amount; ++i){
        numbers[i] = Math.floor(Math. random() * dice_number) + 1;
    }
    
    const sum : number = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    
    const result : Result = {
        numbers: numbers,
        sum: sum,
    }
    
    return result
}