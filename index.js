function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}


function increaseRankBy(n){
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i<list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML)+n
  }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')

}

/*
Define a function deepestChild() that pulls out the most deeply nested child
from div#grand-node. (Remember, you can iterate over elements and call
querySelector() and querySelectorAll() on them. This is challenging to
implement correctly, but not beyond your ability!)
*/
