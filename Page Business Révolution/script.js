$(document).ready(function() {

    // compte du nombre de case
    var count = 7;
    var coche = 0;

    // compte le nombre de case cochees

    function countCochee() {
        coche = $("input:checked").length;
        console.log('checked:' + coche)
        console.log(parseInt(((coche / count) * 100),10))
        let percentage = parseInt(((coche / count) * 100),10);
        document.getElementById("progress").value = percentage;
        $(".progressbar-label").text(percentage + "%");
        if(coche === 7)
        {
            alert("Félicitations !");
        }
    }

    countCochee();
    $(":checkbox").click(countCochee);
});

function reset() {
    $("input:checkbox").removeAttr("checked");
    document.getElementById("progress").value = 0;
    $(".progressbar-label").text(0 + "%");

}
$("#reset").click(reset);
