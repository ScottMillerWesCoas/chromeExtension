chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: 'file:///Users/ScottMiller/Desktop/chromeExtension/index.html?search=sdfsdf' });
});

// chrome.extension.runtime.onLaunched.addListener(function(launchData) {
//   // var windowWidth = 300;
//   // var windowHeight = 325;
//   chrome.app.window.create(
//     'index.html', 
//     {
//     outerBounds: { // 'bounds' is deprecated, and you want full window size
//       width: 400,
//       height: 400,
//       // left: screen.availWidth - windowWidth,
//       // top: screen.availHeight - windowHeight,
//     },
//     // resizable: true,
//     // frame: 'none'
//   });      
// });

// // function myFunction() {
// //     // var myWindow = window.open("http://www.editpad.org","", "width=400,height=400,top=400");
// //     alert('testing'); 
// // }