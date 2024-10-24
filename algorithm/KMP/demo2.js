const KMP = () => {

}

const generatePrefixTable = (pattern) => {
    const prefixTable = new Array(pattern.length).fill(0);

    for (let i = 1; i < pattern.length; i++) {
        const part = pattern.slice(0, i);
        let j = 0;
        let k = part.length - 1;
        while(j < part.length - 1) {
            if (part[j] === part[k]) {
                prefixTable[i] = Math.max(prefixTable[i], k - j + 1);
            }
            j++;
            k--;
        }
    }
}