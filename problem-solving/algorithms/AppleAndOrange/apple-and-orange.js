const appleAndOrange = (s, t, a, b, apples, oranges) => {
    const toFilter = (fruit, tree) => {
        const sum = tree + fruit
        return (sum >= s && sum <= t)
    }
    const nApples = apples.filter(fruit => toFilter(fruit, a)).length
    const nOranges = oranges.filter(fruit => toFilter(fruit, b)).length

    console.log(nApples)
    console.log(nOranges)
}

appleAndOrange(7, 11, 5, 15, [-2, 2, 1], [5, -6, -5])