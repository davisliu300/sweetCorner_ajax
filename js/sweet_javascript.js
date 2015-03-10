var pages = {
	home: 
		{pageUrl: 'home.html' ,default: true},
	"about us":
		{pageUrl: 'about-us.html'},
	"services":
		{pageUrl: 'services.html'},
	"contact" : 
		{pageUrl: 'contact.html'},
	"testing page - Davis":
		{pageUrl: 'testingDavis.html'}
};

$("document").ready(function(){
    create_menu();    
});


function create_menu(){
 var nav_ul = $("nav ul");
    for(var index in pages){
        console.log("The index is "+index);
        var li = $("<li/>");
        var a = $("<a/>").text(index);
		//self-invoking listener.
        (function(){
            var my_index = index;
            li.on("click","a",function(){
                var my_page = pages[my_index];
                load_page(my_page.pageUrl);
            });
        })();
        li.append(a);
        //a.appendTo(li);
        nav_ul.append(li);
        if(pages[index].default==true){
            load_page(pages[index].pageUrl);
        }
    }
	
}

function load_page(page_url){
    //load the indicated page into the #main_content section
    $.post(page_url, function(data){
    $('#main_contents').html(data);
    });
}
