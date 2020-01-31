    var backDark = "#1d202b";

    function bio(){
        document.getElementById('bio').style.display = "block";
        document.getElementById('experience').style.display = "none";
        document.getElementById('projects').style.display = "none";
        document.getElementById('photos').style.display = "none";
        document.getElementById('bio_icon').style.backgroundColor = backDark;
        document.getElementById('experience_icon').style.backgroundColor = "transparent";
        document.getElementById('projects_icon').style.backgroundColor = "transparent";
        document.getElementById('photos_icon').style.backgroundColor = "transparent";
        document.getElementById("bio_icon").style.boxShadow = "0px 0px 11px 3px rgba(0,0,0,0.25)";
        document.getElementById("experience_icon").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
        document.getElementById("projects_icon").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
        document.getElementById("photos_icon").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
    }

    function exp(){
        document.getElementById('bio').style.display = "none";
        document.getElementById('experience').style.display = "block";
        document.getElementById('projects').style.display = "none";
        document.getElementById('photos').style.display = "none";
        document.getElementById('bio_icon').style.backgroundColor = "transparent";
        document.getElementById('experience_icon').style.backgroundColor = backDark;
        document.getElementById('projects_icon').style.backgroundColor = "transparent";
        document.getElementById('photos_icon').style.backgroundColor = "transparent";
        document.getElementById("bio_icon").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
        document.getElementById("experience_icon").style.boxShadow = "0px 0px 11px 3px rgba(0,0,0,0.25)";
        document.getElementById("projects_icon").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
        document.getElementById("photos_icon").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
    }

    function proj(){
        document.getElementById('bio').style.display = "none";
        document.getElementById('experience').style.display = "none";
        document.getElementById('projects').style.display = "block";
        document.getElementById('photos').style.display = "none";
        document.getElementById('bio_icon').style.backgroundColor = "transparent";
        document.getElementById('experience_icon').style.backgroundColor = "transparent";
        document.getElementById('projects_icon').style.backgroundColor = backDark;
        document.getElementById('photos_icon').style.backgroundColor = "transparent";
        document.getElementById("bio_icon").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
        document.getElementById("experience_icon").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
        document.getElementById("projects_icon").style.boxShadow = "0px 0px 11px 3px rgba(0,0,0,0.25)";
        document.getElementById("photos_icon").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
    }

    function photos(){
        document.getElementById('bio').style.display = "none";
        document.getElementById('experience').style.display = "none";
        document.getElementById('projects').style.display = "none";
        document.getElementById('photos').style.display = "block";
        document.getElementById('bio_icon').style.backgroundColor = "transparent";
        document.getElementById('experience_icon').style.backgroundColor = "transparent";
        document.getElementById('projects_icon').style.backgroundColor = "transparent";
        document.getElementById('photos_icon').style.backgroundColor = backDark;
        document.getElementById("bio_icon").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
        document.getElementById("experience_icon").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
        document.getElementById("projects_icon").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
        document.getElementById("photos_icon").style.boxShadow = "0px 0px 11px 3px rgba(0,0,0,0.25)";
    }

    // function skills(){
    //     document.getElementById('bio').style.display = "none";
    //     document.getElementById('experience').style.display = "none";
    //     document.getElementById('projects').style.display = "none";
    //     document.getElementById('photos').style.display = "none";
    //     document.getElementById('skills').style.display = "block";

    //     document.getElementById('bio_icon').style.backgroundColor = "transparent";
    //     document.getElementById('experience_icon').style.backgroundColor = "transparent";
    //     document.getElementById('projects_icon').style.backgroundColor = "transparent";
    //     document.getElementById('photos_icon').style.backgroundColor = "transparent";
    //     document.getElementById('skills_icon').style.backgroundColor = "#1d202b";
    // }