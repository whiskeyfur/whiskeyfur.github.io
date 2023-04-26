<?php
    error_reporting(E_ALL);
    ini_set("error_reporting", true);

    require __dir__."/vendor/autoload.php";
    require __dir__."/src/autoload.php";

    use Leaf\Router;

    Router::set404(function() {
        print __METHOD__."<br>";
        http_response_code(404);
    });

    Router::get("/slave/(\d+)", 'controllers\SlaveController@get');
    Router::get("/slave", 'controllers\SlaveController@index');
    Router::get("/user", 'controllers\UserController@index');
    Router::get("/", 'controllers\HomeController@index');

    Router::run();