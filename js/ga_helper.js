// GA initiation code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-52998648-1', 'auto');
ga('require', 'displayfeatures'); 
ga('send', 'pageview');
current_page = window.document.title;
ga('send', 'event', current_page, 'page loaded');
console.log("Sent page load event")

// When doument is ready
$(document).ready( function () {

    /* Records specific portfolio opens */
    $('.portfolio-item').click( 
            function() {
                var id = $(this).find('a').attr('id');
                current_page = window.document.title;
                ga('send', 'event', current_page, 'portfolio item opened', id);
                console.log("Sent portfolio event:", id);
        }
    );        

    /* Records any link clicked on page*/
    $('a').click( function() { 
        link_location = $(this).attr('href');
        current_page = window.document.title;
        // hitCallback ensures document.location only changes once the event has been received by GA
        ga('send', 'event', current_page, 'link clicked', link_location, 
        	{'hitCallback': 
        		function(){document.location = link_location;}
        	}
        );
        console.log("Sent click event:", link_location)
    })

});