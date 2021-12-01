/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// TODO: 这题需要跟着BFS重新看一遍
 var canFinish = function (numCourses, prerequisites) {
  // 深度优先搜索
  const edges = new Array(numCourses).fill(0).map(() => []);
  const visited = new Array(numCourses).fill(0);
  // 状态 0 未搜索
  // 1: 搜索过这个节点， 但还没有回溯到该节点，即该节点还没有入栈，还有相邻的节点没有搜索完成
  // 2: 已经搜索到且回溯过这个节点，即该节点已经入栈，并且所有该节点的相邻节点都出现在栈的更底部，满足拓扑排序的要求
  const res = [];
  let valid = true;
  const dfs = u => {
      console.log('u',u)
      // 标记为搜索中
      visited[u] = 1;
      // 遍历该节点的每一个相邻节点v
      for (const v of edges[u]) {
          // 如未搜索 继续搜索
          if (visited[v] === 0) {
              dfs(v);
              if (!valid) {
                  return;
              }
          } else if (visited[v] === 1) {
              // 已经标记搜索中
              valid = false;
              return;
          }
      }
      visited[u] = 2;
      res.push(u);
  };

  // 构建图
  for (const info of prerequisites) {
      edges[info[1]].push(info[0]);
  }

  for (var i = 0; i < numCourses && valid; i++) {
      if (visited[i] === 0) {
          dfs(i);
      }
  }
  return valid;
};