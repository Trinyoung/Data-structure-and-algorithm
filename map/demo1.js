// map 数据结构 ，又称字典表
// 集合、字典和散列表可以存储不重复的值。在set（集合）中，我们感兴趣的是每个值的本身，并把它们当做主要元素。
// 在字典中， 我们用[键，值]的形式来存储数据。在散列表中也是一样（也是以[键， 值]对的形式来存储数据。）
function Dictionary() {
  var items = {};
  this.has = function (key) {
    return items.hasOwnProperty(key);
  };
  this.set = function (key, value) {
    items[key] = value;
  };
  this.delete = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  }

  this.get = function(key){
    return this.has(key)?items[key]:undefined;
  }

  this.clear = function(){
    items = {}
  }

  this.keys = function(){
    return Object.keys(items);
  }
  
  this.getItems = function(){
    return items;
  }
}
// hash 数据结构， 又称散列表