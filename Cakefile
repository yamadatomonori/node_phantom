sys = require 'sys'
{exec} = require 'child_process'

command = 'python closure-library/closure/bin/build/closurebuilder.py
 --compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS"
 --compiler_flags="--output_wrapper=(function() {%output%})();" 
 --compiler_jar=compiler.jar
 --namespace="myproject.start" 
 --output_mode=compiled
 --root=closure-library/
 --root=client/'

exec command, ->
    sys.puts arguments