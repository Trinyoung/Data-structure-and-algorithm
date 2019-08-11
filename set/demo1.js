function Set(){
  let items = {};
  this.has = function(value){
    return value in items;
  };

  this.add = function(value){
    if (!this.has(value)){
      items[value] = value;
      return true;
    }
    return false;
  };

  this.remove = function(value){
    if(this.has(value)){
      delete items[value];
      return true;
    }
    return false;
  }

  this.size = function(){
    return Object.keys(items).length;
  }

  this.values = function(){
    let values = [];
    for(let i=0, keys =Object.keys(items); i< keys.length; i++){
      values.push(items.keys[i])
    }
    return values;
  }

  this.clear = function(){
    items = {};
  }

  
}