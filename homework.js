//1---------------------------------------------------------------->
var arrElements = [];
for (var i = 0; i < document.body.childNodes.length; i++) {
	if (document.body.childNodes[i].nodeType != 1) {
		continue;
	}
	arrElements.push(document.body.childNodes[i]);
}
console.log(document.body.childNodes);
console.log(arrElements);

var arrDelElements = [];
for (var i = 0; i < document.body.childNodes.length; i++) {
	if (document.body.childNodes[i].nodeType != 8) {
		continue;
	}
	arrDelElements.push(document.body.childNodes[i]);
}
console.log(document.body.childNodes);
console.log(arrDelElements);
//2------------------------------------------------------------------>
var enterID = prompt ('enter id (block && link && list)','block');
	if(enterID == 'list'){
		var enterListNumber = +prompt('Enter nuber list element (1 && 2 && 3 && 4 && 5)','1');
		enterListNumber -= 1;
}
var change = prompt ('what do you want to change? a - attribute, s - style', 'a');
	if( change == 'a'){
		var changeAtr = prompt('What do you want to do?(install, delete, edit)','install');
		function argForElement(id, chanAtr){
			if(chanAtr == 'install' || chanAtr == 'edit'){
				var nameAtr = prompt ('Enter attribute name','Test');
				var valueAtr = prompt ('Enter attribute value', 123);
						if(id == 'list'){
							document.getElementById(id).children[enterListNumber].setAttribute(nameAtr, valueAtr);
							console.log(document.body.innerHTML);
						}else{
							document.getElementById(id).setAttribute(nameAtr, valueAtr);
							console.log(document.body.innerHTML);
						}
				}else if(chanAtr == 'delete'){
					var nameAtrFromDel = prompt ('Enter attribute name from Delete', 'id');
					document.getElementById(id).removeAttribute(nameAtrFromDel);
					console.log(document.body.innerHTML);
				}
		}
		argForElement(enterID, changeAtr);
	}else if(change == 's'){
		var style = prompt('Enter  style for Element','background-color: red;');
		function styleForElement (id) {
			if(id == 'list'){
				document.getElementById(id).children[enterListNumber].style.cssText = style;
			}else{
				document.getElementById(id).style.cssText = style;
			}
		}
		styleForElement(enterID);
	}


//Просьба - залейте на репощиторий и в настройках включите доступность на мастер бранч(блок GithubPages) - и скиньте ссылку по которой доступен реп
// чтобы я мог не стягивая репозиторий сразу смотреть.

/*1 Напишите функции :
- 1 - удаляет из ДОМ структуры все узлы которые не елемент(метод removeChild), возращает массив елементов.
- 2 - возвращает в виде массива узлы только типа коммент
*/
/*2
Создайте div, a, ul>li*5
у дива, ссылки и ул есть ИД
Напишите функцию
- 1 - выводит промпт с вопросом "с каким элементом вы хотите взаимодействовать"(напишите перечень ид, я буду пробовать), вы вводите ид получаете к нему доступ
(если это список - доп вопрос к какому по счёту элементу списка применятся действия)
следущий промпт  спрашивает "что вы хотите изменить (a - аттрибут, s - стили)"
- для аатрибута - спрашивает - что вы хотите сделать(установить, удалить, отредактировать) - если установить или редактировать - то 2 промпта спрашивают имя атрибута и значение, для удаления только имя
- для стилей - промпт принимает значение как и аттрибут style , т.е. 'width:20px;height:20px' и т.д. - как реализовывать - на ваше усмотрение
*/
