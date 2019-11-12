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
     * @Route("", name="rooms_happiness", methods={"GET", "POST"})
     * @param Request $request
     * @param RoomModel $roomModel
     * @return Response
     */
    public function getHappinessScoreByRoomName(Request $request, RoomModel $roomModel)
    {
        $query = (String)$request->query->get("q");
        $name = (String)$request->query->get("name");
        if ($name) {
            switch (strtolower($query)) {
                case "happinessscore":
                    $score = (String)$request->query->get("lower_then");
                    if($score){
                        $rooms = $roomModel->getAllLowerThan($score);
                        return new JsonResponse($rooms, 200);
                    }
                    $room = $roomModel->getByName($name);
                    $score = $room->happinessScore;
                    return new JsonResponse(["HappinessScore" => $score]);
                case "add_score":
                    $score = $request->request->get("score");
                    $roomModel->updateHappinessScore($name, $score);
                    $room = $roomModel->getByName($name);
                    return new JsonResponse($room, 200);
                default:
                    throw new BadRequestHttpException();
            }
        }
        return new JsonResponse($roomModel->getAll(), 200);
    }

    /*
     * @Route(
     */

    /**
     * @Route("/addHapiness", name="rooms_happiness_post", methods={"GET", "POST"})
     * @param Request $request
     * @param RoomModel $roomModel
     * @return RedirectResponse
     */
    public function addHappinessScore(Request $request, RoomModel $roomModel)
    {
        $name = $request->query->get("name");
        $scoreString = $request->getContent();
        $score = json_decode($scoreString);

        if($name && $score){
            $roomModel->updateHappinessScore( $name, $score);
            return new RedirectResponse("http://127.0.0.1:8000/rooms");
        }

    }
}
