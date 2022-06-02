$( document ).ready(function() {

    $('.saveBtn').on('click', function () {
        var textVal = $(this)
        .siblings(".description")
        .val();
        var time = $(this)
        .parent()
        .attr('id');
        console.log(textVal);
        localStorage.setItem(time, textVal);
})

    var today = moment();
    
    $("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a"));

    function hour() {
        var now = moment().hours();
        console.log(now);
        $('.time-block').each(function () {
            var block = parseInt($(this).attr('id')
            .split('-'[1]));

            if (block < now) {
                $(this).addClass('past');
                // $(this).removeClass('present');
                // $(this).removeClass('future');
            }
            else if (block === now) {
                $(this).removeClass('past');
                $(this).addClass('present');
                // $(this).removeClass('future');
            }
            else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');

            }
        })
    }

    hour();

        $('#9 .description').append(localStorage.getItem('9'));
        $('#10 .description').append(localStorage.getItem('10'));
        $('#11 .description').append(localStorage.getItem('11'));
        $('#12 .description').append(localStorage.getItem('12'));
        $('#13 .description').append(localStorage.getItem('13'));
        $('#14 .description').append(localStorage.getItem('14'));
        $('#15 .description').append(localStorage.getItem('15'));
        $('#16 .description').append(localStorage.getItem('16'));
        $('#17 .description').append(localStorage.getItem('17'));
       
});


