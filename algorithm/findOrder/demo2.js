var findOrder = function (numCourses, prerequisites) {
    const inDegree = new Map(),
      map = new Map(),
      queue = [],
      res = [];
    let front = (rear = 0);
  
    for (let i = 0; i < numCourses; i++) {
      inDegree.set(i, 0);
    }
  
    prerequisites.forEach((item) => {
      const first = item[0],
        second = item[1];
  
      if (!map.has(second)) {
        map.set(second, [first]);
      } else {
        map.get(second).push(first);
      }
  
      inDegree.set(first, inDegree.get(first) + 1);
    });
  
    for (let [key, value] of inDegree) {
      if (value === 0) {
        queue[rear++] = key;
      }
    }
  
    while (front < rear) {
      const course = queue[front++];
      res.push(course);
  
      if (!map.has(course)) {
        continue;
      }
  
      map.get(course).forEach((item) => {
        inDegree.set(item, inDegree.get(item) - 1);
        if (inDegree.get(item) === 0) {
          queue[rear++] = item;
        }
      });
  
      map.delete(course);
    }
  
    for (let value of inDegree.values()) {
      if (value !== 0) {
        return [];
      }
    }
  
    return res;
  };