const accountsMerge = (accounts) => {
    const emailsMap = accounts.reduce((res, item, index) => {
        for (let i = 1; i < item.length; i++) {
            if (res[item[i]]) {
                res[item[i]].push(index)
            } else {
                res[item[i]] = [index]
            }
        }
        return res;
    }, {});
    const res = [];
    for (let i = 0; i < accounts.length; i++) {
        const [name, ...emails] = accounts[i];
        for (let j = 0; j < emails.length; j++) {
            if (emailsMap[emails[j]].length > 1) {
                for (let k = 0; k < emailsMap[emails[j]].length; k++) {
                    if (emailsMap[emails[j]][k] !== i) {
                        accounts.splice(emailsMap[emails[j]][k], 1);
                        // for (let l = 1; l < accounts[emailsMap[emails[j]][k]].length; l++) {
                        //     if (emailsMap[accounts[emailsMap[emails[j]][k]][l]].length > 1) {}
                        // }
                    }
                }
            }
        }
    }
    return res;
}
