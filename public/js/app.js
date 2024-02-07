const AppFunction = () => {

    let appObj = {};

    appObj.header = document.querySelector(".header");

    /**
     * Import sal.js for scroll animation
     */
    appObj.sal = require('sal.js');
    
    /**
     * Get the height of header, and add it to hero to make the hero overlap the header.
     */
    appObj.heroOverlap = function() {
        const hero = document.querySelector(".hero");
        const headerHeight = this.header.offsetHeight;
        hero.style.marginTop = "-"+headerHeight+"px";
        hero.style.paddingTop = headerHeight+"px";
    }

    /**
     * Make the header position fixed when scrolled
     */
    appObj.fixedHeader = function() {
        const header = this.header;
        window.addEventListener("scroll", function(event) {
            var top = this.scrollY;
        
            if(top > 50) {
                header.classList.add("header-fixed");
            } else {
                header.classList.remove("header-fixed");
            }           
        }, false);
    }

    return appObj;
}

let app = AppFunction();
app.heroOverlap();
app.fixedHeader();
app.sal();