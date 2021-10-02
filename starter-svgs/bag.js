var gGroup = "#elffel-group";

function revolvePlease(){
    var tl = new TimelineMax();
    tl.add('begining');
    tl.to("#eiffel-group", 2, {transformOrigin: "14% 50%", rotation: 340, opacity: 0.1, ease: Linear.easeNone});
    tl.add(tweenOne);
    tl.add(reverse(tweenOne, 3));
    return tl;
}

var triggerAnimation = new TimelineMax({paused: true});

var h = document.getElementById("eiffel-group");
h.addEventListener('click', triggerAnimation.add(revolvePlease("-=1")));
