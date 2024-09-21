<?php

require_once __DIR__.'./Controller.php';


class App{

    public function __construct()
    {
        $url = $this->parseURL();
        var_dump($url);
        
        echo "hallo";
    }

    public function parseURL()
    {
        if (isset($_GET['url'])) {
            $url = $_GET['url'];
            $url = rtrim($url,'/');
            $url = filter_var($url,FILTER_SANITIZE_URL);
            $url = explode('/', $url);
            return $url;
        }
    }
}