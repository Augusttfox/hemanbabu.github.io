// ==UserScript==
// @name         ReplaceJS
// @namespace    http://example.com/
// @version      1.0.0
// @description  Replace javascript files on any webpage!
// @author       Mr.Sonic Master
// @match        *
// @run-at       document-start
// ==/UserScript==

var newJSFile = "file:///home/heman/js.js"; //The JS file to load in replacment od old JS file

var oldJSFile = "https://cmrec487.examly.io/main.279722b1d632a569c949.js"; //The old JS file as it is named in inspect element (make sure its spelled EXACTLY the same)

var pattern = new RegExp(oldJSFile, "i"); //Create the RegExp pattern with the /i switch to make it case-insensitive

function injectScript(originalPage) { //Function injectScript replaces the file
    console.log('Replace stage 2: Replace text matching', oldJSFile, 'with', newJSFile);
    var moddedPage = originalPage.replace(pattern, newJSFile); //Modify the HTML code that we got, replacing the old JS file with the new one
    document.open();
    console.log('Replace stage 3: Write new HTML to page...');
    document.write(moddedPage); //Write to the page the new HTML code
    document.close();
}

setTimeout(function() { //Wait a bit for the page's HTML to load...
    console.log('Replace stage 1: target HTML');
    injectScript(document.documentElement.outerHTML); //Run function injectScript with the page's HTML as oldPage in the function
}, 1111);
