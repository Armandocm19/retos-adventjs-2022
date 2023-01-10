function getGiftsToRefill(a1, a2, a3) {
    return [...new Set([...a1, ...a2, ...a3])].filter(item => {
        return a1.includes(item) + a2.includes(item) + a3.includes(item) === 1;
      });
    }
    