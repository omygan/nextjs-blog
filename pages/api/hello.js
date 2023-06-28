// req是http.IncomingMessage的一个实例，加上一些预构建的中间件。
// res是http.ServerResponse的一个实例，加上一些辅助函数。

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}