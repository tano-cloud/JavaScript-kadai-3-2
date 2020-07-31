'use strict'
{

    //タスクを保存する箱
    let toDoArr = [];

    //「作業中」ボタンと「削除」ボタンを追加する
    function btnAdd(tr) {
        let btnWork = document.createElement('button');
        btnWork.textContent = '作業中';
        tr.appendChild(btnWork);

        let btnDel = document.createElement('button');
        btnDel.textContent = '削除';
        tr.appendChild(btnDel);
    }

    //クリックすると処理が始まる
    document.getElementById('addBtn').addEventListener('click', () => {

        //テキストボックスに入力した内容をtoDoObjオブジェクトに保存する
        //toDoArr配列のindex番号をID番号とする
        let toDoObj = {
            id: toDoArr.length,
            comment: document.getElementById('addText').value,
        };

        //toDoObjオブジェクトの内容をtoDoArr配列の最後尾に格納する
        toDoArr.push(toDoObj);

        //trノードを生成
        let tr = document.createElement('tr');
        
        //trノードをtBodyノードの子要素に加える
        document.getElementById('tableBody').appendChild(tr);

        //toDoArrLastが無くなるまで出力する
        for (let obj in toDoObj) {
            let td = document.createElement('td');
            td.textContent = toDoObj[obj];
            tr.appendChild(td);
        }

        //作業中ボタンと削除ボタンの追加
        btnAdd(tr);

        //テキストボックスに何も入っていない状態にする
        document.getElementById('addText').value = '';
    });
}