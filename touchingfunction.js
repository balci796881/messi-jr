function touching(sprite1,target1){
    if (sprite1.x - target1.x < target1.width/2 + sprite1.width/2
      && target1.x - sprite1.x < target1.width/2 + sprite1.width/2
      && sprite1.y - target1.y <target1.height/2 + sprite1.height/2
      && target1.y - sprite1.y < target1.height/2 + sprite1.height/2){
          return true;
    }
    else {
        return false;
      }
  }