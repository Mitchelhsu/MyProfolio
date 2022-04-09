$(function() {
    function loadTable() {
        $("#courseTable").append("<tr><th>場次</th><th>時間</th><<th>主題</th>/tr>");
    
        var topicCount = topics.length;
        var MSperDay = 24*60*60*1000;
        for (var x = 0; x < topicCount; x++) {
            $('#courseTable').append(`
                <tr>
                <td>${x+1}</td>
                <td>${(new Date(startDate.getTime()+7*x*MSperDay)).toLocaleDateString(undefined, {month: "numeric", day: "numeric"})}</td>
                <td>${topics[x]}</td>
                <td class="rowDel"><button class="btnDel">delete</button></td>
                </tr>
            `);
        }
    }

    function loadEdit() {
        var topicCount = topics.length;
        var MSperDay = 24*60*60*1000;
        for (var x = 0; x < topicCount; x++) {
            $('#courseTable').append(`
                <tr>
                <td>${x+1}</td>
                <td>${(new Date(startDate.getTime()+7*x*MSperDay)).toLocaleDateString(undefined, {month: "numeric", day: "numeric"})}</td>
                <td>${topics[x]}</td>
                <td class="rowDel"><button class="btnDel">delete</button></td>
                </tr>
            `);
        }
    }

    loadTable();

    $("#btnEdit").on('click', function(){
        $('td.rowDel').css('visibility', 'visible')
        $('#btnDone').css('visibility', 'visible')
        $('#btnCancel').css('visibility', 'visible')
        $('#btnEdit').css('visibility', 'hidden')

        alert($('#courseTable td:nth-child(3)'));
    });

    $('#btnDone').on('click', function() {
        $('td.rowDel').css('visibility', 'hidden')
        $('#btnDone').css('visibility', 'hidden')
        $('#btnCancel').css('visibility', 'hidden')
        $('#btnEdit').css('visibility', 'visible')
    });

    $('#btnCancel').on('click', function() {
        $('td.rowDel').css('visibility', 'hidden')
        $('#btnDone').css('visibility', 'hidden')
        $('#btnCancel').css('visibility', 'hidden')
        $('#btnEdit').css('visibility', 'visible')
    });
});