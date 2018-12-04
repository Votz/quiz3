$.ajax({
    type: "GET",
    url: "https://api.saministro.com/companies/177",
    dataType: "JSON",
    success: function (data) {
        console.log(data),
        $('.cvr').append(
            '<img id="pht" src=' + data.cover_photo + '>'
        );
        $('.iid').append(
            '<h1>' + data.name + '</h1>',
        )
        if (data.is_verified==1) {
            $('.iid').append(
                '<input type="checkbox" checked>'
            )
            }
            let k=0;
            let i=0;
            let rat= 0;
        for( i=0; i<data.reviews.length; i++) {
             k = k + data.reviews[i].rating;
        }   
        rat = k/ data.reviews.length;
        $('iid').append(
            '<p>' + rat + '</p>'
        )
        $('.dsc').append(
            '<p>' + data.description + '</p>'
        )
        $.each(data.addresses, function (i, item) { 
            $('.addr').append(
                '<p>' + data.addresses[i]
            ) 
        });

    }
});
