$info = ""
Func ai($inf)
	$info = $info & $inf & @CRLF
EndFunc

ai("@ScriptDir="&@ScriptDir)
ai(@AutoItExe)
ai("Arguments = " & $cmdline[0])
for $i = 1 To $cmdline[0]
	ai($cmdline[$i])
Next


MsgBox(0, "#CmdLineArgsPathValidator", $info,30)