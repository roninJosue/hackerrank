/*Print a staircase of size  using # symbols and spaces.*/

const stairCase = (n) => {
    let blanks = n - 1
    let blocks = 1

    for (let index = 0; index < n; index++) {
        console.log(`${' '.repeat(blanks--)}${'#'.repeat(blocks++)}`)  
    }
}

stairCase(6)