(function() {
  var content = document.getElementById('content');
  var toHex = function (s) {
    return s.split('').map(function(ch) {
      return ch.charCodeAt()
    }).map(function (charCode) {
      return charCode.toString(16)
    }).join(' ');
  };
  var decodeHex = function (s) {
    var hex = s.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 3)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
  }

  document.getElementById('btnEncode').addEventListener("click", function() {
    var url = content.value;
    var encodedUrl = toHex(url.toString().trim("\n"));

    content.value = encodedUrl;
  });

  document.getElementById('btnDecode').addEventListener("click", function() {
    var url = content.value;
    var decodedUrl = decodeHex(url);

    window.open(decodedUrl, '_blank');
  });
})();
