var canvas = document.getElementById('c1');　//canvas(c1)のノードオブジェクト
var ctx = canvas.getContext('2d');  //2Dコンテキストをctxに格納

var img = new Image();    //新規画像オブジェクト
img.src = "http://imgur.com/WLVssBx";   //読み込みたい画像のパス

context.drawImage(image, dx, dy)
//image:画像オブジェクト　dx:貼り付け位置のx座標　dy:貼り付け位置のy座標
//座標は基本的に左上が始点(0,0)です。

context.drawImage(image, dx, dy, dw, dh)
//dw:貼り付け時の画像の横幅　dh:貼り付け時の画像の縦幅
//この2つの指定がない場合は、元画像のそのままの縦横（1倍）で貼り付けられます。

context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
//sx,sy,sw,shは、貼り付ける前の元画像をトリミングするためのパラメータです
//sx:元画像のトリミング始点のx座標　sy:元画像のトリミング始点のy座標
//sw:元画像のsxから横にswの位置までをトリミング
//sh:元画像のsyから縦にshの位置までをトリミング
