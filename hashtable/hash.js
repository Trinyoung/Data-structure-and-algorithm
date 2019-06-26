class HashTable {
    constructor() {
        this.table = [];
        const loseloseHashCode = (key)=> {
            var hash = 0;
            for (const i = 0; i < key.length; i++) {
                hash += key.charCodeAt(i);
            }
            return hash % 37
        }
    }
    
    put(key, value) { 
        loseloseHashCode()
    }
    remove(key) { }
    get(key) { }
}
const hash = new HashTable();
// String.prototype.charCodeAt(Number) 返回指定位置字符串的ASCII编码。
console.log('name'.charCodeAt(1));

// console.log(hash, '-------------------->');