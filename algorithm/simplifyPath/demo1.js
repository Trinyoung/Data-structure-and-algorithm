
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let i = 0;
    // let pre = '';
    const newPath = path.split('/');
    console.log(newPath, 'newPath =============>');
    while(i < newPath.length) {
        const item = newPath[i];
        if (!item || item === '.') {
            newPath.splice(i, 1);
            continue;
        }
        if (item === '..') {
            if (newPath[i-1]) {
                newPath.splice(i-1, 2);
                i--;
            } else {
                newPath.splice(i, 1);
            }
            // newPath.splice(i-1, newPath[i-1] ? 2 : 1);
            // i--;
            continue;
        }
        i++;
    }
    return `/${newPath.join('/')}`;
};
console.log(simplifyPath("/home//foo/"));