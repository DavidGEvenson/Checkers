<?php
/**
 * Created by PhpStorm.
 * User: EvensonD
 * Date: 11/29/18
 * Time: 11:49 PM
 */

function createBoard() {
    $html = "";
    $wcount = 0;
    $bcount = 0;

    for($i=0; $i<8; $i++) {
        for($j=0; $j<8; $j++) {
            $html .= "<div class=\"square ";
            if(($i+$j) % 2 == 0) {
                $html .= "darksquare\"";
            } else {
                $html .= "lightsquare\"";
            }
            $html .= " id=\"sq$i$j\">";

            if($j == 0 && $i%2 == 0 || $j == 1 && $i%2 == 1) {
                $html .= "<div class=\"whitepiece piece\" id=\"wpiece$wcount\"></div>";
                $wcount++;
            }
            if($j == 6 && $i%2 == 0 || $j == 7 && $i%2 == 1) {
                $html .= "<div class=\"blackpiece piece\" id=\"bpiece$bcount\"></div>";
                $bcount++;
            }

            $html .= "</div>";
        }
    }

    return $html;
}