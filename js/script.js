"use strict";

let tab = function () {
    let tabs = document.querySelectorAll('.tabs-title'),
        tabsContent = document.querySelectorAll('.tab'),
        tabName;

        tabs.forEach(elem => {
            elem.addEventListener("click", selectTab);
        });

        function selectTab() {
            tabs.forEach(elem => {
                elem.classList.remove('active');
            });
            this.classList.add('active');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }

        function selectTabContent(tabName) {
            tabsContent.forEach(elem => {
                if (elem.classList.contains(tabName)) { 
                    elem.classList.add('active')
                } else {
                    elem.classList.remove('active');
                };
            });
        }
};

tab();

let imgName = 'work-all';
let imgsCategory = function () {
    let tabs = document.querySelectorAll('.work-tabs-title'),
        tabsContent;

        tabs.forEach(elem => {
            elem.addEventListener("click", selectCategory);
        });

        function selectCategory() {
            tabs.forEach(elem => {
                elem.classList.remove('active');
            });
            this.classList.add('active');
            imgName = this.getAttribute('data-tab-name');
            selectImgs(imgName);
        };

        function selectImgs(imgName) {
            tabsContent = document.querySelectorAll('.work__img');
            tabsContent.forEach(elem => {
                if (elem.classList.contains(imgName)) { 
                    elem.classList.add('active');
                } else {
                    elem.classList.remove('active');
                };
            });
        };
};

imgsCategory();

let loadMorePictures = function () {
    let flag = true;
    const btnLoadMoreWork = document.getElementById('load-more-work');
    const divWithImgs = document.getElementById('work__imgs__parent');
    btnLoadMoreWork.addEventListener("click", function LoadPictures() {
        const loading = document.getElementById('load-content');
        btnLoadMoreWork.before(loading);
        loading.style.display = "flex";
        btnLoadMoreWork.style.padding = "30px 0 99px";
        
        setTimeout(() => {
            if (flag === true) {
                let divArr = [], imgArr = [];
                for (let i = 0; i < 12; i++) {
                    divArr[i] = document.createElement('span');
                    divArr[i].className = ('img__wrapper');
                    imgArr[i] = document.createElement('img');
                    imgArr[i].setAttribute('width', 285);
                    imgArr[i].setAttribute('height', 211);
                };

                imgArr[0].setAttribute('src', 'img/graphic_design/graphic-design1.jpg');
                imgArr[0].setAttribute('alt', 'Umbrella');
                imgArr[0].classList.add('work__img', 'work-graphic-design', 'work-all', 'active');

                imgArr[1].setAttribute('src', 'img/graphic_design/graphic-design6.jpg');
                imgArr[1].setAttribute('alt', 'Tagline');
                imgArr[1].classList.add('work__img', 'work-graphic-design', 'work-all', 'active');

                imgArr[2].setAttribute('src', 'img/graphic_design/graphic-design7.jpg');
                imgArr[2].setAttribute('alt', 'Advertisement of design');
                imgArr[2].classList.add('work__img', 'work-graphic-design', 'work-all', 'active');

                imgArr[3].setAttribute('src', 'img/web_design/web-design4.jpg');
                imgArr[3].setAttribute('alt', 'Creative Design');
                imgArr[3].classList.add('work__img', 'work-web-design', 'work-all', 'active');

                imgArr[4].setAttribute('src', 'img/web_design/web-design5.jpg');
                imgArr[4].setAttribute('alt', 'Design with HTML&CSS');
                imgArr[4].classList.add('work__img', 'work-web-design', 'work-all', 'active');

                imgArr[5].setAttribute('src', 'img/web_design/web-design6.jpg');
                imgArr[5].setAttribute('alt', 'Colorfull Design');
                imgArr[5].classList.add('work__img', 'work-web-design', 'work-all', 'active');

                imgArr[6].setAttribute('src', 'img/landing_page/landing-page4.jpg');
                imgArr[6].setAttribute('alt', 'Lorem Ipsum');
                imgArr[6].classList.add('work__img', 'work-landing-pages', 'work-all', 'active');

                imgArr[7].setAttribute('src', 'img/landing_page/landing-page5.jpg');
                imgArr[7].setAttribute('alt', 'Galaxy Phone');
                imgArr[7].classList.add('work__img', 'work-landing-pages', 'work-all', 'active');

                imgArr[8].setAttribute('src', 'img/landing_page/landing-page6.jpg');
                imgArr[8].setAttribute('alt', 'Colise');
                imgArr[8].classList.add('work__img', 'work-landing-pages', 'work-all', 'active');

                imgArr[9].setAttribute('src', 'img/wordpress/wordpress4.jpg');
                imgArr[9].setAttribute('alt', 'Tablets');
                imgArr[9].classList.add('work__img', 'work-wordpress', 'work-all', 'active');

                imgArr[10].setAttribute('src', 'img/wordpress/wordpress5.jpg');
                imgArr[10].setAttribute('alt', 'Notebook');
                imgArr[10].classList.add('work__img', 'work-wordpress', 'work-all', 'active');

                imgArr[11].setAttribute('src', 'img/wordpress/wordpress6.jpg');
                imgArr[11].setAttribute('alt', 'Monitor');
                imgArr[11].classList.add('work__img', 'work-wordpress', 'work-all', 'active');

                for (let i = 0; i < 12; i++) {
                    divWithImgs.appendChild(divArr[i]);
                    divArr[i].appendChild(imgArr[i]);
                };

                selectImgs();
                showHidePicturesHover();
                flag = false;
            } else {
                let divArr = [], imgArr = [];
                for (let i = 0; i < 12; i++) {
                    divArr[i] = document.createElement('span');
                    divArr[i].className = ('img__wrapper');
                    imgArr[i] = document.createElement('img');
                    imgArr[i].setAttribute('width', 285);
                    imgArr[i].setAttribute('height', 211);
                };

                imgArr[0].setAttribute('src', 'img/graphic_design/graphic-design8.jpg');
                imgArr[0].setAttribute('alt', 'Colorfull border');
                imgArr[0].classList.add('work__img', 'work-graphic-design', 'work-all', 'active');

                imgArr[1].setAttribute('src', 'img/graphic_design/graphic-design9.jpg');
                imgArr[1].setAttribute('alt', 'Maps of flowers');
                imgArr[1].classList.add('work__img', 'work-graphic-design', 'work-all', 'active');

                imgArr[2].setAttribute('src', 'img/graphic_design/graphic-design10.jpg');
                imgArr[2].setAttribute('alt', 'Shelves with items');
                imgArr[2].classList.add('work__img', 'work-graphic-design', 'work-all', 'active');

                imgArr[3].setAttribute('src', 'img/web_design/web-design7.jpg');
                imgArr[3].setAttribute('alt', 'PC Networks');
                imgArr[3].classList.add('work__img', 'work-web-design', 'work-all', 'active');

                imgArr[4].setAttribute('src', 'img/graphic_design/graphic-design11.jpg');
                imgArr[4].setAttribute('alt', 'Black&White');
                imgArr[4].classList.add('work__img', 'work-graphic-design', 'work-all', 'active');

                imgArr[5].setAttribute('src', 'img/graphic_design/graphic-design12.jpg');
                imgArr[5].setAttribute('alt', 'Flash');
                imgArr[5].classList.add('work__img', 'work-graphic-design', 'work-all', 'active');

                imgArr[6].setAttribute('src', 'img/landing_page/landing-page7.jpg');
                imgArr[6].setAttribute('alt', 'Bromo');
                imgArr[6].classList.add('work__img', 'work-landing-pages', 'work-all', 'active');

                imgArr[7].setAttribute('src', 'img/wordpress/wordpress7.jpg');
                imgArr[7].setAttribute('alt', 'Input');
                imgArr[7].classList.add('work__img', 'work-wordpress', 'work-all', 'active');

                imgArr[8].setAttribute('src', 'img/wordpress/wordpress8.jpg');
                imgArr[8].setAttribute('alt', 'Letter W');
                imgArr[8].classList.add('work__img', 'work-wordpress', 'work-all', 'active');

                imgArr[9].setAttribute('src', 'img/wordpress/wordpress9.jpg');
                imgArr[9].setAttribute('alt', 'Letter W - Tagline');
                imgArr[9].classList.add('work__img', 'work-wordpress', 'work-all', 'active');

                imgArr[10].setAttribute('src', 'img/wordpress/wordpress10.jpg');
                imgArr[10].setAttribute('alt', 'Tablet with letter W');
                imgArr[10].classList.add('work__img', 'work-wordpress', 'work-all', 'active');

                imgArr[11].setAttribute('src', 'img/graphic_design/graphic-design5.jpg');
                imgArr[11].setAttribute('alt', 'Abstraction');
                imgArr[11].classList.add('work__img', 'work-graphic-design', 'work-all', 'active');

                for (let i = 0; i < 12; i++) {
                    divWithImgs.appendChild(divArr[i]);
                    divArr[i].appendChild(imgArr[i]);
                };
                
                selectImgs();
                showHidePicturesHover();
                btnLoadMoreWork.remove();
                divWithImgs.style.paddingBottom = "99px";
            };
            loading.style.display = "none";
            btnLoadMoreWork.style.padding = "70px 0 99px";
        }, 2000);

        function selectImgs() {
            let tabsContent = document.querySelectorAll('.work__img');
            tabsContent.forEach(elem => {
                if (elem.classList.contains(imgName)) { 
                    elem.classList.add('active')
                } else {
                    elem.classList.remove('active');
                };
            });
        };
    });
};
loadMorePictures();

let showHidePicturesHover = function () {
    const imgsCollectionWrapper = document.querySelectorAll('.img__wrapper');
    imgsCollectionWrapper.forEach(elem => {
        const divHover = document.getElementById('img-hover');

        elem.addEventListener("mouseenter", function hideImgs() {
            elem.appendChild(divHover);
            const spanImgName = document.getElementById('img__name');
            spanImgName.innerHTML = elem.firstElementChild.getAttribute('alt');
            spanImgName.style.cssText= `font-weight: bold; font-size: 14.1771px; line-height: 25px; 
                                        text-transform: uppercase; color: #18CFAB; display: block; 
                                        padding-top: 30px; text-align: center`;
            
            const spanCategory = document.getElementById('category');
            
            let tabs = document.querySelectorAll('.work-tabs-title');
            tabs.forEach(element => {
                let attr = element.getAttribute('data-tab-name');
                if (elem.firstElementChild.classList.contains(attr) && attr !== "work-all") {
                    spanCategory.innerHTML = element.innerHTML;
                };
            });
            
            spanCategory.style.cssText= `font-weight: 300; font-size: 12.1518px; line-height: 20px; 
                                        color: #8A8A8A; display: block; text-align: center`;

            elem.firstElementChild.style.opacity = 0;
            divHover.style.opacity = 1;
        });

        divHover.addEventListener("mouseleave", function showImgs() {
            elem.firstElementChild.style.opacity = 1;
            divHover.style.opacity = 0;
        });
    });
};
showHidePicturesHover();

let pictureContent = function () {
    let tabs = document.querySelectorAll('.slider__circle'),
        tabsContent = document.querySelectorAll('.comments__content'),
        tabsName = document.querySelectorAll('.comments__name'),
        tabsOcupation = document.querySelectorAll('.comments__ocupation'),
        tabsFoto = document.querySelectorAll('.big-foto__img'),
        tabsPicture = document.querySelectorAll('.slide__img'),
        leftArrow = document.getElementById('left'),
        rightArrow = document.getElementById('right'),
        wrapperContent = document.getElementById('content-karusel'),
        wrapperName = document.getElementById('name-karusel'),
        wrapperOcupation = document.getElementById('ocupation-karusel'),
        bigPhotoWrapper = document.getElementsByClassName('comments__big-foto')[0],
        index;

        tabs.forEach(elem => {
            if (elem.classList.contains('active__comments')) {
                index = +elem.getAttribute('data-index');
            };
        });
    
        tabs.forEach(elem => {
            elem.addEventListener("click", selectTab);
        });

        function selectTab() {
            tabs.forEach(elem => {
                elem.classList.remove('active__comments');
            });
            this.classList.add('active__comments');
            index = +this.getAttribute('data-index');
            
            selectPicture(index);
        };
        
        leftArrow.addEventListener("click", function () {
            if (index !==0) {
                index = +index - 1;
            } else {
                index = tabs.length - 1;
            };

            if (index === (tabs.length - 1)) {
                tabsPicture.forEach(elem => {
                    elem.remove();
                });
                tabsContent.forEach(elem => {
                    elem.remove();
                });
                tabsName.forEach(elem => {
                    elem.remove();
                });
                tabsOcupation.forEach(elem => {
                    elem.remove();
                });
                tabsFoto.forEach(elem => {
                    elem.remove();
                });
                
                for (let i = 0; i < tabs.length; i++) {
                    if (i === 0) {
                        tabs[i].appendChild(tabsPicture[tabs.length - 1]);
                        wrapperContent.appendChild(tabsContent[tabs.length - 1]);
                        wrapperName.appendChild(tabsName[tabs.length - 1]);
                        wrapperOcupation.appendChild(tabsOcupation[tabs.length - 1]);
                        bigPhotoWrapper.appendChild(tabsFoto[tabs.length - 1]);
                    } else {
                        tabs[i].appendChild(tabsPicture[i - 1]);
                        wrapperContent.appendChild(tabsContent[i - 1]);
                        wrapperName.appendChild(tabsName[i - 1]);
                        wrapperOcupation.appendChild(tabsOcupation[i - 1]);
                        bigPhotoWrapper.appendChild(tabsFoto[i - 1]);
                    };
                };
                
                tabsContent = document.querySelectorAll('.comments__content');
                tabsName = document.querySelectorAll('.comments__name');
                tabsOcupation = document.querySelectorAll('.comments__ocupation');
                tabsFoto = document.querySelectorAll('.big-foto__img');
                tabsPicture = document.querySelectorAll('.slide__img');

                index = 0;
            };
            selectPicture(index);
        });

        rightArrow.addEventListener("click", function () {
            index = (+index + 1) % tabs.length;

            if (index === 0) {
                tabsPicture.forEach(elem => {
                    elem.remove();
                });
                tabsContent.forEach(elem => {
                    elem.remove();
                });
                tabsName.forEach(elem => {
                    elem.remove();
                });
                tabsOcupation.forEach(elem => {
                    elem.remove();
                });
                tabsFoto.forEach(elem => {
                    elem.remove();
                });

                for (let i = 0; i < tabs.length; i++) {
                    tabs[i].appendChild(tabsPicture[(i + 1) % tabs.length]);
                    wrapperContent.appendChild(tabsContent[(i + 1) % tabs.length]);
                    wrapperName.appendChild(tabsName[(i + 1) % tabs.length]);
                    wrapperOcupation.appendChild(tabsOcupation[(i + 1) % tabs.length]);
                    bigPhotoWrapper.appendChild(tabsFoto[(i + 1) % tabs.length]);
                };

                tabsContent = document.querySelectorAll('.comments__content');
                tabsName = document.querySelectorAll('.comments__name');
                tabsOcupation = document.querySelectorAll('.comments__ocupation');
                tabsFoto = document.querySelectorAll('.big-foto__img');
                tabsPicture = document.querySelectorAll('.slide__img');

                index = tabs.length - 1;
            };
            selectPicture(index);
        });

        function selectPicture(index) {
            tabs.forEach(elem => {
                elem.classList.remove('active__comments');
            });
            tabsContent.forEach(elem => {
                elem.classList.remove('active__comments');
            });
            tabsName.forEach(elem => {
                elem.classList.remove('active__comments');
            });
            tabsOcupation.forEach(elem => {
                elem.classList.remove('active__comments');
            });
            tabsFoto.forEach(elem => {
                elem.classList.remove('active__comments');
            });
        
            tabs[index].classList.add('active__comments');
            tabsContent[index].classList.add('active__comments');
            tabsName[index].classList.add('active__comments');
            tabsOcupation[index].classList.add('active__comments');
            tabsFoto[index].classList.add('active__comments');
        };
};
pictureContent();
