<?php

namespace App\Controller;

use App\IllegalStateException;
use App\Model\RoomModel;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RoomsController
 * @package App\Controller
 * @Route("/rooms", name="rooms")
 */
class RoomsController extends AbstractController
{
//    /**
//     * @Route("", name="rooms_index")
//     * @param RoomModel $roomModel
//     * @return JsonResponse
//     */
//    public function index(RoomModel $roomModel)
//    {
//        $rooms = $roomModel->getAll();
//
//        return new JsonResponse($rooms, 200);
//    }

    /**
     * @Route("/happiness", name="rooms_happiness", methods={"GET"})
     * @param Request $request
     * @param RoomModel $roomModel
     * @return Response
     */
    public function getHappinessScoreByRoomName(Request $request, RoomModel $roomModel)
    {
        $name = (String)$request->query->get("name");
        $score = (String)$request->query->get("lower_than");
        if ($score & $name) {
            $rooms = $roomModel->getAllLowerThan($score);
            return new JsonResponse($rooms, 200);
        }
        if ($name) {
            $room = $roomModel->getByName($name);
            $score = $room->happinessScore;
            return new JsonResponse(["HappinessScore" => $score]);
        }

        return new JsonResponse(["status" => "Status Failed"], 500);
    }

    /**
     * @Route("/addHapiness", name="rooms_happiness_post", methods={"POST"})
     * @param Request $request
     * @param RoomModel $roomModel
     * @return JsonResponse|Response
     */
    public
    function addHappinessScore(Request $request, RoomModel $roomModel)
    {
        $name = $request->query->get("name");
        $scoreString = $request->getContent();
        $score = json_decode($scoreString);
        if ($name && $score) {
            $roomModel->updateHappinessScore($name, $score->score);
            $room= $roomModel->getByName($name);
           return new JsonResponse($room, 200);
        }

        return new Response("Bad request", 500);
    }

    /**
     * @Route("", name="rooms_index", methods={"GET"})
     * @param Request $request
     * @param RoomModel $roomModel
     * @return JsonResponse
     */
    public function index(Request $request, RoomModel $roomModel){
        $name = $request->query->get("name");
        if($name){
            $room = $roomModel->getByName($name);
            return new JsonResponse($room, 200);
        }
        return new JsonResponse($roomModel->getAll(), 200);
    }
}
