var main_url = "https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us";
    // https://newsapi.org/v2/top-headlines?country=us&apiKey=8870c787b3904854bfcb207e29d0f65e

    var article_content = $()
    
    


    var api_key = "apiKey=8870c787b3904854bfcb207e29d0f65e";
    var source = "&source=cnn&sortBy=top&"; 
       var url = main_url + source + api_key;
       $.ajax({
         type: 'GET',
         url : url,
         contentType : "json",
        success: function(data){
           var data1 = data.articles

        
           data1.forEach(function(currentValue,index,array){ 

             var cursor_arr=[];
             var cursor = cursor_arr.length
       
              $("#cnn_next").on("click", function() {
                cursor_arr.push(1)
                cursor ++
                
                if (index == cursor && cursor <= 10 && cursor >=0){
                 
                  $("#article_title").empty()
                  $("#article_title").append("<h3>"+currentValue.title+"</h3>")
                  
                  $("#Read_More").empty()
                  $("#Read_More").append(`<a href="${currentValue.url}" class="btn btn-primary">Learn More</a>`)
                  
                  $("#article_content").empty()
                  $("#article_content").append("<p>"+currentValue.description+"</p>")

                  $("#article_author").empty()
                  $("#article_author").append(`<p><span style="color:red">${currentValue.author}</span></p>`)

                  $("#article_img").empty()
                  $("#article_img").append(`<img src="${currentValue.urlToImage}" class="img-fluid"/>`)

                
                  
                }
              })
              $("#cnn_back").on("click", function(){
      
                      cursor_arr.pop()
                      cursor = cursor_arr.length

                      if (index == cursor && cursor <= 10 && cursor >=0){
                 
                        $("#article_title").empty()
                        $("#article_title").append("<h3>"+currentValue.title+"</h3>")
                        
                        $("#Read_More").empty()
                        $("#Read_More").append(`<a href="${currentValue.url}" class="btn btn-primary">Learn More</a>`)
                        
                        $("#article_content").empty()
                        $("#article_content").append("<p>"+currentValue.description+"</p>")
      
                        $("#article_author").empty()
                        $("#article_author").append(`<p><span style="color:red">${currentValue.author}</span></p>`)
      
                        $("#article_img").empty()
                        $("#article_img").append(`<img src="${currentValue.urlToImage}" class="img-fluid"/>`)
      
                      
                        
                      }
            })
          })
        }
      })