<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento senza titolo</title>
<style type="text/css">
<!--
body {
	font: 100%/1.4 Verdana, Arial, Helvetica, sans-serif;
	background: #c7c3b8;
	margin: 8px 0;
	padding: 0;
	color: #000;
}

/* ~~ Selettori tag/elemento ~~ */
ul, ol, dl { /* A causa delle differenze tra i browser, è buona norma impostare a zero il margine e la spaziatura interna negli elenchi. Per uniformità, potete specificare qui i valori desiderati, oppure nelle voci di elenco (LI, DT, DD) contenute negli elenchi. Tenete presente che le impostazioni effettuate qui verranno applicate a cascata all'elenco .nav a meno che non scegliate di scrivere un selettore più specifico. */
	padding: 0;
	margin: 0;
}
h1, h2, h3, h4, h5, h6, p {
	margin-top: 0;	 /* La rimozione del margine superiore permette di aggirare il problema che si crea quando i margini possono fuoriuscire dal div che li contiene. Il margine inferiore che rimane permetterà di distanziare gli elementi che seguono. */
	padding-right: 15px;
	padding-left: 15px; /* L'aggiunta di una spaziatura ai lati degli elementi contenuti nei div, anziché ai div stessi, consente di evitare ogni calcolo matematico relativo ai riquadri. Come metodo alternativo si può anche utilizzare un div nidificato con spaziatura laterale. */
}
a img { /* Questo selettore rimuove il bordo blu predefinito visualizzato in alcuni browser intorno a un'immagine quando è circondata da un collegamento.  */
	border: none;
}

/* ~~ L'applicazione di stili ai collegamenti del sito deve rispettare questo ordine, compreso il gruppo di selettori che creano l'effetto hover. ~~ */
a:link {
	color:#AAA;
	text-decoration: underline; /* A meno che non vogliate personalizzare i collegamenti in un modo molto particolare, è bene applicare la sottolineatura per permetterne una rapida identificazione visiva. */
}
a:visited {
	color: #AAA;
	text-decoration: underline;
}
a:hover, a:active, a:focus { /* Questo gruppo di selettori conferisce alla navigazione tramite tastiera gli stessi effetti hover che si producono quando si usa il mouse. */
	text-decoration: none;
}

/* ~~ Questo contenitore a larghezza fissa circonda tutti gli altri div ~~ */
.container {
	width: 960px;
	background: #FFFFFF;
	margin: 0 auto; /* Il valore automatico sui lati, abbinato alla larghezza, produce un layout centrato. */
	border:8px;
	border-color:#95291d;
	border-style:solid;
	border-radius: 12px;
}

/* ~~ All'intestazione non viene assegnata una larghezza. Estenderà l'intera larghezza del layout. Contiene un'immagine segnaposto da sostituire con il vostro logo collegato ~~ ~~ */
.header {
	background:url(images/header_sfondo.png);
	background-repeat:repeat-y;
	padding:10px 0 0 0;
		border-radius: 8px 8px 0 0 ;

}

/* ~~ Queste sono le colonne del layout. ~~ 

1) La spaziatura viene applicata solo al lato superiore e/o inferiore dei div. Agli elementi all'interno di questi div viene applicata una spaziatura sui lati. In questo modo si evita ogni calcolo matematico relativo ai riquadri. Tenete presente che se aggiungete spaziatura laterale o bordi al div stesso, andranno ad aggiungersi alla larghezza definita per produrre la larghezza *totale*. Potete anche scegliere di rimuovere la spaziatura dell'elemento nel div e inserire un secondo div al suo interno con larghezza nulla e con la spaziatura necessaria per la struttura che state creando.

2) Non è stato applicato alcun margine alle colonne perché sono tutte con float. Se dovete aggiungere un margine, evitate di applicarlo sul lato verso il quale avviene il float (ad esempio, un margine destro su un div impostato per un float verso destra). Spesso è possibile utilizzare una spaziatura come alternativa. Per i div in cui questa regola deve essere ignorata, dovete aggiungere una dichiarazione "display:inline" alla regola del div per risolvere un bug di alcune versioni di Internet Explorer, a causa del quale il margine viene raddoppiato.

3) Poiché le classi possono essere utilizzate più volte in un documento (e a un elemento possono essere applicate più classi), alle colonne sono stati assegnati dei nomi di classe anziché degli ID. Ad esempio, sarebbe possibile impilare due div per barre laterali, se necessario. Potete tranquillamente sostituire i nomi con degli ID se preferite, a condizione che li utilizziate una sola volta per documento.

4) Se preferite la barra di navigazione a destra anziché a sinistra, è sufficiente applicare alle colonne un float nella direzione opposta (tutte a destra anziché a sinistra) in modo da eseguirne il rendering in ordine inverso. Non è necessario spostare i div all'interno del codice HTML.

*/
.navigation {
	float: left;
	width: 200px;
	background: #e5e4df;
	padding-bottom: 10px;
		font: 80% Verdana, Arial, Helvetica, sans-serif bold;

}
.content {

	padding: 10px 0;
	width: 760px;
	float: left;
	font: 80% Verdana, Arial, Helvetica, sans-serif;

}


/* ~~ Questo selettore raggruppato fornisce spazio agli elenchi dell'area .content ~~ */
.content ul, .content ol { 
	padding: 0 15px 15px 40px; /* Questa spaziatura rispecchia la spaziatura destra nella regola di intestazione e paragrafo riportata sopra. La spaziatura è stata applicata al lato inferiore per garantire uno spazio tra gli altri elementi negli elenchi e a sinistra per creare il rientro. Può essere regolata a piacere. */
}

/* ~~ Gli stili dell'elenco di navigazione (rimovibili se scegliete di utilizzare un menu flyout reimpostato come Spry) ~~ */
ul.nav {
	list-style: none; /* Rimuove l'indicatore di elenco */
	border-top: 1px solid #666; /* Crea il bordo superiore dei collegamenti; tutti gli altri vengono posizionati utilizzando un bordo inferiore sul LI */
	margin-bottom: 15px; /* Crea lo spazio tra gli elementi di navigazione nel contenuto sottostante */
}
ul.nav li {
	border-bottom: 1px solid #666; /* Crea la separazione tra i pulsanti */
}
ul.nav a, ul.nav a:visited { /* Raggruppando questi selettori si fa in modo che i collegamenti mantengano l'aspetto di pulsante anche dopo che sono stati visitati */
	padding: 5px 5px 5px 15px;
	display: block; /* Assegna al blocco di ancoraggio delle proprietà che gli permettono di riempire l'intero LI che lo contiene in modo che l'intera area risponda a un clic del mouse. */
	width: 180px;  /*Questa larghezza rende cliccabile l'intero pulsante in IE6. Se non avete bisogno di supportare IE6, può essere rimossa. Calcolate la larghezza corretta sottraendo la spaziatura di questo collegamento dalla larghezza del contenitore della barra laterale. */
	text-decoration: none;
	background: #004178;
}
ul.nav a:hover, ul.nav a:active, ul.nav a:focus { /* Cambia il colore dello sfondo e del testo per la navigazione tramite mouse e tastiera */
	background: #27a22d;
	color: #FFF;
}

/* ~~ Gli stili del piè di pagina ~~ */
.footer {
	padding: 10px 0;
	position: relative;/* Fornisce hasLayout a IE6 per ottenere un clearing corretto.  */
	clear: both; /* Questa proprietà clear obbliga il .container a tenere conto di dove terminano le colonne e a contenerle. */
		border-radius: 0 0 12px 12px;

}

/* ~~ Classi float/clear varie ~~ */
.fltrt {  /* questa classe può essere utilizzata per applicare un float a un elemento a destra nella pagina. L'elemento con float deve precedere l'elemento al quale deve essere affiancato sulla pagina. */
	float: right;
	margin-left: 8px;
}
.fltlft { /* questa classe può essere utilizzata per applicare un float a un elemento a sinistra nella pagina. L'elemento con float deve precedere l'elemento al quale deve essere affiancato sulla pagina. */
	float: left;
	margin-right: 8px;
}
.clearfloat { /* Questa classe può essere inserita in un <br /> o in un div vuoto come elemento finale subito dopo l'ultimo div con float (all'interno del .container) se il .footer sul viene rimosso o estratto dal .container. */
	clear:both;
	height:0;
	font-size: 1px;
	line-height: 0px;
}
t1 {
	font-family:Arial, Helvetica, sans-serif;
	font-size:36px;
	font-weight:bold;
	color:#003366;
	}

t2 {
	font-family:Arial, Helvetica, sans-serif;
	font-size:24px;
	color:#9e2d1f;
	}

	
-->
</style></head>

<body>

<div class="container">
  <div class="header">
  <table cellpadding="0" cellspacing="0" width="100%">
  <tr>
  <td width="202" rowspan="2">
      <img src="images/logo_aisv.png" alt="AISV" />
  </td>
  <td width="515" >
          <t1>AISV 2014</t1>&nbsp;&nbsp;&nbsp;<t2>Aspetti prosodici e testuali del raccontare: dalla letteratura orale al parlato dei media</t2>

</td>
  <td width="241" valign="top">
        <img src="images/logo_ufficiale_unito.tif" alt="UNITO"  /></td>
  </tr>
  <tr>
    <td colspan="2" style="font-style:italic">X Convegno Nazionale dell'Associazione Italiana di Scienze della Voce
    <br />
      <b>Torino, 22-24 gennaio 2014</b> - Università degli Studi di Torino</td>
    </tr>
  </table>

      <!-- end .header --></div>


  <div class="navigation">
    <ul class="nav">
	<li><a href="index.php">Home </a></li>
	<li><a href="temi.php">Temi e obiettivi </a></li>
	<li><a href="organizzatori.php">Comitato organizzatore </a></li>
	<li><a href="scientifico.php">Comitato scientifico</a></li>
	<li><a href="prima.php">Prima circolare /a></li>
	<li><a href="seconda.php">Seconda circolare</a></li>
	<li><!--<a href="terza.php">-->Terza circolare <!--</a>--></li>
	<li><!--<a href="quarta.php">-->Quarta circolare<!--</a>--></li>
	<li><a href="date.php">Date importanti</a></li>
	<li><a href="invio-abstract.php">Invio abstract</a></li>
	<li><a href="registrazione.php">Registrazione</a></li>
	<li><!--<a href="grant.php">-->Richiesta grant <!--</a>--></li>
	<li><!--<a href="programma.php">-->Programma<!--</a>--></li>
	<li><!--<a href="abstracts.php">-->Abstracts<!--</a>--></li>
	<li><!--<a href="arrivare.php">-->Come arrivare<!--</a>--></li>
	<li><a href="alberghi.php">Alberghi</a></li>
	<li><a href="sede.php">Sede del convegno</a></li>
	<li><!--<a href="istruzioni.php">-->Istruzioni per gli autori<!-- </a>--></li>
	<li><a href="dottorandi.php">Spazio dottorandi</a></li>
	<li><a href="eventi.php">Eventi sociali</a></li>
	<li><a href="tal.php">Conferenza TAL</a></li>
	<li><a href="contatti.php">Contatti</a></li>
	<!--<li><a href="lavori.php">Galleria foto </a></li>-->
	<!--<li><a href="lavori.php">Links </a></li>-->
    </ul>
  </div>
  <div class="content">

  <p align="center">Oltre ai temi scientifici normalmente discussi nei convegni AISV e <br/>

  abitualmente destinati alle sessioni a tema libero si invita all'invio di comunicazioni nei seguenti settori:<br/>

  </p>

  <ul>

  <li>Logopedia e diagnostica</li>

  <li>Fonodidattica</li>

  <li>Caratterizzazione della lingua e del parlante</li>

  <li>Parlato mediatico</li>
  
  <li>Parlato narrativo</li>

  <li>Linguistica testuale</li>

  <li>La lingua della letteratura popolare</li>

  <li>Etnomusicologia</li>

  </ul>

  <p>&nbsp;</p> 

<p align="center"> *** </p>

<p align="center"><br />

</p>

<ul>

  <li> Speech therapy and speech pathology</li>

  <li> Phonetic methods for teaching</li>

  <li> Speaker and language identification</li>

  <li> The speech of the media </li>

  <li> The speech of narratives </li>

  <li> Textual Linguistics </li>

  <li> The Language of popular literature </li>

  <li> Ethnomusicology </li>

</ul>
  </div>

<br class="clearfloat"/>
  <!-- end .container --></div>
</body>
</html>