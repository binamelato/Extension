document.onreadystatechange = function(){
if(document.readyState === 'complete'){
	var urlt = document.location.href, cult = urlt.substring(0,54), bult = urlt.substring(0,51), dult = urlt.substring(0,41), lult = urlt.substring(0,23), flt = urlt.substring(0,69), piolt = urlt.substring(0,63), wiol = urlt.substring(0,78), himp = urlt.substring(0,62), biult = urlt.substring(0,358), biulc = urlt.substring(0,624), ymis = urlt.substring(0,60);
	///====== IDEAL ===== ///
	/*
	функция общая
	1. передаем в функцию: ссылку, название хранилища функций, параметр функции,
	внутри основной функции срабатывает функция "сделать"
	2. передаем параметр функции и состояние функции
	*/
	///====== IDEAL ===== ///
/*
	//if(lult == 'https://my2.bookvoed.ru'){// Добавление ссылок на реестры в шапку
	if(ymis == 'https://my2.bookvoed.ru/shop/logist/receive/storage?sending='){// Простава для приемки всех позиций в плюс (Приемщики)
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[0];
			if(par == 1){
			/*
			var punkt = document.querySelector("#navigator");
			if(punkt){
				fikl = punkt.firstChild;
				fikl.insertAdjacentHTML("beforeEnd", "<a id='bilsd' style='display:inline-block;line-height:2;padding:0 .5em;margin:0 1px 1px 0;font-weight:600;' href='https://my2.bookvoed.ru/shop/delivery/registries/sendings?status=4871'>Реестры Отгрузки</a><a id='bilsk' style='display:inline-block;line-height:2;padding:0 .5em;margin:0 1px 1px 0;font-weight:600;' href='https://my2.bookvoed.ru/shop/delivery/registries/sendings?status=4871&is_ems=1'>Реестры EMS</a>");
			}
			*//*
			var punkt = document.querySelector("table");
			punkt.insertAdjacentHTML("beforebegin", "<button id='zama'>Ебнуть все в плюс</button>");
			var zama = document.querySelector("#zama");
			zama.addEventListener("click", function(){
				banduge = document.querySelectorAll('input[title=принято]'); //_received
				for (var i =0, otch4=banduge.length; i< otch4; i++){
					gog = banduge[i];
					fryt = gog.parentElement.parentElement;
					sdopi = fryt.querySelector('input[title=утеряно]');
					sdopi.value = '';
					gog.value = 1;
				}
			});
			}
		}
	});
	}*/
	if(dult == 'https://my2.bookvoed.ru/shop/logist/recei'){
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[0];
			if(par == 1){
				kakiku = document.querySelectorAll("tbody tr");
				for (var i =0, forst=kakiku.length; i< forst; i++){
				noxsa = kakiku[i];
					sakiku = noxsa.querySelector("td:nth-child(12)");
					sfuly = sakiku.querySelectorAll("select").length;
					if(sfuly >= 4){ 
						sakiku.insertAdjacentHTML("afterbegin", "<div><input class='syiyi' type='button' style='margin-top:3px;background-color:#1ebde1;color:#fff;margin-bottom:5px;padding:0px;width:120px;' value='По первому браку'></div>");
					}
				}
				olert = document.querySelectorAll("input[class^='syiyi']");
					for (var b =0, forbt=olert.length; b< forbt; b++){
						olert[b].addEventListener("click", function(){
							gihty = this.parentElement.parentElement;
							kon4i = gihty.querySelector("input[id$='_received']");
							kon7i = gihty.querySelector("input[id$='_defected']");
							kon9i = gihty.querySelector("input[id$='_lost']");
							boik4 = kon4i.getAttribute("name");
							boik7 = kon7i.getAttribute("name");
							boik9 = kon9i.getAttribute("name");
							zoik4 = kon4i.value;poult4 = boik4.substring(22); //принято
							zoik7 = kon7i.value;poult7 = boik7.substring(22); //брак
							zoik9 = kon9i.value;poult9 = boik9.substring(22); //потеряно
							tilor = gihty.querySelectorAll("select");
							uilor = tilor.length;
							disab = gihty.querySelectorAll("select[name$='defected_reason[]']");
							if(zoik7>0){
								console.log("Брака - "+zoik7);
								valdyt = tilor[1].value;
								for (var v =1, forbt=zoik7; v<= forbt; v++){ 
									biur = disab[v];
									biur.value = valdyt;
								}
							}
							/* Проставляет для остатков пересорт*/
							if(zoik9>0){
								console.log("Потерь - "+zoik9);
								pi4ito = Number(zoik7)+2;
								for (var xc =pi4ito, kokie=uilor; xc<= kokie; xc++){ 
									liur = tilor[xc];
									viytr = 1;
									liur.value = viytr;
								}
							}
						});
					}
			}
			}
	});
	}
	if(cult == 'https://my2.bookvoed.ru/shop/logist/sheet/print?sheet='){/* Печать накладных для сборщиков */
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[1];
			if(par == 1){
		var poza = document.querySelectorAll('h3'), telt = [];
			for (var i =0, otch3=poza.length; i< otch3; i++){
				nomb = poza[i];
				gray = nomb.innerText;
				telt.push(gray);
				itog = telt.join('.');
			}
		var ordersList = itog;
		buttin = document.querySelectorAll('button');
		for (var i =0, otch03=buttin.length; i< otch03; i++){
				brbut = buttin[i];
				brbut.setAttribute('style', 'padding:5px 10px;border:#777777 solid 1px;border-radius:3px;background-color:#ffffff;cursor:pointer;box-sizing:border-box;');
			}
		document.body.innerHTML = document.body.innerHTML.replace('Вернуться</button>', '<span>Вернуться</span></button><a href="https://my2.bookvoed.ru/shop/logist/packing/prepare/print?orders='+ordersList+'&backlink=https%3A%2F%2Fmy2.bookvoed.ru%2Fshop%2Flogist%2Fsheets" style="margin-left:10px;"><button style="color:#ffffff;padding:5px 10px;border:#754a4a solid 1px;border-radius:3px;background-color:#754a4a;cursor:pointer;box-sizing:border-box;">Сборочник</button></a>');
			}
		}
	});
	}
	if(cult == 'https://my2.bookvoed.ru/shop/logist/sheet?delivery=440'){// Таймер автообновления для сборки
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[2];
			if(par == 1){
			boer = document.querySelector('#content');
			boer.insertAdjacentHTML("afterbegin", "<div id='ngeer'><div style='width:200px;height:70px;'><select id='pitik' style='padding:.3em .5em;font-size:14px;font-stretch:expanded;width:200px;color:#929292;border:1px solid #929292;'><option value='timer' selected disabled>Выберите частоту обновления</option><option value='2'>2 сек.</option><option value='5'>5 сек.</option><option value='10'>10 сек.</option><option value='30'>30 сек.</option><option value='45'>45 сек.</option><option value='60'>1 мин.</option></select><input id='sufil' type='button' value='Запустить / Остановить таймер' style='width: 200px;color:#ffffff;padding:10px 5px;display:block;margin:3px 0px;border:#7609d0 solid 1px;border-radius:3px;background-color:#7609d0;cursor:pointer;box-sizing:border-box;margin-right:0px;position: absolute;text-align:center;'></div></div>");
			buner = document.querySelector('#sufil'), cleart = document.querySelector('.cleart'), pomag = document.querySelector('#pomag'), vakol = document.querySelector('#vakol'), mikk = document.querySelector('#pitik'), binf = 0, tikk = 1000;
			mikk.addEventListener("change", function(){
				tikk = this.value*1000;
			});
			buner.addEventListener("click", function(){
				if(binf == 0){
					binf = binf + 1;
					timdu = setInterval(() => elemUpdate('div#form-table'), tikk);
					console.log('timer vkl');
					this.style.backgroundColor ='#d00965';
				}else{
					binf = binf - 1;
					clearInterval(timdu);
					console.log('timer vikl');
					this.style.backgroundColor ='#7609d0';
				}
			});
		}
		}
	});		
	}
	if(flt == 'https://my2.bookvoed.ru/shop/logist/send/orders/selfdelivery?type=spb'){//Подсветка старых магазиных заказов
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[3];
			if(par == 1){
		voxl = document.querySelectorAll('td:nth-child(4)');
		for (var i =0, pedos=voxl.length; i< pedos; i++){// красим вчерашние заказы
			koki = voxl[i];
			moki = koki.innerText;
			daday = moki.substr(0,2);
			tData();
			if(daday < bijan){
				koki.setAttribute('style','background-color: #e8dd11;');
			}
		}
		kokis = document.querySelectorAll('td:nth-child(3)');
		dnische = 0;
		for (var j =0, ert=kokis.length; j< ert; j++){
			tata = kokis[j];
			naki = tata.innerText;
			if(naki == 'Да'){
				dnische = dnische +1;
				viok = tata.parentElement;
				viok.setAttribute('style','background-color: #23d028;');
			}
		}
			if(dnische > 0){
				alert('В списке есть заказы с меткой Да ('+dnische+')');
			}else{
				alert('В списке нет заказов с меткой Да ('+dnische+')');
			}
		}
		}
	});
	}
	if(flt == 'https://my2.bookvoed.ru/shop/logist/send/orders/selfdelivery?type=reg'){//Подсветка старых рег заказов
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[3];
			if(par == 1){
		voxl = document.querySelectorAll('td:nth-child(4)');
		console.log(maner);
		for (var i =0, pedos=voxl.length; i< pedos; i++){// красим вчерашние заказы
			koki = voxl[i];
			moki = koki.innerText;
			daday = moki.substr(0,2);
			tData();
			console.log(daday);
			if(daday < bijan){
				koki.setAttribute('style','background-color: #e8dd11;');
			}
		}
		kokis = document.querySelectorAll('td:nth-child(3)');
		dnische = 0;
		for (var j =0, ert=kokis.length; j< ert; j++){
			tata = kokis[j];
			naki = tata.innerText;
			if(naki == 'Да'){
				dnische = dnische +1;
				viok = tata.parentElement;
				viok.setAttribute('style','background-color: #23d028;');
			}
		}
			if(dnische > 0){
				alert('В списке есть заказы с меткой Да ('+dnische+')');
			}else{
				alert('В списке нет заказов с меткой Да ('+dnische+')');
			}
		}
		}
	});
	}
	if(himp == 'https://my2.bookvoed.ru/shop/logist/send/orders/print?sending='){
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[5];
			if(par == 1){
		voxl = document.querySelectorAll('tr > td:nth-child(2)');
		for (var i =0, pedos=voxl.length; i< pedos; i++){
			koki = voxl[i];
			koag = koki.innerText;
			bindaf = Number(koag);
			if(isNumber(bindaf) && bindaf > 10000){
				koki.innerHTML = koki.innerHTML.replace(koag, '<a href="https://my2.bookvoed.ru/shop/order?id='+koag+'">'+koag+'</a>');
			}
		}
		}
		}
	});
	}
	if(cult == 'https://my2.bookvoed.ru/shop/logist/sheet/confirm?shee'){
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[5];
			if(par == 1){
			birds = document.querySelector('table');
			diuy = birds.querySelectorAll('input[name^="table_checkbox_"]');
			pinda = birds.querySelector('tr > th:nth-child(1)');
			console.log(pinda);
			//console.log(diuy);
			pinda.insertAdjacentHTML("afterBegin", "<input type='checkbox' id='alkaza' style='margin-top: 6px;height: 20px;width: 20px;' />");
			alkaza = document.querySelector('#alkaza');
			alkaza.checked = true;
			alkaza.addEventListener("click", function(){
				if(!alkaza.checked){
					console.log(1);
					alkaza.checked = false;
					for (var i =0, siion=diuy.length; i< siion; i++){
						zoki = diuy[i];
						zoki.checked = false;
						console.log(zoki);
					}
				}else{
					console.log(0);
					alkaza.checked = true;
					for (var j =0, siion=diuy.length; j< siion; j++){
						boki = diuy[j];
						boki.checked = true;
					}
				}
			});
			}
		}
	});
	}
	if(cult == 'https://my2.bookvoed.ru/shop/logist/return?type=reject'){/* Чистка полок [Отказы] */
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
		if(maner == undefined){
			console.log('Настройки пустые');
		}else{
			par = maner[6];
			if(par == 1){
		tasa=[];
		tData();
		toma = document.getElementsByTagName('<h2>').innerText;
			if(toma == 'Возратов нет'){
			}else{
				document.body.innerHTML = document.body.innerHTML.replace('<h2>Возвраты <a href="javascript:print()">распечатать</a></h2>', '<h2>Возвраты <a href="javascript:print()">распечатать</a></h2><input type="button" class="killkiller" value="Заполнить все" style="width:100px;color: #ffffff;padding:5px 5px;display:block;margin:7px 0px;border:#484848 solid 1px;border-radius:3px;background-color: #000000;cursor:pointer;box-sizing:border-box;position:absolute;right:20px;"><input disabled type="button" class="butrack" value="Частично" style="width:70px;color:#fff;padding:5px 5px;display: block;margin:7px 0px;border:#000 solid 1px;border-radius:3px;background-color:#b1b1b1;cursor:pointer;box-sizing:border-box;position:absolute;right:130px;"><input type="button" class="btyk" value="Дырки" style="width:60px;color:#000;padding:5px 5px;display: block;margin:7px 0px;border:#000 solid 1px;border-radius:3px;background-color:#fff;cursor:pointer;box-sizing:border-box;position:absolute;right:210px;"><a id="deldyr" style="width:70px;color:#000;padding:5px 5px;display:block;margin:7px 0px;border:#000 solid 1px;border-radius:3px;background-color:#fff;cursor:pointer;box-sizing:border-box;margin-right:0px;position: absolute;right:280px;text-align:center;">Del DyRb</a><a id="statz" style="width:90px;color:#ffffff;padding:5px 5px;display:block;margin:7px 0px;border:#7609d0 solid 1px;border-radius:3px;background-color:#7609d0;cursor:pointer;box-sizing:border-box;margin-right:0px;position: absolute;right:360px;text-align:center;">Save Stats</a><input type="button" id="koka" style="width:80px;color:#ffffff;padding:5px 5px;display:block;margin:7px 0px;border:#939393 solid 1px;border-radius:3px;background-color:#b1b1b1;cursor:pointer;box-sizing:border-box;margin-right:0px;position: absolute;right:460px;text-align:center;" value="Do Check" disabled />');
		vkla = document.querySelector(".killkiller"), sais = document.querySelector(".butrack"), bytik = document.querySelector(".btyk"), dedyrb = document.querySelector("#deldyr");
		biok=document.querySelector("#content"), okek = document.querySelector("#koka");
		kiok=biok.childNodes[3];
		vkla.addEventListener("click", function(){//Для всех
			bish = document.querySelectorAll('input[id^="form-table-table_amount_"]');
			for (var i =0, otch4=bish.length; i< otch4; i++){
				gog = bish[i];
				penodo = gog.parentElement.parentElement.parentElement;
				vjsh = penodo.querySelector('td:nth-child(9)').innerHTML;
				gog.value = vjsh;
			}
		});
		bytik.addEventListener("click", function(){//турки
			uti = document.querySelectorAll('input[id^="form-table-table_amount_"]');
			for (var i =0, otch4=uti.length; i< otch4; i++){
				goi = uti[i];
				penodi = goi.parentElement.parentElement.parentElement;
				vjshi = penodi.querySelector('td:nth-child(4)').innerText;
				console.log(vjshi);
				if(vjshi != '—'){
					penodi.remove();
				}
			}
		});
		dedyrb.addEventListener("click", function(){//удалить со страницы турки
		sais.removeAttribute("disabled");
		sais.setAttribute("style", "width:70px;color:#fff;padding:5px 5px;display: block;margin:7px 0px;border:#000 solid 1px; border-radius:3px;background-color:#4fbba0; cursor:pointer;box-sizing:border-box;position:absolute;right:130px;");
			puti = document.querySelectorAll('td:nth-child(4)');
			for (var i =0, otchp=puti.length; i< otchp; i++){
				gopo = puti[i];
				venodi = gopo.innerText;
				if(venodi == '—'){
					gopo.parentElement.remove();
				}
			}
		});
		sais.addEventListener("click", function(){//Для Частичного
			this.setAttribute('disabled','disabled');
			okek.removeAttribute("disabled");
			okek.setAttribute("style", "background-color:#eb408f;width:80px;color:#fff;padding:5px 5px;display:block;margin:7px 0px;border:#939393 solid 1px;border-radius:3px;cursor:pointer;box-sizing:border-box;margin-right:0px;position: absolute;right:460px;text-align:center;");
			tuck = document.querySelectorAll('td:nth-child(5)');
			for(var i =0, otchl=tuck.length; i< otchl; i++){
				gox = tuck[i];
				tasa.push(gox.innerText);
			}
			joss = tasa.filter((val, i, ar) => ar.indexOf(val) === i);
			tgeil=Math.ceil(joss.length/15);
			heift=16*tgeil;
			kiok.insertAdjacentHTML("beforebegin",'<div id="pandes" style="width:1200px;margin-top:10px;height:'+heift+'px;"></div><div></div>');
			for(var j =0, mocc=joss.length; j< mocc; j++){
				cocc = joss[j];
				binm = cocc;
				gizh = document.querySelector('#pandes');
				gizh.insertAdjacentHTML("beforeEnd", "<div style='float:left;width:80px;'><label><input type='checkbox' value='"+binm+"' class='plk_s'>  "+binm+"</label></div>"); 
			}
			
			document.addEventListener("change", function(){//чекаем по чекбоксу
			bazha = event.target;
			coympl(bazha);
			});
			okek.addEventListener("click", function(){//заполняем все чеки, до активного 
				panda = document.querySelector('#pandes');
				selebo = panda.querySelectorAll('input:checked');
				drota = selebo.length;
				if(drota == 1){
					doza = selebo[0].value;
					console.log(doza);
					konsulo = panda.querySelectorAll('input');
					gadera = [ ...konsulo ].findIndex( o => o.value === doza);
					console.log(gadera);
					for (var i =0, oity=konsulo.length; i< gadera; i++){
						sim = konsulo[i];
						sim.checked = true;
						coympl(sim);
					}
				}else{
					alert('Конечным значением интервала должна быть одна ячейка');
				}
			});
		});
		
		var sgik = 0, benam = [], stll = document.querySelector("#statz");
		stll.addEventListener("click", function(){
			bishd = document.querySelectorAll('input[id^="form-table-table_amount_"]');//подсчет товара
			for (var i =0, otcp=bishd.length; i< otcp; i++){
				sos = bishd[i];
				var bisk = Number(sos.value);
				if(bisk >= 1){
					sgik = sgik+bisk;
					tand = sos.parentElement.parentElement.parentElement;
					koldf = tand.querySelector('td:nth-child(2)');
						pox = koldf.innerText;
						benam.push(pox);
				}
			}
			banam = benam.filter((val, i, ar) => ar.indexOf(val) === i);
			var kkj = sgik;
			var zeuf = banam.length;
			if(zeuf == 0 || zeuf >= 5){pekk = " Заказов";}
			if(zeuf == 1){pekk = " Заказ";}
			if(zeuf > 1 && zeuf < 5){pekk = " Заказа";}
			if(kkj == 0 || kkj >= 5){pzkk = " Позиций";}
			if(kkj == 1){pzkk = " Позиция";}
			if(kkj > 1 && kkj < 5){pzkk = " Позиции";}
			mydata = 'data:application/txt;charset=utf-8,'+encodeURIComponent(kkj+pzkk+", "+zeuf+pekk);
			this.href = mydata;
			this.download = foday+'.txt';
			sgik = 0;
			banam = 0;
		});
		ojp = document.querySelectorAll('input[name^="table_amount_"]');//Для навигации сверху-вниз стрелкой
			for(var i = 0; i < ojp.length; i++){
				gofr = ojp[i];
				gofr.setAttribute('class','dant'+i);
				to_ii = document.querySelector(".dant"+i); 
				to_ii.addEventListener("keydown", function(e){
				if(e.keyCode == 40){
					teky = this.getAttribute('class');
					f = teky.substring(4);
					gz = Number(f)+1;
					if(gz < ojp.length){
					yach = document.querySelector(".dant"+gz).focus();
					}
				}
				if(e.keyCode == 38){
					teky = this.getAttribute('class');
					f = teky.substring(4);
					gz = Number(f)-1;
					if(gz >= 0){
					yach = document.querySelector(".dant"+gz).focus();
					}
				}
				});
			}
			}
		}
		}
	});
	}
	if(dult == 'https://my2.bookvoed.ru/shop/search/diffs'){/* Создание Актов ИМ - СРХ */
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[7];
			if(par == 1){
		var gogo = document.querySelector('#form-from-input'), gege = document.querySelector('#form-to-input'), sklad = document.querySelector('#form-shop-input'), cheak = document.querySelector('#form-excel'), hestys = document.querySelector('head');
		hestys.insertAdjacentHTML("beforeEnd", "<style>@media print{th, td{vertical-align:middle;text-align:center !important}thead{background-color:#ccc;}table{border:1px solid #ccc;font-size:10px !important;}a[href]{color:#222222;}table#nepoi{border:0px solid #fff;}#nepoi th, #nepoi td{border:0px solid #fff !important;height:14px;}#pigry, #otgry{text-align:right !important;}#zapity{font-weight:600;font-size:14px;}thead th{background:#ccc !important;}#cdats,#pdats,#pfam{display:none !important;}}</style>");
		document.querySelector('#navigator').insertAdjacentHTML("beforeEnd", "<div id='ngen' style='width:100%;height:30px;'><input type='button' class='sedel' value='Сохранить' style='display:none;background:rgb(136 71 177);border:1px solid rgb(136 71 177);padding:7px 7px;color: rgb(255, 255, 255);border-radius:3px;font-weight:600;'></div>");
		tData();
		gogo.value = today, gege.value = today, sklad.value = 83;
		binv = document.querySelector('#form-submit-input');
		niuy = binv.parentElement;
		samsn = document.querySelector('small').parentElement;
		vilae = samsn.innerText
		valueSplit = vilae.split(' ');
		phFam = valueSplit[0];
		phNam = valueSplit[1];
		phNam2 = phNam.substring(0,1);
		niuy.insertAdjacentHTML("beforeEnd", "<input type='button' class='viex2' value='Ускорение' style='background:#1684e3;border:1px solid #1684e3;color:rgb(255, 255, 255);'><input type='button' class='viex3' value='Потери СХ' style='background:#e3b716;border:1px solid #e3b716;color:rgb(255, 255, 255);'>");
		bunni = document.querySelector('.viex2'),bussi = document.querySelector('.viex3');
		bussi.addEventListener("click", function(){
			gogo.value = foday, gege.value = foday, sklad.value = 61;
		});
		bunni.addEventListener("click", function(){
			tabe = document.querySelector('table').innerHTML; 
			bian = document.querySelector('#content');
			bian.innerHTML = '';
			bian.insertAdjacentHTML("beforeEnd", "<div><table id='nepoi'><tbody><tr><td style='width:48px;'></td><td style='width:42px;'></td><td id='zapity' colspan='2'>Передача актов разногласий от ИЛ на СРХ</td><td> </td><td> </td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td style='width:638px;'></td><td style='width:236px;'>Дата актов:</td><td id='udata' style='width:114px;'></td><td><input type='button'  id='cdats' value='clearData'></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div><div><table style='font-size:9px;' border='1' id='dratal'>"+tabe+"</table></div><div><table id='nepoi'><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td style='width:48px;'></td><td style='width:42px;'></td><td style='width:638px;'></td><td style='width: 238px;'>Дата передачи:</td><td id='updata'></td><td><input type='button'  id='pdats' value='clearData'></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td colspan='2' id='otgry' style='width:638px;'>Отгрузил________________________</td><td style='width:112px;' id='phNam'></td><td ><input type='button'  id='pfam' value='clearData'></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td colspan='2' id='pigry' style='width:638px;'>Принял_________________________</td><td></td><td id='udata'></td></tr></tbody></table></div>");
			buzz = document.querySelector('#dratal'), usida = document.querySelector('#phNam'), ubida = document.querySelector('#updata'), upipa = document.querySelector('#udata'), cdats = document.querySelector('#cdats'), pfam = document.querySelector('#pfam');
			usida.innerHTML = phFam +' '+ phNam2+'.';
			ubida.innerHTML = foday;
			upipa.innerHTML = today;
			stoka = buzz.querySelectorAll('tr');
			for (var i =0, pedos=stoka.length; i< pedos; i++){
				koki = stoka[i];
				koki.classList.add('str'+i);
				stolt = koki.querySelectorAll('tr.str'+i+' th');
					for (var k =0, letos=stolt.length; k< letos; k++){
						loti = stolt[k];
						loti.classList.add(i+'stb'+k);
					}
				stolb = koki.querySelectorAll('tr.str'+i+' td');
					for (var j =0, ledos=stolb.length; j< ledos; j++){
						loki = stolb[j];
						loki.classList.add(i+'stb'+j);
					}
			}
			daron = document.querySelector('#dratal');
			oian = document.querySelector('h2').remove();
			stoka = daron.querySelectorAll('tr');
			for (var i =0, pedos=stoka.length; i< pedos; i++){
				koki = stoka[i];
				stolt = koki.querySelectorAll('tr.str'+i+' th');
					for (var k =0, letos=stolt.length; k< letos; k++){
						loti = stolt[k];
						lotas = loti.getAttribute('class');
						if(lotas == i+'stb0'){loti.remove();
						}if(lotas == i+'stb1'){loti.remove();
						}if(lotas == i+'stb4'){loti.remove();
						}if(lotas == i+'stb5'){loti.remove();
						}if(lotas == i+'stb10'){loti.remove();
						}if(lotas == i+'stb11'){loti.remove();
						}if(lotas == i+'stb2'){bsz = loti.innerHTML;loti.remove();
						}if(lotas == i+'stb8'){loti.insertAdjacentHTML("afterEnd", '<th>'+bsz+'</th>');
						}if(lotas == i+'stb9'){
							bju = loti.innerText;
							if(bju != '1'){
								if(bju != 'Кол-во брак'){
								loti.parentElement.remove();
								}
							}
						}
					}
				stolb = koki.querySelectorAll('tr.str'+i+' td');
					for (var j =0, ledos=stolb.length; j< ledos; j++){
						loki = stolb[j];
						locas = loki.getAttribute('class');
						if(locas == i+'stb0'){loki.remove();
						}if(locas == i+'stb1'){loki.remove();
						}if(locas == i+'stb4'){loki.remove();
						}if(locas == i+'stb5'){loki.remove();
						}if(locas == i+'stb10'){loki.remove();
						}if(locas == i+'stb11'){loki.remove();
						}if(locas == i+'stb2'){bsx = loki.innerHTML;loki.remove();
						}if(locas == i+'stb8'){loki.insertAdjacentHTML("afterEnd", '<td>'+bsx+'</td>');
						}if(locas == i+'stb9'){
							bju = loki.innerText;
							if(bju == '' || bju == '0'){
								loki.parentElement.remove();
							}
						}
					}
			}
			table = daron;
			sortedRows = Array.from(table.rows).slice(1).sort((rowA,rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
			table.tBodies[0].append(...sortedRows);
			eorts = document.querySelector('.sedel');
			eorts.style.display = 'block';
			
			cdats.addEventListener("click", function(){
				upipa.innerHTML = '';
			});
			pdats.addEventListener("click", function(){
				ubida.innerHTML = '';
			});
			pfam.addEventListener("click", function(){
				usida.innerHTML = '';
			});
		});
		
		tosav = document.querySelector('.sedel');
		tosav.addEventListener("click", function(){
			var ttx = document.querySelector('#content').innerHTML;
			download(ttx, giday+'.xls');
		});
		}
		}
	});
	}
	if(cult == 'https://my2.bookvoed.ru/shop/logist/receive/pod?sendin'){// Приемка POD
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[8];
			if(par == 1){
		sipa = document.querySelector('#form-employee-input');
		sipa.value = 13553;
		sbutton = document.querySelectorAll("button");
		chrome.storage.sync.get(['miniv'], function(items){
			kaker=items.miniv;
			if(Array.isArray(kaker)){
				console.log('Массив существует');
			maner=kaker;
			Array.from(sbutton, el => el.addEventListener('click', e => {
			banch = e.target;
			voxv = banch.parentElement.parentElement.parentElement.parentElement;
			voxl = voxv.querySelector('td:nth-child(9)').innerHTML;
			if(voxl == 'К упаковке<br>самовывоз'){
				gogo = voxv.querySelector('td:nth-child(3)').innerText;
				maner.push(gogo);
			}
			bjkil = maner.filter((val, i, ar) => ar.indexOf(val) === i);
			chrome.storage.sync.set({'miniv':bjkil});
			}));
			}else{
				console.log('Массив не существует');
			kaker = [];
			maner=kaker;
			Array.from(sbutton, el => el.addEventListener('click', e => {
			banch = e.target;
			voxv = banch.parentElement.parentElement.parentElement.parentElement;
			voxl = voxv.querySelector('td:nth-child(9)').innerHTML;
			if(voxl == 'К упаковке<br>самовывоз'){
				gogo = voxv.querySelector('td:nth-child(3)').innerText;
				maner.push(gogo);
			}
			bjkil = maner.filter((val, i, ar) => ar.indexOf(val) === i);
			chrome.storage.sync.set({'miniv':bjkil});
			}));
			}
		});
		}
		}
	});
	}
	if(cult == 'https://my2.bookvoed.ru/shop/logist/confirmAndPack?del'){// Быстрое закрытие единичек POD
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[8];
			if(par == 1){
		vafa = document.querySelector('h2');
		vafa.insertAdjacentHTML("beforeEnd", "<a id='clele' style='cursor:pointer;'>Очистить Хранилище</a>");
		var koss = [];
		chrome.storage.sync.get(['miniv'], function(items){
			if(items == undefined){
				console.log('в сторадже ничего не сохранено');
			}else{
				var maner = items.miniv;
				for(index = 0; index < maner.length; ++index){
					var urlx = document.querySelectorAll('a[href="https://www.bookvoed.ru/book?axid='+maner[index]+'"]');
					for(var i = 0; i < urlx.length; i++){
						var tr_str = urlx[i].parentElement.parentElement;
						var chi_str = tr_str.querySelector('td:nth-child(2)').innerText;
						jiuy = tr_str.querySelector('input[name="table_checkbox_'+chi_str+'"]');
						jiuy.checked = true;
						if(jiuy.checked){
							koss.push(chi_str);
						}
					}
				}
				boss = koss.filter((val, i, ar) => ar.indexOf(val) === i);
				late = boss.join('.');
				gigs = document.querySelector('input[name="queue_ids"]');
				if(gigs){
					gigs.value = late;
				}
			}
		});
		vkla = document.querySelector("#clele");
		vkla.addEventListener("click", function(){
		colo = '';
		chrome.storage.sync.set({'miniv':colo});
			alert('Вы очистили хранилище данных.');
		});
		}
		}
	});
	}
	if(biulc == 'https://my2.bookvoed.ru/search?table%5Bforce%5D=1&results%5Btable%5D=2971&results%5Bsubs%5D%5B0%5D%5Blink%5D=4462&results%5Bsubs%5D%5B0%5D%5Btable%5D=1108&results%5Bsubs%5D%5B0%5D%5Bsubs%5D%5B0%5D%5Blink%5D=1684&results%5Bsubs%5D%5B0%5D%5Bsubs%5D%5B0%5D%5Btable%5D=173&results%5Bsubs%5D%5B0%5D%5Bsubs%5D%5B0%5D%5Bfilters%5D%5B0%5D%5Bfield%5D=0&results%5Bsubs%5D%5B0%5D%5Bsubs%5D%5B0%5D%5Bfilters%5D%5B1%5D%5Bfield%5D=174&results%5Bsubs%5D%5B0%5D%5Bfilters%5D%5B0%5D%5Bfield%5D=0&results%5Bsubs%5D%5B0%5D%5Bfilters%5D%5B1%5D%5Bfield%5D=5354&results%5Bfilters%5D%5B0%5D%5Bfield%5D=0&results%5Bfilters%5D%5B1%5D%5Bfield%5D=2977'){
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[9];
			if(par == 1){
			mazad = [];
			var ount = document.querySelector("#content");
			ount.insertAdjacentHTML("beforebegin", "<div><input id='sypnym' type='text' maxlength='12' style='height:22px;border-radius:3px;border-color:#1684e3;border:2px solid #1684e3;background-color:#efefef;'><input id='trah' type='button' value='+ Add' style='background:#1684e3;border:1px solid #1684e3;color:rgb(255, 255, 255);padding:5px 29px;margin:0px 10px;border-radius:3px;font-weight:600;'><input id='posos' type='button' value='Save' style='background:#cd0e66;border:1px solid #cd0e66;color:rgb(255, 255, 255);padding:5px 29px;margin:0px 10px;border-radius:3px;font-weight:600;'></div>");
			trah = document.querySelector("#trah"), posos = document.querySelector("#posos");
			suuk = document.querySelector("#sypnym");
			muuk = document.querySelector("#bar input");
			suuk.focus();
			suuk.addEventListener("change", function(){
				bafas = suuk.value;
				badas = bafas.substring(5,11);
				muuk.value = badas;
				muuk.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
				trah.removeAttribute('disabled');
				//muuk.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
				//muuk.dispatchEvent(new KeyboardEvent('keypress', { bubbles: true }));
				//muuk.dispatchEvent(new Event('input', { bubbles: true }));
				//muuk.dispatchEvent(new Event('change', { bubbles: true }));
				//muuk.submit();
			});
			trah.addEventListener("click", function(){
					rekre = document.querySelector("#results");
					rexre = rekre.querySelector("table");
					balls = rexre.querySelector("td:nth-child(4)").innerText; 
					trah.setAttribute('disabled','true');
					suuk.value = '';
					suuk.focus();
					mazad.push(balls);
			});
			posos.addEventListener("click", function(){
				zazad = [...new Set(mazad)];
				console.log(zazad);
				chrome.storage.sync.set({'asrhat':zazad});
				alert('Обработанно актов - '+zazad.length);
			});
			}
			}
	});
	}
	if(lult == 'https://my2.bookvoed.ru'){// Инструменты СХ/СРХ
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[9];
			if(par == 1){
			tData();
			dunt = document.querySelector("#navigator"),bioy = document.querySelector("head");
			if(dunt){
				fakl = dunt.firstChild;
				fakl.insertAdjacentHTML("beforeEnd", "<a id='ternsor' style='display:inline-block;line-height:2;padding:0 .5em;margin:0 1px 1px 0;font-weight:600;color:#e8a6ec;cursor:pointer;'>Обработка СХ_СРХ</a>");
			}
			pint = document.querySelector("#ternsor");
			if(pint){
			pint.addEventListener("click", function(){
				var burt = document.querySelector("#navigator-ishopLogist");
				var miyo = document.querySelector("#content");
				var bith = document.querySelector("h2");
				samsn = document.querySelector('small').parentElement;
				vilae = samsn.innerText
				valueSplit = vilae.split(' ');
				phFam = valueSplit[0];
				phNam = valueSplit[1];
				phNam2 = phNam.substring(0,1);
				if(burt){burt.remove();}
				if(burt){bith.remove();}
				miyo.innerHTML = '';
				miyo.insertAdjacentHTML("beforeend", "<div id='cre_pa' style='padding:.5em 1.5em .5em 1.5em;'><div id='le_do' style='display:table-cell;vertical-align:top;width:600px;'><div style='margin:auto;width:550px;'><p><h3 style='text-align:center;border-bottom:1px solid #ccc;color:#4d87c7;'>Акты СХ</h3></p></div><div style='margin:auto;width:550px;'><div style='display:inline-block;vertical-align:top;width:200px;max-height:500px;overflow-y:auto;'><input class='dant0'><input class='dant1'><input class='dant2'><input class='dant3'><input class='dant4'><input class='dant5'><input class='dant6'><input class='dant7'><input class='dant8'><input class='dant9'><input class='dant10'><input class='dant11'><input class='dant12'><input class='dant13'><input class='dant14'><input class='dant15'><input class='dant16'><input class='dant17'><input class='dant18'><input class='dant19'><input class='dant20'><input class='dant21'><input class='dant22'><input class='dant23'><input class='dant24'><input class='dant25'><input class='dant26'><input class='dant27'><input class='dant28'><input class='dant29'><input class='dant30'><input class='dant31'><input class='dant32'><input class='dant33'><input class='dant34'><input class='dant35'><input class='dant36'><input class='dant37'><input class='dant38'><input class='dant39'><input class='dant40'><input class='dant41'><input class='dant42'><input class='dant43'><input class='dant44'><input class='dant45'><input class='dant46'><input class='dant47'><input class='dant48'><input class='dant49'><input class='dant50'><input class='dant51'><input class='dant52'><input class='dant53'><input class='dant54'><input class='dant55'><input class='dant56'><input class='dant57'><input class='dant58'><input class='dant59'><input class='dant60'><input class='dant61'><input class='dant62'><input class='dant63'><input class='dant64'><input class='dant65'><input class='dant66'><input class='dant67'><input class='dant68'><input class='dant69'><input class='dant70'><input class='dant71'><input class='dant72'><input class='dant73'><input class='dant74'><input class='dant75'><input class='dant76'><input class='dant77'><input class='dant78'><input class='dant79'><input class='dant80'><input class='dant81'><input class='dant82'><input class='dant83'><input class='dant84'><input class='dant85'><input class='dant86'><input class='dant87'><input class='dant88'><input class='dant89'><input class='dant90'><input class='dant91'><input class='dant92'><input class='dant93'><input class='dant94'><input class='dant95'><input class='dant96'><input class='dant97'><input class='dant98'><input class='dant99'></div><div style='display:inline-block;vertical-align:top;width:340px;'><button id='splash'>Подготовить</button><button id='kasher'>Заполнить</button><button id='ytaher'> X </button><div style='width:340px;'><textarea id='dp1' style='resize:none;width:340px;height:94px;'></textarea><textarea id='dp2' style='resize:none;width:340px;height:94px;'></textarea><textarea id='dp3' style='resize:none;width:340px;height:94px;'></textarea><textarea id='dp4' style='resize:none;width:340px;height:94px;'></textarea><textarea id='dp5' style='resize:none;width:340px;height:94px;'></textarea></div></div></div></div><div id='re_do' style='display:table-cell;vertical-align:top;width:500px;'><div style='margin:auto;width:410px;'><p><h3 style='text-align:center;border-bottom:1px solid #ccc;color:#4d87c7;'>Интернет для СРХ</h3></p></div><div style='margin:auto;width:410px;'><div style='display:inline-block;vertical-align:top;width:200px;max-height:500px;overflow-y:auto;'><textarea id='mart0'style='margin:0px;height:490px;width:180px;overflow-y:auto;resize:none;overflow-x:hidden;'></textarea></div><div style='display:inline-block;vertical-align:top;width:210px;'><button id='mamash'>Подготовить</button><div style='width:220px;'><div id='ll1' style='display:table-cell;vertical-align:top;width:100px;'><table id='table1'><tbody></tbody></table><button id='c1stb'>Copy</button></div><div id='ll2' style='display:table-cell;vertical-align:top;width:100px;'><table id='table2'><tbody></tbody></table><button id='c2stb'>Copy</button></div></div><div><button id='kamute' style='width:100%;height:30px;'>Проверка</button></div></div></div></div></div></div>");
				document.querySelector('#navigator').insertAdjacentHTML("beforeEnd", "<div id='ngen' style='width:100%;height:30px;'><input type='button' class='sedem' value='Сохранить' style='display:none;background:rgb(136 71 177);border:1px solid rgb(136 71 177);padding:7px 7px;color: rgb(255, 255, 255);border-radius:3px;font-weight:600;margin-top:20px;'></div>");
			ytaher = document.querySelector("#ytaher"),kasher = document.querySelector("#kasher"),binda = document.querySelector("#splash"),sinka = document.querySelector("#mamash"),c1stb = document.querySelector("#c1stb"),c2stb = document.querySelector("#c2stb"),kaite = document.querySelector("#kamute");
			c1stb.setAttribute('style','display:none;'); 
			c2stb.setAttribute('style','display:none;'); 
			binda.setAttribute('style','color:#fff;padding:10px 30px;font-weight:bold;margin:0px 10px;border:#909090 solid 1px;border-radius:3px;background-color:#4d87cb;cursor:pointer;box-sizing:border-box;text-align:center;margin-bottom:10px;display:table-cell;');
			kasher.setAttribute('style','color:#fff;padding:10px 25px;font-weight:bold;border:#9fb5b4 solid 1px;border-radius:3px;background-color:#47cb8e;cursor:pointer;box-sizing:border-box;text-align:center;margin-bottom:10px;display:table-cell;'); 
			ytaher.setAttribute('style','color:#545454;padding:10px 10px;border:#bbbbbb solid 1px;border-radius:3px;background-color:#fff;cursor:pointer;box-sizing:border-box;text-align:center;margin:0px 10px;margin-bottom:10px;display:table-cell;'); 
			sinka.setAttribute('style','width:200px;color:#828282;padding:10px 5px;font-weight:bold;display:block;margin:0px 40px;margin-top:10px;border:#909090 solid 1px;border-radius:3px;background-color:#eaea82;cursor:pointer;box-sizing:border-box;margin-right:0px;text-align:center;margin:auto;margin-bottom:10px;'); 
			dp1=[],dp2=[],dp3=[],dp4=[],dp5=[];
			dh1=[],dh2=[];
			iin = document.querySelectorAll('input[class^="dant"]');
			for(var i = 0; i < iin.length; i++){
				gofr = iin[i];
				gofr.setAttribute('style', 'height:25px;text-align:right;border:1px solid #ccc;margin:1px;');
				gofr.setAttribute('maxlength', '10');
				gofr.setAttribute('placeholder', 'Номер журнала '+i);
				bg = ".dant"+i;
				to_ii = document.querySelector(".dant"+i); 
				to_ii.addEventListener("keydown", function(e){
				if(e.keyCode == 40){
					teky = this.getAttribute('class');
					f = teky.substring(4);
					gz = Number(f)+1;
					if(gz < iin.length){
					yach = document.querySelector(".dant"+gz).focus();
					}
				}
				});
			}
			ytaher.addEventListener("click", function(){
				chrome.storage.sync.get(['asrhat'], function(items){
				var pixxa = items.asrhat;
				if(pixxa == undefined || pixxa == ''){
					alert('Список журналов уже зачищен');
				}else{
					cash = '';
					chrome.storage.sync.set({'asrhat':cash});
					alert('Список журналов зачищен');
				}
				});
			});
			kasher.addEventListener("click", function(){
				chrome.storage.sync.get(['asrhat'], function(items){
				var picca = items.asrhat;
				if(picca == undefined || picca == ''){
					alert('В базе отсутствуют какие-либо журналы');
				}else{
					jiklo = picca.length;
					vever = document.querySelectorAll('input[class^="dant"]');
					for(var l = 0; l < jiklo; l++){
						document.querySelector('.dant'+l).value = picca[l];
					}
				}
				});
			});
			c1stb.addEventListener("click", function(){
				staba1 = iyi.substr(0,187);
				dummy = document.createElement("textarea");
				document.body.appendChild(dummy);
				dummy.value = staba1;
				dummy.select();
				document.execCommand("copy");
				document.body.removeChild(dummy);
				stabal.print();
			});
			c2stb.addEventListener("click", function(){
				staba2 = iyi.substr(187,376);
				summy = document.createElement("textarea");
				document.body.appendChild(summy);
				summy.value = staba2;
				summy.select();
				document.execCommand("copy");
				document.body.removeChild(summy);
			});
			kaite.addEventListener("click", function(){
				tim = document.querySelector('#mart0').value;
				buj = tim.substr(0,376);
				piq = tim.replace(/\n/g,',');
				dummy = document.createElement("textarea");
				document.body.appendChild(dummy);
				dummy.value = piq;
				dummy.select();
				document.execCommand("copy");
				document.body.removeChild(dummy);
				alert('Итоговые данные скопированы');
			});
			sinka.addEventListener("click", function(){ //интернет - СРХ
				bioy.insertAdjacentHTML("beforeEnd", "<style>@media print{th, td{vertical-align:middle;text-align:center !important}thead{background-color:#ccc;}table{border:0px solid #ccc;font-size:14px !important;}a[href]{color:#222222;}table#nepoi{border:0px solid #fff;}#nepoi th, #nepoi td{border:0px solid #fff !important;height:14px;}#pigry, #otgry{text-align:right !important;}#zapity{font-weight:600;font-size:14px;}thead th{background:#ccc !important;}#rdats,#kdats,#kfam{display:none !important;}}</style>");
				eortt = document.querySelector('.sedem');
				eortt.style.display = 'block';
				jin = document.querySelector('#mart0').value;
				cian = document.querySelector('#content');
				cian.innerHTML = '';
				iyi = jin.replace(/JS/g,'ЖТ');
				pio1 = iyi.split('\n');
				sbore = pio1.filter((val, i, ar) => ar.indexOf(val) === i);
				dadlit = sbore.length;
				cian.insertAdjacentHTML("beforeEnd", "<div><table id='nepoi'><tbody><tr><td style='width:48px;'></td><td style='width:42px;'></td><td id='zapity' colspan='2'>Реестр накладных переноса с Интернет на СРХ</td><td> </td><td> </td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td style='width:638px;'></td><td style='width:236px;'>Дата создания:</td><td id='udata' style='width:114px;'>"+foday+"</td><td><input type='button' id='kdats' value='clearData'></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div><div><table style='font-size:12px;' border='1' id='dratal'><thead><tr><th></th><th>№</th><th>Журнал</th><th></th><th>№</th><th>Журнал</th></tr></thead><tbody id='garay'></tbody></table></div><div><table id='nepoi'><tbody><tr><td></td><td>Итого:</td><td><div style='text-align:left;font-size:20px;' id='kokoim'></div></td><td></td><td></td><td></td></tr><tr><td style='width:48px;'></td><td style='width:42px;'></td><td style='width:638px;'></td><td style='width: 238px;'>Дата передачи:</td><td id='updata'>"+foday+"</td><td><input type='button' id='rdats' value='clearData'></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td colspan='2' id='otgry' style='width:638px;'>Отгрузил________________________</td><td style='width:112px;' id='phNam'></td><td ><input type='button' id='kfam' value='clearData'></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td colspan='2' id='pigry' style='width:638px;'>Принял_________________________</td><td></td><td id=''></td></tr></tbody></table></div>");
				//
				kokoim = document.querySelector('#kokoim')
				kokoim.innerHTML = dadlit;
				sikj = Math.ceil(dadlit/2);
				if(dadlit % 2 == 0){
					lylyr = (dadlit-sikj);
				}else{
					lylyr = (dadlit-sikj)+1;
				}
				for(var x = 0; x <= (sikj-1); x++){
					lalp = sbore[x];
					lals = sbore[x+lylyr];
					if(lals == undefined || lals == '' || !lals){
						lals = '';
					}					
					gyuo = document.querySelector('#garay');
					gyuo.insertAdjacentHTML("beforeEnd", "<tr><td></td><td>"+(x+1)+"</td><td>"+lalp+"</td><td></td><td>"+(x+lylyr+1)+"</td><td>"+lals+"</td>");
				}
			rdats = document.querySelector('#rdats'),kdats = document.querySelector('#kdats'),udats = document.querySelector('#updata'),udals = document.querySelector('#udata'),toida = document.querySelector('#phNam');
				toida.innerHTML = phFam +' '+ phNam2+'.';
			rdats.addEventListener("click", function(){
				udats.innerHTML = '';
			});
			kdats.addEventListener("click", function(){
				udals.innerHTML = '';
			});
			kfam.addEventListener("click", function(){
				toida.innerHTML = '';
			});
			tosah = document.querySelector('.sedem');
			tosah.addEventListener("click", function(){
				var ttx = document.querySelector('#content').innerHTML;
				download(ttx, foday+'.xls');
			});
			});
			
			binda.addEventListener("click", function(e){ //СХ
			this.setAttribute('disabled','true');
			this.setAttribute('style','color:#fff;padding:10px 30px;font-weight:bold;margin:0px 10px;border:#909090 solid 1px;border-radius:3px;background:#cdcdcd;cursor:pointer;box-sizing:border-box;text-align:center;margin-bottom:10px;display:table-cell;');
				dte1 = document.querySelectorAll('input[class^="dant"]');
				for(var l = 0; l < 20; l++){
					kak = document.querySelector('.dant'+l).value;
					kok = kak;
					dp1.push(kok);
				}for(var z = 20; z < 40; z++){
					kak2 = document.querySelector('.dant'+z).value;
					kok2 = kak2;
					dp2.push(kok2);
				}for(var x = 40; x < 60; x++){
					kak3 = document.querySelector('.dant'+x).value;
					kok3 = kak3;
					dp3.push(kok3);
				}for(var v = 60; v < 80; v++){
					kak4 = document.querySelector('.dant'+v).value;
					kok4 = kak4;
					dp4.push(kok4);
				}for(var b = 80; b < 100; b++){
					kak5 = document.querySelector('.dant'+b).value;
					kok5 = kak5;
					dp5.push(kok5);
				}
				itog1 = dp1.join(',');takt1 = document.querySelector('#dp1').value = itog1;
				itog2 = dp2.join(',');takt2 = document.querySelector('#dp2').value = itog2;
				itog3 = dp3.join(',');takt3 = document.querySelector('#dp3').value = itog3;
				itog4 = dp4.join(',');takt4 = document.querySelector('#dp4').value = itog4;
				itog5 = dp5.join(',');takt5 = document.querySelector('#dp5').value = itog5;
			});
			});
			}
			}
		}
	});
	}
	if(flt == 'https://my2.bookvoed.ru/shop/delivery/orders/sendings?delivery=440&sh'){// Супер форма для отрисовки статы
	chrome.storage.sync.get(['setnag'], function(items){
	var maner = items.setnag;
		if(maner == undefined){
			console.log('Настройки пустые');
		}else{
			par = maner[10];
		if(par == 1){
		vafaq = document.querySelector('h2'),nibve = document.querySelector('body');
		vafaq.insertAdjacentHTML("beforeEnd", "<div><input id='bemasin' type='button' value='+ data' style='font-size:11pt;padding:4px 25px;text-transform:uppercase;'><input id='bevyavio' type='button' value='Build graph' style='font-size:11pt;padding:4px 25px;text-transform:uppercase;margin-left:10px;'></div>");
		nibve.insertAdjacentHTML("afterbegin", "<div id='bublid' style='display:none;position:fixed;width:100%;height:100%;z-index:99;'><div style='position:fixed;background-color:#fff;opacity:0.79;width:100%;height:100%;'></div><div style='position:relative;margin:auto;width:1200px;height:550px;background-color:#fff;border:2px solid #b1b1b1;margin-top:70px;border-radius:10px;'><div><a style='width:20px;height:20px;font-size:20px;color:#a2a2a2;border: 3px solid #b1b1b1;right:-16px;position:absolute;top:-16px;background:#fff;border-radius:15px;padding:3px;text-align:center;font-family:sans-serif;' href=''>X</a><div id='toples'></div></div><div style='height:480px;width:1180px;margin:20px 10px 10px 10px;overflow-y:hidden;' id='dadala'><div id='sec_l' style='display:table-cell;vertical-align:top;width:240px;height:480px;border-right:1px solid #ddd;'><div style='margin:5px;height: 100px;text-align: center;'>Сотрудники</div><div id='podva' style='margin:0px 10px;font-size:12px;height:290px;overflow-y:auto;'></div><div style='height:80px;text-align:center;'><div>Среднее время:</div><div id='nadval' style='font-size:24pt;color:#000;'></div><div id='ponyad'></div></div></div><div id='sec_r' style='display:table-cell;vertical-align:top;width:940px;height:480px;'><canvas id='lyapitu' style='width:860px;height:470px;margin:0px 40px;'></canvas></div></div><div style='right:25px;position:absolute;bottom:5px'><input type='button' id='finbu' value='Построить' style='background:#7680f1;border:1px solid #7680f1;padding:5px;color:#ffffff;margin-right:9px;'><input type='button' id='ottet' value='Очистить' style='background:#ce466c;border:1px solid #ce466c;padding:5px;color:#ffffff;'></div></div></div>");
		
		iiii = document.querySelector("#bemasin"), ssss = document.querySelector("#finbu"), mmmm = document.querySelector("#bevyavio"), ottet = document.querySelector("#ottet"), besos = document.querySelector('#bublid');
		
			in_memory();
			iiii.addEventListener("click", function(){//кнопка сбора данных
			iiii.setAttribute('disabled','true');
			gggg = document.querySelectorAll("tbody tr");
			for(var lo = 0; lo < gggg.length; lo++){
				acha = gggg[lo];
				tData();
				isld = acha.querySelector('td:nth-child(3)');
				if(isld){
					bndg = isld.innerText;
					piss = bndg.substring(0,10);
					ysld = acha.querySelector('td:nth-child(5)').innerText;
					visosa = foday;
					if(piss == visosa){
						pechm = acha.querySelector('td:nth-child(3)').innerText.substring(11);
						sisi.push({data: piss, time: pechm, name: ysld});
					}
				}else{}
			}
				chrome.storage.local.set({'statgraph':sisi});
			});

			ottet.addEventListener("click", function(){
				this.setAttribute('disabled','true');
				this.setAttribute('style','background:#d2a4b1;border:1px solid #d2a4b1;padding:5px;color:#9a9a9a;');
				setTimeout(() => this.removeAttribute('disabled'), 1500);
				setTimeout(() => this.setAttribute('style','background:#ce466c;border:1px solid #ce466c;padding:5px;color:#ffffff;'), 1500);
				colo = '';
				chrome.storage.local.set({'statgraph':colo});
				console.log('Clean');
			});
			mmmm.addEventListener("click", function(){//кнопка отображающая форму на экране
				besos.style.display = 'block';
				skut = sisi; bdsm = [];
				for(ti=0; ti<skut.length; ti++){
					ouch = skut[ti];
					puni = ouch.name;
					bdsm.push(puni);
				}
				domin = bdsm.filter((val, i, ar) => ar.indexOf(val) === i); //массив с уникальными именами
				tag = domin.length;
				console.log(tag);
				graf_canva();
				pafa = document.querySelector('#podva');
				for(o=0; o<tag; o++){
					kiar = domin[o];
					pafa.insertAdjacentHTML("afterbegin", "<div><input type='radio' name='sotydk' value='"+kiar+"'>  "+kiar+"</div>");
				}
				
				ssss.addEventListener("click", function(){
				this.setAttribute('disabled','true');
				this.setAttribute('style','background:#9ca0ce;border:1px solid #9ca0ce;padding:5px;color:#9a9a9a;margin-right:9px; color:#fff;');
				setTimeout(() => this.removeAttribute('disabled'), 1500);
				setTimeout(() => this.setAttribute('style','background:#7680f1;border:1px solid #7680f1;padding:5px;color:#ffffff;margin-right:9px;'), 1500); bodag = []; chi_c=[];
				// Надо прописать Условие, если нажимаешь построить график при нулевых данных
				dzidzi = document.querySelector('input[name="sotydk"]:checked').value;
				for(f=0; f<sisi.length; f++){
					pina = sisi[f];
					if(pina.name == dzidzi){
						bodag.push(Number(pina.time.substring(0,2)*60)+Number(pina.time.substring(3)));
						chi_c.push(pina.time);
					}
				}
				toples = document.querySelector('#toples').innerHTML = "<div id='promet' style='width: 30px;height:30px;box-shadow: 0 0 3px #9a9a9a;right:25px;top:25px;position:absolute;border-radius:45px;background-color: #fde74e;'><div style='margin:5px 10px;font-size:14pt;'>T</div></div>";
				poopa = document.querySelector('#promet');
				poopa.addEventListener("click", function(){
					alert(chi_c);
				});
				
				klep=[];pussi = 0;
				for(v=0; v<bodag.length; v++){
					jij = bodag[v];
					ktiki = (bodag[v] - bodag[v+1]);
					klep.push(ktiki);
					if(Number(ktiki)){
						pussi=pussi + ktiki;
					}
				}
				ibis = (pussi/bodag.length).toFixed(2);
				ponyad = document.querySelector('#ponyad');
				pansi = document.querySelector('#nadval');
				pansi.innerHTML = ibis+" min.";
				if(bodag.length == 0 || bodag.length >= 5){ponyad.innerHTML = bodag.length+" - Накладных";}
				if(bodag.length == 1){ponyad.innerHTML = bodag.length+" - Накладная";}
				if(bodag.length > 1 && bodag.length < 5){ponyad.innerHTML = bodag.length+" - Накладные";}
				graf_canva();
				ctx.beginPath();
				ctx.lineWidth = 2;
				ctx.strokeStyle = "#ce466c";
				ctx.moveTo(20, 450);
				for(df=0; df<klep.length; df++){
					jioc = klep[df];
					if(Number(jioc)){
						ctx.lineTo(df*10+30, 450 - jioc*10);
					}
				}
				ctx.stroke();
				});
			});			
		
		}
		}
	});
	}
	if(dult == 'https://my2.bookvoed.ru/shop/search/diffs'){//Для СРХшников
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[11];
			if(par == 1){
				var gogo = document.querySelector('#form-from-input'), gege = document.querySelector('#form-to-input'), sklad = document.querySelector('#form-shop-input');
				tData();
				gogo.value = today, gege.value = today, sklad.value = 83;
				binv = document.querySelector('#form-submit-input');
				niuy = binv.parentElement;
				niuy.insertAdjacentHTML("beforeEnd", "<input type='button' class='viexh' value='Проверка' style='background:#626262;border:1px solid #626262;color:rgb(255, 255, 255);'><input type='button' class='viekl' value='Очистить' style='background:#efefef;border:1px solid #626262;color:rgb(0, 0, 0);'>");
				bunni = document.querySelector('.viexh'), viekl = document.querySelector('.viekl');
				bunni.addEventListener("click", function(){ 
					tabeh = document.querySelector('table').innerHTML; 
			stoka = document.querySelectorAll('tr');
			for (var i =0, pedos=stoka.length; i< pedos; i++){
				koki = stoka[i];
				koki.classList.add('str'+i);
				stolt = koki.querySelectorAll('tr.str'+i+' th');
					for (var k =0, letos=stolt.length; k< letos; k++){
						loti = stolt[k];
						loti.classList.add(i+'stb'+k);
					}
				stolb = koki.querySelectorAll('tr.str'+i+' td');
					for (var j =0, ledos=stolb.length; j< ledos; j++){
						loki = stolb[j];
						loki.classList.add(i+'stb'+j);
					}
			}
			
				stoka = document.querySelectorAll('tr');
			for (var i =0, pedos=stoka.length; i< pedos; i++){
				koki = stoka[i];
				stolt = koki.querySelectorAll('tr.str'+i+' th');
					for (var k =0, letos=stolt.length; k< letos; k++){
						loti = stolt[k];
						lotas = loti.getAttribute('class');
						if(lotas == i+'stb0'){loti.remove();
						}if(lotas == i+'stb1'){loti.remove();
						}if(lotas == i+'stb4'){loti.remove();
						}if(lotas == i+'stb5'){loti.remove();
						}if(lotas == i+'stb10'){loti.remove();
						}if(lotas == i+'stb11'){loti.remove();
						}if(lotas == i+'stb2'){bsz = loti.innerHTML;loti.remove();
						}if(lotas == i+'stb8'){loti.insertAdjacentHTML("afterEnd", '<th>'+bsz+'</th>');
						}if(lotas == i+'stb9'){
							bju = loti.innerText;
							if(bju != '1'){
								if(bju != 'Кол-во брак'){
								loti.parentElement.remove();
								}
							}
						}
					}
				stolb = koki.querySelectorAll('tr.str'+i+' td');
					for (var j =0, ledos=stolb.length; j< ledos; j++){
						loki = stolb[j];
						locas = loki.getAttribute('class');
						if(locas == i+'stb0'){loki.remove();
						}if(locas == i+'stb1'){loki.remove();
						}if(locas == i+'stb4'){loki.remove();
						}if(locas == i+'stb5'){loki.remove();
						}if(locas == i+'stb10'){loki.remove();
						}if(locas == i+'stb11'){loki.remove();
						}if(locas == i+'stb2'){bsx = loki.innerHTML;loki.remove();
						}if(locas == i+'stb8'){loki.insertAdjacentHTML("afterEnd", '<td>'+bsx+'</td>');
						}if(locas == i+'stb9'){
							bju = loki.innerText;
							if(bju == '' || bju == '0'){
								loki.parentElement.remove();
							}
						}
					}
			}
			table = document.querySelector('table');
			sortedRows = Array.from(table.rows).slice(1).sort((rowA,rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
			table.tBodies[0].append(...sortedRows);
			chrome.storage.sync.get(['srahar'], function(items){
				var zilla = items.srahar;
				if(zilla == undefined || zilla == ''){
					alert('Список пуст');
				}else{
					//alert(zilla);
					yrtyu = document.querySelectorAll("td");
					for(var y = 0; y < yrtyu.length; y++){
						dostro = yrtyu[y];
						dedos = dostro.innerHTML;
						for(var i = 0; i < zilla.length; i++){
							ketr = zilla[i];
							if(dedos == zilla[i]){
								kani5 = dostro.parentElement;
								kani5.setAttribute("style","background-color:#46e31f;");
							}
						}
					}
				}
				});
			});
			viekl.addEventListener("click", function(){
				chrome.storage.sync.get(['srahar'], function(items){
				var pixxa = items.srahar;
				if(pixxa == undefined || pixxa == ''){
					alert('Список накладных уже чист');
				}else{
					cash = '';
					chrome.storage.sync.set({'srahar':cash});
					alert('Список накладных очищен');
				}
				});
			});
				}
			}
	});
	}
	/*if(biult == 'https://my2.bookvoed.ru/search?table%5Bforce%5D=1&results%5Btable%5D=2971&results%5Bsubs%5D%5B0%5D%5Blink%5D=4462&results%5Bsubs%5D%5B0%5D%5Btable%5D=1108&results%5Bsubs%5D%5B0%5D%5Bfilters%5D%5B0%5D%5Bfield%5D=0&results%5Bsubs%5D%5B0%5D%5Bfilters%5D%5B1%5D%5Bfield%5D=5354&results%5Bfilters%5D%5B0%5D%5Bfield%5D=0&results%5Bfilters%5D%5B1%5D%5Bfield%5D=2977'){*/
	if(biulc == 'https://my2.bookvoed.ru/search?table%5Bforce%5D=1&results%5Btable%5D=2971&results%5Bsubs%5D%5B0%5D%5Blink%5D=4462&results%5Bsubs%5D%5B0%5D%5Btable%5D=1108&results%5Bsubs%5D%5B0%5D%5Bsubs%5D%5B0%5D%5Blink%5D=1684&results%5Bsubs%5D%5B0%5D%5Bsubs%5D%5B0%5D%5Btable%5D=173&results%5Bsubs%5D%5B0%5D%5Bsubs%5D%5B0%5D%5Bfilters%5D%5B0%5D%5Bfield%5D=0&results%5Bsubs%5D%5B0%5D%5Bsubs%5D%5B0%5D%5Bfilters%5D%5B1%5D%5Bfield%5D=174&results%5Bsubs%5D%5B0%5D%5Bfilters%5D%5B0%5D%5Bfield%5D=0&results%5Bsubs%5D%5B0%5D%5Bfilters%5D%5B1%5D%5Bfield%5D=5354&results%5Bfilters%5D%5B0%5D%5Bfield%5D=0&results%5Bfilters%5D%5B1%5D%5Bfield%5D=2977'){
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[11];
			if(par == 1){
			chrome.storage.sync.get(['srahar'], function(items){
			dinrak=items.srahar;
			if(Array.isArray(dinrak)){
				console.log('Массив существует');
				mazad=dinrak;
			}else{
				console.log('Массив пустой');
				mazad = [];
			}
			});
			tData();
			var ount = document.querySelector("#content"), ffff = document.querySelector("body");
			document.querySelector("#bar").setAttribute('style','display:none;');
			ffff.insertAdjacentHTML("beforebegin", "<div id='screen' style='display:none;position:fixed;width:100%;height:100%;background-color:#505050bf;z-index: 99;'><div style='position: relative;margin: auto;width: 300px;height: 300px;margin-top: 100px;'><img id='imh' src=''></div></div>");
			ount.insertAdjacentHTML("beforebegin", "<div><input id='sypnym' type='text' maxlength='12' style='height:22px;border-radius:3px;border-color:#1684e3;border:2px solid #1684e3;background-color:#efefef;'><input id='posos' type='button' value='Сохранить список' style='background:#cd0e66;border:1px solid #cd0e66;color:rgb(255, 255, 255);padding:5px 29px;margin:0px 10px;border-radius:3px;font-weight:600;'><a href='https://my2.bookvoed.ru/shop/search/diffs' style='background:#282828;border:1px solid #282828;color:rgb(255, 255, 255);padding:5px 29px;margin:0px 10px;border-radius:3px;font-weight:600;cursor:pointer;'>Проверка</a></div><div><label><input type='checkbox' id='didotad' style='width:15px;margin-top:10px;height:15px;'>  Акты не за "+today+"</label></div>");
			posos = document.querySelector("#posos"), suuk = document.querySelector("#sypnym"), muuk = document.querySelector("#bar input"), immh = document.querySelector("#imh");
			suuk.focus();
			
			chrome.storage.sync.get(['setimg'], function(items){
			blimga=items.setimg;
			document.querySelector("#imh").src = blimga;
			});
			
			suuk.addEventListener("change", function(){
				bafas = suuk.value;
				badas = bafas.substring(5,11);
				muuk.value = badas;
				muuk.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
				var txik = document.location.href;
				digg = txik.substring(620,626);
				if(digg == badas){
					fetch(txik)
					.then(function(response) {
						return response.text();
						//отобразить лоадер
						//immh.style.display = 'block';
					}).then(function (html) {
						var parser = new DOMParser();
						var doc = parser.parseFromString(html, 'text/html');
						xxxefr = document.querySelector("#results table");
						rekre = doc.querySelector("#results");
						rexre = rekre.querySelector("table");
						pariu = rexre.querySelector("td:nth-child(6)").innerHTML;
						pabiu = rexre.querySelector("td:nth-child(2)").innerHTML;
						cvbyt = xxxefr.querySelector("td:nth-child(2)").parentElement.setAttribute('style','background-color:#f1e381;');
						wqol = pabiu.substring(0,10);
						badida = document.querySelector('#didotad');
						if(pariu == 'Склад хранения'){
							alert("ВНИМАНИЕ! Данный акт - Не является актом СРХ!");
							suuk.value = '';
						}else{
							if(badida.checked){
								balls = rexre.querySelector("td:nth-child(3)").innerText; 
								mazad.push(balls);
							}else{
								if(wqol != today){
									alert("ВНИМАНИЕ! Данный акт - за другое число!");
									suuk.value = '';
								}else{
									balls = rexre.querySelector("td:nth-child(3)").innerText; 
									mazad.push(balls);
								}
							}
						}
						console.log("Скрываю гиф");
						//скрыть лоадер
						//immh.style.display = 'none';
						suuk.value = '';
						suuk.focus();
					})
					.catch(function() {
						console.log("Fatal Error !");
					});
				}
			});
			posos.addEventListener("click", function(){
				zazad = [...new Set(mazad)];
				console.log(zazad);
				chrome.storage.sync.set({'srahar':zazad});
				alert("ВНИМАНИЕ! Список актов сохранен - "+zazad.length+"шт. Теперь можно перейти к проверке.");
			});
			}
			}
	});
	}
	
	
	
	function in_memory(){
		chrome.storage.local.get(['statgraph'], function(items){
		vaner = items.statgraph;
		if(Array.isArray(vaner)){
			console.log('Массив существует');
			sisi=vaner;
			console.log(sisi);
		}else{
			console.log('Массив не существует');
			vaner = [];
			sisi=vaner;
			console.log(sisi);
		}
		});
	}
	function graf_canva(){
		canvas = document.querySelector('#lyapitu');
				ctx = canvas.getContext('2d');
				canvas.width  = 860;
				canvas.height = 470;	
				for(var xi = 10; xi <= canvas.width; xi+=10){
					ctx.beginPath();
					ctx.lineWidth = 0.5;
					ctx.strokeStyle = "#e0e0e0";
					ctx.moveTo(xi+20, 0);
					ctx.lineTo(xi+20, canvas.height-20);
					ctx.closePath();
					ctx.stroke();
				}
				for(var ji = 10; ji < canvas.height-20; ji+=10){
					ctx.beginPath();
					ctx.lineWidth = 0.5;
					ctx.strokeStyle = "#e0e0e0";
					ctx.moveTo(20, ji);
					ctx.lineTo(canvas.width, ji);
					ctx.closePath();
					ctx.stroke();
				}
				chip = ["45", "40", "35", "30", "25", "20", "15", "10", "5", "0"];
				for(i = 0; i <10; i++) { 
					ctx.beginPath();
					ctx.fillText(chip[i], 0, i * 50+5); 
					ctx.moveTo(15, i * 50); 
					ctx.lineTo(20, i * 50); 
					ctx.closePath();
					ctx.stroke();
				}
				labels = ["Мин/Накл.", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100"];
				for(var i=0; i<20; i++) {
					ctx.beginPath();
					ctx.fillText(labels[i], i*50+15, canvas.height);
					ctx.moveTo(i*50+20, canvas.height-10); 
					ctx.lineTo(i*50+20, canvas.height-20); 
					ctx.closePath();
					ctx.stroke();
				}
				for(var mi = 50; mi <= canvas.width; mi+=50){
					ctx.beginPath();
					ctx.lineWidth = 1;
					ctx.strokeStyle = "949494";
					ctx.moveTo(mi+20, 0);
					ctx.lineTo(mi+20, canvas.height-20);
					ctx.fill();
					ctx.closePath();
					ctx.stroke();
				}
				for(var ni = 50; ni < canvas.height-20; ni+=50){
					ctx.beginPath();
					ctx.lineWidth = 1;
					ctx.strokeStyle = "949494";
					ctx.moveTo(20, ni);
					ctx.lineTo(canvas.width, ni);
					ctx.fill();
					ctx.closePath();
					ctx.stroke();
				}
				ctx.lineWidth = 1;
				ctx.strokeStyle = "#9e9e9e";
				ctx.beginPath();
				ctx.moveTo(20, 0);
				ctx.lineTo(20, canvas.height-20);
				ctx.lineTo(canvas.width, canvas.height-20);
				ctx.stroke();
	}
	
	function download(data, filename, type){
		var file = new Blob([data], {type:type});
		var a = document.createElement("a");
		url = URL.createObjectURL(file);
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
	}
	function coympl(e){
		coconi = e.getAttribute('class');
			if(coconi == 'plk_s'){
				if(e.checked){
					ka5t = e.value;
					suclk = document.querySelectorAll('td:nth-child(5)');
						for(var i =0, tyti=suclk.length; i< tyti; i++){
							goxl2 = suclk[i];
							podofk = goxl2.innerText;
							if(podofk == ka5t){
								imisi = goxl2.parentElement;
								bangax = imisi.querySelector('td:nth-child(9)');
								kehj2 = bangax.innerText;
								svigq = imisi.querySelector('td:nth-child(10)');
								kanxz = svigq.querySelector('input[type=text]');
								kanxz.value = kehj2;
							}
						}
				}else{
					ka6t = e.value;
					sucxk = document.querySelectorAll('td:nth-child(5)');
						for(var i =0, tyto=sucxk.length; i< tyto; i++){
							goxl = sucxk[i];
							podofa = goxl.innerText;
							if(podofa == ka6t){
								imimi = goxl.parentElement;
								bangav = imimi.querySelector('td:nth-child(9)');
								kehj = bangav.innerText;
								svig = imimi.querySelector('td:nth-child(10)');
								kanxc = svig.querySelector('input[type=text]');
								kanxc.value = '';
							}
						}
				}
				
			}
	}
	function tData(){
		data = new Date();
		var dd = data.getDate()-1, mm = data.getMonth()+1, yy = data.getFullYear(), did = data.getDate();
		//var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
		//if(mm<10){mm='0'+mm;}
		if(did<10){did='0'+did;}
		gaday = did;
		bijan = dd+1;
		
		if(dd<1){
				//	12  1  2  3  4  5  6  7  8  9 10 11	
			mday = [31,31,28,31,30,31,30,31,31,30,31,30];//дек в начале, потому что отсчет идет от 0, а не 1
			hm = mm-1;
			dds = mday[hm];//кол-во дней в предыдущем месяце
			dd = dds; //задаем день исходя из месяца
			if(hm < 1){
				mm = 12;yy = yy - 1;
			}else{
				mm = hm;
			}
		}else{
			if(dd<10){dd='0'+dd;}
		}
		if(mm<10){mm='0'+mm;}
		giday = yy+'.'+mm+'.'+dd;
		today = dd+'.'+mm+'.'+yy;
		foday = did+'.'+mm+'.'+yy;
		goday = yy+'.'+mm+'.'+did;
		///////////////////////
		
	}
	
	function isNumber(n){ return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

	async function elemUpdate(selector){
		try{
			var html = await(await fetch(location.href)).text();
			var newdoc = new DOMParser().parseFromString(html, 'text/html');
			document.querySelector(selector).outerHTML = newdoc.querySelector(selector).outerHTML;
			//console.log('Element'+selector+'updated successful');
			return true;
		}catch(err){
			//console.log('Element'+selector+'NOT updated successful');
			console.log(err);
			return false;
		}
	}
}
}
