$(function () {

    $("#Sort").selectmenu({
        close: function (event, ui) {
            var selectedOptions = $(this).val();
        }
    });

    $("#Action").selectmenu({
        close: function (event, ui) {
            var selectedOptions = $(this).val();
        }
    });

    $("#searchInput").autocomplete({
        //   source: ["Option 1", "Option 2", "Option 3"],
        minLength: 1
    });
});



function showOptions(e) {
    let divOptions = document.getElementById("divOptions");
    if (divOptions.style.display == "none" || divOptions.style.display == "") {
        divOptions.style.display = "inline-block";
    } else {
        divOptions.style.display = "none";
    }
}

function clickMe(e) {
    console.log('click me');
    e.stopPropagation();
}
function hideOptions(e) {
    let divOptions = document.getElementById("divOptions");

    if (divOptions.contains(e.target)) {
        divOptions.style.display = "inline-block";
    } else {
        divOptions.style.display = "none";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    let checkbox = document.querySelectorAll("#divOptions input");
    let inputCheckbox = document.getElementById("inputCheckbox");

    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener("change", (e) => {
            if (e.target.checked == true) {
                if (inputCheckbox.value == "") {
                    inputCheckbox.value = checkbox[i].value;
                } else {
                    inputCheckbox.value += `,${checkbox[i].value}`;
                }
            } else {
                let values = inputCheckbox.value.split(",");

                for (let r = 0; r < values.length; r++) {
                    if (values[r] == e.target.value) {
                        values.splice(r, 1);
                    }
                }
                inputCheckbox.value = values;
            }
        });
    }
});
