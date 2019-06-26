/*给定一个单词数组和一个长度 maxWidth，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。

你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。

要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。

文本的最后一行应为左对齐，且单词之间不插入额外的空格。

说明:

单词是指由非空格字符组成的字符序列。
每个单词的长度大于 0，小于等于 maxWidth。
输入单词数组 words 至少包含一个单词。*/
var fullJustify = function (words, maxWidth) {
  const result = [];
  let row = [];
  let length = 0;
  let realLen = 0;
  const _fill = (row, fillNum) => {
    for (let i = 0; i < fillNum; i++) {
      row += " ";
    }
    return row;
  }
  for (let i = 0; i < words.length; i++) {
    const item = words[i];
    if (item.length <= maxWidth && length < maxWidth) {
      length += item.length
      if (length + 1 < maxWidth) {
        length = length + 1;
      }
      if (length >= maxWidth) {
        let resItem = '';
        const dis = maxWidth - realLen;
        const fillNum = Math.floor(dis / (row.length - 1));
        const extraNum = dis % (row.length - 1);
        for (let j = 0; j < row.length - 1; j++) {
          if (extraNum > 0) {
            extraNum--;
            resItem += _fill(row[j], fillNum + 1);
          } else {
            resItem += _fill(row[j], fillNum);
          }
        }
        resItem += row[row.length - 1]
        result.push(resItem);
        row = [];
        realLen = 0;
        length = 0;
      } else {
        row.push(item);
        realLen += item.length;
      }
    }
  }
};