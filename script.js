//Listを作る。//listの中には、3択がある
//[ぐー,ちょき,ぱー]
//プレイヤーは、そこから選択する

//argumentをプレイヤーは選択できる
//parameterへプレイヤーが選択したものがいく

//関数が値を得て、答えをreturnする。

//結果が出力される。

const janken = ['Rock',`Paper`, `Scissors`];

//ランダムで出す方法をまず知ろう。
const janken_random = Math.floor( Math.random()*3);//0,1,2をランダムで返す関数が入っている状況
document.getElementById("result").innerHTML = janken_random;
//IDの””をjaken_randomで出た0-2の数字へ変更上書きさせる関数。



const getComputerChoice = () =>{};


getComputerChoice()
