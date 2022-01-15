
const birthdateCakeCandles = (candles) => {
    const tallestCandle = Math.max(...candles)
    return candles.filter(candle => candle === tallestCandle).length
}

birthdateCakeCandles([4, 4, 1, 3, 4, 5])