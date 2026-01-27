//Print numbers from 1 to 100 but skip the numbers divisible by 5.

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        continue;
    }
    console.log(i);
}