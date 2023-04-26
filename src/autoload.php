<?php
spl_autoload_register(function($class) {
   $class = str_replace("\\", DIRECTORY_SEPARATOR, $class);
   if (file_exists(__DIR__ . "/$class.php")) {
       require "$class.php";
   }

});