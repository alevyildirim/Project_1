"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[3601],{93601:(e,t,r)=>{r.r(t);r.d(t,{apl:()=>f});var n={"+":["conjugate","add"],"−":["negate","subtract"],"×":["signOf","multiply"],"÷":["reciprocal","divide"],"⌈":["ceiling","greaterOf"],"⌊":["floor","lesserOf"],"∣":["absolute","residue"],"⍳":["indexGenerate","indexOf"],"?":["roll","deal"],"⋆":["exponentiate","toThePowerOf"],"⍟":["naturalLog","logToTheBase"],"○":["piTimes","circularFuncs"],"!":["factorial","binomial"],"⌹":["matrixInverse","matrixDivide"],"<":[null,"lessThan"],"≤":[null,"lessThanOrEqual"],"=":[null,"equals"],">":[null,"greaterThan"],"≥":[null,"greaterThanOrEqual"],"≠":[null,"notEqual"],"≡":["depth","match"],"≢":[null,"notMatch"],"∈":["enlist","membership"],"⍷":[null,"find"],"∪":["unique","union"],"∩":[null,"intersection"],"∼":["not","without"],"∨":[null,"or"],"∧":[null,"and"],"⍱":[null,"nor"],"⍲":[null,"nand"],"⍴":["shapeOf","reshape"],",":["ravel","catenate"],"⍪":[null,"firstAxisCatenate"],"⌽":["reverse","rotate"],"⊖":["axis1Reverse","axis1Rotate"],"⍉":["transpose",null],"↑":["first","take"],"↓":[null,"drop"],"⊂":["enclose","partitionWithAxis"],"⊃":["diclose","pick"],"⌷":[null,"index"],"⍋":["gradeUp",null],"⍒":["gradeDown",null],"⊤":["encode",null],"⊥":["decode",null],"⍕":["format","formatByExample"],"⍎":["execute",null],"⊣":["stop","left"],"⊢":["pass","right"]};var a=/[\.\/⌿⍀¨⍣]/;var l=/⍬/;var u=/[\+−×÷⌈⌊∣⍳\?⋆⍟○!⌹<≤=>≥≠≡≢∈⍷∪∩∼∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢]/;var i=/←/;var s=/[⍝#].*$/;var o=function(e){var t;t=false;return function(r){t=r;if(r===e){return t==="\\"}return true}};const f={name:"apl",startState:function(){return{prev:false,func:false,op:false,string:false,escape:false}},token:function(e,t){var r;if(e.eatSpace()){return null}r=e.next();if(r==='"'||r==="'"){e.eatWhile(o(r));e.next();t.prev=true;return"string"}if(/[\[{\(]/.test(r)){t.prev=false;return null}if(/[\]}\)]/.test(r)){t.prev=true;return null}if(l.test(r)){t.prev=false;return"atom"}if(/[¯\d]/.test(r)){if(t.func){t.func=false;t.prev=false}else{t.prev=true}e.eatWhile(/[\w\.]/);return"number"}if(a.test(r)){return"operator"}if(i.test(r)){return"operator"}if(u.test(r)){t.func=true;t.prev=false;return n[r]?"variableName.function.standard":"variableName.function"}if(s.test(r)){e.skipToEnd();return"comment"}if(r==="∘"&&e.peek()==="."){e.next();return"variableName.function"}e.eatWhile(/[\w\$_]/);t.prev=true;return"keyword"}}}}]);