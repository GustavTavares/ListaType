function fatorialRecursivo(n: number): number {
    if (n <= 1) {
        return 1;
    } else {
        return n * fatorialRecursivo(n - 1);
    }
}

console.log(fatorialRecursivo(5));