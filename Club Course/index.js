function loadTable() {
    $('#courseTable').empty();
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><<th>主題</th>/tr>");

    var MSperDay = 24*60*60*1000;
    for (var x = 0; x < topics.length; x++) {
        $('#courseTable').append(`
            <tr>
            <td>${x+1}</td>
            <td>${(new Date(startDate.getTime()+7*x*MSperDay)).toLocaleDateString(
                undefined, {month: "numeric", day: "numeric"})}
            </td>
            <td id="">${topics[x]}</td>
            </tr>
        `);
    }
}

$(function() {
    $(".trigger_popup_fricc").on('click', function(){
        $('.hover_bkgr_fricc').show();
     });
     $('.hover_bkgr_fricc').on('click', function(){
         $('.hover_bkgr_fricc').hide();
     });
     $('.popupCloseButton').on('click', function(){
         $('.hover_bkgr_fricc').hide();
     });

    $('#datePicker').on('change', function() {
        startDate = new Date(this.value);
        if (!editing) {
            loadTable();
            $('#courseTable').css('visibility', 'visible')
            $('#btnEdit').css('visibility', 'visible')
            $('.trigger_wrapper').css('visibility', 'visible')

            $('.datePick').html('<h3 id="info">This is your schedule.</h3>')
        }
    });

    $("#btnEdit").on('click', function(){
        editing = true;
        $('td.rowDel').css('visibility', 'visible')
        $('#btnDone').css('visibility', 'visible')
        $('#btnCancel').css('visibility', 'visible')
        $('#btnEdit').css('visibility', 'hidden')

        $('.datePick').html(
            '<p id="info">Please choose the starting date of your schedule: <input type="date" id="datePicker"></p>'
        );

        for(let i=2; i<=14; i+=3 ) {
            $('#courseTable td').eq(i).html(
                `<input type="text" value=${topics[Math.floor(i/3)]}>`
            );
        }
    });

    $('#btnDone').on('click', function() {
        if($('#datePicker').val() != '') {
            startDate = new Date($('#datePicker').val());
        }
        for (let i=0; i<topics.length;i++) {
            topics[i] = $('#courseTable td').eq(i*3+2).children().val();
        }
        $('td.rowDel').css('visibility', 'hidden');
        $('#btnDone').css('visibility', 'hidden');
        $('#btnCancel').css('visibility', 'hidden');
        $('#btnEdit').css('visibility', 'visible');
        
        $('.datePick').html('<h3>This is your schedule.</h3>');

        loadTable();
        editing = false;
    });

    $('#btnCancel').on('click', function() {
        $('td.rowDel').css('visibility', 'hidden');
        $('#btnDone').css('visibility', 'hidden');
        $('#btnCancel').css('visibility', 'hidden');
        $('#btnEdit').css('visibility', 'visible');

        $('.datePick').html('<h3>This is your schedule.</h3>');

        loadTable();
        editing = false;
    });

    $(document).on('keydown', function(event) {
        if(editing) {
            switch(event.code) {
                case 'Enter':
                    console.log(topics.length);
                    for (let i=0; i<topics.length;i++) {
                        console.log($('#courseTable td').eq(i*3+2).children().val());
                        topics[i] = $('#courseTable td').eq(i*3+2).children().val();
                    }
                    $('td.rowDel').css('visibility', 'hidden');
                    $('#btnDone').css('visibility', 'hidden');
                    $('#btnCancel').css('visibility', 'hidden');
                    $('#btnEdit').css('visibility', 'visible');
                    
                    $('.datePick').html('<h3>This is your schedule.</h3>');
            
                    loadTable();
                    break;
                case 'Escape':
                    $('td.rowDel').css('visibility', 'hidden');
                    $('#btnDone').css('visibility', 'hidden');
                    $('#btnCancel').css('visibility', 'hidden');
                    $('#btnEdit').css('visibility', 'visible');
    
                    $('.datePick').html('<h3>This is your schedule.</h3>');
    
                    loadTable();
                    break;
            }
        }
    });
});