// Loader
$(window).load(function() {
    $(".preloader").fadeOut("500");
});

// $("body").on('click', '.togglePassword', function() {

//     var input = $("#pass_log_id");
//     if (input.attr("type") === "password") {
//         input.attr("type", "text");
//     } else {
//         input.attr("type", "password");
//     }

// });


$("body").on('click', '.togglePassword', function() {
    $(this).toggleClass("togglePasswordActive");
    var input = $("#pass_log_id");
    if (input.attr("type") === "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }

});

// $(function() {
//     $("#datepicker").datepicker();
//     // $("#anim").on("change", function() {
//     //     $("#datepicker").datepicker("option", "showAnim", $(this).val());
//     // });
// });

$('.datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    autoclose: true,
    todayHighlight: true,
    showButtonPanel: false,
    dateFormat: 'dd/mm/yy'
});



// Table Sort
$('.dataTable .sortingArrow').click(function() {
    var table = $(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
    this.asc = !this.asc
    if (!this.asc) { rows = rows.reverse() }
    for (var i = 0; i < rows.length; i++) { table.append(rows[i]) }
})

function comparer(index) {
    return function(a, b) {
        var valA = getCellValue(a, index),
            valB = getCellValue(b, index)
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
    }
}

function getCellValue(row, index) { return $(row).children('td').eq(index).text() }


// filterTabs
$(function() {
    $("#productTabs").tabs({
        active: 3,
    });
});

// Active Checkbox
var $table = document.querySelector('.checkboxActive');

$table.addEventListener("click", function(ev) {
    if (ev.target.tagName == "INPUT") {
        if (ev.target.checked) {
            ev.target.parentNode.parentNode.classList.add("selected");
        } else {
            ev.target.parentNode.parentNode.classList.remove("selected");
        }
    }
});

// Accordion
// $(document).ready(function() {
//     $(".leftPanelArrow").click(function() {
//         $(this).toggleClass('highlight', 1000);
//     });
// });


// $('.leftPanelArrow').closest('.leftPanel').addClass('highlight', 1000);


// $(document).ready(function() {
//     $('.inner').parent(".outer").addClass("newClass");
// });



$(document).ready(function() {
    $('.leftPanelArrow').click(function() {
        $(".leftPanel").toggleClass('highlight', 500);
        // $(this).toggleClass('highlight', 1000);
    });
});

// $('#click').click(function() {
//     $("#panel").toggle('highlight', 1000);
// });