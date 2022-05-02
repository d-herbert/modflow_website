function download() {
    var ftype =  window.document.myform.ftype.value;
    var nunit =  window.document.myform.nunit.value;
    var fname = ftype + '.txt'
    var lstvl =  window.document.myform.lstvl.value;
    var option =  window.document.myform.option.value;
    var name = '# FTYPE' + '\t\t' + 'NUNIT' + '\t\t' + 'FNAME' + '\t\t' + '[LSTVL]' + '\t\t' + '[OPTION]'

    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + 
    encodeURIComponent(name) + "\n" +
    encodeURIComponent(ftype) + '\t\t' + encodeURIComponent(nunit)  + '\t\t' + encodeURIComponent(fname) + '\t\t' + encodeURIComponent(lstvl) + '\t\t' + encodeURIComponent(option) + "\n\n"); 
  
    pom.setAttribute('download', 'NAME.TXT');
  
    pom.style.display = 'none';
    document.body.appendChild(pom);
  
    pom.click();
  
    document.body.removeChild(pom);
  }