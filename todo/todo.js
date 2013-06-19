$(function(){
    
    // 追加ボタンハンドラー
    // 追加ボタンが押されたときに、todoのリストを追加する。
    function addTodo() {
        var todo = $("#todoText").val();
        // todoの内容が空だったらアラートする
        if (!$.trim(todo)) {
            alert("todoを入力してください。");
            return;
        }
        $("#todoList").append('<li class="todoitem"><input type="checkbox" />' + todo + '</li>');
        //$("#todoList li:last").dblclick(function(){
        //    alert(this);
        //});
        if ($("#todoList li").length >= 2) {
            $(".notodo").hide();
        }
        $("#todoText").val("");
    }
    
    $("#todoAddButton").click(function(){
        addTodo();
    });
    
    $("#todoText").keypress(function(e){
         var code = (e.keyCode ? e.keyCode : e.which);
         if (code == 13) { // エンタキーが押された時。
            addTodo();
         }
    });
    
    // 削除ボタンハンドラー
    // 削除ボタンが押されたときに、チェックされているtodoが削除される。
    $("#todoRemoveButton").click(function(){
        if($("#todoList li").length === 1){
            alert("Todoがありません。");
            return;
        }
        
        if($("#todoList input:checked").length === 0){
            alert("チェックを入れて下さい。");
            return;
        }
        $("#todoList input:checked").closest("li").remove();
        if ($("#todoList li").length === 1) {
            $(".notodo").show();
        }
    });
    
    $("#todoList").on("dblclick", ".todoitem", function(){
        var $this = $(this);
        var newTodo = prompt("入力して下さい。", $this.text());
        if (newTodo === null) return; // キャンセルをクリックした時
        if (!$.trim(newTodo)) {
            alert("todoを入力してください。");
            return;
        }
        $this.text(newTodo);
        $this.prepend('<input type="checkbox" />');
    });
    
    
});











