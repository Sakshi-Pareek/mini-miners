//==========================================navbar====================================
function opennav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle('overflow_hidden');
    document.getElementById("menubtn-icon").classList.toggle("cross");
}
// ===================================DEFINE-SCRIPT-YEAR ================================ */
const d = new Date();
document.getElementById("year_change").innerHTML = d.getFullYear();
// < !-- =============== DEFINE COUNTER SCRIPT =============== -->
function runScriptWhenVisible() {
    $.fn.jQuerySimpleCounter = function (options) {
        var settings = $.extend({
            start: 0,
            end: 100,
            easing: 'swing',
            duration: 3000,
            complete: ''
        }, options);

        var thisElement = $(this);

        $({ count: settings.start }).animate({ count: settings.end }, {
            duration: settings.duration,
            easing: settings.easing,
            step: function () {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
            },
            complete: settings.complete
        });
    };

    $('#number1').jQuerySimpleCounter({ end: 6789, duration: 3000 });
}

var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            runScriptWhenVisible();
            observer.unobserve(entry.target);
        }
    });
}, options);

var targetElement = document.getElementById('projectFacts');
observer.observe(targetElement);