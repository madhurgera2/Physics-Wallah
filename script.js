function formatSizeUnits(bytes){
    if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
    else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
    else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + " KB"; }
    else if (bytes > 1)           { bytes = bytes + " bytes"; }
    else if (bytes == 1)          { bytes = bytes + " byte"; }
    else                          { bytes = "0 bytes"; }
    return bytes;
  }
  function myFunction(){
    var myfolder = document.getElementById("myFile");
    var myfiles=myfolder.files;
    console.log(myfiles);
    var sortfile = Array.from(myfiles);
    var x=sortfile.sort(function(a,b) {
      return (a.name).localeCompare(b.name)
  });
    var txt = "";
   
      if (x.length == 0) {
        txt = "Select one or more files.";
      } else {
          document.getElementById('demo1').style.display = "flex";
        for (var i = 0; i < x.length; i++) {
          
          var file = x[i];
          if ('name' in file) {
            txt+="<tr><td>"+file.name+"</td>";
          }
          if ('size' in file) {
            txt += "<td>" + formatSizeUnits(file.size) + "</td> </tr> ";
          }
        }
      }
    
   
    document.getElementById("demo").innerHTML = txt;
  }