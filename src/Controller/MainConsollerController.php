<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainConsollerController extends AbstractController
{
    /**
     * @Route("/", name="app_main_consoller")][
     */
    public function index(): Response
    {
        return $this->render('main_consoller/index.html.twig');
    }
    public function converED(): Response
    {
        return $this->render('_partiales/_converED.html.twig');
    }
    public function converEFS(): Response
    {
        return $this->render('_partiales/_converEFS.html.twig');
    }
    public function converFSD(): Response
    {
        return $this->render('_partiales/_converFSD.html.twig');
    }
    
}
