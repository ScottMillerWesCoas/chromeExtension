chrome.app.runtime.onLaunched.addListener(function(launchData) {
  var windowWidth = 300;
  var windowHeight = 325;
  chrome.app.window.create('index.html', {
    outerBounds: { // 'bounds' is deprecated, and you want full window size
      width: windowWidth,
      height: windowHeight,
      left: screen.availWidth - windowWidth,
      top: screen.availHeight - windowHeight,
    },
    resizable: true,
    frame: 'none'
  });      
});

function myFunction() {
    // var myWindow = window.open("http://www.editpad.org","", "width=400,height=400,top=400");
    alert('testing'); 
}
