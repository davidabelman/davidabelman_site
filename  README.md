Intro
-----
My personal website (http://www.davidabelman.co.uk).

Adding a project to the page
-----------------------------
To add a project, you must add both:

* A 'hover box' (with href = '#portfolioModal2', or similar, and id = 'subject_matter')
* A portfolio modal (with id = 'portfolioModal2', or similar)

To ensure a picture appears on the hover, add a picture named 'subject_matter.jpeg' (400-700px in width) to /img/portfolio folder.

Path forwarding
---------------
To enable www.davidabelman.co.uk/poems I have created a javascript forwarding on the file 'poems'. To get this to be recognised I had to add it to the 'index.php' file with an include_once, upload to Heroku, then remove from the 'index.php' file, then reupload to Heroku. That seemed to do the trick.

Heroku
------
Changes need to be pushed to heroku using git push heroku master.