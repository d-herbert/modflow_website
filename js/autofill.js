function updateText(type) { 
    var id = type+'Text';
    document.getElementById(id).value = document.getElementById(type).value + '.txt';
   }