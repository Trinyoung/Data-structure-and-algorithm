const maxConsecutiveAnswers = (answerKey, k) => {
    let left = 0;
    let right = 0;
    let max = 0;
    let T = 0;
    let F = 0;
    while (right < answerKey.length) {
        if (answerKey[right] === 'T') T++;
        else F++;
        while (Math.min(T, F) > k) {
            if (answerKey[left] === 'T') T--;
            else F--;
            left++;
        }
        max = Math.max(max, right - left + 1);
        right++;

    }
    return max
}

console.log(maxConsecutiveAnswers('TTFTTFTT', 1));