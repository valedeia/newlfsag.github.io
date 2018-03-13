var ll = ['English', 'Francais', 'Deutsch', 'Espanol', 'Italiano'];

function btn (fono) {
	if (fono != '') {
		// document.write('<button class="ipa" onclick="insertAtCaret(\'' + fono + '\')">' + fono + '</button>'); //
		document.write('<a class="ipa, ipabtn" href="javascript: insertAtCaret(\'' + fono + '\')">' + fono + '</a>');
	} else {
		document.write('<a class="ipa, ipabtn" style="visibility:hidden">&nbsp;</a>');
	}
}

function phonrow (arr) {
	document.write('<tr><td>');
	for (var i=1; i<arr.length; i++) {
		btn(arr[i]);
	}
	document.write('</td><td style="text-align:center">' + arr[0] + '</td></tr>');
}

function consrow (arr) {
	document.write('<tr><td style="text-align:center">' + arr[0] + '</td>');
	for (var i=1; i<arr.length; i=i+2) {
		document.write('<td style="text-align:center">');
		btn(arr[i]);
		btn(arr[i+1]);
		document.write('</td>');
	}
	document.write('</tr>');
}

function otherrow (arr) {
	document.writeln('<tr>');
	for (var i=0; i<arr.length; i=i+2) {
		document.writeln('<td cellpadding="0px" style="border-right:0px; text-align:center">');
		btn(arr[i]);
		document.writeln('</td><td style="border-left:0px">' + arr[i+1] + '</td>');
	}
	document.writeln('</tr>');
}

// style //

document.writeln('<style>');
	document.writeln('.ll td {border:1px solid grey; text-align:left; font-size:12px;}');
	document.writeln('.ll {display:none}');
	document.writeln('.ll table {border-spacing:0px;}');
	document.writeln('.ipabtn {font-size:18px; color:black; border:2px outset transparent; padding-left:5px; padding-right:5px; text-decoration:none;}');
	document.writeln('.ipabtn:hover {color:red; border:2px outset grey;}');
	document.writeln('.ipabtn:active {color:red; border:2px inset grey; background-color:transparent}');
document.writeln('</style>');

// inizio tabella //

document.writeln('<table style="margin-top:10px; text-align:center; background-color:#768EB7; outline:0px; border-spacing:0px; border:2px groove grey; word-spacing:0px;" align="center">');
document.writeln('<tr style="font-size:14px; background-color:#446699;"><th colspan="2" style="border-bottom:3px groove #191876">PhonPad - an online IPA transcription editor by Paolo Mairano</th></tr>');
document.writeln('<tr style="font-size:12px"><td nowrap="nowrap" style="padding:3px; word-spacing:0px; border:0px;">');

document.writeln('<select title="font" id="font" name="font" onchange="var index = this.selectedIndex; editor.style.fontFamily = this.options[index].text;">');
   document.writeln('<option>Doulos SIL</option>');
   document.writeln('<option>Charis SIL</option>');
   document.writeln('<option>DejaVu Sans</option>');
   document.writeln('<option>Lucida Sans Unicode</option>');
   document.writeln('<option>Gentium</option>');
   document.writeln('<option>Arial Unicode MS</option>');
document.writeln('</select>');

document.writeln('<select title="font size" id="size" name="size" onchange="var index = this.selectedIndex; editor.style.fontSize = this.options[index].text + \'px\';">');
   document.writeln('<option>8</option>');
   document.writeln('<option>9</option>');
   document.writeln('<option>10</option>');
   document.writeln('<option>11</option>');
   document.writeln('<option>12</option>');
   document.writeln('<option>14</option>');
   document.writeln('<option>16</option>');
   document.writeln('<option selected="selected">18</option>');
   document.writeln('<option>20</option>');
   document.writeln('<option>24</option>');
   document.writeln('<option>28</option>');
   document.writeln('<option>32</option>');
   document.writeln('<option>36</option>');
   document.writeln('<option>40</option>');
document.writeln('</select>');

document.writeln('<select title="colour" id="col" name="col" onchange="var index = this.selectedIndex; editor.style.color = this.options[index].text;">');
   document.writeln('<option>black</option>');
   document.writeln('<option>yellow</option>');
   document.writeln('<option>orange</option>');
   document.writeln('<option>red</option>');
   document.writeln('<option>magenta</option>');
   document.writeln('<option>brown</option>');
   document.writeln('<option>green</option>');
   document.writeln('<option>blue</option>');
   document.writeln('<option>grey</option>');
document.writeln('</select>');

document.writeln('&nbsp;');
document.writeln('<button id="bold" title="bold" onclick="if ((editor.style.fontWeight == \'bold\') || (editor.style.fontWeight == \'700\')) {editor.style.fontWeight = \'normal\';} else {editor.style.fontWeight = \'bold\';};"><b>B</b></button>');
document.writeln('<button id="italic" title="italic" onclick="if (editor.style.fontStyle == \'italic\') {editor.style.fontStyle = \'normal\';} else {editor.style.fontStyle = \'italic\';};"><i>I</i></button>');
document.writeln('<button id="underline" title="underline" onclick="if (editor.style.textDecoration == \'underline\') {editor.style.textDecoration = \'none\';} else {editor.style.textDecoration = \'underline\';};"><u>U</u></button>');
document.writeln('<button id="strikethrough" title="strikethrough" onclick="if (editor.style.textDecoration == \'line-through\') {editor.style.textDecoration = \'none\';} else {editor.style.textDecoration = \'line-through\';};"><s>S</s></button>');

document.writeln('&nbsp;');
document.writeln('<button id="left" title="justify left" onclick="changeAlign(\'left\');"><img src="images/left.gif" style="margin:0" alt="L" /></button>');
document.writeln('<button id="center" title="justify centre" onclick="changeAlign(\'center\');"><img src="images/centre.gif" style="margin:0" alt="C" /></button>');
document.writeln('<button id="right" title="justify right" onclick="changeAlign(\'right\');"><img src="images/right.gif" style="margin:0" alt="R" /></button>');

document.writeln('</td><td style="border:0px;">');

document.writeln('<select title="Select language" id="lang" name="lang" onchange="var index = this.selectedIndex; view(this.options[index].text);">');
	for (l in ll) {
   		document.writeln('<option>' + ll[l] + '</option>');
	}
document.writeln('</select>');

document.writeln('</td></tr><tr style="background-color:#446699; max-height:300px"><td>');
document.writeln('<textarea id="editor" name="editor" style="font-size:20px; width:100%; height:100%; min-height:300px; border:0px" class="ipa"></textarea>');
document.writeln('</td><td style="border:0px; min-width:300px; background-color:#768EB7;">');

// English //
document.writeln('<div class="ll" id="English"><table align="center" style="border:1px solid grey; font-size:12px;">');
phonrow (['plosives', 'p', 'b', 't', 'd', 'k', 'g']);
phonrow (['affricates', 'tʃ', 'dʒ']);
phonrow (['fricatives', 'f', 'v', 'θ', 'ð', 's', 'z', 'ʃ', 'ʒ', 'h']);
phonrow (['nasals', 'm', 'n', 'ŋ']);
phonrow (['approximants', 'w', 'j', 'ɹ', 'l']);
phonrow (['syllabic cons.', 'm̩', 'n̩', 'ŋ̩', 'l̩', 'ɫ̩', 'ɹ̩', 'ɻ̩', 'r̩']);
phonrow (['vowels', 'iː', 'i', 'ɪ', 'e', 'æ', 'ɑː', 'ɒ', 'ɔː', 'ʊ', 'u', 'uː', 'ə', 'ɜː', 'ʌ']);
phonrow (['diphthongs', 'eɪ', 'aɪ', 'ɔɪ', 'əʊ', 'aʊ', 'ɪə', 'eə', 'ʊə']);
phonrow (['other', 'ɫ', 'r', 'ɻ', 'ɾ', 'ʍ', 'ʔ', 'ɚ', 'ɦ']);
phonrow (['diacritics', 'ˈ', 'ˌ', '|', '||', 'ʰ', 'ʷ', 'ⁿ', 'ˡ']);
document.write('</table></div>');

// Français //
document.writeln('<div class="ll" id="Francais"><table align="center" style="border:1px solid grey; font-size:12px;">');
phonrow (['occlusives', 'p', 'b', 't', 'd', 'k', 'g']);
phonrow (['fricatives', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'ʁ']);
phonrow (['nasales', 'm', 'n', 'ɲ']);
phonrow (['approximantes', 'l', 'j', 'ɥ', 'w']);
phonrow (['voyelles', 'i', 'y', 'e', 'ø', 'ɛ', 'œ', 'a', 'ɑ', 'ɔ', 'o', 'u', 'ə']);
phonrow (['voyelles nas.', 'ɛ̃', 'œ̃', 'ɑ̃', 'ɔ̃']);
phonrow (['autres', 'χ', 'ʀ', 'x', 'ɣ', 'r', 'ɾ', 'ŋ', 'ɒ̃', 'õ']);
phonrow (['diacritiques', 'ˈ', 'ˌ', 'ː', '|', '||', 'ʷ', 'ⁿ', 'ˡ']);
document.write('</table></div>');

// Deutsch //
document.writeln('<div class="ll" id="Deutsch"><table align="center" style="border:1px solid grey; font-size:12px;">');
phonrow (['Plosive', 'p', 'b', 't', 'd', 'k', 'g', 'ʔ']);
phonrow (['Affrikate', 'pf', 'ts', 'tʃ']);
phonrow (['Frikative', 'f', 'v', 's', 'z', 'ʃ', 'ç', 'x', 'ʁ', 'h']);
phonrow (['Nasale', 'm', 'n', 'ŋ']);
phonrow (['Approximanten', 'j', 'l', 'ʁ̞']);
phonrow (['Syll. Kons.', 'm̩', 'n̩', 'ŋ̩', 'l̩', 'r̩', 'ʀ̩', 'ʁ̩']);
phonrow (['Vokalen', 'iː', 'ɪ', 'yː', 'ʏ', 'eː', 'øː', 'ɛ', 'ɛː', 'a', 'ɑː', 'ɒ', 'ɔ', 'oː', 'ʊ', 'uː', 'ə', 'ɐ']);
phonrow (['Diphthonge', 'aʊ', 'aɪ', 'ɔʏ']);
phonrow (['Andere', 'ʒ', 'dʒ', 'ʀ', 'r', 'ɾ', 'χ']);
phonrow (['Diakr. Zeichen', 'ˈ', 'ˌ', 'ː', '|', '||', 'ʰ', 'ʷ', 'ⁿ', 'ˡ']);
document.write('</table></div>');

// Espanol //
document.writeln('<div class="ll" id="Espanol"><table align="center" style="border:1px solid grey; font-size:12px;">');
phonrow (['oclusivas', 'p', 'b', 't', 'd', 'k', 'g']);
phonrow (['fricativas', 'β', 'f', 'θ', 'ð', 's', 'ʝ', 'x', 'ɣ']);
phonrow (['nasales', 'm', 'ɱ', 'n', 'ɲ', 'ŋ']);
phonrow (['lat. y vib.', 'r', 'ɾ', 'l', 'ʎ']);
phonrow (['aproximantes', 'w', 'j']);
phonrow (['vocales', 'i', 'e', 'a', 'o', 'u']);
phonrow (['otro', 'tʃ', 'z', 'χ', 'ɛ', 'ɔ', 'ɟ']);
phonrow (['diacríticos', 'ˈ', 'ˌ', 'ː', '|', '||', 'ʷ', 'ⁿ', 'ˡ']);
document.write('</table></div>');

// Italiano //
document.writeln('<div class="ll" id="Italiano"><table align="center" style="border:1px solid grey; font-size:12px;">');
phonrow (['occlusive', 'p', 'b', 't', 'd', 'k', 'g']);
phonrow (['affricate', 'ts', 'dz', 'tʃ', 'dʒ']);
phonrow (['fricative', 'f', 'v', 's', 'z', 'ʃ', 'ʒ']);
phonrow (['nasali', 'm', 'ɱ', 'n', 'ɲ', 'ŋ']);
phonrow (['vibranti', 'r', 'ɾ']);
phonrow (['approssimanti', 'l', 'ʎ', 'j', 'w']);
phonrow (['vocali', 'i', 'e', 'ɛ', 'a', 'ɔ', 'o', 'u']);
phonrow (['diacritici', 'ˈ', 'ˌ', 'ː', '|', '||', 'ʷ', 'ⁿ', 'ˡ']);
document.write('</table></div>');

document.writeln('</td></tr>');

// casella inferiore //
// selezione tabella //

document.writeln('<tr><td colspan="2" style="height:35px; border-top:1px inset">');

var tables = ['consonants', 'vowels', 'non-poulmonic', 'double-articulations', 'diacritics', 'suprasegmentals', 'hide'];
for (i in tables) {
	document.writeln('<a id="btn' + tables[i] + '" style="border:1px outset; padding-left:5px; padding-right:5px; text-decoration:none; color:black; background:#E9E9E9" href="javascript:show(\'' + tables[i] + '\')">' + tables[i] + '</a>');
}
document.writeln('</td></tr>');
document.writeln('<tr><td colspan="2">');

// consonanti //

document.writeln('<div class="ll" id="consonants"><table align="center" style="border:1px solid grey; margin-top:5px; margin-bottom:5px"><tr>');
var luoghi = ['&nbsp;', 'bilabial', 'labiodental', 'dental', 'alveolar', 'post-alv.', 'retroflex', 'palatal', 'velar', 'uvular', 'pharyngeal', 'glottal'];
for (i in luoghi) {
	document.writeln('<td style="text-align:center">' + luoghi[i] + '</td>');
}
document.writeln('</tr>');
consrow (['plosive', 'p', 'b', '', '', 't̪', 'd̪', 't', 'd', 't̠', 'd̠', 'ʈ', 'ɖ', 'c', 'ɟ', 'k', 'g', 'q', 'ɢ', '', '', 'ʔ', '']);
consrow (['nasal', 'm̥', 'm', 'ɱ̊', 'ɱ', 'n̪̊', 'n̪', 'n̥', 'n', 'n̠̊', 'n̠', 'ɳ̊', 'ɳ', 'ɲ̊', 'ɲ', 'ŋ̊', 'ŋ', 'ɴ̥', 'ɴ', '', '', '', '']);
consrow (['trill', 'ʙ̥', 'ʙ', '', '', 'r̪̊', 'r̪', 'r̥', 'r', 'r̠̊', 'r̠', '', '', '', '', '', '', 'ʀ̥', 'ʀ', '', '', '', '']);
consrow (['tap/flap', '', '', '', '', '', '', '', 'ɾ', '', '', '', 'ɽ', '', '', '', '', '', '', '', '', '', '']);
consrow (['affricate', 'p͡ɸ', 'b͡β', 'p͡f', 'b͡v', 't̪͡θ', 'd̪͡ð', 't͡s', 'd͡z', 't̠͡ʃ', 'd̠͡ʒ', 'ʈ͡ʂ', 'ɖ͡ʐ', 'c͡ç', 'ɟ͡ʝ', 'k͡x', 'g͡ɣ', 'q͡χ', 'ɢ͡ʁ', '', '', 'ʔ͡h', '']);
consrow (['fricative', 'ɸ', 'β', 'f', 'v', 'θ', 'ð', 's', 'z', 'ʃ', 'ʒ', 'ʂ', 'ʐ', 'ç', 'ʝ', 'x', 'ɣ', 'χ', 'ʁ', 'ħ', 'ʕ', 'h', 'ɦ']);
consrow (['lat. fric.', '', '', '', '', '', '', 'ɬ', 'ɮ', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
consrow (['lat. appr.', '', '', '', '', '', '', 'l̥', 'l', '', '', 'ɭ̊', 'ɭ', '̥ʎ', 'ʎ', 'ʟ̥', 'ʟ', '', '', '', '', '', '']);
consrow (['approximant', '', 'β̞', '', 'ʋ', '', 'ð̞', '', 'ɹ', '', 'ɹ̠', '', 'ɻ', '', 'j', '', 'ɰ', '', 'ʁ̞', '', '', '', '']);
document.writeln('</td></tr></table></div>');

// vocali //
document.writeln('<div class="ll" id="vowels"><map name="voc">');
	document.writeln('<area shape="circ" coords="9 15 15" href="javascript: insertAtCaret(converti(\'vocale_anteriore_alta_non_labializzata\'));">');
	document.writeln('<area shape="circ" coords="46 15 15" href="javascript: insertAtCaret(converti(\'vocale_anteriore_alta_labializzata\'));">');
	document.writeln('<area shape="circ" coords="177 15 15" href="javascript: insertAtCaret(converti(\'vocale_centrale_alta_non_labializzata\'));">');
	document.writeln('<area shape="circ" coords="213 15 15" href="javascript: insertAtCaret(converti(\'vocale_centrale_alta_labializzata\'));">');
	document.writeln('<area shape="circ" coords="344 15 15" href="javascript: insertAtCaret(converti(\'vocale_posteriore_alta_non_labializzata\'));">');
	document.writeln('<area shape="circ" coords="380 15 15" href="javascript: insertAtCaret(converti(\'vocale_posteriore_alta_labializzata\'));">');
	document.writeln('<area shape="circ" coords="88 52 15" href="javascript: insertAtCaret(converti(\'vocale_anteriore_alta_non_labializzata_rilassata\'));">');
	document.writeln('<area shape="circ" coords="118 52 15" href="javascript: insertAtCaret(converti(\'vocale_anteriore_alta_labializzata_rilassata\'));">');
	document.writeln('<area shape="circ" coords="309 52 15" href="javascript: insertAtCaret(converti(\'vocale_posteriore_alta_labializzata_rilassata\'));">');
	document.writeln('<area shape="circ" coords="50 89 15" href="javascript: insertAtCaret(converti(\'vocale_anteriore_medio_alta_non_labializzata\'));">');
	document.writeln('<area shape="circ" coords="86 89 15" href="javascript: insertAtCaret(converti(\'vocale_anteriore_medio_alta_labializzata\'));">');
	document.writeln('<area shape="circ" coords="202 89 15" href="javascript: insertAtCaret(converti(\'vocale_centrale_medio_alta_non_labializzata\'));">');
	document.writeln('<area shape="circ" coords="235 89 15" href="javascript: insertAtCaret(converti(\'vocale_centrale_medio_alta_labializzata\'));">');
	document.writeln('<area shape="circ" coords="344 89 15" href="javascript: insertAtCaret(converti(\'vocale_posteriore_medio_alta_non_labializzata\'));">');
	document.writeln('<area shape="circ" coords="380 89 15" href="javascript: insertAtCaret(converti(\'vocale_posteriore_medio_alta_labializzata\'));">');
	document.writeln('<area shape="circ" coords="233 127 15" href="javascript: insertAtCaret(converti(\'schwa\'));">');
	document.writeln('<area shape="circ" coords="94 164 15" href="javascript: insertAtCaret(converti(\'vocale_anteriore_medio_bassa_non_labializzata\'));">');
	document.writeln('<area shape="circ" coords="134 164 15" href="javascript: insertAtCaret(converti(\'vocale_anteriore_medio_bassa_labializzata\'));">');
	document.writeln('<area shape="circ" coords="228 164  15" href="javascript: insertAtCaret(converti(\'vocale_centrale_medio_bassa_non_labializzata\'));">');
	document.writeln('<area shape="circ" coords="260 164  15" href="javascript: insertAtCaret(converti(\'vocale_centrale_medio_bassa_labializzata\'));">');
	document.writeln('<area shape="circ" coords="344 164  15" href="javascript: insertAtCaret(converti(\'vocale_posteriore_medio_bassa_non_labializzata\'));">');
	document.writeln('<area shape="circ" coords="380 164  15" href="javascript: insertAtCaret(converti(\'vocale_posteriore_medio_bassa_labializzata\'));">');
	document.writeln('<area shape="circ" coords="116 200 15" href="javascript: insertAtCaret(converti(\'vocale_anteriore_quasi_bassa_non_labializzata\'));">');
	document.writeln('<area shape="circ" coords="257 200 15" href="javascript: insertAtCaret(converti(\'vocale_centrale_quasi_bassa_non_labializzata\'));">');
	document.writeln('<area shape="circ" coords="137 237 15" href="javascript: insertAtCaret(converti(\'vocale_anteriore_bassa_non_labializzata\'));">');
	document.writeln('<area shape="circ" coords="169 237 15" href="javascript: insertAtCaret(converti(\'vocale_anteriore_bassa_labializzata\'));">');
	document.writeln('<area shape="circ" coords="344 237 15" href="javascript: insertAtCaret(converti(\'vocale_posteriore_bassa_non_labializzata\'));">');
	document.writeln('<area shape="circ" coords="380 237 15" href="javascript: insertAtCaret(converti(\'vocale_posteriore_bassa_labializzata\'));">');
document.writeln('</map>');
document.writeln('<img src="vocali_ipa.png" usemap="#voc" align="center" width="387" height="245" id="voc_ipa"/>');
document.writeln('</div>');

// non pneumoniche //

document.writeln('<div class="ll" id="non-poulmonic"><table align="center" cellpadding="0px" style="border:1px solid grey; font-size:12px;  margin-top:5px; margin-bottom:5px"><tr>');
var modi = ['clicks', 'implosives', 'plosive ejectives', 'fricative ejecives'];
for (i in modi) {
	document.writeln('<td colspan="2" style="text-align:center">' + modi[i] + '</td>');
}
document.writeln('</tr>');
otherrow (["ʘ", "bilabial", "ɓ", "bilabial", "p\ʼ", "bilabial", "f\ʼ", "labio-dental"]);
otherrow (["ǀ", "dental", "ɗ", "dental", "tʼ", "alveolar", "sʼ", "alveolar"]);
otherrow (["ǃ", "(post)alveolar", "ʄ", "palatal", "c\ʼ", "palatal", "ʃ\ʼ", "postalveolar"]);
otherrow (["ǂ", "palato-alveolar", "ɠ", "velar", "k\ʼ", "velar", "x\ʼ", "velar"]);
otherrow (["ǁ", "lateral", "ʛ", "uvular", "qʼ", "uvular", "χʼ", "uvular"]);
document.writeln('</table></div>');

// doppie articolazioni //
document.writeln('<div class="ll" id="double-articulations"><table align="center" cellpadding="0px" style="border:1px solid grey; font-size:12px; margin-top:5px; margin-bottom:5px">');
otherrow (["ʍ", "voiceless labio-velar fricative", "w", "voiced labio-velar approximant"]);
otherrow (["ɥ", "voiced labio-palatal approximant", "ʜ", "voiceless epiglottal fricative"]);
otherrow (["ʢ", "voiced epiglottal fricative", "ʡ", "epiglottal plosive"]);
otherrow (["ɕ", "voiceless alveolo-palatal fricative", "ʑ", "voiced alveolo-palatal fricative"]);
otherrow (["ɺ", "voiced alveolar lateral flap", "ɧ", "simultaneous ʃ and x"]);
document.writeln('</table></div>');

// diacritici //
document.writeln('<div class="ll" id="diacritics"><table align="center" cellpadding="0px" style="border:1px solid grey; text-align:center; font-size:12px; margin-top:5px; margin-bottom:5px">');
	document.writeln('<tr>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_desonorizzato_basso\'));">&nbsp;&#805;&nbsp;</a><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_desonorizzato_alto\'));">&nbsp;&#778;</a></td>');
    	document.writeln('<td style="border-left:0px">devoiced</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_mormorato\'));">&nbsp;&#804;</a></td>');
    	document.writeln('<td style="border-left:0px">breathy voiced</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_dentale\'));">&nbsp;&#810;</a></td>');
    	document.writeln('<td style="border-left:0px">dental</td>');
    document.writeln('</tr><tr>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_sonorizzato\'));">&nbsp;&#812;</a></td>');
    	document.writeln('<td style="border-left:0px">voiced</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_laringalizzato\'));">&nbsp;&#816;</a></td>');
    	document.writeln('<td style="border-left:0px">creaky voiced</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_apicale\'));">&nbsp;&#826;</a></td>');
    	document.writeln('<td style="border-left:0px">apical</td>');
    document.writeln('</tr><tr>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_aspirato\'));">&nbsp;&#688;</a></td>');
    	document.writeln('<td style="border-left:0px">aspirated</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_linguolabiale\'));">&nbsp;&#828;</a></td>');
    	document.writeln('<td style="border-left:0px">linguolabial</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_laminale\'));">&nbsp;&#827;</a></td>');
    	document.writeln('<td style="border-left:0px">laminal</td>');
    document.writeln('</tr><tr>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_piu_arrotondato\'));">&nbsp;&#825;</a></td>');
    	document.writeln('<td style="border-left:0px">more rounded</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_labializzato\'));">&nbsp;&#695;</a></td>');
    	document.writeln('<td style="border-left:0px">labialised</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_nasalizzato\'));">&nbsp;&#771;</a></td>');
    	document.writeln('<td style="border-left:0px">nasalised</td>');
    document.writeln('</tr><tr>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_meno_arrotondato\'));">&nbsp;&#796;</a></td>');
    	document.writeln('<td style="border-left:0px">less rounded</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_palatalizzato\'));">&nbsp;&#690;</a></td>');
    	document.writeln('<td style="border-left:0px">palatalised</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_rilascio_nasale\'));">&nbsp;ⁿ</a></td>');
    	document.writeln('<td style="border-left:0px">nasal release</td>');
    document.writeln('</tr><tr>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_avanzato\'));">&nbsp;&#799;</a></td>');
    	document.writeln('<td style="border-left:0px">advanced</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_velarizzato\'));">&nbsp;&#736;</a></td>');
    	document.writeln('<td style="border-left:0px">velarised</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_rilascio_laterale\'));">&nbsp;ˡ</a></td>');
    	document.writeln('<td style="border-left:0px">lateral release</td>');
    document.writeln('</tr><tr>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_arretrato\'));">&nbsp;&#800;</a></td>');
    	document.writeln('<td style="border-left:0px">retracted</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_faringalizzato\'));">&nbsp;&#740;</a></td>');
    	document.writeln('<td style="border-left:0px">pharyngealised</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_rilascio_non_udibile\'));">&nbsp;&#794;</a></td>');
    	document.writeln('<td style="border-left:0px">non audible release</td>');
    document.writeln('</tr><tr>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_centralizzato\'));">&nbsp;&#776;</a></td>');
    	document.writeln('<td style="border-left:0px">centralised</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_velarizzato_faringalizzato\'));">&nbsp;&#820;</a></td>');
    	document.writeln('<td style="border-left:0px" colspan="3">velarised or pharyngealised</td>');
    document.writeln('</tr><tr>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_medio_centralizzato\'));">&nbsp;&#829;</a></td>');
    	document.writeln('<td style="border-left:0px">mid-centralised</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_innalzato\'));">&nbsp;&#797;</a></td>');
    	document.writeln('<td style="border-left:0px" colspan="3">raised</td>');
    document.writeln('</tr><tr>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_sillabico\'));">&nbsp;&#809;</a></td>');
    	document.writeln('<td style="border-left:0px">syllabic</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_abbassato\'));">&nbsp;&#798;</a></td>');
    	document.writeln('<td style="border-left:0px" colspan="3">lowered</td>');
    document.writeln('</tr><tr>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_non_sillabico\'));">&nbsp;&#815;</a></td>');
    	document.writeln('<td style="border-left:0px">non-syllabic</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_radice_avanzata\'));">&nbsp;&#792;</a></td>');
    	document.writeln('<td style="border-left:0px" colspan="3">advanced tongue root</td>');
    document.writeln('</tr><tr>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_rotacizzato\'));">&nbsp;&#734;</a></td>');
    	document.writeln('<td style="border-left:0px">rhoticity</td>');
    	document.writeln('<td style="text-align:center; border-right:0px"><a class="ipabtn" href="javascript: insertAtCaret(converti(\'diacritico_radice_arretrata\'));">&nbsp;&#793;</a></td>');
    	document.writeln('<td style="border-left:0px" colspan="3">retracted tongue root</td>');
    document.writeln('</tr>');

document.writeln('</table></div>');

// sovrasegmentali //
document.writeln('<div class="ll" id="suprasegmentals"><table align="center" cellpadding="0px" style="border:1px solid grey; font-size:12px; margin-top:5px; margin-bottom:5px"><tr>');
otherrow(['\ˈ', 'primary stress']);
otherrow(['ˌ', 'secondary stress']);
otherrow(['ː', 'long']);
otherrow(['ˑ', 'half-long']);
otherrow(['̆', 'extra-short']);
otherrow(['.', 'syllable break']);
otherrow(['|', 'minor (foot) group']);
otherrow(['||', 'major (intonation) group']);
otherrow([' ͜ ', 'linking (absence of a break)']);
document.writeln('</table></div>');

// fine editor // 
document.writeln('</td></tr></table>');
var editor = document.getElementById('editor');

// correggi l'altezza se ie6 //
if (navigator.appName=='Microsoft Internet Explorer' && parseFloat(navigator.appVersion)<7) {
	editor.style.height = '300px';
}

// metti a posto i select //
document.getElementById('font').selectedIndex = '0';
document.getElementById('size').selectedIndex = '8';
document.getElementById('col').selectedIndex = '0';
document.getElementById('lang').selectedIndex = '0';
view('English');
show('consonants');

function view(id) {
	for (i in ll) {
		if (id == ll[i]) {
			document.getElementById(ll[i]).style.display = 'block';
		} else {
			document.getElementById(ll[i]).style.display = 'none';
		}
	}
}

function show(id) {
	if ((id != 'hide') && (document.getElementById(id).style.display == 'block')) {
		document.getElementById(id).style.display = 'none';
		document.getElementById('btn' + id).style.border = '1px outset';
		document.getElementById('btn' + id).style.background = '#E9E9E9'
		return;
	}
	for (i in tables) {
		if (id == tables[i]) {
			if (tables[i] != 'hide') {document.getElementById(tables[i]).style.display = 'block';}
			document.getElementById('btn' + tables[i]).style.border = '1px inset';
			document.getElementById('btn' + tables[i]).style.background = '#D9D9FF'
		} else {
			if (tables[i] != 'hide') {document.getElementById(tables[i]).style.display = 'none';}
			document.getElementById('btn' + tables[i]).style.border = '1px outset';
			document.getElementById('btn' + tables[i]).style.background = '#E9E9E9'
		}
	}
}

function changeAlign (nuovo) {
	editor.style.textAlign = nuovo
}

function relief (id, rel) {
	document.getElementById(id).style.borderStyle = rel
}

function insertAtCaret(string) {
  // this function has been written by Afrow UK and was retrieved from http://codingforums.com/showthread.php?t=116728
  var obj = document.getElementById('editor');
  obj.focus();

  if (typeof(document.selection) != 'undefined')
  {
    var range = document.selection.createRange();

    if (range.parentElement() != obj)
      return;

    range.text = string;
    range.select();
  }
  else if (typeof(obj.selectionStart) != 'undefined')
  {
    var start = obj.selectionStart;

    obj.value = obj.value.substr(0, start) 
              + string 
              + obj.value.substr(obj.selectionEnd, obj.value.length);

    start += string.length;
    obj.setSelectionRange(start, start);
  }
  else
    obj.value += string;

  obj.focus();
}
