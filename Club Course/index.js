$(function() {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><<th>主題</th>/tr>");
    
    var topicCount = topics.length;
    var MSperDay = 24*60*60*1000;
    for (var x = 0; x < topicCount; x++) {
        $('#courseTable').append(`
            <tr>
            <td>${x+1}</td>
            <td>${(new Date(startDate.getTime()+7*x*MSperDay)).toLocaleDateString(undefined, {month: "numeric", day: "numeric"})}</td>
            <td>${topics[x]}</td>
            </tr>
        `);
    }
})