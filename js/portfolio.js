function changeImage(imageNumber) {
    // var imageContainer = document.getElementById("imageContainer");
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    var image3 = document.getElementById("image3");
    var image4 = document.getElementById("image4");
    var image5 = document.getElementById("image5");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");




    if (imageNumber === 1) {
        image1.classList.remove('hidden');
        image2.classList.add('hidden');
        image3.classList.add('hidden');
        image4.classList.add('hidden');
        image5.classList.add('hidden');
        btn1.style.backgroundColor = '#157FE1';
        btn2.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn3.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn4.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn5.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else if (imageNumber === 2) {

        image1.classList.add('hidden');
        image2.classList.remove('hidden');
        image3.classList.add('hidden');
        image4.classList.add('hidden');
        image5.classList.add('hidden');
        btn2.style.backgroundColor = '#157FE1';
        btn1.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn3.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn4.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn5.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else if (imageNumber === 3) {
        // image3.style.display = "flex";
        image1.classList.add('hidden');
        image3.classList.remove('hidden');
        image2.classList.add('hidden');
        image4.classList.add('hidden');
        image5.classList.add('hidden');
        btn3.style.backgroundColor = '#157FE1';
        btn2.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn1.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn4.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn5.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
    else if (imageNumber === 4) {
        // image4.style.display = "flex";
        image1.classList.add('hidden');
        image4.classList.remove('hidden');
        image3.classList.add('hidden');
        image2.classList.add('hidden');
        image5.classList.add('hidden');
        btn4.style.backgroundColor = '#157FE1';
        btn2.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn3.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn1.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn5.style.backgroundColor = 'rgba(0, 0, 0, 0)';

    } else if (imageNumber === 5) {
        // image5.style.display = "flex";
        image1.classList.add('hidden');
        image5.classList.remove('hidden');
        image3.classList.add('hidden');
        image4.classList.add('hidden');
        image2.classList.add('hidden');
        btn5.style.backgroundColor = '#157FE1';
        btn2.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn3.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn4.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn1.style.backgroundColor = 'rgba(0, 0, 0, 0)';

    }
}