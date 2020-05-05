const about = document.getElementById("about");
const right = document.querySelector('.right');

about.addEventListener("click", (e)=>{
   return right.innerHTML = `  <div class="right text">
   <p id="heading"><span class="heading"> <a href='index.html'> <<  </a></span>
   <p>I'm Emma. I started this to practice/document the html/css/js I've been learning on my gap year/Covid-19 time. (So much for this year's travel plans..)
   </p>
   <p>I grew up in Hong Kong and then shuttled between Hong Kong and England (around Leeds and then London for University). Home is where the heart is, and my heart pulls between these places.</p>
   <p>Formalities aside, I enjoy making stuff. Right now I'm doing freelance writing and learning how to code. I'm currently doing work related to e-commerce content generation and marketing.</p>
   <p>To be frightful, I don't know what it is I want to do; only a sort of vague tugging sensation that I would like to build/create things, live with ownership & freedom, and to leave it better than I found it.</p>
   <p><a href='https://emmakayee.github.io/2020/resume.pdf'><span class="this">THIS</span></a> is a link to my resume if you're looking for it. Reach out to me, I rarely bite.</p>
   <br>
   <table class="table">
       <caption>As of Jan, 2020</caption>
       <tr>
         <th>Likes</th>
         <th>Dislikes</th>
       </tr>
       <tr>
         <td>j hus, fatima yamaha, mahalia, goldlink, joy crookes, folamour, coeo</td>
         <td>the reason why it didn't work is because you didn't nest it properly</td>
       </tr>
       <tr>
           <td>Starsigns (I'm a virgo)</td>
           <td>Pollution</td>
       </tr>
       <tr>
           <td>Nature</td>
           <td>Being outside</td>
       </tr>
       <tr>
           <td>Shopping in a big Sainsbury's</td>
           <td>Hot face from mask</td>
       </tr>
     </table>
     <br>
     <div class="links">
       <a id ="about" href="#" class="disabled">LinkedIn (soon) // </a> 
       <a href="#"class="disabled">Medium (soon)//  </a>
       <a href="#"class="disabled"> GitHub (soon)// </a>
    
   </div>
</div>`
})