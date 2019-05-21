$(document).ready(function(){
    $.get("https://jsonplaceholder.typicode.com/posts",function(data,status){
          console.log(typeof(data),data)
          $(".blogContainer").append("<header class='head'> <p class='head'> Articals </p> </header>");
          
          
          $(".head").css({ 'text-align' : 'center' ,
          'font-weight' : 'bold' ,
          'color'  :'#0f6868'  ,
          'font-size' : '40px'
      });
        
          $.each(data , function(index,element){

               var row = "<section class='all'>" + "<p class='paddBottom title'>" + element.title + "</p>" + "<p class='padBottom body'>" + element.body + "</p>"  + " <button class='readMoreBtn'>   Read More </button>" ;
                // $(".postTitle").append("<p class='paddBottom title'>" + element.title + "</p>")
                // $(".postContent").append("<p class='padBottom body'>" + element.body + "</p>" )
                // $(".actions").append("<section class='buttons'> <button class='deletBtn'>   Delete  </button> <button class='editBtn'>   Edit  </button>  </section>" )
                // $(".wrapper").append("<p class='paddBottom title'> + element.title + </p> <p class='padBottom body'> + element.body + </p> <section class='buttons'> <button class='deletBtn'>   Delete  </button> <button class='editBtn'>   Edit  </button>  </section> " )
                // $(".wrapper").append("<p class='paddBottom title'>" + element.title + "</p>")
                // $(".wrapper").append("<p class='padBottom body'>" + element.body + "</p>" )
                // $(".wrapper").append("<section class='buttons'> <button class='deletBtn'>   Delete  </button> <button class='editBtn'>   Edit  </button>  </section>" )
                
                $(".blogContainer").append(row)
                 
                $(".all").css({ 'background-color' : '#0f6868' ,
                                 'padding' : '20px' ,
                                 'margin' : '20px' , 
                                 'color'  :'white'
                             });


                $(".readMoreBtn").css({'background-color' : 'white' ,
                                       'border' : 'none' ,
                                       'padding' :'10px'
                                     });

                });
    });

    // $(".head").css("text-align", "center");

    // $(".all").css({ 'background-color' : 'red'});

});