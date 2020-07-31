'use strict'
{

    //タスクを保存する箱
    let toDoArr = [];

    //tableBodyのIDを選択
    let tBody = document.getElementById('tableBody');

    //「作業中」ボタンと「削除」ボタン(クラス：delete)を追加する関数
    function addButtons(tr) {
        let btnWork = document.createElement('button');
        btnWork.textContent = '作業中';
        tr.appendChild(btnWork);

        let btnDel = document.createElement('button');
        btnDel.classList.add('delete');
        btnDel.textContent = '削除';
        tr.appendChild(btnDel);
    }


    //課題１．toDoリストの追加
    function addToDo() {
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
            //trノードをhtmlへ加える
            tBody.appendChild(tr);

            //toDoArrLastが無くなるまで出力する
            for (let obj in toDoObj) {
                let td = document.createElement('td');
                td.textContent = toDoObj[obj];
                tr.appendChild(td);
            }

            //作業中と削除ボタンの追加
            addButtons(tr);

            //テキストボックスに何も入っていない状態にする
            document.getElementById('addText').value = '';
        });
    }

    //課題２．toDoリストの削除とIDの振りなおし
    function deleteToDo() {
        tBody.addEventListener('click', e => {
            //e.targetはクリックしたノードを指す
            if (e.target.classList.contains('delete')) {

                //１.toDoリストの情報を取得
                //elementsはHTMLCollectionのtrノードを取得（配列に似ているが異なり、DOMに変更がある時にはリアルタイムで中身が変わる?）
                let elements = document.getElementsByTagName('tr');

                //elementsのような配列風？オブジェクト（配列っぽいもの）を本当の配列にする（HTMLCollectionとは異なり静的なもの）
                elements = [].slice.call(elements);

                //２．id='a'をtdの親ノードのtrに追加
                e.target.parentNode.setAttribute("id", 'a')

                //３．Id='a'の要素
                let element = document.getElementById('a');

                //４．Id='a'の入った要素が配列の何番目かを取得
                let index = elements.indexOf(element) - 1;

                //５．toDoArr配列からId='a'の情報を削除
                toDoArr.splice(index, 1);

                //６．toDoリストを全て削除
                while (tBody.firstChild) tBody.removeChild(tBody.firstChild);

                ///////////////

                //７．toDoArr配列に格納したオブジェクトにIDを新たに振りなおしてループで出力
                for (let i = 0; i < toDoArr.length; i++) {
                    let obj = toDoArr[i];
                    //trノードを生成
                    let tr = document.createElement('tr');
                    //trノードをhtmlへ加える
                    tBody.appendChild(tr);

                    let tdId = document.createElement('td');
                    let tdCo = document.createElement('td');

                    tdId.textContent = i;
                    tdCo.textContent = obj['comment'];
                    tr.appendChild(tdId);
                    tr.appendChild(tdCo);

                    //作業中と削除ボタンの追加
                    addButtons(tr);
                }
            }
        });
    }

    //課題1.toDoリストに加える機能
    addToDo();
    //課題2.toDoリストを削除する機能
    deleteToDo();
}