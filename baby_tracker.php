<?php
    /*
    * Template Name: Baby Tracker
    */
    get_header(); ?> 

<!-- <?php
 while( have_posts() ):
  the_post();
  the_content();
endwhile; wp_reset_postdata();
?> -->
  <h2>Future Portman - <span id="baby_days_left"></span> days to go...</h2>
<section>

  <div>
    <img id="baby_image" src="">
    <h2>It's now<span id="baby_days"></span> till she is born. *</h2>
    <h4>This week she is roughly...</h4>
    <div id="baby_facts"></div>
    <p>* Based off a Nov 8th birth date **</p>
    <p>** Assumming Mike's math is correct</p>
  </div>
</section>


<script >
var rootFolder = '<?= get_template_directory_uri() ?>';
var jsonFile   = rootFolder + '/baby_info_by_week.json';
const imageElement = document.getElementById("baby_image");
const babyFacts = document.getElementById("baby_facts");
fetch(jsonFile)
  .then(response => response.json())
  .then(data => {
    // Log the data to check its validity
    function findWeekInfo(weekNumber) {
      const entry = data[weekNumber];
      if (entry) {
        
        babyFacts.innerHTML =` 
        <h3>${entry.weight} , ${entry.height}</h3>
        <h3>Key growing event(s) this week:</h3>
        <ul>
        ${entry.keyEvents.map(event => `<li>${event}</li>`).join("")}
        </ul>`;
        imageElement.src = entry.image;
      }  else {
          console.log("No Key Events for this week.");
        }
      }

      const inputWeekNumber = weekOfBaby; // Replace with the desired week number
    findWeekInfo(inputWeekNumber);
  });



</script>
<?php get_footer(); ?>