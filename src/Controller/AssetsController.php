<?php

namespace App\Controller;

use App\Entity\Ticket;
use App\IllegalStateException;
use App\Model\AssetModel;
use App\Model\TicketModel;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AssetsController
 * @package App\Controller
 * @Route("/assets")
 */
class AssetsController extends AbstractController
{
    /**
     * @Route("", name="assets_index", methods={"GET"})
     * @param Request $request
     * @param AssetModel $assetModel
     * @return JsonResponse|Response
     */
    public function index(Request $request, AssetModel $assetModel)
    {
        $name = $request->query->get("name");
        $roomId = $request->query->get("roomId");
        if ($name) {
            try {
                $asset = $assetModel->getByName($name);
                $ticketModel = new TicketModel();
                $ticketsOfAsset = $ticketModel->getAllTicketsOfAsset($asset->getId());

                return new JsonResponse($ticketsOfAsset, 200);
            }
            catch (IllegalStateException $exception){
                return new Response($exception->getMessage(), 500);
            }
        }

        if ($roomId) {
            try {
                $assets = $assetModel->getByRoom($roomId);
                return new JsonResponse($assets, 200);
            }
            catch (IllegalStateException $exception){
                return new Response($exception->getMessage(), 500);
            }
        }

        $assets = $assetModel->getAll();
        return new JsonResponse($assets, 200);
    }

    /**
     * @Route("/addTicket", name="assets_post_ticket", methods={"POST", "GET"})
     * @param Request $request
     * @param AssetModel $assetModel
     * @param TicketModel $ticketModel
     * @return JsonResponse|Response
     * @throws \App\IllegalStateException
     */
    public function addTicketToAsset(Request $request, AssetModel $assetModel, TicketModel $ticketModel)
    {
        $name = $request->query->get("name");
        $ticketString = $request->getContent();

        if ($name && $ticketString) {
            $asset = $assetModel->getByName($name);
            $assetId = $asset->id;
            $ticketJson = json_decode($ticketString);
            $ticket = $this->mapJsonToTicketInstance($ticketJson);
            $ticket->assetId = $assetId;
            $ticketModel->addTicket($ticket);
            $ticketsOfAsset = $ticketModel->getAllTicketsOfAsset($assetId);
            return new JsonResponse($ticketsOfAsset);
        }

        return new Response("Filter params Name or ticket not set correct!");
    }

    private function mapJsonToTicketInstance($ticketJson): Ticket
    {
        $ticket = new Ticket();
        $ticket->description = $ticketJson->description;
        $ticket->numberOfVotes = 1;
        return $ticket;
    }

}
