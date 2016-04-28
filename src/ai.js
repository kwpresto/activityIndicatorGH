var AI = {
    show: function(num){
        var mu = "<div class='fadeBox'><div class='spinner" + num + "'></div><a class='close' href='javascript:AI.hide()'>Done</a></div>";
        document.body.innerHTML += mu;
    },
    hide: function(){
        $(".fadeBox").remove();
    }
}