let counter, btnAdd;
let k;
 
function addCount(){
    k++;
    counter.innerHTML = k;
}
 
window.addEventListener("load", ()=>{
    // 起動時の処理
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btnAdd");
    k = 0;
 
    btnAdd.addEventListener("click", addCount);
});









// (() => {
//     //HTMLのid値を使って以下のDOM要素を取得
//     const upbutton = document.getElementById('up');
//     const text = document.getElementById('textbox');
//     const reset = document.getElementById('reset');
  
//     //ボタンが押されたらカウント減
//     downbutton.addEventListener('click', (event) => {
//     //0以下にはならないようにする
//     if(text.value >= 1) {
//       text.value--;
//     }
//     });
  
//     //ボタンが押されたらカウント増
//     upbutton.addEventListener('click', (event) => {
//       text.value++;
//     })
  
//     //ボタンが押されたら0に戻る
//     reset.addEventListener('click', (event) => {
//       text.value = 0;
//     })
  
//   })();