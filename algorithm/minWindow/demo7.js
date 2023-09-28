var minWindow = function(s, t) {
    

    let min=s.length+1,begin; 
    const cnt=Array(128).fill(0);
    for(const c of t){
        cnt[c.charCodeAt()]++;
    }
    console.log(cnt, 'cnt ===============')
    let distance=t.length;
    for(let i=0,j=0;j<s.length;j++){
        if(cnt[s.charCodeAt(j)]-- > 0){
            distance--;
            while(distance==0){
                if(j-i+1<min){
                    min=j-i+1;
                    begin=i;
                }
                if(cnt[s.charCodeAt(i++)]++==0){
                    distance++;
                }
            }
        }
    }
    return min==s.length+1?"":s.substring(begin,begin+min);
    // 解释上面的代码:
    // 1. 首先，定义最小长度，和最小长度的起始位置；
    // 2. 然后，定义一个数组，用来存储t中的字符，每个字符的数量；
    // 3. 然后，定义一个distance，用来存储t中的字符的数量；
    // 4. 然后，定义两个指针，i和j，分别指向s的头部和尾部；
    // 5. 然后，判断s[j]是否在t中，如果在，就将distance减一，然后将cnt[s[j]]减一；
    // 6. 然后，判断distance是否为0，如果为0，就说明s[i, j]包含了t中的所有字符，这时候就要判断是否是最小的长度，如果是，就更新最小长度和最小长度的起始位置；
    // 7. 然后，判断s[i]是否在t中，如果在，就将distance加一，然后将cnt[s[i]]加一；
    // 8. 然后，将i加一，继续循环；
    // 9. 最后，返回最小长度的子串；
    };
console.log(minWindow("cabwefgewcwaefgcf", "cae"));