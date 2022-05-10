function shark(sharkDistance, sharkSpeed, pontoonDistance, youSpeed, dolphin){
    if(dolphin){
        sharkSpeed /= 2
    }
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive" : "Shark Bait!";
}