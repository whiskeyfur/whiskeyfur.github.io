<?php
    error_reporting(E_ALL);
    ini_set("error_reporting", true);

    require_once "vendor/autoload.php";

    use Leaf\Router;

    $env = _env("ENVIRONMENT", "local");

    app()->template->config("path", __DIR__ . "/views");

    app()->set404(function() {
        http_response_code(404);
    });

    app()->get("/.*", function () {
        print app()->template->render("index");
    });

    Router::run();