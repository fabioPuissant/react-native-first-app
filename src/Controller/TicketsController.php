<?php

namespace App\Controller;

use App\IllegalStateException;
use App\Model\TicketModel;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class TicketsController
 * @package App\Controller
 * @Route("/tickets", name="tickets")
 */
class TicketsController extends AbstractController
{

    /**
     * @param Request $request
     * @param TicketModel $ticketModel
     * @return JsonResponse
     * @Route("", name="tickets_index")
     */
    public function index(Request $request, TicketModel $ticketModel)
    {
        $assetId = $request->get("assetId");
        if ($assetId ) {
            $ticketsOfAsset = $ticketModel->findTicketsOfAsset($assetId);
            return new JsonResponse($ticketsOfAsset, 200);
        }

        $tickets = $ticketModel->getAll();

        return new JsonResponse($tickets, 200);
    }


    /**
     * @Route("/raiseVote", methods={"POST"})
     * @param Request $request
     * @param TicketModel $ticketModel
     * @return JsonResponse|Response
     * @throws \App\IllegalStateException
     */
    public function addOneVoteToTicket(Request $request, TicketModel $ticketModel)
    {
        $ticketId = $request->get("ticketId");
        if ($ticketId && ctype_digit($ticketId)) {
            try {
                $ticketModel->addVoteToTicket($ticketId);
                $ticket = $ticketModel->getTicketWithId($ticketId);
                return new JsonResponse($ticket, 200);
            } catch (IllegalStateException $exception) {
                return new Response($exception->getMessage(), 500);
            }
        }

        return new Response("Given filter param ticketId was not correct!", 500);
    }
}
