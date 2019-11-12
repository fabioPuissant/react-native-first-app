<?php

namespace App\Controller;

use App\Model\TicketModel;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class TicketsController
 * @package App\Controller
 * @Route("/tickets", name="tickets")
 */

class TicketsController extends AbstractController
{

    public function index(Request $request, TicketModel $ticketModel)
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/TicketsController.php',
        ]);
    }


}
