// 线上最优解

var minWindow = function(s, t) {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
        let min=s.length+1,begin;
        const cnt=Array(128).fill(0);
        for(const c of t){
            cnt[c.charCodeAt()]++;
        }
        // distance表示子串s[i, j-1]距离t还差多少个字符
        let distance=t.length;
        // 子串s[i ,j-1]包含的字符数量，不少于t中对应的字符数量
        for(let i=0,j=0;j<s.length;j++){
            if(cnt[s.charCodeAt(j)]-->0){
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
    };