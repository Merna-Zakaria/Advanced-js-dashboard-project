// $("button").click(function(){
//     $("#div1").load("https://jsonplaceholder.typicode.com/posts", function(responseTxt, statusTxt, xhr){
//       if(statusTxt == "success")
//         alert("External content loaded successfully!");
//       if(statusTxt == "error")
//         alert("Error: " + xhr.status + ": " + xhr.statusText);
//     });
//     // console.log(responseTxt, statusTxt, xhr);
//   });
//   var xml= new XMLHttpRequest();
//   console.log(xml)

$(document).ready(function(){
    $.get("https://jsonplaceholder.typicode.com/posts",function(data,status){
          console.log(typeof(data),data)
          $(".container").append(' <section class="header"> <section class="postTitle">  <h2>Post Title</h2>  </section>  <section class="postContent">  <h2>Post Content</h2>  </section> <section class="actions">  <h2>Actions</h2>   </section> </section>');
     
        $.each(data , function(index,element){

               var row = "<section class='all'>" + "<p class='paddBottom title'>" + element.title + "</p>" + "<p class='padBottom body'>" + element.body + "</p>"  + "<section class='buttons'> <button class='deletBtn'>   Delete  </button> <button class='editBtn'>   Edit  </button>  </section>" +"</section>"
               
                
                $(".container").append(row)
        
                })

      
       $(".buttons").css({'display' : 'flex' ,'align-self' : 'center'})  ;
       $(".deletBtn , .editBtn").css({'margin-right' : '30px',
                                      'height' : '40px' ,
                                      'background-color' : '#0f6868' ,
                                      'color' : 'white' ,
                                       'width' : '70px'
                                     });
       $(".all , .header").css({'display':' grid',
                                'grid-template-columns': '1fr 1fr 1fr',
                                'justify-items': 'center',
                                 'border-bottom' : '1px solid #0f6868' ,
                                 'color' : 'white'
   });

        $(".header").css({'color' : '#0f6868'})


        

       function removeData(){
          
        $(".deletBtn").click(function(){
          
                if(confirm("Are Y Sure Y Want to Remove It ??")) { 
                        $(this).parent().parent().css({'display':'none'})
                          }
               });
       }
       
       removeData();
  
       
       function editData(){

        $(".editBtn").click(function(){
                if(confirm("Are Y Sure Y Want to Edit It ??")){
                       var storeTitle = $(this).parent().parent().children(':first-child').text() ;
                       var storrContent = $(this).parent().prev().text();
               
                       localStorage.setItem("myTitle" ,  storeTitle);
                       localStorage.setItem("myContent" , storrContent  ) ;

                }
             
        })
          
        
        $(".editEdit").click(function(){
        var getTitle = localStorage.getItem("myTitle") ; 
        var result1 ="<p class='editStyle'>" + getTitle + "</p>"  ;
        var getContent = localStorage.getItem("myContent");
        var result2 ="<p class='editStyle'>" + getContent + "</p>"
        $(".editTitle").append(result1);
        $(".editContent").append(result2);

        $(".editStyle").css({'font-size' : '20px' });

       
        });  
     }


    
   
       editData();

      
      
        })
        


      
        
        
       
});

