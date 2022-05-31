$(document).ready(function () {
    // console.log('ready');
    var today = moment();
    $("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a"));

    function hours() {
        var now = moment().hour();

        $('.time-block').each(function () {
            var block = parseInt($(this).attr('id'));

            if (block < now) {
                $(this).addClass('past');
            }
            else if (block === now) {
                $(this).addClass('present');
            }
            else {
                $(this).addClass('future');

            }
        })
    }

    $('.saveBtn').on('click', function () {

        var event = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, event);
    })

        $('#nine .description').append(localStorage.getItem('9'));
        $('#ten .description').append(localStorage.getItem('10'));
        $('#eleven .description').append(localStorage.getItem('11'));
        $('#twleve .description').append(localStorage.getItem('12'));
        $('#one .description').append(localStorage.getItem('1'));
        $('#two .description').append(localStorage.getItem('2'));
        $('#three .description').append(localStorage.getItem('3'));
        $('#four .description').append(localStorage.getItem('4'));
        $('#five .description').append(localStorage.getItem('5'));

    hours();
})

