let thumbnailItems = document.querySelectorAll('.thumbnail .item');
let runTimeOut;
let timeRunning = 3000;
let timeAutoNext = 7000;

// function to show the selected thumbnail
function showThumbnail(index) {
    let totalItems = thumbnailItems.length;

    // Move the selected thumbnail to the first position in the list
    for (let i = 0; i < totalItems; i++) {
        if (i === index) {
            let selectedThumbnail = thumbnailItems[i].cloneNode(true);
            thumbnailItems[i].remove();
            document.querySelector('.thumbnail').prepend(selectedThumbnail);

            // Show the corresponding slider item
            showSlider(index);
            break;
        }
    }
}

function showThumbnailByID(id) {
    items = document.querySelector('.carousel > .list').children;


    for (let item of items) {
        item.classList.add('hidden');
        item.classList.remove('active');
    }

    showItem = document.getElementById(id);
    showItem.classList.remove('hidden');
    showItem.classList.add('active');
}

// function to show the slider based on the given index
function showSlider(index) {
    let sliderItems = document.querySelectorAll('.carousel .list .item');
    let totalItems = sliderItems.length;

    for (let i = 0; i < totalItems; i++) {
        if (i == index) {
            let selectedSliderItem = sliderItems[i].cloneNode(true);
            sliderItems[i].remove();
            document.querySelector('.carousel .list').prepend(selectedSliderItem);
            break;
        }
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        document.querySelector('.carousel').classList.remove('next');
        document.querySelector('.carousel').classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext);
}

// // Get DOM elements
// let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');
// let runNextAuto;

// // Next button click event
// nextDom.onclick = function () {
//     showSlider('next');
// }

// // Previous button click event
// prevDom.onclick = function () {
//     showSlider('prev');
// }
