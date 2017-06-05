$(document).ready(function(){
    console.log("test");
    // $('form').submit(function (e) {
    //     e.preventDefault();
    //     console.log("test2");
    //     console.log($("#myform").serializeArray());
    // });
    // $('#checkUser1').submit(function (e) {
    //     e.preventDefault();
    //     console.log("test2");
    //     console.log($("#myform").serializeArray());
    //     var id = "5921665a1b4d7120741911e5"
    //     $.ajax({
    //         type: "GET",
    //         url: "/api/users/" + id,
    //         contentType: "application/json",
    //         success: function(result){
    //             $.each(result, function(index, value){
    //                 console.log(value._id);
    //                 $("#users").append($("<div>" +
    //                     "<input type='text' name='id' id="+value._id+"  value="+value._id+"></input>" +
    //                     "<input type='text' name='name' id="+value._id+" value="+value.name+"></input>" +                        
    //                     "</div>"                       
    //                 ))
    //             });
    //         }
        
    // });
    $('#checkUser').click(function (e) {
        e.preventDefault();
        console.log("test3");
        $.ajax({
            type: "GET",
            url: "/api/users",
            contentType: "application/json",
            success: function(result){
                $("#users").html("<div></div>");
                $.each(result, function(index, value){
                    console.log(value._id);                    
                    $("#users").append($("<div>" +
                        "<button class='deleteUser' name="+value._id+"  value='delete'>Delete</button>" +
                        "<button class='updateUser' name="+value._id+"  value='update'>Update</button>" +
                        "<button class='detailsUser' name="+value._id+"  value='update'>Details</button>" +
                        "<input type='text' name='id' id="+value._id+"  value="+value._id+"></input>" +
                        "<input type='text' name='name' id="+value._id+" value="+value.name+"></input>" +                        
                        "</div>"                       
                    ))
                });
                $('.deleteUser').click(function () {
                    var id = $(this).attr('name');
                    console.log("id = " + id);
                    console.log("delete");
                    $.ajax({
                        type: 'DELETE',
                        url: '/api/users/' + id,
                        contentType: "application/json",
                        success: function(res) {
                            alert("Sassa");
                        },
                        error: function(data){
                            alert(data.massege);
                        }
                    });                
                });
                $('.updateUser').click(function () {
                    var id = $(this).attr('name');
                    var name = $("[name = name][id =" + id + "]").val();
                    var user = {
                        id2:id,
                        name2:name
                    }
                    console.log("update");
                    $.ajax({
                        type: 'PUT',
                        url: '/api/users/' + id,
                        contentType: "application/json",
                        data: JSON.stringify(user),
                        success: function(res) {
                            alert("Sassa");
                        }
                    });                
                });
                $('.detailsUser').click(function () {
                    var id = $(this).attr('name');
                    $.ajax({
                        type: 'GET',
                        url: '/api/users/' + id,
                        contentType: "application/json",
                        success: function(res) {
                            console.log("ssssss    "+res);
                            $("#detailUser").html("<div>" +
                                "name: " + res[0].name + "<br>"+ "</div>"
                            )
                        }
                    });                
                });
            }
        });
    });

    $('form').submit(function(e) {
        e.preventDefault();
        var name = $("[name=name]").val();
        var user = {
            name: name,
        };
        $.ajax({
            url: "/api/users",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(user),
            dataType: "json",
            success: function (result) {
                alert("You add user");
            }
        });
    });
});