//when starts//
window.onload = main;

//reffer:http://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t//
function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

//reffer:http://stackoverflow.com/questions/2736971/javascript-detect-if-being-run-in-hta//
function checkHTA() {
  isHTA = false;
  try {
    isHTA = (window.external == null)
  } catch (e) {}
  return isHTA
}

function main() {
  if (checkHTA() === false) {
    window.location.assign("/");
  }

  //reffer:http://stackoverflow.com/questions/7260907/how-to-enumerate-my-environmental-variables-in-jscript// 
  var oShell = new ActiveXObject("WScript.Shell");
  var oUserEnv = oShell.Environment("Process");
  var colVars = new Enumerator(oUserEnv);
  for (; !colVars.atEnd(); colVars.moveNext()) {
    //slog(colVars.item());
  }

}

function ShellExecuteJ(program) {
  var objShell = new ActiveXObject("shell.application");
  objShell.ShellExecute(program, "", "", "open", 1);
}

function slog(content, targeTag) {
  var target = targeTag || "slog";
  //var bodyTag = document.getElementsByTagName('body')[0];
  var slogTag = document.getElementById(target);
  var divTag = document.createElement('p');
  divTag.innerHTML = content;
  slogTag.appendChild(divTag);
}

function saveToFile(Source, Target) {
  //reffer:http://stackoverflow.com/questions/4164400/windows-script-host-jscript-how-do-i-download-a-binary-file//
  //var Source = WScript.Arguments.Item(0);
  //var Target = WScript.Arguments.Item(1);
  var Object = WScript.CreateObject('MSXML2.XMLHTTP');
  Object.Open('GET', Source, false);
  Object.Send();
  if (Object.Status == 200) {
    // Create the Data Stream
    var Stream = WScript.CreateObject('ADODB.Stream');
    // Establish the Stream
    Stream.Open();
    Stream.Type = 1; // adTypeBinary
    Stream.Write(Object.ResponseBody);
    Stream.Position = 0;
    // Create an Empty Target File
    var File = WScript.CreateObject('Scripting.FileSystemObject');
    if (File.FileExists(Target)) {
      File.DeleteFile(Target);
    }
    // Write the Data Stream to the File
    Stream.SaveToFile(Target, 2); // adSaveCreateOverWrite
    Stream.Close();
  }
}

function nsConsoleKey(e){
  slog("teste",'nsConsoleOut') ;
  if (e.keyCode==13){
    iCmd = document.getElementById('nsConsoleCmd');
    try {
     slog(eval(iCmd.value),'nsConsoleOut');
    }catch(er){
      slog(er,'nsConsoleOut');
    }
    iCmd.value = '';
  }
}