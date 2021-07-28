

    $("#submit").click(function () {
        var loanAmount = $("#loan-amount").val();
        var apr = $("#apr").val();

        loanAmount = parseFloat(loanAmount);
        apr = parseFloat(apr); 

        console.log(apr);

        var interestPrice = loanAmount * ((apr / 100) / 12);

        interestPrice = interestPrice.toFixed(2);

        var resultsText = "You will owe an extra $" + interestPrice + " after 1 month.<br />(Monthly Compounding Interest)";

        $("#result-value").html(resultsText);
